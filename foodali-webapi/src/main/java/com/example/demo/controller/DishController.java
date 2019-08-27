package com.example.demo.controller;


import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.model.Dish;
import com.example.demo.service.DishService;

@RestController

public class DishController {

	private static final String UPLOADED_FOLDER = "/home/rajkishor/Desktop/rj";
	@Autowired
	private DishService dishService;
	
	@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
	@RequestMapping(value = "/createDish", method = RequestMethod.POST)
	public String create(@RequestBody(required = false) Dish dish) {
		Dish d = dishService.create(dish);
		 try {
			saveUploadedFile(dish.getImage());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return d.toString();
	}
	

	private void saveUploadedFile(MultipartFile file) throws IOException {
        if (!file.isEmpty()) {
            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
            Files.write(path, bytes);
        }
    }
	@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
	@RequestMapping(value = "/getAlldishes", method = RequestMethod.GET)
	public List<Dish> getAll(){
		
		return dishService.getAll();
	}
	
	
	@RequestMapping(value = "/getDishById", method = RequestMethod.POST)
	public Optional<Dish> findById(@RequestBody(required = true) String id){

		return dishService.findById(id);
	}
	@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
	@RequestMapping(value = "/getDishesByuId", method = RequestMethod.GET)
	public List<Dish> findByuId(@RequestParam(required = true) String uid){

		return dishService.findByuId(uid);
	}
	
	@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
	@RequestMapping(value = "/updateDishById", method = RequestMethod.PUT)
	public String update(@RequestParam String id,@RequestBody Dish dish) {
		Optional<Dish> internaOptionallDish = dishService.findById(id);
		Dish internalDish = internaOptionallDish.get();
		String dishname = internalDish.getDishName();
		String userid = internalDish.getuId();
		String servings = internalDish.getNoOfServings();
		String desc = internalDish.getFoodDescription();
		String isveg = internalDish.getIsVeg();
		String address = internalDish.getAddress();
		String delivery = internalDish.getDelivery();
		String cuisine = internalDish.getCuisine();		
		
	    dish.setId(id);
	    dish.setDishName(dishname);
	    dish.setuId(userid);
	    dish.setNoOfServings(servings);
	    dish.setFoodDescription(desc);
	    dish.setIsVeg(isveg);
	    dish.setAddress(address);
	    dish.setDelivery(delivery);
	    dish.setCuisine(cuisine);

	    Dish d = dishService.update(dish);
		
	    return d.toString();
	}
	
	
	
	
	@RequestMapping (value = "/deleteAllDishes", method = RequestMethod.DELETE)
		public String deleteAll() {
		dishService.deleteAll();
		return "Deleted all records";
	}
	

	
}
//[1] : https://examples.javacodegeeks.com/enterprise-java/spring/boot/spring-boot-mongodb-crud-operations-example/