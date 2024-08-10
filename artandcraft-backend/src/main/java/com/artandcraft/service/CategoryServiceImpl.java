package com.artandcraft.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.artandcraft.model.Category;
import com.artandcraft.repository.CategoryRepository;

@Service
public class CategoryServiceImpl implements CategoryService{
	
	@Autowired
	CategoryRepository categoryRepo;

	@Override
	public Category addCategory(Category category) {
		
		return categoryRepo.save(category);
	}

	@Override
	public List<Category> getAllCategory() {
		// TODO Auto-generated method stub
		return categoryRepo.findAll();
	}

	@Override
	public Category getByName(String name) {
		// TODO Auto-generated method stub
		return null;
	}

}
