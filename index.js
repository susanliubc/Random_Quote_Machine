const project_name = 'Random Quote Machine';

$(document).ready(function() {
  let content;
  let author;
  getQuotes();
  function getQuotes () {
    $.getJSON('https://sslapi.hitokoto.cn/?encode=json',function(json) {
      content = json['hitokoto'];
      author = json["from"];
      $('#text-content').html(content);
      $("#author").html("-"+author);
      updateTweet(json);
    });
  }
  
  const colors=['#f7bd83','#52918a','#31d8ab','#384ec9','#4f7b91','#6bbddb','#a0d880',  '#c9a1ca'];
  let i=0; 
  $('#new-quote').click(function() {
    $('body').css('background-color', colors[i%8]);
    $('.btn').css('background-color', colors[i%8]);
    $('#text-content').css('color', colors[i%8]);
    $('.fa-quote-left').css('color', colors[i%8]);
    $('.fa-quote-right').css('color', colors[i%8]);
    $('#author').css('color', colors[i%8]);
    i++;
    getQuotes();
    updateTweet(json);
  });   
    
  function updateTweet(json) {
    $('#tweet-quote').attr('href','https://twitter.com/intent/tweet?text='+ '"'+content +'"'+'%0a--- ' + author); 
  } 
});
