package com.basu.trading.model;

import com.basu.trading.domain.USER_ROLE;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
//import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;

@Entity
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String fullName;

    private String email;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY) // We can't fetch user Password
    private String password;

    @Embedded
    private TwoFactorAuth twoFactorAuth = new TwoFactorAuth();

    private USER_ROLE role= USER_ROLE.ROLE_CUSTOMER;

}
