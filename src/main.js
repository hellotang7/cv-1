let demo = document.querySelector("#demo"); //通过css选择器找到这个元素
let string = `
你好,我是一名前端新人
接下来我要加样式了
我要加的样式是
body{
    color: red;
}
`;
let string2 = "";

let n = -1; //记住当前等于几

let step = () => {
  setTimeout(() => {
    //延迟执行一次任务
    n = n + 1; //每1秒n+1
    if (string[n] === "\n") {
      //如果不是回车，就不照搬
      string2 += "<br>";
    } else {
      //如果不是回车，就照搬;
      string2 += string[n];
    }
    demo.innerHTML = string2; //n+1结果传到demo里面
    if (n < string.length) {
      //n小于字符串长度就执行
      step(); //结束之后再次调用，陷入循环
    } //否则就停止
  }, 100);
};
step(); //调用step每一步
