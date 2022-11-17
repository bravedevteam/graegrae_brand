$(function(){
  $(".moGnb").click(function(){
    $("#header").addClass("is--open");
    $("#dim").show();
  });

  $("#gnb .close").click(function(){
    $("#header").removeClass("is--open");
    $("#dim").hide();
  });
});