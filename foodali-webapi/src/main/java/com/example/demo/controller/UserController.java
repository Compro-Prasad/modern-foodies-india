package com.example.demo.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.PersonService;
import com.example.demo.service.UserService;

@RestController

public class UserController {

	@Autowired
	private UserService userService;
	
	@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
	@RequestMapping(value = "/createUser", method = RequestMethod.POST)
	public User create(@RequestBody(required = false) User user ) {
		User u = userService.create(user);
		return u;
	}
	
	@RequestMapping(value = "/getAllusers", method = RequestMethod.GET)
	public List<User> getAll(){
		return userService.getAll();
	}
	
	@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
	@RequestMapping(value = "/getUserByPhone", method = RequestMethod.GET)
	public Optional<User> findByPhoneNo(@RequestParam(required = true) String phoneNo){
		return userService.findByPhoneNo(phoneNo);
	}
	
	@RequestMapping(value = "/getUserById", method = RequestMethod.POST)
	public Optional<User> findById(@RequestParam(required = true) String id){

		return userService.findById(id);
	}
	@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
	@RequestMapping(value = "/updateUserChefinfoById", method = RequestMethod.PUT)
	public String update(@RequestParam String id,@RequestBody(required = false) User user) {
		//Reference [1]
		Optional<User> internaOptionallUser = userService.findById(id);
		User internalUser = internaOptionallUser.get();
		String phnoe = internalUser.getPhoneNo();
		user.setId(id);
		user.setPhoneNo(phnoe);
		User u = userService.update(user);
		return u.toString();
	}
	
	
	@RequestMapping(value = "/deleteUserById", method = RequestMethod.DELETE)
	public String delete(@RequestParam int id) {
		userService.delete(id);
		return "Deleted "+id;
	}
	
//	@RequestMapping (value = "/deleteAllUsers", method = RequestMethod.DELETE)
//	public String deleteAll() {
//		userService.deleteAll();
//		return "Deleted all records";
//	}
	
}
//[1] : https://examples.javacodegeeks.com/enterprise-java/spring/boot/spring-boot-mongodb-crud-operations-example/