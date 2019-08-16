package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.model.Transaction;

@Repository
@CrossOrigin(origins = { "http://localhost:8100", "http://localhost:8080" })
public interface TransactionDao extends MongoRepository<Transaction, String> {

}
