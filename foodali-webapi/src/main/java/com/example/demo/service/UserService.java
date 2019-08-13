package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {
   
	@Autowired
	private UserRepository userRepository;
	
	//Create operation
	public User create(User user) {
		return userRepository.save(user);
	}
	
	//Retrieve operation
	public List<User> getAll(){
		return userRepository.findAll();
	}

//	//Update operation
//	public User update(int id, String phoneNo) {
//		User u = userRepository.findById(id);
//		u.setPhoneNo(phoneNo);
//		return userRepository.save(u);
//	}
	//Delete operation
	public void deleteAll() {
		userRepository.deleteAll();	
	}
	public void delete(int id) {
		User u = userRepository.findById(id);
		userRepository.delete(u);
	}




}