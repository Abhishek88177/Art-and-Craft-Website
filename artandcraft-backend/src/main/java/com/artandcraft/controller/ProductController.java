package com.artandcraft.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.artandcraft.exception.ProducNotFoundException;
import com.artandcraft.model.Cart;
import com.artandcraft.model.Product;
import com.artandcraft.service.CartService;
import com.artandcraft.service.ProductService;


@CrossOrigin
@RestController
public class ProductController {
	
	@Autowired
	ProductService productService;
	
	@Autowired
	CartService cartService;
	
	@PostMapping("/saveproduct")
	public Product saveProduct(@RequestBody Product product) {
		return productService.saveProduct(product);
		
	}
	
	
	@GetMapping("/getAllProduct")
	public List<Product> getAllProduct() {
		return productService.getAllProduct();
		
	}
	
	@GetMapping("/getbyname")
	public List<Product> getByName(@RequestParam String name){
		 try {
	            return productService.getByName(name);
	        } catch (ProducNotFoundException e) {
	            return null;
	        }
		
	}

	@GetMapping("/getprobyid/{id}")
	public Optional<Product> getProById(@PathVariable int id){
		return productService.getProductById(id);
	}
	
	
	@GetMapping("/getprobytype/{type}")
	public List<Product> getProByType(@PathVariable String type){
		System.out.println(productService.getByType(type));
		return productService.getByType(type);
	}
	
	@PostMapping("/addtocart/{productid}/{userid}")
	public void addToCart(@PathVariable("productid") int productid ,@PathVariable("userid") int userid ){
			cartService.addToCart(productid,userid);
	}
	
	@GetMapping("/getcart/{userId}")
	public List<Cart> getCart(@PathVariable int userId){
		return cartService.getCart(userId);
	}

//	@GetMapping("/deletepro")
//	public List<Product> deleteCart(Product pro){
//		return productService.deleteCartPro(pro);
//	}
	
	
}
