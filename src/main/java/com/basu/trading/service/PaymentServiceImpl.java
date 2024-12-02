package com.basu.trading.service;

import com.basu.trading.domain.PaymentMethod;
import com.basu.trading.model.PaymentOrder;
import com.basu.trading.model.User;
import com.basu.trading.repository.PaymentOrderRepository;
import com.basu.trading.response.PaymentResponse;
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
    public PaymentOrder createOrder(User user, Long amount, PaymentMethod paymentMethod) {
        return null;
    }

    @Override
    public PaymentOrder getPaymentOrderById(Long id) {
        return null;
    }

    @Override
    public boolean proceedPaymentOrder(PaymentOrder paymentOrder, String paymentId) {
        return false;
    }

    @Override
    public PaymentResponse createRazorpayPaymentLine(User user, Long amount) {
        return null;
    }

    @Override
    public PaymentResponse createStripePaymentLine(User user, Long amount, Long orderId) {
        return null;
    }
}
