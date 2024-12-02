package com.basu.trading.controller;

import com.basu.trading.domain.PaymentMethod;
import com.basu.trading.model.PaymentOrder;
import com.basu.trading.model.User;
import com.basu.trading.response.PaymentResponse;
import com.basu.trading.service.PaymentService;
import com.basu.trading.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PaymentController {

    @Autowired
    private UserService userService;

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/api/payment/{paymentMethod}/amount/{amount}")
    public ResponseEntity<PaymentResponse> paymentHandler(
            @PathVariable PaymentMethod paymentMethod,
            @PathVariable Long amount,
            @RequestHeader("Authorization") String jwt
            ) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);

        PaymentResponse paymentResponse;

        PaymentOrder order = paymentService.createOrder(user, amount,paymentMethod);

        if (paymentMethod.equals(PaymentMethod.RAZORPAY)){
            paymentResponse=paymentService.createRazorpayPaymentLine(user,amount);
        }else {
            paymentResponse=paymentService.createStripePaymentLine(user,amount,order.getId());

        }
        return new ResponseEntity<>(paymentResponse, HttpStatus.CREATED);
    }
}
