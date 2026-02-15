package com.hcl.gl.surabhi.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.hcl.gl.surabhi.model.Admin;

public interface AdminLoginRepository extends JpaRepository<Admin, String> {

	Admin findByUserEmail(String userEmail);

}
