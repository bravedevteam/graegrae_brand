$(function(){
  $(window).scroll(function(){
    var _pos = $(window).scrollTop();

    if(0 < _pos){
      $("#header").addClass("is--fixed");
    }else{
      $("#header").removeClass("is--fixed");
    }
  });
});