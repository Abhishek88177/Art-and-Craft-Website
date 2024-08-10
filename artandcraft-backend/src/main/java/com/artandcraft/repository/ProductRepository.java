package com.artandcraft.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.artandcraft.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{

	public List<Product> getByProductName(String productName);

    public List<Product> findByType(String type);
}
