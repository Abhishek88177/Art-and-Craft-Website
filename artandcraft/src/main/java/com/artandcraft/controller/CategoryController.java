package com.artandcraft.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.artandcraft.model.Category;
import com.artandcraft.service.CategoryService;


@CrossOrigin
@RestController
public class CategoryController {
	
	@Autowired
	CategoryService categoryService;
	
	@PostMapping("/addcategory")
	public Category addCategory(@RequestBody Category category) {
		return categoryService.addCategory(category);
	}
	
	@GetMapping("/getallcategory")
	public List<Category> getAllCategory(){
		return categoryService.getAllCategory();
	}

}
