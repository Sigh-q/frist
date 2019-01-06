$(document).ajaxStart(function(){
    // console.log(1);
    NProgress.start();
    
})


$(document).ajaxStop(function(){
    // console.log(2);
    setInterval(function(){
        NProgress.done();

    },1000);
    
});



$(function(){
    
    /**
     * 点击二级菜单显示与隐藏
     */
    $(".lt-aside .category").click(function(){
        $(this).next().stop().slideToggle();
    })

    /**
     * 点击左边侧边栏的显示与隐藏
     */

     $(".lt-top .icon-left").click(function(){
         $(".lt-aside").toggleClass("hidemenu");
         $(".lt-top").toggleClass("hidemenu");
         $(".lt-main").toggleClass("hidemenu");
     });


     /**
      * 退出功能
      * 
      */
     $(".logout-btn").click(function(){
         $("#logoutModal").modal("show");
     });


    $("#sure").click(function(){
        $.ajax({
            type:"get",
            url:"/employee/employeeLogout",
            dataType:"json",
            success:function( info ){
                console.log(info);
                if( info.success){
                    location.href = "login.html";
                }
            }
        })
    })

});


