package com.artandcraft.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.artandcraft.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer>{
	
	

}
