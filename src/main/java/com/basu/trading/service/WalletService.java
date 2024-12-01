package com.basu.trading.service;

import com.basu.trading.model.Order;
import com.basu.trading.model.User;
import com.basu.trading.model.Wallet;

public interface WalletService {

    Wallet getUserWallet(User user);
    Wallet addBalance(Wallet wallet, Long money);
    Wallet findWalletById(Long id);
    Wallet walletToWalletTransfer(User user,Wallet receiverWallet,Long amount);
    Wallet payOrderPayment(Order order, User user);
}
