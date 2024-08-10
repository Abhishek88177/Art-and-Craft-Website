package com.artandcraft.service;

import java.util.List;

import com.artandcraft.model.Cart;
import com.artandcraft.model.Product;

public interface CartService {
	
	public void addToCart(int productId,int userId);
	public List<Cart> getCart(int userId);
	public List<Product> deleteCartPro(Product pro);
}
