package com.basu.trading.controller;

import com.basu.trading.request.ForgotPasswordTokenRequest;
import com.basu.trading.domain.VerificationType;
import com.basu.trading.model.ForgotPasswordToken;
import com.basu.trading.model.User;
import com.basu.trading.model.VerificationCode;
import com.basu.trading.request.ResetPasswordRequest;
import com.basu.trading.response.ApiResponse;
import com.basu.trading.response.AuthResponse;
import com.basu.trading.service.EmailService;
import com.basu.trading.service.ForgotPasswordService;
import com.basu.trading.service.UserService;
import com.basu.trading.service.VerificationCodeService;
import com.basu.trading.utils.OtpUtils;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private EmailService emailService;

    @Autowired
    private VerificationCodeService verificationCodeService;

    @Autowired
    private ForgotPasswordService forgotPasswordService;


    @GetMapping("/api/users/profile")
    public ResponseEntity<User> getUserProfile(@RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);

        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @PostMapping("/api/users/verification/{verificationType}/send-otp")
    public ResponseEntity<String> sendVerificationOtp(
            @RequestHeader("Authentication") String jwt,
            @PathVariable VerificationType verificationType) throws Exception {

        User user = userService.findUserProfileByJwt(jwt);

        VerificationCode verificationCode = verificationCodeService
                .getVerificationCodeByUser(user.getId());

        if(verificationCode == null){
            verificationCode=verificationCodeService
                    .sendVerificationCode(user, verificationType);
        }

        if (verificationType.equals(VerificationType.EMAIL)){
            emailService.sendVerificationOtpEmail(
                    user.getEmail(),
                    verificationCode.getOtp());
        }

        return new ResponseEntity<>("Verification OTP sent successfully", HttpStatus.OK);
    }

    @PatchMapping("/api/users/enable-two-factor/verify-otp/{otp}")
    public ResponseEntity<User> enableTwoFactorAuthentication(
            @PathVariable String otp,
            @RequestHeader("Authentication") String jwt) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);

        VerificationCode verificationCode = verificationCodeService
                .getVerificationCodeByUser(user.getId());

        String sendTo = verificationCode.getVerificationType().equals(VerificationType.EMAIL)?
                verificationCode.getEmail():verificationCode.getMobile();

        boolean isVerified = verificationCode.getOtp().equals(otp);

        if(isVerified){
            User updatedUser = userService.enableTwoFactorAuthentication(
                    verificationCode.getVerificationType(),
                    sendTo,
                    user
            );

            verificationCodeService.deleteVerificationCodeById(verificationCode);

            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
         }
        throw new Exception("Wrong OTP");
    }


    @PostMapping("/auth/users/reset-password/send-otp")
    public ResponseEntity<AuthResponse> sendForgotPasswordOtp(
            @RequestBody ForgotPasswordTokenRequest res
            ) throws Exception {
        User user = userService.findUserByEmail(res.getSendTo());
        String otp = OtpUtils.generateOTP();
        UUID uuid = UUID.randomUUID();
        String id = uuid.toString();

        ForgotPasswordToken token=forgotPasswordService.findByUser(user.getId());

        if (token==null){
            token=forgotPasswordService.createdToken(
                    user,
                    id,
                    otp,
                    res.getVerificationType(),
                    res.getSendTo());
        }

        if (res.getVerificationType().equals(VerificationType.EMAIL)) {
            emailService.sendVerificationOtpEmail(
                    user.getEmail(),
                    token.getOtp()
            );
        }
            AuthResponse response = new AuthResponse();
            response.setSession(token.getId());
            response.setMessage("Password reset OTP sent successfully");

        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    @PostMapping("/auth/users/reset-password/verify-otp")
    public ResponseEntity<ApiResponse> resetPassword(
            @RequestParam String id,
            @RequestBody ResetPasswordRequest req,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        ForgotPasswordToken forgotPasswordToken = forgotPasswordService.findById(id);
        boolean isVerified=forgotPasswordToken.getOtp().equals(req.getOtp());

        if (isVerified){
            userService.updatePassword(
                    forgotPasswordToken.getUser(),
                    req.getPassword());
            ApiResponse res = new ApiResponse();
            res.setMessage("Password updated successfully");

            return new ResponseEntity<>(res,HttpStatus.ACCEPTED);
        }
        throw new Exception("Wrong OTP");
    }
}
