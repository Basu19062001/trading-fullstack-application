package com.basu.trading.service;

import com.basu.trading.model.Order;
import com.basu.trading.model.User;
import com.basu.trading.model.Wallet;
import com.basu.trading.repository.WalletRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.math.BigDecimal;

public class WalletServiceImpl implements WalletService{

    @Autowired
    private WalletRepository walletRepository;

    @Override
    public Wallet getUserWallet(User user) {
        Wallet wallet = walletRepository.findByUserId(user.getId());

        if (wallet==null){
            wallet=new Wallet();
            wallet.setUser(user);
        }

        return wallet;
    }

    @Override
    public Wallet addBalance(Wallet wallet, Long money) {
        BigDecimal balance=wallet.getBalance();
        BigDecimal newBalance=balance.add(BigDecimal.valueOf(money));

        wallet.setBalance(newBalance);

        return walletRepository.save(wallet);
    }

    @Override
    public Wallet findWalletById(Long id) {
        return null; 
    }

    @Override
    public Wallet walletToWalletTransfer(User user, Wallet receiverWallet, Long amount) {
        return null;
    }

    @Override
    public Wallet payOrderPayment(Order order, User user) {
        return null;
    }
}
