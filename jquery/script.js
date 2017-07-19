$(document).ready(function(){

// --------NAV ---------------------
$(".dropbtn").click(function(){  $("#myDropdown").slideToggle();});

// --------FAQ ---------------------//

    $("#plus-1").click(function(){
        $("#answer-box-1").slideDown(750);
        $("#minus-1").slideDown(0);
        $("#plus-1").slideUp(0);
    });

    $("#question-1").click(function(){
        $("#answer-box-1").slideDown(750);
        $("#minus-1").slideDown(0);
        $("#plus-1").slideUp(0);
    });

    $("#minus-1").click(function(){
        $("#answer-box-1").slideUp(750);
        $("#minus-1").slideUp(0);
        $("#plus-1").slideDown(0);
    });

    $("#plus-2").click(function(){
        $("#answer-box-2").slideDown(750);
        $("#minus-2").slideDown(0);
        $("#plus-2").slideUp(0);
    });

    $("#question-2").click(function(){
        $("#answer-box-2").slideDown(750);
        $("#minus-2").slideDown(0);
        $("#plus-2").slideUp(0);
    });

    $("#minus-2").click(function(){
        $("#answer-box-2").slideUp(750);
        $("#minus-2").slideUp(0);
        $("#plus-2").slideDown(0);
    });

    $("#plus-3").click(function(){
        $("#answer-box-3").slideDown(750);
        $("#minus-3").slideDown(0);
        $("#plus-3").slideUp(0);
    });

    $("#question-3").click(function(){
        $("#answer-box-3").slideDown(750);
        $("#minus-3").slideDown(0);
        $("#plus-3").slideUp(0);
    });

    $("#minus-3").click(function(){
        $("#answer-box-3").slideUp(750);
        $("#minus-3").slideUp(0);
        $("#plus-3").slideDown(0);
    });

    $("#plus-4").click(function(){
        $("#answer-box-4").slideDown(750);
        $("#minus-4").slideDown(0);
        $("#plus-4").slideUp(0);
    });

    $("#question-4").click(function(){
        $("#answer-box-4").slideDown(750);
        $("#minus-4").slideDown(0);
        $("#plus-4").slideUp(0);
    });


    $("#minus-4").click(function(){
        $("#answer-box-4").slideUp(750);
        $("#minus-4").slideUp(0);
        $("#plus-4").slideDown(0);
    });

    $("#plus-5").click(function(){
        $("#answer-box-5").slideDown(750);
        $("#minus-5").slideDown(0);
        $("#plus-5").slideUp(0);
    });

    $("#question-5").click(function(){
        $("#answer-box-5").slideDown(750);
        $("#minus-5").slideDown(0);
        $("#plus-5").slideUp(0);
    });

    $("#minus-5").click(function(){
        $("#answer-box-5").slideUp(750);
        $("#minus-5").slideUp(0);
        $("#plus-5").slideDown(0);
    });

    $("#plus-6").click(function(){
        $("#answer-box-6").slideDown(750);
        $("#minus-6").slideDown(0);
        $("#plus-6").slideUp(0);
    });

    $("#question-6").click(function(){
        $("#answer-box-6").slideDown(750);
        $("#minus-6").slideDown(0);
        $("#plus-6").slideUp(0);
    });

    $("#minus-6").click(function(){
        $("#answer-box-6").slideUp(750);
        $("#minus-6").slideUp(0);
        $("#plus-6").slideDown(0);
    });

    $("#plus-7").click(function(){
        $("#answer-box-7").slideDown(750);
        $("#minus-7").slideDown(0);
        $("#plus-7").slideUp(0);
    });

    $("#question-7").click(function(){
        $("#answer-box-7").slideDown(750);
        $("#minus-7").slideDown(0);
        $("#plus-7").slideUp(0);
    });

    $("#minus-7").click(function(){
        $("#answer-box-7").slideUp(750);
        $("#minus-7").slideUp(0);
        $("#plus-7").slideDown(0);
    });

// --------FAQ ---------------------//

  $("#next-1").click(function(){
    $("#get-covered").css("color", "#ffc81c").css("background-color", "white");
    $("#when-to-enroll").css("color", "white").css("background-color", "#ffc81c");
    $("#make-change").css("color", "white").css("background-color", "#ffc81c");
      $("#slide-1").hide();
      $("#next-1").hide();
      $("#prev-1").hide();
      $("#slide-2").fadeIn(750);
      $("#next-2").show();
      $("#prev-2").show();
  });

  $("#next-2").click(function(){
      $("#make-change").css("color", "#ffc81c").css("background-color", "white");
      $("#when-to-enroll").css("color", "white").css("background-color", "#ffc81c");
      $("#get-covered").css("color", "white").css("background-color", "#ffc81c");
      $("#slide-2").hide();
      $("#next-2").hide();
      $("#prev-2").hide();
      $("#slide-3").fadeIn(750);
      $("#next-3").show();
      $("#prev-3").show();
  });

  $("#next-3").click(function(){
    $("#when-to-enroll").css("color", "#ffc81c").css("background-color", "white");
    $("#get-covered").css("color", "white").css("background-color", "#ffc81c");
    $("#make-change").css("color", "white").css("background-color", "#ffc81c");
      $("#slide-3").hide();
      $("#next-3").hide();
      $("#prev-3").hide();
      $("#slide-1").fadeIn(750);
      $("#next-1").show();
      $("#prev-1").show();
  });

  $("#prev-1").click(function(){
    $("#make-change").css("color", "#ffc81c").css("background-color", "white");
    $("#when-to-enroll").css("color", "white").css("background-color", "#ffc81c");
    $("#get-covered").css("color", "white").css("background-color", "#ffc81c");
      $("#slide-1").hide();
      $("#next-1").hide();
      $("#prev-1").hide();
      $("#slide-3").fadeIn(750);
      $("#next-3").show();
      $("#prev-3").show();
  });

  $("#prev-2").click(function(){
    $("#when-to-enroll").css("color", "#ffc81c").css("background-color", "white");
    $("#get-covered").css("color", "white").css("background-color", "#ffc81c");
    $("#make-change").css("color", "white").css("background-color", "#ffc81c");
      $("#slide-2").hide();
      $("#next-2").hide();
      $("#prev-2").hide();
      $("#slide-1").fadeIn(750);
      $("#next-1").show();
      $("#prev-1").show();
  });

  $("#prev-3").click(function(){
    $("#get-covered").css("color", "#ffc81c").css("background-color", "white");
    $("#when-to-enroll").css("color", "white").css("background-color", "#ffc81c");
    $("#make-change").css("color", "white").css("background-color", "#ffc81c");
      $("#slide-3").hide();
      $("#next-3").hide();
      $("#prev-3").hide();
      $("#slide-2").fadeIn(750);
      $("#next-2").show();
      $("#prev-2").show();
  });

// --------FAQ ---------------------//

$("#when-to-enroll").click(function(){
  $("#when-to-enroll").css("color", "#ffc81c").css("background-color", "white");
  $("#get-covered").css("color", "white").css("background-color", "#ffc81c");
  $("#make-change").css("color", "white").css("background-color", "#ffc81c");
  $("#slide-1").fadeIn(750);
  $("#next-1").show();
  $("#prev-1").show();
  $("#slide-2").hide();
  $("#next-2").hide();
  $("#prev-2").hide();
  $("#slide-3").hide();
  $("#next-3").hide();
  $("#prev-3").hide();
});

  $("#get-covered").click(function(){
    $("#get-covered").css("color", "#ffc81c").css("background-color", "white");
    $("#when-to-enroll").css("color", "white").css("background-color", "#ffc81c");
    $("#make-change").css("color", "white").css("background-color", "#ffc81c");
    $("#slide-1").hide();
    $("#next-1").hide();
    $("#prev-1").hide();
    $("#slide-2").fadeIn(750);
    $("#next-2").show();
    $("#prev-2").show();
    $("#slide-3").hide();
    $("#next-3").hide();
    $("#prev-3").hide();
  });

  $("#make-change").click(function(){
    $("#make-change").css("color", "#ffc81c").css("background-color", "white");
    $("#when-to-enroll").css("color", "white").css("background-color", "#ffc81c");
    $("#get-covered").css("color", "white").css("background-color", "#ffc81c");
    $("#slide-1").hide();
    $("#next-1").hide();
    $("#prev-1").hide();
    $("#slide-2").hide();
    $("#next-2").hide();
    $("#prev-2").hide();
    $("#slide-3").fadeIn(750);
    $("#next-3").show();
    $("#prev-3").show();
  });































});
