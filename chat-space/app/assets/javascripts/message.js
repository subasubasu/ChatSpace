$(document).on('turbolinks:load', function(){
$(function(){
  function buildHTML(message){
    message.image ? image = `<img src="${message.image}">` : image = ""
    var html = `<div class="message" data-message-id="${message.id}">
                  <div class="message__upper-info">
                    <div class="message__upper-info__talker">${message.user_name}</div>
                    <div class="message__upper-info__date">${message.created_at}</div>
                  </div>
                  <div class="message__text">${message.content}
                  </div>
                  ${image}
                </div>`
    return html;
  }

  $(function() {
  function buildMESSAGE(data) {
    message.image ? image = `<img src="${message.image}">` : image = ""
    var html = `<div class="message" data-message-id="${message.id}">
                  <div class="message__upper-info">
                    <div class="message__upper-info__talker">${message.user_name}</div>
                    <div class="message__upper-info__date">${message.created_at}</div>
                  </div>
                  <div class="message__text">${message.content}
                  </div>
                  ${image}
                </div>`
    return html;
  }

  })
  $('.textbox').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('create')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      contentType: false,
      processData: false
    })
    .done(function(data){
       var html = buildHTML(data);
      $('.messages').append(html)
      $('.input-box__text').val('');
      $('.input-box__image').val('');
      $('.input-box__submit-button').attr('disabled', false);
      $('.messages').animate({scrollTop: 10000});
    })
     .fail(function(){
      alert('error');
      $('.input-box__text').reset();
      $('.input-box__image').reset();
      $('.input-box__submit-button').attr('disabled', false);
    })
  })
  $(function(){
    $(function() {
      if(location.href.match(/\/groups\/\d+\/messages/)){
        setInterval(update, 5000);
      }
    });
    function update() {
      if($('.message')[0]){
        var message_id = $('.message:last').data('message-id');
      } else {
        var message_id = 0
      }
      $.ajax({
        url: location.href,
        type: 'GET',
        data: { message: {id: message_id} },
        dataType: 'json'
      })
      .done(function(data){
        data.forEach(function(data){
          var html = buildHTML(data)
          $('.messages').append(html);
          $('.messages').animate({scrollTop: 10000});
        })
      })
      .fail(function(data){
        alert('error');
      })
    }
  });
});
});
