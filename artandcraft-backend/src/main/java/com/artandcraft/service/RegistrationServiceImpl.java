package com.artandcraft.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.artandcraft.model.Registration;
import com.artandcraft.repository.RegistrationRepo;


@Service
public class RegistrationServiceImpl implements RegistrationService{
	
	@Autowired
	RegistrationRepo registerRepo;

	@Override
	public String register( Registration userData) {
		registerRepo.save(userData);
		return "Registration Done";
	}

	@Override
	public List<Registration> allUsers() {
		// TODO Auto-generated method stub
		return registerRepo.findAll();
	}

	@Override
	public Registration login(String mobileNo, String password) {
		Registration registerData = registerRepo.findByMobileNo(mobileNo);
		if(registerData != null) {
			if(registerData.getMobileNo().equals(mobileNo) && registerData.getPassword().equals(password)) {
				return registerData;
			}
		}
		return null;
	}

}
