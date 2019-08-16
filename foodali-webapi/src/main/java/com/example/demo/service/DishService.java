package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.IncorrectResultSizeDataAccessException;
import org.springframework.stereotype.Service;

import com.example.demo.model.Dish;
import com.example.demo.model.User;
import com.example.demo.repository.DishRepository;

@Service
public class DishService {
   
	@Autowired
	private DishRepository dishRepository;
	
	//Create operation
	public Dish create(Dish dish) {
		return dishRepository.save(dish);
	}
	
	//Retrieve operation
	public List<Dish> getAll(){
		return dishRepository.findAll();
	}
	
	//Retrieve by id
	public Optional<Dish> findById(String id){
		return dishRepository.findById(id);
	}

	//Update operation
	public Dish update(Dish dish) {
		return dishRepository.save(dish);
	}
	
	//Delete operation
	public void deleteAll() {
		dishRepository.deleteAll();	
	}





}