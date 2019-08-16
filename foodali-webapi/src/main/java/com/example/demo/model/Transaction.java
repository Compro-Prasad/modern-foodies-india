package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class Transaction {
	@Id
	String id;
	
	String userId;
	String cookId;
	String dishId;
	String date;
	String time;
	Boolean status;
	
	public Transaction(String id, String userId, String cookId, String dishId, String date, String time,
			Boolean status) {
		super();
		this.id = id;
		this.userId = userId;
		this.cookId = cookId;
		this.dishId = dishId;
		this.date = date;
		this.time = time;
		this.status = status;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getCookId() {
		return cookId;
	}
	public void setCookId(String cookId) {
		this.cookId = cookId;
	}
	public String getDishId() {
		return dishId;
	}
	public void setDishId(String dishId) {
		this.dishId = dishId;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public Boolean getStatus() {
		return status;
	}
	public void setStatus(Boolean status) {
		this.status = status;
	}
	
	@Override
	public String toString() {
		return "Transactions [id=" + id + ", userId=" + userId + ", cookId=" + cookId + ", dishId=" + dishId + ", date="
				+ date + ", time=" + time + ", status=" + status + "]";
	}
	
}
