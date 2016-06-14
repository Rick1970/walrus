$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".clickable2").click(function() {
    $("#text-showing").toggle();
    $("#text-hidden").toggle();
  });
});

$(document).ready(function() {
  $("button#green").click(function() {
    $("body").addClass("green-background");
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").addClass("yellow-background");
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").addClass("red-background");
    $("body").removeClass();
    $("body").addClass("red-background");
   });

   $("button#black").click(function() {
     $("body").addClass("black-background");
     $("body").removeClass();
     $("body").addClass("black-background");
     $("body").addClass("white-text");
    });

    $("button#white").click(function() {
      $("body").addClass("white-background");
      $("body").removeClass();
      $("body").addClass("white-background");
      $("body").addClass("black-text");
     });
     $(document).ready(function() {
       $(".clickable3").click(function() {
       $("#itext-normal").toggle();
      $("#itext-highlited").toggle();
      });
    });
  });
