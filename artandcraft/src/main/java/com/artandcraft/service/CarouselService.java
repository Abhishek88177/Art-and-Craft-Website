package com.artandcraft.service;

import java.util.List;

import com.artandcraft.model.Carousel;

public interface CarouselService {
	
	public Carousel updateImages(Carousel carousel , int id); 
	public Carousel getAllImages(int id);

}
