package com.example.demo.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class User {
	@Id
	String id;
	
	//authentication info
	String phoneNo;
	String googleName; 
	String googleEmail;
	String googleImgUrl;
	String fbName;
	String fbEmail;
	String fbImgUrl;
	
	//location info
	Double Lat;
	Double Lng;
	
	//cook info
	String cookName;
	Boolean isPro;
	Boolean isVeg;
	List<String> cuisines;
	
	
//	public User(String phoneNo, String googleName, String googleEmail, String googleImgUrl, String fbName, String fbEmail, String fbImgUrl, Double Lat, Double Lng, String cookname,Boolean isPro, Boolean isVeg, List<String> cuisines ) {
//		this.phoneNo = phoneNo;
//		this.googleName = googleName;
//		this.googleEmail = googleEmail;
//		this.googleImgUrl = googleImgUrl;
//		this.fbName = fbName;
//		this.fbEmail = fbEmail;
//		this.fbImgUrl = fbImgUrl;
//		this.Lat = Lat;
//		this.Lng = Lng;
//		this.cookName = cookname;
//		this.isPro = isPro;
//		this.isVeg = isVeg;		
//		this.cuisines = cuisines;
//	}
	
	public User() {}
	


	public String getPhoneNo() {
		return phoneNo;
	}


	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}


	public String getGoogleName() {
		return googleName;
	}


	public void setGoogleName(String googleName) {
		this.googleName = googleName;
	}


	public String getGoogleEmail() {
		return googleEmail;
	}


	public void setGoogleEmail(String googleEmail) {
		this.googleEmail = googleEmail;
	}


	public String getGoogleImgUrl() {
		return googleImgUrl;
	}


	public void setGoogleImgUrl(String googleImgUrl) {
		this.googleImgUrl = googleImgUrl;
	}


	public String getFbName() {
		return fbName;
	}


	public void setFbName(String fbName) {
		this.fbName = fbName;
	}


	public String getFbEmail() {
		return fbEmail;
	}


	public void setFbEmail(String fbEmail) {
		this.fbEmail = fbEmail;
	}


	public String getFbImgUrl() {
		return fbImgUrl;
	}


	public void setFbImgUrl(String fbImgUrl) {
		this.fbImgUrl = fbImgUrl;
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
	
	
	public String toString() {
		return "Phoneno "+phoneNo;		
	}
}
