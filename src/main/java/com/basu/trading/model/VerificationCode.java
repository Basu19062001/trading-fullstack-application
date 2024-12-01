package com.basu.trading.model;

import com.basu.trading.domain.VerificationType;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class VerificationCode {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String otp;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private  User user;

    private String email;

    private String mobile;

    private VerificationType verificationType;
}
