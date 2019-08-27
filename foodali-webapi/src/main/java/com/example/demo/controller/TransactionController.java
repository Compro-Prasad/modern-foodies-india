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
import com.example.demo.model.Transaction;
import com.example.demo.model.User;
import com.example.demo.service.DishService;
import com.example.demo.service.TransactionService;

@RestController

public class TransactionController {

	@Autowired
	private TransactionService transactionservice;

	@CrossOrigin(origins = { "http://localhost:8100", "http://localhost:8080" })
	@RequestMapping(value = "/createTransaction", method = RequestMethod.POST)
	public String create(@RequestBody(required = false) Transaction transaction) {
		Transaction t = transactionservice.create(transaction);
		return t.toString();
	}

	@RequestMapping(value = "/getAlltransactions", method = RequestMethod.GET)
	public List<Transaction> getAll() {
		return transactionservice.getAll();
	}

	@RequestMapping(value = "/getTransactionById", method = RequestMethod.POST)
	public Optional<Transaction> findById(@RequestBody(required = true) String id) {
		return transactionservice.findById(id);
	}

	@RequestMapping(value = "/deleteAllTransactions", method = RequestMethod.DELETE)
	public String deleteAll() {
		transactionservice.deleteAll();
		return "Deleted all records";
	}
}
//[1] : https://examples.javacodegeeks.com/enterprise-java/spring/boot/spring-boot-mongodb-crud-operations-example/