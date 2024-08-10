package com.artandcraft.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.artandcraft.model.Cart;
import com.artandcraft.model.Registration;

public interface CartRepository extends JpaRepository<Cart, Integer>{

	 List<Cart> findByUserId(int userId);
	 Cart findByProductListId(int productId);
}
