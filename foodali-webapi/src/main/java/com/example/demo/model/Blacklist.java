package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Blacklist {
	@Id
	String id;
	String userId;
	String cookId;

	public Blacklist(String id, String userId, String cookId) {
		super();
		this.id = id;
		this.userId = userId;
		this.cookId = cookId;
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

	@Override
	public String toString() {
		return "Blacklisted [id=" + id + ", userId=" + userId + ", cookId=" + cookId + "]";
	}

}
