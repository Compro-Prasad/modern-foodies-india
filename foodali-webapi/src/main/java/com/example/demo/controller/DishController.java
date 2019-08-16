package com.example.demo.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Dish;
import com.example.demo.model.User;
import com.example.demo.service.DishService;

@RestController

public class DishController {

	@Autowired
	private DishService dishService;
	
	@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
	@RequestMapping(value = "/createDish", method = RequestMethod.POST)
	public String create(@RequestBody(required = false) Dish dish) {
		Dish d = dishService.create(dish);
		return d.toString();
	}
	
	@RequestMapping(value = "/getAlldishes", method = RequestMethod.GET)
	public List<Dish> getAll(){
		return dishService.getAll();
	}
	
	
	@RequestMapping(value = "/getDishById", method = RequestMethod.POST)
	public Optional<Dish> findById(@RequestBody(required = true) String id){

		return dishService.findById(id);
	}
	
	@RequestMapping(value = "/updateDishById", method = RequestMethod.PUT)
	public String update(@RequestParam String id,@RequestBody Dish dish) {
		//Reference [1]
		dish.setId(id);
		Dish d = dishService.update(dish);
		return d.toString();
	}
	

	

	
}
//[1] : https://examples.javacodegeeks.com/enterprise-java/spring/boot/spring-boot-mongodb-crud-operations-example/