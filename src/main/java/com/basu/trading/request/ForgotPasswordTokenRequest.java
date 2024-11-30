package com.basu.trading.request;

import com.basu.trading.domain.VerificationType;
import lombok.Data;

@Data
public class ForgotPasswordTokenRequest {
    private String sendTo;
    private VerificationType verificationType;
}
