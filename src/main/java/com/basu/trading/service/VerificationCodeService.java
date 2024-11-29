package com.basu.trading.service;

import com.basu.trading.domain.VerificationType;
import com.basu.trading.model.User;
import com.basu.trading.model.VerificationCode;
import com.basu.trading.repository.VerificationCodeRepository;

public interface VerificationCodeService {
    VerificationCode sendVerificationCode(User user, VerificationType verificationType);

    VerificationCode getVerificationCodeById(Long id) throws Exception;

    VerificationCode getVerificationCodeByUser(Long userId);

    void deleteVerificationCodeById(VerificationCode verificationCode);
}

