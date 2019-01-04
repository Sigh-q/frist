$(document).ajaxStart(function(){
    // console.log(1);
    NProgress.start();
    
})


$(document).ajaxStop(function(){
    // console.log(2);
    setInterval(function(){
        NProgress.done();

    },1000);
    
})