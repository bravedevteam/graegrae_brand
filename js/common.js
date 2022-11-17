$(function(){
  $(".moGnb").click(function(){
    $("#header").addClass("is--open");
    $("#dim").show();
  });

  $("#gnb .close").click(function(){
    gnbClose();
  });

  $("#dim").click(function(){
    gnbClose();
  });

  function gnbClose(){
    $("#header").removeClass("is--open");
    $("#dim").hide();
  }
});