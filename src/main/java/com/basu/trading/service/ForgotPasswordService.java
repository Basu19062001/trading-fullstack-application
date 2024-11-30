package com.basu.trading.service;

import com.basu.trading.domain.VerificationType;
import com.basu.trading.model.ForgotPasswordToken;
import com.basu.trading.model.User;

public interface ForgotPasswordService {

    ForgotPasswordToken createdToken(User user,
                                     String id, String otp,
                                     VerificationType verificationType,
                                     String sendTo);

    ForgotPasswordToken findById(String id);

    ForgotPasswordToken findByUser(Long userId);

    void deleteToken(ForgotPasswordToken token);

}
