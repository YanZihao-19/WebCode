var inputname=document.querySelector('.input-name');
var inputpassword=document.querySelector('.input-password');
var spanname=document.querySelector('.spanname');
var spanpassword=document.querySelector('.spanpassword');
var button=document.querySelector('button');

var tuoguoname=false;
var tongguopassword=false;
inputname.onfocus=function(){
    spanname.innerHTML='至少2字符，且不能超过8字符';
}
inputname.onblur=function(){
    if(inputname.value.length<2||inputname>8){
        spanname.innerHTML='输入不符合要求！！请重新输入';
        tuoguoname=false;
    }
    else{
        spanname.innerHTML='符合要求已通过';
        tuoguoname=true;
    }
}
inputpassword.onfocus=function(){
    spanpassword.innerHTML='至少6字符，且不能超过16字符';
}
inputpassword.onblur=function(){
    if(inputpassword.value.length<6||inputpassword.value.length>16){
        spanpassword.innerHTML='输入不符合要求！！请重新输入';
        tongguopassword=false;
    }
    else{
        spanpassword.innerHTML='符合要求已通过';
        tongguopassword=true;
    }
}

button.addEventListener('click',function(){
    if(tuoguoname==true&&tongguopassword==true){
        alert('登录成功');
        location.assign('https://www.bilibili.com/');
    }
    else{
        alert('输入有误');
    }
})