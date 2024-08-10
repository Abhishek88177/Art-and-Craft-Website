package com.artandcraft.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.artandcraft.model.Registration;

@Repository
public interface RegistrationRepo extends JpaRepository<Registration, Integer> {

	public Registration findByMobileNo(String mobileNo);

}
