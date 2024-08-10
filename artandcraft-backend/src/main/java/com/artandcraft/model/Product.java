package com.artandcraft.model;


import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity(name="product")

public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public int id;
	public String productName;
	public String description;
	public String price;
	public int rating;
	public String type;
	public String image1;
	public String image2;
	public String video;

//	public Category category;
}
