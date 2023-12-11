package com.example.server.service;

import org.springframework.stereotype.Service;

import com.example.server.dao.LoginDAO;
import com.example.server.entity.User;
import com.example.server.entity.UserCase;
import com.example.server.model.ResponseUserDTO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LoginServiceImpl implements LoginService{

	private final LoginDAO dao;

	@Override
	public ResponseUserDTO login(String user) {
		return dao.login(user);
	}

}
