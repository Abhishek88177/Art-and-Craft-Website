package com.artandcraft.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.artandcraft.model.Cart;
import com.artandcraft.model.Product;
import com.artandcraft.model.Registration;
import com.artandcraft.repository.CartRepository;
import com.artandcraft.repository.ProductRepository;
import com.artandcraft.repository.RegistrationRepo;

@Service
public class CartServiceImpl implements CartService{
	
	@Autowired
	CartRepository cartRepo;
	
	@Autowired
	ProductRepository productRepo;
	
	@Autowired
	RegistrationRepo userRepo;
	
	@Override
	public void addToCart(int productId,int userId) {
		
		Product cartItem= productRepo.findById(productId).orElse(null);
		Registration user = userRepo.findById(userId).orElse(null);
		
		Cart cartData = cartRepo.findByProductListId(productId);
		Cart cart = new Cart();
		if(cartData != null) {
			int quantity = cartData.getQuantity();
			quantity++;
			
//			cartData.setCartId(cartData.getCartId());
//			cartData.setUser(cartData.getUser());
//			cartData.setProductList(cartData.getProductList());
			cartData.setQuantity(quantity);
			cartRepo.save(cartData);
		}else {
			cart.setProductList(cartItem);
			cart.setUser(user);
			cart.setQuantity(1);
			cartRepo.save(cart);
		}
		
			
	}

	@Override
	public List<Cart> getCart(int userId) {
		List<Cart> cartList=  cartRepo.findByUserId(userId);
		
		List<Product> proList = new ArrayList<>();
		
		for(Cart cartData : cartList) {
			proList.add(cartData.getProductList());
		}
		 return cartList; 
	}

	@Override
	public List<Product> deleteCartPro(Product pro) {
		// TODO Auto-generated method stub
		return null;
	}

}
