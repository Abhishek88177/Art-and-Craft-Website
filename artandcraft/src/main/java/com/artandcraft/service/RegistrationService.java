package com.artandcraft.service;

import java.util.List;

import com.artandcraft.model.Registration;

public interface RegistrationService {
	
	public String register(Registration userData);
	public List<Registration> allUsers();
	public Registration login(String mobileNo , String Password);

}
