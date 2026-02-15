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
import com.hcl.gl.surabhi.model.FoodList;
import com.hcl.gl.surabhi.repository.FoodListRepository;

@RestController
@RequestMapping("/api/f1/")
@CrossOrigin(origins ="http://localhost:4200/" )
public class FoodController {
	
	@Autowired
	private FoodListRepository foodRepository;
	
	
	@GetMapping("/foods")
	public List<FoodList>getAllFoods(){
		return foodRepository.findAll();
	}
	
	@PostMapping("/save-foods")
	public FoodList createFood(@RequestBody FoodList foodList) {
		return foodRepository.save(foodList);
	}
	@GetMapping("/foods/{id}")
	public ResponseEntity<FoodList>getFoodById(@PathVariable Long id){
		FoodList foodList=foodRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Food not exist with id:" +id));
		return ResponseEntity.ok(foodList);
	}
	@PutMapping("/foods/{id}")
	public ResponseEntity<FoodList> UpdateFood(@PathVariable Long id,@RequestBody FoodList foodlist){
		FoodList foodList=foodRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Food not exist with id:" +id));
		foodList.setName(foodlist.getName());
		foodList.setType(foodlist.getType());
		foodList.setDescription(foodlist.getDescription());
		foodList.setCuisine_name(foodlist.getCuisine_name());
		foodList.setPrice(foodlist.getPrice());
		
		FoodList updatedFood=foodRepository.save(foodList);
		return ResponseEntity.ok(updatedFood);
	}
	@DeleteMapping("/foods/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteFood(@PathVariable Long id){
		FoodList foodList=foodRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Food not exist with id:" +id));
		
		foodRepository.delete(foodList);
		Map<String, Boolean> response=new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
