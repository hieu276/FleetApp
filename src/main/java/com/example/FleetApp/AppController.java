package com.example.FleetApp;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AppController {
	
	@GetMapping("index")
	public String goHome() {
		return "index";
	}
	
	@GetMapping("/login")
	public String login() {
		return "pages-login";
	}
	
	@GetMapping("/logout")
	public String logout() {
		return "logout";
	}
	
	@GetMapping("/register")
	public String register() {
		return "pages-register";
	}
	@GetMapping("/accessDenied")
	public String accessDenied() {
		return "accessDenied";
	}
	
	
}
