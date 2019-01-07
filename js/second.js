$(function () {

    var currentPage = 1;
    var size = 5;

    /**
     * 进入页面调用random()
     */
    random();

    /**
     * 封装ajax请求数据
     */
    function random(){
        $.ajax({
            type:"get",
            url:"/category/querySecondCategoryPaging",
            data:{
               page:currentPage,
               pageSize:size 
            },
            dataType:"json",
            success:function( info ){
                console.log(info);

                var htmlStr = template("secondtmp",info);
                $("tbody").html(htmlStr);

                /**
                 * 使用分页插件
                 */
                $("#paginator").bootstrapPaginator({
                    bootstrapMajorVersion:3,//默认是2，如果是bootstrap3版本，这个参数必填
                    currentPage:info.page,//当前页
                    totalPages:Math.ceil(info.total/info.size),//总页数
                    size:"small",//设置控件的大小，mini, small, normal,large
                    onPageClicked:function(event, originalEvent, type,page){
                      //为按钮绑定点击事件 page:当前点击的按钮值
                      console.log(page);
                      currentPage= page;
                      random();
                      
                    }
                })
                
            }
        })
    }


    
    $(".addBtn").click(function(){
        
        /**
         * 点击按钮展示模态框 
         */

         $("#addModal").modal("show");

    /**
      * 模态框中渲染一级分类数据
      */
         $.ajax({
            type:"get",
            url:"/category/queryTopCategoryPaging",
            data:{
              page:1,
              pageSize:100
            },
            dataType:"json",
            success:function( info ){
                console.log( info );
                var htmlStr = template("firsttmp",info);
                $(".dropdown-menu").html(htmlStr);
                
            }
        })
     });





/**
 * 给每个a注册事件 获取值赋值给按钮
 */

 $(".dropdown-menu").on("click","a",function(){
     var txt = $(this).text();
     $('#text').text(txt);
 })


 /**
  * 实现图片预览
  */

 $("#fileupload").fileupload({
     dataType:"json",

     done:function(e , data){
        $("#imgBox img").attr("src",data.result.picAddr)
        console.log(data);
        
     }
 })


})