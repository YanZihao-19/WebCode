//时间倒计时start
function getRevTime(){
	let curd=new Date();
	let curTime=curd.getTime();
	let fd=new Date('2022-01-01 00:00:00');
	let fTime=fd.getTime();
	let sTime=fTime-curTime;
	let hours=Math.floor(sTime/(1000*60*60));
	sTime=sTime%(1000*60*60);
	let minutes=Math.floor(sTime/(1000*60));
	sTime=sTime%(1000*60);
	let seconds=Math.floor(sTime/(1000));
	sTime=sTime%(1000);
	document.querySelector("#hours").innerHTML=hours;
	document.querySelector("#minutes").innerHTML=minutes;
	document.querySelector("#seconds").innerHTML=seconds;
}
	setInterval(getRevTime,1000);
	function getD(n){
	if(n<10){
		return '0'+n;
	}
return n;
console.log(n);
}
//时间倒计时end

// 搜索框开始
				var menu_div =  $(".menu input");
				var menu_input = $("#menu_a");
				var menu_ul = $(".menu ul");
				var menu_li = $(".menu ul li");
				
				/*点击出现子菜单*/
				menu_div.click(function(){
					
					$(".menu ul").show();
					// menu_ul.css("color","red");
					// menu_input.css("border","1px solid red");
					menu_ul.css("height","auto");
				
				});
				
				/*点击子菜单获取文本并替换主菜单内容*/
				menu_li.click(function(){
				    
				    menu_input.val($(this).attr('name')); 
				    menu_ul.css("display","none");
					
					 
				});
				
				/*文本外点击隐藏菜单*/
				$(document).bind("click",function(e){
				    var target = $(e.target);
				    if(target.closest(".menu").length == 0){
				        
				        menu_ul.css("display","none");
						
				    }
				})

// 搜索框结束

// 悬浮改变样式开始
let li=document.querySelector(".li");
						let xiaomi=document.querySelector(".xiaomi");

						let li1=document.querySelector(".li1");
						let xiaomi1=document.querySelector(".xiaomi1");
						
						let li2=document.querySelector(".li2");
						let xiaomi2=document.querySelector(".xiaomi2");
						
						let li3=document.querySelector(".li3");
						let xiaomi3=document.querySelector(".xiaomi3");
						
						let li4=document.querySelector(".li4");
						let xiaomi4=document.querySelector(".xiaomi4");
						
						let li5=document.querySelector(".li5");
						let xiaomi5=document.querySelector(".xiaomi5");
						li.onmouseover=function(){
							xiaomi.style.color='#FF6700'
							
							
						}
						li.onmouseout=function(){
							xiaomi.style.color='#fff'
						}
						li1.onmouseover=function(){
							xiaomi1.style.color='#FF6700'
						}
						li1.onmouseout=function(){
							xiaomi1.style.color='#fff'
						}
						li2.onmouseover=function(){
							xiaomi2.style.color='#FF6700'
						}
						li2.onmouseout=function(){
							xiaomi2.style.color='#fff'
						}
						li3.onmouseover=function(){
							xiaomi3.style.color='#FF6700'
						}
						li3.onmouseout=function(){
							xiaomi3.style.color='#fff'
						}
						li4.onmouseover=function(){
							xiaomi4.style.color='#FF6700'
						}
						li4.onmouseout=function(){
							xiaomi4.style.color='#fff'
						}
						li5.onmouseover=function(){
							xiaomi5.style.color='#FF6700'
						}
						li5.onmouseout=function(){
							xiaomi5.style.color='#fff'
						}
// 悬浮改变样式结束
// 轮播图开始
let imgs=document.querySelector('.imgs');
					
					let circlesLi=document.querySelectorAll('.circles li');
					
					let leftbtn=document.querySelector('.left-btn');
					let rightbtn=document.querySelector('.right-btn');
					let num=0;
					
					// 点击圆圈切换图片
								for(let i=0;i<circlesLi.length;i++){
									circlesLi[i].onclick=function(){
										num=i;
										changeImg();
									}
								}
								//左右按钮换图
								leftbtn.onclick=function(){
									num--;
									changeImg();
								}
								rightbtn.onclick=function(){
									num++;
									changeImg();
								}
								
								//自动播放;
						/*	setInterval(function(){
									num++;
									changeImg();
								},6000);
								function stop1(){
									clearInterval(timer)
								}*/
								// 换图函数
								function changeImg(){
									// 判断num索引超出范围，循环播放
									if(num<0){
										num=4;
									}
									if(num>4){
										num=0;
									}
									// if(imgs.style.left>="-980.8*num+'px'"){
									// 	imgs.style.left=0*num+'px';
									// }
									imgs.style.left=-1226*num+'px';
									for(let j=0;j<circlesLi.length;j++){
										circlesLi[j].className=j==num? 'active':'';
									}
									
								}
// 轮播图结束
