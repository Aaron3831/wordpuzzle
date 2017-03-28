$(document).ready(function() {
  $("form#puzzle").submit(function(event) {

    var sentence = $("#input").val();
    // console.log(sentence);
    var index = 0;
    var strLength = sentence.length;
    // console.log(strLength);
    for (index; index < strLength; index ++) {
      sentence = sentence.replace ("e", "-");
      // console.log(sentence);
      sentence = sentence.replace ("o", "-")
      sentence = sentence.replace ("a", "-")
      sentence = sentence.replace ("i", "-")
      sentence = sentence.replace ("u", "-")
      sentence = sentence.replace ("y", "-")
    }

    $("#puzzled").text(sentence);
    console.log(puzzled);
    $("#puzzled").show();
      event.preventDefault();






      // $("#replies").show();
      // $("input:checkbox[name=work-transportation]:checked").each(function() {
      //
      //   var transportWork = $(this).val();
      //   $("#replies").append(transportWork + "<br>");
      //
      // });
      // $("#funReplies").show();
      // $("input:checkbox[name=fun-transportation]:checked").each(function() {
      //   var transportFun = $(this).val();
      //   $("#funReplies").append(transportFun + "<br>");
      // });
      // $('#transport-survey').hide();
  });
});
