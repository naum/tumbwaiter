$(document).ready(function() {
  var dr = rollDice();
  $('#page_content').append('<p style="text-align:center;">' + dr + '</p>');
});

var rollDice = function() {
  return _.random(1, 6) + _.random(1, 6);
};
