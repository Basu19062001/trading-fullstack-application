package com.basu.trading.service;

import com.basu.trading.domain.PaymentMethod;
import com.basu.trading.model.PaymentOrder;
import com.basu.trading.model.User;
import com.basu.trading.response.PaymentResponse;

public interface PaymentService {
    PaymentOrder createOrder(User user, Long amount,
                             PaymentMethod paymentMethod);

    PaymentOrder getPaymentOrderById(Long id) throws Exception;

    boolean proceedPaymentOrder(PaymentOrder paymentOrder,
                                String paymentId);

    PaymentResponse createRazorpayPaymentLine(User user,
                                              Long amount);

    PaymentResponse createStripePaymentLine(User user,
                                              Long amount,
                                            Long orderId);
}
