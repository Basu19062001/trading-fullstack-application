package com.basu.trading.repository;

import com.basu.trading.model.Asset;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AssetRepository extends JpaRepository<Asset, Long> {

    List<Asset> findBuUserId(Long userId);

    Asset findByUserIdAndCoinId(Long userId, String coinId);
}
