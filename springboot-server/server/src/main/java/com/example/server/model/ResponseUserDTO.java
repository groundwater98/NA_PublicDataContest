package com.example.server.model;


import com.example.server.entity.User;
import com.example.server.entity.UserCase;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ResponseUserDTO {

	private Long userId;

	private UserCase userCase;

	public static ResponseUserDTO from(User user) {
		return ResponseUserDTO.builder()
			.userId(user.getUserId())
			.userCase(user.getUserCase())
			.build();
	}

}
