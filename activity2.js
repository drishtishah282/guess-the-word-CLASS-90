function btnscore(){
    var score=localStorage.getItem("score");
    document.getElementById("update").innerHTML="SCORE IS = "+score;
}
function btnback(){
    window.location="activity_1.html";
}