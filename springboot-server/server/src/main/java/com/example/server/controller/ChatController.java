package com.example.server.controller;

import com.example.server.model.RequestChatDTO;
import com.example.server.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/chat")
@RestController
@RequiredArgsConstructor
@CrossOrigin
public class ChatController {

    private final ChatService service;

    // 채팅이 이뤄지며 유저에게 반환할 데이터
    // Service단까지만 들어가고 DB에는 접근하지 않아도 됌
    @PostMapping("/send")
    public String chattingService(@RequestBody RequestChatDTO dto) {
        System.out.println("dto = " + dto.toString());
        return "test";
    }
}
