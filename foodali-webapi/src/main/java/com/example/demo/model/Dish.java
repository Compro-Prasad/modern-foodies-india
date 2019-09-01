package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.TextIndexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.multipart.MultipartFile;

@Document
public class Dish { // Dish POJO
	@Id
	private String id;

	private String uId;
	@TextIndexed(weight=2) private String dishName;
	private String noOfServings;
	@TextIndexed private String foodDescription;
	private Boolean publishStatus;
	private String isVeg;
	private int serialNo;
	private String address;
	private String delivery;
	private String cuisine;
	private MultipartFile image;
	
	private boolean request;


	public Dish(String id, String uId, String dishName, String noOfServings, String foodDescription,
			 String isVeg, int serialNo, String address, String delivery, String cuisine,
			MultipartFile image, boolean request) {
		super();
		this.id = id;
		this.uId = uId;
		this.dishName = dishName;
		this.noOfServings = noOfServings;
		this.foodDescription = foodDescription;
		this.publishStatus = false;
		this.isVeg = isVeg;
		this.serialNo = serialNo;
		this.address = address;
		this.delivery = delivery;
		this.cuisine = cuisine;
		
		this.image = image;
		this.request = false;
		
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getuId() {
		return uId;
	}

	public void setuId(String uId) {
		this.uId = uId;
	}

	public String getDishName() {
		return dishName;
	}

	public void setDishName(String dishName) {
		this.dishName = dishName;
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

	public String getIsVeg() {
		return isVeg;
	}

	public void setIsVeg(String isVeg) {
		this.isVeg = isVeg;
	}

	public int getSerialNo() {
		return serialNo;
	}

	public void setSerialNo(int serialNo) {
		this.serialNo = serialNo;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDelivery() {
		return delivery;
	}

	public void setDelivery(String delivery) {
		this.delivery = delivery;
	}

	public String getCuisine() {
		return cuisine;
	}

	public void setCuisine(String cuisine) {
		this.cuisine = cuisine;
	}

	public MultipartFile getImage() {
		return image;
	}

	public void setImage(MultipartFile image) {
		this.image = image;
	}
	

	public boolean isRequest() {
		return request;
	}

	public void setRequest(boolean request) {
		this.request = request;
	}

	@Override
	public String toString() {
		return "Dish [id=" + id + ", uId=" + uId + ", dishName=" + dishName + ", noOfServings=" + noOfServings
				+ ", foodDescription=" + foodDescription + ", publishStatus=" + publishStatus + ", isVeg=" + isVeg
				+ ", serialNo=" + serialNo + ", address=" + address + ", delivery=" + delivery + ", cuisine=" + cuisine
				+ ", image=" + image + ", request=" + request + ", getId()=" + getId() + ", getuId()=" + getuId()
				+ ", getDishName()=" + getDishName() + ", getNoOfServings()=" + getNoOfServings()
				+ ", getFoodDescription()=" + getFoodDescription() + ", getPublishStatus()=" + getPublishStatus()
				+ ", getIsVeg()=" + getIsVeg() + ", getSerialNo()=" + getSerialNo() + ", getAddress()=" + getAddress()
				+ ", getDelivery()=" + getDelivery() + ", getCuisine()=" + getCuisine() + ", getImage()=" + getImage()
				+ ", isRequest()=" + isRequest() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
				+ ", toString()=" + super.toString() + "]";
	}



}
