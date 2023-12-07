package com.example.server.service;

import com.example.server.model.ResponseUserDTO;

public interface LoginService {

	public ResponseUserDTO login(String user);
}
