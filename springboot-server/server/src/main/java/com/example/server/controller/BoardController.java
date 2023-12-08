package com.example.server.controller;

import com.example.server.model.RequestAgendaDTO;
import com.example.server.model.RequestRecommendDTO;
import com.example.server.model.ResponseAgendaDTO;
import com.example.server.service.BoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RequestMapping("/api/board")
@RestController
@RequiredArgsConstructor
public class BoardController {

    // NullPointException을 어떻게 처리할지 고민해보기

    // 게시판에 필요한 기능을 수행하는 컨트롤러
    private final BoardService service;

    // 페이징 처리를 처리할 컨트롤러
    @GetMapping("/list")
    public Page<ResponseAgendaDTO> requestBoardList(@RequestParam int page) {
        log.info("============================== {}=================================", page);
        Page<ResponseAgendaDTO> byBoardPage = service.findByBoardPage(page);
        for (ResponseAgendaDTO responseAgendaDTO : byBoardPage) {
            log.info("=================== {} ==================", responseAgendaDTO);
        }
        return byBoardPage;
    }

    // 안건 상세보기를 처리할 컨트롤러
    @GetMapping("/content/{boardId}")
    public ResponseAgendaDTO requestBoardRead(@PathVariable Long boardId) {
        log.info("{}", boardId);
        return service.findByBoardId(boardId);
    }

    @PostMapping("/recommend")
    public void recommendInsert(@RequestBody RequestRecommendDTO dto) {

    }

    // 채팅이 끝나고 작성된 안건을 DB에 저장하는 컨트롤러
    @PostMapping("/post")
    public String requestBoardRead(@RequestBody RequestAgendaDTO dto) {
        log.info("{}", dto.toString());
        return service.insert(dto);
    }

}
