package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//uid
//phno
//gname
//gemail
//gimgurl
//fbname
//fbemail
//fbimgurl
@Document
public class Dish {
	@Id
	String id;
	String phoneNo;
	String googleName;
	String googleEmail;
	String googleImgUrl;
	String fbName;
	String fbEmail;
	String fbImgUrl;
	public Dish(String phoneNo, String googleName, String googleEmail, String googleImgUrl, String fbName, String fbEmail, String fbImgUrl ) {
		this.phoneNo = phoneNo;
		this.googleName = googleName;
		this.googleEmail = googleEmail;
		this.googleImgUrl = googleImgUrl;
		this.fbName = fbName;
		this.fbEmail = fbEmail;
		this.fbImgUrl = fbImgUrl;
	}
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
	
}
