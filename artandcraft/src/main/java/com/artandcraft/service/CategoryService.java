package com.artandcraft.service;

import java.util.List;

import com.artandcraft.model.Category;

public interface CategoryService {
	
	public Category addCategory(Category category);
	public List<Category> getAllCategory();
	public Category getByName(String name);

}
