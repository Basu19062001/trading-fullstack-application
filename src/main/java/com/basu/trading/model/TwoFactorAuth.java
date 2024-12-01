package com.basu.trading.model;

import com.basu.trading.domain.VerificationType;
import jakarta.persistence.Embeddable;
import lombok.Data;


@Embeddable
@Data
public class TwoFactorAuth {
    private boolean isEnable = false;
    private VerificationType sendTo;
}
