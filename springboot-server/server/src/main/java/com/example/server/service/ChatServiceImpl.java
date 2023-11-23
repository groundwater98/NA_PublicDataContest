package com.example.server.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ChatServiceImpl implements ChatService{

    RestTemplate restTemplate;

    // 통신을 담당할 메소드
    @Override
    public String sendUserMessageToDjangoServer(String message) {
        return null;
    }

    // 포메팅을 담당할 메소드
    @Override
    public String formattingResponseToDjangoServer(String response) {
        return null;
    }
}
