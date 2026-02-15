package com.hcl.gl.surabhi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "foodlist")
public class FoodList {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "type")
	private String type;
	
	@Column(name = "cuisine_name")
	private String cuisine_name;
	
	@Column(name = "price")
	private double price;
	
	public FoodList() {
		
	}
	
	public FoodList(String name, String description, String type, String cuisine_name, double price) {
		super();
		this.name = name;
		this.description = description;
		this.type = type;
		this.cuisine_name = cuisine_name;
		this.price = price;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getCuisine_name() {
		return cuisine_name;
	}
	public void setCuisine_name(String cuisine_name) {
		this.cuisine_name = cuisine_name;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "FoodList [id=" + id + ", name=" + name + ", description=" + description + ", type=" + type
				+ ", cuisine_name=" + cuisine_name + ", price=" + price + "]";
	}
	
	
}
