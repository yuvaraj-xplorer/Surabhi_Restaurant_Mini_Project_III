package com.hcl.gl.surabhi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "admin")
public class Admin {
	@Column(name = "userName")
	private String userName;
	
	@Id
	@Column(name = "userEmail")
	private String userEmail;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "mobile")
	private String mobile;
	
	public Admin() {
		
	}
	
	public Admin(String userName, String userEmail, String password, String mobile) {
		super();
		this.userName = userName;
		this.userEmail = userEmail;
		this.password = password;
		this.mobile = mobile;
	}
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	@Override
	public String toString() {
		return "Admin [userName=" + userName + ", userEmail=" + userEmail + ", password=" + password + ", mobile="
				+ mobile + "]";
	}
	
	
	
	
}
