package com.example.server.service;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.BDDMockito.*;
import static org.mockito.Mockito.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.BDDMockito;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

import com.example.server.dao.BoardDAO;
import com.example.server.entity.Agenda;
import com.example.server.model.RequestAgendaDTO;
import com.example.server.model.ResponseAgendaDTO;

// @ExtendWith(MockitoExtension.class) 단위 테스트 사용시 필요한 어노테이션
@SpringBootTest
class BoardServiceImplTest {

	// @Mock 단위 테스트 사용시 필요한 어노테이션
	// private BoardDAO boardDAO;

	// @InjectMocks 단위 테스트 사용시 필요한 어노테이션
	// private BoardServiceImpl service;

	@Autowired
	BoardService service;

	// 단위 테스트 예시
	// @Test
	// void 글쓰기성공케이스(){
	// 	ResponseAgendaDTO dto = new ResponseAgendaDTO(1L,"title", "detail", LocalDateTime.now());
	// 	Pageable pageable = PageRequest.of(0, 10);
	// 	List<ResponseAgendaDTO> testList = new ArrayList<>();
	// 	testList.add(dto);
	// 	Page<ResponseAgendaDTO> pageResult = new PageImpl<ResponseAgendaDTO>(testList,pageable,1);
	//
	// 	given(service.findByBoardPage(1)).willReturn(pageResult);
	//
	// 	RequestAgendaDTO requestDTO = new RequestAgendaDTO("title", "detail");
	//
	// 	String insert = service.insert(requestDTO);
	//
	// 	Page<ResponseAgendaDTO> byBoardPage = service.findByBoardPage(1);
	// 	assertThat(byBoardPage).isEqualTo(pageResult);
	// }

	@Test
	@Transactional
	void 페이지가져오기성공케이스() {

		Page<ResponseAgendaDTO> byBoardPage = service.findByBoardPage(0);
		for (ResponseAgendaDTO responseAgendaDTO : byBoardPage) {
			System.out.println("responseAgendaDTO =============================================== " + responseAgendaDTO);
		}

	}


}