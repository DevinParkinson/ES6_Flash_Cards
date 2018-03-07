$(document).ready(function(){
  $("#output").hide(function(){
  })
  $("#flips").click(function(){
    $("#output").toggle();
  })
})

$(document).ready(function(){
  $("#out").hide(function(){
  })
  $("#flipper").click(function(){
    $("#out").toggle();
  })
})

$(document).ready(function(){
  $("#second_card").hide(function(){
  })
  $("#new").click(function(){
    $("#second_card").toggle();
  })
})


// 
// $(document).ready(function() {
// $("div#form1").append(
// $("<h3/>").text("Flash Card"), $("<p/>").text("Add your own card"), $("<form/>", {
// action: '#',
// method: '#'
// }).append(
// $("<input/>", {
// type: 'text',
// id: 'vname',
// name: 'name',
// placeholder: 'Question'
// }),
//  $("<textarea/>", {
// rows: '5px',
// cols: '27px',
// type: 'text',
// id: 'vmsg',
// name: 'msg',
// placeholder: 'Answer'
// }), $("<br/>")))
// });
