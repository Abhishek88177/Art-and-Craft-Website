package com.artandcraft.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class Carousel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public int id;
	public String image1;
	public String image2;
	public String image3;
		 
}
