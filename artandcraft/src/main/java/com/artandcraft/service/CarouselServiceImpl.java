package com.artandcraft.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.artandcraft.model.Carousel;
import com.artandcraft.repository.CarouselRepository;

@Service
public class CarouselServiceImpl implements CarouselService{
	
	@Autowired
	CarouselRepository carouselRepo;

	@Override
	public Carousel updateImages(Carousel carousel , int id) {
		// TODO Auto-generated method stub
		Carousel carouselData= carouselRepo.findById(id).get();
		
		carouselData.setImage1(carousel.image1);
		carouselData.setImage2(carousel.image2);
		carouselData.setImage3(carousel.image3);
		return carouselRepo.save(carouselData);
	}

	@Override
	public Carousel getAllImages(int id) {
		
		return carouselRepo.findById(1).get();
	}

}
