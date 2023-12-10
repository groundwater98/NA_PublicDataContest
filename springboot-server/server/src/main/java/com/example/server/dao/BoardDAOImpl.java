package com.example.server.dao;

import com.example.server.entity.Agenda;
import com.example.server.entity.AgendaRecommend;
import com.example.server.model.ResponseAgendaDTO;
import com.example.server.model.ResponseBoardDTO;
import com.example.server.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

import static com.example.server.config.ServerConfig.PAGE_SIZE;

@Slf4j
@Repository
@RequiredArgsConstructor
public class BoardDAOImpl implements BoardDAO{

    private final BoardRepository repository;


    // 페이징 설정 후 결과값 리턴
    // NullPointException Optional로 처리해야함
    @Override
    public Page<ResponseBoardDTO> findByBoardPage(int page) {
        Pageable pg = PageRequest.of(page, PAGE_SIZE, Sort.by(Sort.Direction.DESC, "createDate"));
        return repository.findAll(pg)
                .map(ResponseBoardDTO::from);
    }

    // 안건 DB에 저장
    // save 처리 실패했을때 발생시킬 Exception 만들기
    @Override
    public String insert(Agenda agenda){
        repository.save(agenda);
        return "ok";
    }

    // 안건 상세페이지 보기
    @Override
    public Agenda findByBoardId(Long boardId) {
        // 프록시로 받기
        Optional<Agenda> byId = repository.findById(boardId);
        return byId.orElse(null);
    }

    @Override
    public void recommendInsert(AgendaRecommend recommend) {

    }
}
