package com.artandcraft.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

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
@Entity(name = "cart_table")
public class Cart {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "card_id")
	private int cartId;
	
//	@Transient
//	@OneToMany(cascade = CascadeType.ALL)
//	@JoinColumn(name = "product_id",referencedColumnName = "card_id")
	
	@OneToOne
	public Product productList;
	
	@OneToOne
	public Registration user;
	
	public int quantity;
}
