$(function(){
    var currentPage = 1;
    var id;
    var isDelete;

   /**
    * 一进去也先渲染第一页
    */
    random();

    /**
     * 封装ajax请求
     */
    function random(){
        $.ajax({
            type:"get",
            url:"/user/queryUser",
            data:{
                page:currentPage,
                pageSize:5
            },
            dataType:"json",
            success:function( info ){
                console.log(info);
                
                var htmlStr = template("usertpm",info);
                $("tbody").html(htmlStr);
        
                /**
                 * 分页
                 */
                $("#pagintor").bootstrapPaginator({
                    bootstrapMajorVersion:3,//默认是2，如果是bootstrap3版本，这个参数必填
                    currentPage:info.page,//当前页
                    totalPages:Math.ceil(info.total/info.size),//总页数
                    size:"small",//设置控件的大小，mini, small, normal,large
                    onPageClicked:function(event, originalEvent, type,page){
                      //为按钮绑定点击事件 page:当前点击的按钮值
                      console.log(page);
                      currentPage = page;
                      random();
                      
                    }
                  });
                  
            }
        })
    }

    /**
     * 禁用启用模态框
     */
    
     /**
      *显示禁用启用模态框
      */
     $("table").on("click",".btn",function(){
         $("#tog").modal("show");
         id = $(this).parent().data("id");
         isDelete = $(this).hasClass("btn-danger") ? 0 : 1;
         console.log(id,isDelete);
         
     });


    /**
     * 点击按钮发送ajax请求 改变状态
     */
     $("#togbtn").click(function(){
         $.ajax({
             type:"post",
             url:"/user/updateUser",
             data:{
                id:id,
                isDelete:isDelete
             },
             dataType:"json",
             success:function( info ){
                console.log(info);
                if( info.success ){
                    $("#tog").modal("hide");
                    random();
                }
                
             }
         })
     })



})

