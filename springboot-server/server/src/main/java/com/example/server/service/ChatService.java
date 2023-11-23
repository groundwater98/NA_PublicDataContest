package com.example.server.service;

public interface ChatService {

    String sendUserMessageToDjangoServer(String message);
    String formattingResponseToDjangoServer(String response);

}
