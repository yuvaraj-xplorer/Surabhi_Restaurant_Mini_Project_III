package com.hcl.gl.surabhi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.gl.surabhi.model.FoodList;

@Repository
public interface FoodListRepository extends JpaRepository<FoodList, Long> {

}
