package com.artandcraft.service;

import java.util.List;
import java.util.Optional;

import com.artandcraft.exception.ProducNotFoundException;
import com.artandcraft.model.Product;

public interface ProductService {

	public Product saveProduct(Product product);
	public List<Product> getAllProduct();
	public Optional<Product> getProductById(int proId);
	public List<Product> getByName(String name) throws ProducNotFoundException;
	public List<Product> getByType(String type);
	
}
