package com.yw.home.util;

public class CommentPager {
	
	// -- Mapper에서 사용
	private Long startRow;
	private Long lastRow;
	private Long bookNum;
	
	private Long page;
	private Long perPage; // 한 페이지당 몇 개씩 보일건지
	
	// startRow
	public void getRowNum() {
		startRow = (this.getPage() - 1) * this.getPerPage() + 1;
		lastRow = this.getPage() * this.getPerPage();
	}
	
	
	public Long getPage() {
		if(this.page == null || this.page < 1) {
			this.page = 1L;
		}
		
		return page;
	}
	
	public void setPage(Long page) {
		this.page = page;
	}
	
	public Long getPerPage() {
		if(this.perPage == null || this.perPage < 1) {
			this.perPage = 10L;
		}
		
		return perPage;
	}
	public void setPerPage(Long perPage) {
		this.perPage = perPage;
	}
	public Long getStartRow() {
		return startRow;
	}
	public void setStartRow(Long startRow) {
		this.startRow = startRow;
	}
	public Long getLastRow() {
		return lastRow;
	}
	public void setLastRow(Long lastRow) {
		this.lastRow = lastRow;
	}
	public Long getBookNum() {
		return bookNum;
	}
	public void setBookNum(Long bookNum) {
		this.bookNum = bookNum;
	}
	
	
}