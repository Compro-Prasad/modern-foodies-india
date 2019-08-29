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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.demo.model.Dish;
import com.example.demo.service.DishService;

@RestController

public class DishController {
	   //Save the uploaded file to this folder
    private static String UPLOADED_FOLDER = "/home/rajkishor/Desktop/foodali/modern-foodies-india/images/";
	@Autowired
	private DishService dishService;
	
	@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
	@RequestMapping(value = "/createDish", method = RequestMethod.POST)
	public String create(@RequestBody(required = false) Dish dish) {
		Dish d = dishService.create(dish);

		return d.toString();
	}
	
	
	@CrossOrigin(
		    allowCredentials = "true",
		    		origins = {"http://localhost:8100","http://localhost:8080"},
		    allowedHeaders = "*", 
		    methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT}
		)
    @PostMapping("/upload") // //new annotation since 4.3
    public String singleFileUpload(@RequestParam("myFile") MultipartFile file,
                                   RedirectAttributes redirectAttributes) {

        if (file.isEmpty()) {
            redirectAttributes.addFlashAttribute("message", "Please select a file to upload");
            return "redirect:uploadStatus";
        }

        try {

            // Get the file and save it somewhere
            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
            Files.write(path, bytes);

            redirectAttributes.addFlashAttribute("message",
                    "You successfully uploaded '" + file.getOriginalFilename() + "'");

        } catch (IOException e) {
            e.printStackTrace();
        }

        return "redirect:/uploadStatus";
    }
	
	@CrossOrigin(
		    allowCredentials = "true",
		    		origins = {"http://localhost:8100","http://localhost:8080"},
		    allowedHeaders = "*", 
		    methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT}
		)
    @GetMapping("/uploadStatus")
    public String uploadStatus() {
        return "uploadStatus";
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