$(function(){


    var currentpage = 1;
    var size = 5;
    random();
    /**
     * 封装ajax请求去渲染页面
     */
    function random(){
        $.ajax({
            type:"get",
            url:"/category/queryTopCategoryPaging",
            data:{
                page:currentpage,
                pageSize:size
            },
            dataType:"json",
            success:function( info ){
                console.log(info);
                var htmlStr = template("firsttmp",info);
                $("tbody").html(htmlStr);

                /**
                 * 分页设置
                 */
                $("#paginator").bootstrapPaginator({
                    bootstrapMajorVersion:3,//默认是2，如果是bootstrap3版本，这个参数必填
                    currentPage:info.page,//当前页
                    totalPages:Math.ceil(info.total/info.size),//总页数
                    size:"small",//设置控件的大小，mini, small, normal,large
                    onPageClicked:function(event, originalEvent, type,page){
                      //为按钮绑定点击事件 page:当前点击的按钮值
                      console.log(page);
                      currentpage= page;
                      random();
                      
                    }
                  });


                
            }
        });
    }


    /**
     * 添加分类 功能
     */


     $(".addBtn1").click(function(){
         $("#addModal").modal("show");
     })


     /**
      * 添加一级分类的表单验证 
      */

      $("#form").bootstrapValidator({
        /**
         * 添加小图标
         */
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
          },
        
        /**
         * 验证规则
         */

         fields:{
            categoryName:{
                validators:{
                    notEmpty:{
                        message:"请输入一级分类名"
                    }
                }
            }
         }

      })
    

      /**
       * 
       * 添加一级分类功能
       */

      $("#form").on("success.form.bv",function(e){
          e.preventDefault();
          $.ajax({
              type:"post",
              url:"/category/addTopCategory",
              data:$("#form").serialize(),
              dataType:"json",
              success:function( info ){
                  $("#addModal").modal("hide");

                  currentpage = 1;
                  random();

                  $("#form").data("bootstrapValidator").resetForm(true);

              }
          })
      })
       



})