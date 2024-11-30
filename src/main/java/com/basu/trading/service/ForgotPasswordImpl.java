package com.basu.trading.service;

import com.basu.trading.domain.VerificationType;
import com.basu.trading.model.ForgotPasswordToken;
import com.basu.trading.model.User;
import com.basu.trading.repository.ForgotPasswordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ForgotPasswordImpl implements ForgotPasswordService {

    @Autowired
    private ForgotPasswordRepository forgotPasswordRepository;

    @Override
    public ForgotPasswordToken createdToken(
            User user,
            String id,
            String otp,
            VerificationType verificationType,
            String sendTo) {

        ForgotPasswordToken token = new ForgotPasswordToken();
        token.setUser(user);
        token.setId(id);
        token.setOtp(otp);
        token.setVerificationType(verificationType);
        token.setSendTo(sendTo);
        return forgotPasswordRepository.save(token);
    }

    @Override
    public ForgotPasswordToken findById(String id) {
        Optional<ForgotPasswordToken> token = forgotPasswordRepository.findById(id);
        return token.orElse(null);
    }

    @Override
    public ForgotPasswordToken findByUser(Long userId) {
        return forgotPasswordRepository.findByUserId(userId);
    }

    @Override
    public void deleteToken(ForgotPasswordToken token) {
        forgotPasswordRepository.delete(token);
    }
}
