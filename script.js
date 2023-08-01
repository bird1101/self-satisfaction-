function login(){
  var tx=document.getElementById("password")
  if (tx.value=="moimoi"){
    document.getElementById("result").textContent=""
    alert("ログイン成功")
  }else{
    document.getElementById("result").textContent="パスワードが違います"
  }
}
