package com.example.server.controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.server.model.RequestUserDTO;
import com.example.server.model.ResponseUserDTO;
import com.example.server.service.LoginService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequestMapping("/api/login")
@RestController
@RequiredArgsConstructor
public class LoginController {

	private final LoginService service;

	@PostMapping(value = "/check")
	public String login(@RequestBody RequestUserDTO user) throws JsonProcessingException {
		ObjectMapper objectMapper = new ObjectMapper();
		ResponseUserDTO login = service.login(user.getUser());
		// json으로 변환해서 React-native로 리턴
		return objectMapper.writeValueAsString(login);
	}
}
