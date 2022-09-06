// bankbookComment.js

const comment_btn = document.getElementById("comment_btn");
const writer = document.querySelector("#writer");
const contents = document.getElementById("contents");
const commentList = document.getElementById("commentList");

getCommentList();

comment_btn.addEventListener("click", function(){

    let bookNum = comment_btn.getAttribute("data-booknum");
    let wv = writer.value;
    let cv = contents.value;

    //------------------------ ajax -----------------------------
    // 1. XMLHTTPRequest 생성
    const xhttp = new XMLHttpRequest();

    // 2. Method, URL 준비
    xhttp.open("POST", "./commentAdd");

    // 3. Enctype
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // 4. 전송(post일 경우 파라미터 추가)
    xhttp.send("bookNum="+bookNum+"&writer="+wv+"&contents="+cv);

    // 5. 응답 처리
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200) {
            let result = xhttp.responseText.trim();
            console.log(result);
            result = JSON.parse(result);
            console.log(result.result);
            writer.value="";
            contents.value="";
            if(result.result == 1) {
                alert("댓글이 등록되었습니다.");
                getCommentList();
            }
        }
    }

}); // click event 끝

function getCommentList() {
    // 1. XMLHTTPRequest 생성
    const xhttp = new XMLHttpRequest();

    // 2. Method, URL
    xhttp.open("GET", "./commentList?page=1");

    // 3. 요청 전송
    xhttp.send();

    // 4. 응답 처리
    xhttp.addEventListener("readystatechange", function(){
        if(xhttp.readyState==4 && xhttp.status==200) {
            console.log(xhttp.responseText);
            // 1. jsp 사용한 결과물
            //console.log(commentList.innerHTML.xhttp.responseText.trim());

            // 2. json 결과물
            let ar = JSON.parse(xhttp.responseText.trim());
            let result = document.createElement("table");
            let resultAttr = document.createAttribute("class");
            resultAttr.value = "table tavle-dark table-hover";
            result.setAttributeNode(resultAttr);

            for(let i = 0; i < ar.length; i++){
                let tr = document.createElement("tr");

                let td = document.createElement("td");
                let tdText = document.createTextNode(ar[i].contents);
                td.appendChild(tdText);
                tr.appendChild(td);

                td = document.createElement("td");
                tdText = document.createTextNode(ar[i].writer);
                td.appendChild(tdText);
                tr.appendChild(td);

                td = document.createElement("td");
                tdText = document.createTextNode(ar[i].regDate);
                td.appendChild(tdText);
                tr.appendChild(td);

                result.appendChild(tr);


                
                console.log(ar[i]);
                console.log(ar[i].contents);
                console.log(ar[i].writer);
            }

            commentList.append(result);

        }
    });
}