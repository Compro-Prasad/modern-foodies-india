package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Transaction;
import com.example.demo.model.User;
import com.example.demo.repository.TransactionDao;

@Service
public class TransactionService {

	@Autowired
	private TransactionDao transactiondao;

	// Create operation
	public Transaction create(Transaction transaction) {
		return transactiondao.save(transaction);
	}

	// Retrieve operation
	public List<Transaction> getAll() {
		return transactiondao.findAll();
	}

	// Retrieve by id
	public Optional<Transaction> findById(String id) {
		return transactiondao.findById(id);
	}

	// Delete operation
	public void deleteAll() {
		transactiondao.deleteAll();
	}
	public void delete(int id) {
		Transaction t = transactiondao.findById(id);
		transactiondao.delete(t);
	}

}