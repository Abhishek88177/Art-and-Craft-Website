package com.artandcraft.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.artandcraft.model.Carousel;
import com.artandcraft.service.CarouselService;


@CrossOrigin
@RestController
public class CarouselController {
	
	@Autowired
	CarouselService carouselService;
	
	@PostMapping("/updateImages/{id}")
	public Carousel updateImages(@RequestBody Carousel carousel ,int id) {
		return carouselService.updateImages(carousel, id);	
	}
	
	@GetMapping("/getImages")
	public Carousel getImages() {
		return carouselService.getAllImages(1);
	}

}
