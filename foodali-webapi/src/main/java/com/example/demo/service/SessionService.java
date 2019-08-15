package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Session;
import com.example.demo.repository.SessionRepository;

@Service
public class SessionService {
   
	@Autowired
	private SessionRepository sessionRepository;
	
	//Create operation
	public Session create(Session session) {
		return sessionRepository.save(session);
	}
	
	//Retrieve operation
	public List<Session> getAll(){
		return sessionRepository.findAll();
	}
	//Delete operation
	public void deleteAll() {
		sessionRepository.deleteAll();	
	}

}