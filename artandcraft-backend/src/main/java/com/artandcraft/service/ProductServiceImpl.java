package com.artandcraft.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.artandcraft.exception.ProducNotFoundException;
import com.artandcraft.model.Product;
import com.artandcraft.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	ProductRepository productRepo;
	
	List<Product> productList = new ArrayList<>();

	@Override
	public Product saveProduct(Product product) {
		// TODO Auto-generated method stub
		return productRepo.save(product);
	}

	@Override
	public List<Product> getAllProduct() {
		// TODO Auto-generated method stub
		return productRepo.findAll();
	}

	@Override
	public List<Product> getByName(String name) throws ProducNotFoundException {
		// TODO Auto-generated method stub
		List<Product> productList = productRepo.getByProductName(name);
		System.out.println(productList);
		if(productList != null) {
			return productRepo.getByProductName(name);
		}
		else {
			throw new ProducNotFoundException("Product Not Found");
		}	
	}

	@Override
	public Optional<Product> getProductById(int proId) {
		
		return productRepo.findById(proId);
	}

	@Override
	public List<Product> getByType(String type) {
		// TODO Auto-generated method stub
		return productRepo.findByType(type);
	}

	
}
