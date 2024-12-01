package com.basu.trading.service;

import com.basu.trading.domain.OrderType;
import com.basu.trading.model.Coin;
import com.basu.trading.model.Order;
import com.basu.trading.model.OrderItem;
import com.basu.trading.model.User;
import org.aspectj.weaver.ast.Or;

import java.util.List;

public interface OrderService {

    Order createOrder(User user, OrderItem orderItem, OrderType orderType);

    Order getOrderById(Long orderId) throws Exception;

    List<Order> getAllOrdersOfUser(Long userId, OrderType orderType, String assetSymbol);

    Order processOrder(Coin coin, double quantity, OrderType orderType, User user) throws Exception;
}
