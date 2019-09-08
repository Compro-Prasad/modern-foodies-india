package com.example.demo.model;

import java.util.List;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "user")
public class User {

	private String id;

	// authentication info
	private String phoneNo;

	// location info
	private Double Lat;
	private Double Lng;

	// cook info
	private String cookName;
	private Boolean isPro;
	private Boolean isVeg;
	private List<String> cuisines;

	// verified or not by otp
	private String isVerified;

	private Boolean firstTime; // check if user is signed up for first time or logged in as a regular user

	public User() {
		// TODO Auto-generated constructor stub
	}

	public User(String id, String phoneNo, Double lat, Double lng, String cookName, Boolean isPro, Boolean isVeg,
			List<String> cuisines, String isVerified, Boolean firstTime) {
		super();

		this.phoneNo = phoneNo;
		Lat = lat;
		Lng = lng;
		this.cookName = cookName;
		this.isPro = isPro;
		this.isVeg = isVeg;
		this.cuisines = cuisines;
		this.isVerified = isVerified;

		this.firstTime = true;

	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public Double getLat() {
		return Lat;
	}

	public void setLat(Double lat) {
		Lat = lat;
	}

	public Double getLng() {
		return Lng;
	}

	public void setLng(Double lng) {
		Lng = lng;
	}

	public String getCookName() {
		return cookName;
	}

	public void setCookName(String cookName) {
		this.cookName = cookName;
	}

	public Boolean getIsPro() {
		return isPro;
	}

	public void setIsPro(Boolean isPro) {
		this.isPro = isPro;
	}

	public Boolean getIsVeg() {
		return isVeg;
	}

	public void setIsVeg(Boolean isVeg) {
		this.isVeg = isVeg;
	}

	public List<String> getCuisines() {
		return cuisines;
	}

	public void setCuisines(List<String> cuisines) {
		this.cuisines = cuisines;
	}

	public String getIsVerified() {
		return isVerified;
	}

	public void setIsVerified(String isVerified) {
		this.isVerified = isVerified;
	}

	public Boolean getFirstTime() {
		return firstTime;
	}

	public void setFirstTime(Boolean firstTime) {
		this.firstTime = firstTime;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", phoneNo=" + phoneNo + ", Lat=" + Lat + ", Lng=" + Lng + ", cookName=" + cookName
				+ ", isPro=" + isPro + ", isVeg=" + isVeg + ", cuisines=" + cuisines + ", isVerified=" + isVerified
				+ ", firstTime=" + firstTime + "]";
	}

}