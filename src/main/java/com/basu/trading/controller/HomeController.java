package com.basu.trading.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping
    public String home(){
        return "Welcome to Quester Trading Platform...";
    }
    @GetMapping("/api")
    public String secure(){
        return "Welcome to Secure Trading Platform...";
    }
}
