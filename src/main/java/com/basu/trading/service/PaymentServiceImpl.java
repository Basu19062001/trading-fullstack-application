package com.basu.trading.service;

import com.basu.trading.domain.PaymentMethod;
import com.basu.trading.domain.PaymentOrderStatus;
import com.basu.trading.model.PaymentOrder;
import com.basu.trading.model.User;
import com.basu.trading.repository.PaymentOrderRepository;
import com.basu.trading.response.PaymentResponse;
import com.razorpay.Payment;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Review;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class PaymentServiceImpl implements PaymentService{

    @Autowired
    private  PaymentOrderRepository paymentOrderRepository;

    @Value("${stripe.api.key}")
    private String stripeSecretKey;

    @Value("${razorpay.api.key}")
    private String apiKey;

    @Value("${razorpay.api.secret}")
    private String apiSecretKey;

    @Override
    public PaymentOrder createOrder(User user,
                                    Long amount,
                                    PaymentMethod paymentMethod) {

        PaymentOrder paymentOrder = new PaymentOrder();
        paymentOrder.setUser(user);
        paymentOrder.setAmount(amount);
        paymentOrder.setPaymentMethod(paymentMethod);

        return paymentOrderRepository.save(paymentOrder);
    }

    @Override
    public PaymentOrder getPaymentOrderById(Long id) throws Exception {

        return paymentOrderRepository.findById(id).orElseThrow(()->
                new Exception("Payment order not found"));
    }

    @Override
    public boolean proceedPaymentOrder(PaymentOrder paymentOrder, String paymentId) throws RazorpayException {
        if (paymentOrder.getPaymentOrderStatus().equals(PaymentOrderStatus.PENDING)){
            if (paymentOrder.getPaymentMethod().equals(PaymentMethod.RAZORPAY)){
                RazorpayClient razorpay=new RazorpayClient(apiKey, apiSecretKey);
                Payment payment = razorpay.payments.fetch(paymentId);

                Integer amount = payment.get("amount");
                String status = payment.get("status");

                if (status.equals("captured")){
                    paymentOrder.setPaymentOrderStatus(PaymentOrderStatus.SUCCESS);
                    return true;
                }
                paymentOrder.setPaymentOrderStatus(PaymentOrderStatus.FAILED);
                paymentOrderRepository.save(paymentOrder);
                return false;
            }
            paymentOrder.setPaymentOrderStatus(PaymentOrderStatus.SUCCESS);
            paymentOrderRepository.save(paymentOrder);
            return true;
        }
        return false;
    }

    @Override
    public PaymentResponse createRazorpayPaymentLine(User user, Long amount) throws RazorpayException {

        Long Amount = amount*500;
        try {
            RazorpayClient razorpay=new RazorpayClient(apiKey,apiSecretKey);

            JSONObject paymentLinkRequest = new JSONObject();
            paymentLinkRequest.put("amount",amount);
            paymentLinkRequest.put("currency","INR");

            JSONObject customer = new JSONObject();
            customer.put("name",user.getFullName());
            customer.put("email",user.getEmail());
            paymentLinkRequest.put("customer",customer);

            JSONObject notify = new JSONObject();
            notify.put("email",true);
            paymentLinkRequest.put("notify",notify);

            paymentLinkRequest.put("reminder_enable",true);

            paymentLinkRequest.put("callback_url","http://localhost:5173/wallet");
            paymentLinkRequest.put("callback_method","get");

            PaymentLink payment=razorpay.paymentLink.create(paymentLinkRequest);

            String paymentLinkId = payment.get("id");
            String paymentLinkUrl = payment.get("short_url");

            PaymentResponse res = new PaymentResponse();
            res.setPayment_url(paymentLinkUrl);

            return res;


        } catch (RazorpayException e) {
            System.out.println("Error creating payment link: "+ e.getMessage());
            throw new RazorpayException(e.getMessage());
        }
    }

    @Override
    public PaymentResponse createStripePaymentLine(User user,
                                                   Long amount, Long orderId) throws StripeException {
        Stripe.apiKey = stripeSecretKey;

        SessionCreateParams params = SessionCreateParams.builder()
                .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl("http://localhost:5173/wallet?order_id"+orderId)
                .setCancelUrl("http://localhost:5173/payment/cancle")
                .addLineItem(SessionCreateParams.LineItem.builder()
                        .setQuantity(1L)
                        .setPriceData(SessionCreateParams.LineItem.PriceData.builder()
                                .setCurrency("usd")
                                .setUnitAmount(amount+100)
                                .setProductData(SessionCreateParams
                                        .LineItem
                                        .PriceData
                                        .ProductData
                                        .builder()
                                        .setName("Top up wallet")
                                        .build())
                                .build())
                        .build())
                .build();

        Session session = Session.create(params);

        System.out.println("session ____ "+session);

        PaymentResponse res = new PaymentResponse();
        res.setPayment_url(session.getUrl());
        return res;
    }
}
