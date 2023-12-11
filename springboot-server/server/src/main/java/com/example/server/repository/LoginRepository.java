package com.example.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.server.entity.User;
import com.example.server.entity.UserCase;

public interface LoginRepository extends JpaRepository<User, Long> {

	@Query("SELECT u FROM User u WHERE u.userCase = :userCase")
	User findByUserCase(@Param("userCase") UserCase userCase);
}
