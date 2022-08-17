let html = document.querySelector("#html"); //通过css选择器找到这个元素
let style = document.querySelector("#style");
let string = `
/*你好,我是一名前端新人
 *接下来我来展示一下我的前端功底
 *首先我要准备一个div*/
#div1{
  border:1px solid red;
  width: 200px;
  height: 200px;
}
/*接下来我把 div 变成一个八卦图
 *注意看好了
 *首先，把 div 变成一个圆*/
#div1{
  border-radius:50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/*八卦是阴阳形成
 *一黑一白*/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个风火轮*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
  width:100px;
  height:100px;
  bottom:0;  
  transform:translateX(50%);
  background:#fff;
  border-radius:50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
//不加注释中文会影响css效果!!!!
//before和after生成第一个和最后一个伪元素
//再把他们变成div
let string2 = "";
let n = 0; //记住当前等于几

let step = () => {
  setTimeout(() => {
    //延迟执行一次任务
    if (string[n] === "\n") {
      //这个if用来解决回车问题
      //如果不是回车，就不照搬
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      //如果不是回车，就照搬;
      string2 += string[n];
    }
    html.innerHTML = string2; //string结果传到demo里面
    style.innerHTML = string.substring(0, n); //substring隐藏多余字符
    window.scrollTo(0, 99999); //让滚动条可以滚动到99999行
    html.scrollTo(0, 99999);
    if (n < string.length - 1) {
      //n小于字符串长度就执行
      n += 1;
      step(); //结束之后再次调用，陷入循环
    } //否则就停止
  }, 50);
};
step(); //调用step每一步
