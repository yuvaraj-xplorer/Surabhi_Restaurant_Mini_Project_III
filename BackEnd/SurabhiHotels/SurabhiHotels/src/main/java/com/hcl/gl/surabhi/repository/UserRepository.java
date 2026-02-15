package com.hcl.gl.surabhi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.gl.surabhi.model.User;
@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	User findByUserEmail(String userEmail);
	
}
