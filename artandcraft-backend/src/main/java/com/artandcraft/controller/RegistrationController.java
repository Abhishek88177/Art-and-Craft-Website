package com.artandcraft.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.artandcraft.model.Registration;
import com.artandcraft.service.RegistrationService;



@RestController
@CrossOrigin
public class RegistrationController {
	
	@Autowired
	RegistrationService registerService;
	
	@PostMapping("/registration")
	public String registration(@RequestBody Registration userData) {
		System.out.println(userData);
		return registerService.register(userData);
	}
	
	@GetMapping("/getalluser")
	public List<Registration> allUsers(){
		return registerService.allUsers();
	}
	
	@GetMapping("/login/{mobileNo}/{password}")
	public Registration Login(@PathVariable("mobileNo") String mobileNo ,@PathVariable("password") String password) {
		return registerService.login(mobileNo, password);
	}

}
