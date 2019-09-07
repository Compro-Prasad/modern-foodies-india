package com.example.demo.controller;


import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.mongodb.core.index.TextIndexed;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.TextCriteria;
import org.springframework.data.mongodb.core.query.TextQuery;
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


@CrossOrigin(origins = "https://phorons.com", allowedHeaders = "*")
@RestController
public class DishController {
	   //Save the uploaded file to this folder
    //private static String UPLOADED_FOLDER = "/home/rajkishor/Desktop/foodali/modern-foodies-india/src/assets/images/";
    private static String UPLOADED_FOLDER = "/home/mrcgddmy/public_html/assets/images/";

    

	@Autowired
	private DishService dishService;
	

	@RequestMapping(value = "/createDish", method = RequestMethod.POST)
	public Dish create(@RequestBody(required = false) Dish dish) {
		Dish d = dishService.create(dish);
		return d;
	}
	
	
	@CrossOrigin(
		    allowCredentials = "true",
		    		origins = {"*"},
		    allowedHeaders = "*", 
		    methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT}
		)
    @PostMapping("/upload") // //new annotation since 4.3
    public String singleFileUpload(@RequestParam("myFile") MultipartFile file,@RequestParam("fileData") String fileData,
                                   RedirectAttributes redirectAttributes) {

        if (file.isEmpty()) {
            redirectAttributes.addFlashAttribute("message", "Please select a file to upload");
            return "redirect:uploadStatus";
        }

        try {

            // Get the file and save it somewhere
            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOADED_FOLDER + fileData);
//            Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
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
		    		origins = {"*"},
		    allowedHeaders = "*", 
		    methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT}
		)
    @GetMapping("/uploadStatus")
    public String uploadStatus() {
        return "uploadStatus";
    }


	@RequestMapping(value = "/getAlldishes", method = RequestMethod.GET)
	public List<Dish> getAll(){
		//List<Dish> d = dishService.getAll();
		
		return dishService.getAll();
	}
	

	@RequestMapping(value = "/getDishById", method = RequestMethod.GET)
	public Optional<Dish> findById(@RequestParam(required = true) String id){

		return dishService.findById(id);
	}

	@RequestMapping(value = "/getDishesByuId", method = RequestMethod.GET)
	public List<Dish> findByuId(@RequestParam(required = true) String uid){
//ref 
//https://spring.io/blog/2014/07/17/text-search-your-documents-with-spring-data-mongodb
//	https://github.com/spring-projects/spring-data-examples/tree/master/mongodb/text-search/src/main/java/example/springdata/mongodb
//		
		return dishService.findByuId(uid);
	}
	

	@RequestMapping(value = "/getDishesBySearch", method = RequestMethod.GET)
	public List<Dish> findBySearch(@RequestParam(required = true) String q){

		return dishService.findBySearch(q);
	}
	

	@RequestMapping(value = "/updateDishById", method = RequestMethod.PUT)
	public String update(@RequestParam String id,@RequestBody Dish dish) {
		Optional<Dish> internaOptionallDish = dishService.findById(id);
		Dish internalDish = internaOptionallDish.get();
	
		String userid = internalDish.getuId();
		String cuisine = internalDish.getCuisine();		
		
		
		dish.setCuisine(cuisine);
	    dish.setId(id);
	    dish.setuId(userid);
	    dish.setDishName(dish.getDishName());
	    dish.setNoOfServings(dish.getNoOfServings());
	    dish.setFoodDescription(dish.getFoodDescription());
	    dish.setIsVeg(dish.getIsVeg());
	    dish.setAddress(dish.getAddress());
	    dish.setDelivery(dish.getDelivery());
	    
	  

	    Dish d = dishService.update(dish);
		
	    return d.toString();
	}
	
	@RequestMapping(value = "/publishDishById", method = RequestMethod.PUT)
	public String updateP(@RequestParam String id,@RequestBody Dish dish) {
		Optional<Dish> internaOptionallDish = dishService.findById(id);
		Dish internalDish = internaOptionallDish.get();
		
//		private String id;
//		private String uId;
//		@TextIndexed(weight=2) private String dishName;
//		private String noOfServings;
//		@TextIndexed private String foodDescription;
//		private Boolean publishStatus;
//		private String isVeg;
//		private int serialNo;
//		private String address;
//		private String delivery;
//		private String cuisine;
//		private MultipartFile image;
//		private boolean request;
		
		
		String userid = internalDish.getuId();
		String dishName = internalDish.getDishName();
		String noOfServings = internalDish.getNoOfServings();
		String foodDesc = internalDish.getFoodDescription();
		String isVeg = internalDish.getIsVeg();
		String address = internalDish.getAddress();
		String delivery = internalDish.getDelivery();
		String cuisine = internalDish.getCuisine();			
		dish.setCuisine(cuisine);
	    dish.setId(id);
	    dish.setuId(userid);
	    dish.setDishName(dishName);
	    dish.setNoOfServings(noOfServings);
	    dish.setFoodDescription(foodDesc);
	    dish.setIsVeg(isVeg);
	    dish.setAddress(address);
	    dish.setDelivery(delivery);
	    
	    
	    dish.setPublishStatus(dish.getPublishStatus());
	    
	  

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