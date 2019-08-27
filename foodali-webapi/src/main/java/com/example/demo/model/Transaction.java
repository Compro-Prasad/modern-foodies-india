package com.example.demo.model;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class Transaction {
	@Id
	String id;
	
	private String userId;
	private String cookId;
	private String dishId;
	private LocalDateTime requestTime;
	private Boolean status;
	
	private Transaction transaction;
	
	public Transaction(String userId, String cookId, String dishId, Boolean status) {
		super();
		this.userId = userId;
		this.cookId = cookId;
		this.dishId = dishId;
		this.status = status;
		this.requestTime = LocalDateTime.now();
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
	
	public Boolean getStatus() {
		return status;
	}
	public void setStatus(Boolean status) {
		this.status = status;
	}
	
	
	
	public Transaction getTransaction() {
		return transaction;
	}
	public void setTransaction(Transaction transaction) {
		this.transaction = transaction;
	}
	@Override
	public String toString() {
		return "Transaction [id=" + id + ", userId=" + userId + ", cookId=" + cookId + ", dishId=" + dishId
				+ ", requestTime=" + requestTime + ", status=" + status + "]";
	}
	
	
	
}
