package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Dish { // Dish POJO
	@Id
	private String id;

	private String uId;
	private String dishName;
	private String cuisineType;
	private String dishRating;
	private String dishPrepareTime;
	private String dishPrice;
	private String noOfServings;
	private String foodDescription;
	private Boolean publishStatus;
	private Boolean isVeg;
	private int serialNo;
	private String address;

	public Dish(String id, String uId, String dishName, String cuisineType, String dishRating, String dishPrepareTime,
			String dishPrice, String noOfServings, String foodDescription, Boolean publishStatus, Boolean isVeg,
			int serialNo, String address) {
		super();
		this.id = id;
		this.uId = uId;
		this.dishName = dishName;
		this.cuisineType = cuisineType;
		this.dishRating = dishRating;
		this.dishPrepareTime = dishPrepareTime;
		this.dishPrice = dishPrice;
		this.noOfServings = noOfServings;
		this.foodDescription = foodDescription;
		this.publishStatus = publishStatus;
		this.isVeg = isVeg;
		this.serialNo = serialNo;
		this.address = address;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getuId() {
		return uId;
	}

	public void setuId(String uId) {
		this.uId = uId;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDishName() {
		return dishName;
	}

	public void setDishName(String dishName) {
		this.dishName = dishName;
	}

	public String getCuisineType() {
		return cuisineType;
	}

	public void setCuisineType(String cuisineType) {
		this.cuisineType = cuisineType;
	}

	public String getDishRating() {
		return dishRating;
	}

	public void setDishRating(String dishRating) {
		this.dishRating = dishRating;
	}

	public String getDishPrepareTime() {
		return dishPrepareTime;
	}

	public void setDishPrepareTime(String dishPrepareTime) {
		this.dishPrepareTime = dishPrepareTime;
	}

	public String getDishPrice() {
		return dishPrice;
	}

	public void setDishPrice(String dishPrice) {
		this.dishPrice = dishPrice;
	}

	public String getNoOfServings() {
		return noOfServings;
	}

	public void setNoOfServings(String noOfServings) {
		this.noOfServings = noOfServings;
	}

	public String getFoodDescription() {
		return foodDescription;
	}

	public void setFoodDescription(String foodDescription) {
		this.foodDescription = foodDescription;
	}

	public Boolean getPublishStatus() {
		return publishStatus;
	}

	public void setPublishStatus(Boolean publishStatus) {
		this.publishStatus = publishStatus;
	}

	public Boolean getIsVeg() {
		return isVeg;
	}

	public void setIsVeg(Boolean isVeg) {
		this.isVeg = isVeg;
	}

	public int getSerialNo() {
		return serialNo;
	}

	public void setSerialNo(int serialNo) {
		this.serialNo = serialNo;
	}

}
