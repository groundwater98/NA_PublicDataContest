package com.example.server.dao;

import com.example.server.entity.User;
import com.example.server.model.ResponseUserDTO;

public interface LoginDAO {

	ResponseUserDTO login(String user);
	User findById(Long id);
}
