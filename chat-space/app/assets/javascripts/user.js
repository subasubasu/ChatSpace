$(document).on('turbolinks:load', function(){
$(function() {

  var search_list = $('.user-search-result');
  var member_list = $('.chat-group-users');

  function appendUser(user) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add js-add-btn" data-user-id=${user.id} data-user-name=${user.name}>追加</a>
                </div>`
      search_list.append(html);
  }

  function appendErrToUser(user) {
    var html = `<div class="chat-group-user clearfix">${ user }</div>`
    search_list.append(html);
  }

  function addUser(id, name){
    var html = `<div class='chat-group-user clearfix js-chat-member' id='${id}'>
                  <input name='group[user_ids][]' type='hidden' value='chat-group-user-8'>
                  <p class='chat-group-user__name'>${name}</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                </div>`
    member_list.append(html);
  }

  function appendErrToUser(user) {
    var html = `<div class='chat-group-user clearfix'>${ user }</div>`
    search_list.append(html);
  }
  $('.chat-group-form__user').on('keyup', function() {
    var input = $('.chat-group-form__user').val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { user: input },
      dataType: 'json'
    })
    .done(function(users) {
       $(".user-search-result").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendErrToUser("一致するユーザーは見つかりませんでした");
      }
    })
    .fail(function() {
      alert('error');
    })
  });

  $(function(){
    $(document).on('click','.user-search-add', function(){
      $('.chat-group-users').val();
      var id = $(this).data('user-id');
      var name = $(this).data('user-name');
      addUser(id, name);
      $(this).parent().remove();
    });

    $(document).on('click', '.user-searh-remove', function(){
      $(this).parent().remove();
    });
  });
});
});
