package com.example.server.dao;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.example.server.entity.User;
import com.example.server.entity.UserCase;
import com.example.server.model.ResponseUserDTO;
import com.example.server.repository.LoginRepository;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class LoginDAOImpl implements LoginDAO{

	private final LoginRepository repository;

	@Override
	public ResponseUserDTO login(String user) {
		return ResponseUserDTO.from(repository.findByUserCase(UserCase.valueOf(user.toUpperCase())));
	}

	@Override
	public User findById(Long id) {
		Optional<User> byId = repository.findById(id);
		return byId.orElse(null);
	}
}
