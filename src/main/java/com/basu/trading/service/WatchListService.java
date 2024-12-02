package com.basu.trading.service;

import com.basu.trading.model.Coin;
import com.basu.trading.model.User;
import com.basu.trading.model.WatchList;

public interface WatchListService {
    WatchList findUserWatchList(Long userId) throws Exception;
    WatchList createWatchList(User user);
    WatchList findById(Long id) throws Exception;

    Coin addItemToWatchList(Coin coin, User user) throws Exception;
}
