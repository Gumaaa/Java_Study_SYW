package com.yw.home.board.impl;

import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.web.multipart.MultipartFile;

import com.yw.home.util.Pager;

public interface BoardService {
	// 글목록
	public List<BoardDTO> getList(Pager pager) throws Exception;
	
	// 상세보기
	public BoardDTO getDetail(BoardDTO boardDTO) throws Exception;
	
	// 글쓰기
	public int setAdd(BoardDTO boardDTO, MultipartFile [] files, ServletContext servletContext) throws Exception;
	
	// 글 수정
	public int setUpdate(BoardDTO boardDTO) throws Exception;
	
	// 글 삭제
	public  int setDelete(BoardDTO boardDTO) throws Exception;
	
	//fileDelete
	public int setFileDelete(BoardFileDTO boardFileDTO, ServletContext servletContext)throws Exception;
}
