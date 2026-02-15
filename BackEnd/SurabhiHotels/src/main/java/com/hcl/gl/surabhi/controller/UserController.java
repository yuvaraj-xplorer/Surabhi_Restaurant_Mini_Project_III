package com.hcl.gl.surabhi.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.gl.surabhi.exception.ResourceNotFoundException;
import com.hcl.gl.surabhi.model.Admin;
import com.hcl.gl.surabhi.model.User;
import com.hcl.gl.surabhi.repository.UserRepository;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins ="http://localhost:4200/" )
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	
	@GetMapping("/users")
	public List<User>getAllUsers(){
		return userRepository.findAll();
	}
	@PostMapping("/save-users")
	public User createUser(@RequestBody User user) {
		return userRepository.save(user);
	}
	
	@GetMapping("/users/{id}")
	public ResponseEntity<User>getUserById(@PathVariable Long id){
		User user=userRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("User not exist with id:"+id));
		return ResponseEntity.ok(user); 
	}
	
	@PutMapping("/users/{id}")
	public ResponseEntity<User>updateUser(@PathVariable Long id,@RequestBody User userDetails){
		User user=userRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("User not exist with id:"+id));
		user.setUserName(userDetails.getUserName());
		user.setUserEmail(userDetails.getUserEmail());
		user.setMobile(userDetails.getMobile());
		user.setPassword(userDetails.getPassword());
		
		User updatedUser=userRepository.save(user);
		return ResponseEntity.ok(updatedUser); 
	}
	@DeleteMapping("/users/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id){
		User user=userRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("User not exist with id:"+id));
		
		userRepository.delete(user);
		Map<String, Boolean> response=new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	@PostMapping("/login")
	public ResponseEntity<User>loginUser(@RequestBody User userdata){
		User user=userRepository.findByUserEmail(userdata.getUserEmail());
		if(user.getPassword().equals(userdata.getPassword()))
			return ResponseEntity.ok(user);
		
		return (ResponseEntity<User>) ResponseEntity.internalServerError();
	}
	
}
