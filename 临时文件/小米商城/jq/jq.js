
//搜索框start
var menu_div =  $(".menu input");
			var menu_input = $("#menu_a");
			var menu_ul = $(".menu ul");
			var menu_li = $(".menu ul li");
			
			/*点击出现子菜单*/
			menu_div.click(function(){
				
				$(".menu ul").show();
				menu_input.css("color","red");
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
			});
//搜索框end
