package com.hcl.gl.surabhi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.gl.surabhi.model.Admin;
import com.hcl.gl.surabhi.repository.AdminLoginRepository;

@RestController
@RequestMapping("/api/a1/")
@CrossOrigin(origins ="http://localhost:4200/" )
public class AdminController {
	
	@Autowired
	private AdminLoginRepository adminRepository;
	
	@PostMapping("/save-admin")
	public Admin createAdmin(@RequestBody Admin admin) {
		return adminRepository.save(admin);
	}
	@PostMapping("/login")
	public ResponseEntity<Admin>loginAdmin(@RequestBody Admin admindata){
		Admin admin=adminRepository.findByUserEmail(admindata.getUserEmail());
		if(admin.getPassword().equals(admindata.getPassword()))
			return ResponseEntity.ok(admin);
		
		return (ResponseEntity<Admin>) ResponseEntity.internalServerError();
	}
}
