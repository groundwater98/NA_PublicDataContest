package com.example.server.service;

import org.springframework.stereotype.Service;

import com.example.server.entity.User;
import com.example.server.entity.UserCase;
import com.example.server.model.ResponseUserDTO;

@Service
public class LoginServiceImpl implements LoginService{

	@Override
	public ResponseUserDTO login(String user) {
		if (user.equals("admin")) {
			return new ResponseUserDTO(1L, UserCase.ADMIN);
		} else if (user.equals("user")){
			return new ResponseUserDTO(1L, UserCase.USER);
		}
		return null;
	}

}
