var input = $('#website-url');


$(window).on('load', function() {
  $('#website-title').focus();
})

$(window).on('keyup', function(event) {
  if ($('#website-title').val() !== '' && $('#website-url').val() !== '' && event.keyCode === 13) {
    validateURL();
    clearInput();
    toggleEnterDisable();
  }
})

$('#website-title').on('input', function() {
  toggleEnterDisable();
})

$('#website-url').on('input', function() {
  toggleEnterDisable();
  amendURL();
})

$('.enter-btn').on('click', function() {
  validateURL();
  clearInput();
  toggleEnterDisable();
})

$('.bookmark-container').on('click', '.read-btn', function() {
  $(this).parents('.bookmark').toggleClass('read');
  countBookmarks();
})

$('.clear-btn').on('click', function() {
  if $('article').hasClass('read') {
    $(this).siblings('.bookmark').remove();
  }
})

$('.bookmark-container').on('click', '.delete-btn', function() {
  $(this).parents('.bookmark').remove();
  $('#website-title').focus();
  countBookmarks();
});

function amendURL() {
    if (input.val().substring(0,4)=='www.') {
      input.val('http://www.'+input.val().substring(4));
    }
}

function validateURL() {
  var input=$('#website-url').val();

  if (/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(input)) {
   prependBookmark();
   countBookmarks();
  } else {
  alert("invalid URL");
  }
}

function prependBookmark() {
  var $bookmarkLibrary = $('.bookmark-container');
  var $title = $('#website-title').val();
  var $url = $('#website-url').val();
  $bookmarkLibrary.prepend(
    `<article class="bookmark">
      <div class="content">
        <h2 class="title">${$title}</h2>
        <a class="link" href="${$url}">${$url}</a>
        <div class="btn-container">
          <button class="read-btn" type="button" name="read">Read</button>
          <button class="delete-btn" type="button" name="delete">Delete</button>
        </div>
      </div>
    </article>`
  )
}

function toggleEnterDisable() {
  var $title = $('#website-title').val();
  var $url = $('#website-url').val();

  if (($title.length === 0) || ($url.length === 0)) {
    $('.enter-btn').prop('disabled', true);
  } else {
    $('.enter-btn').prop('disabled', false);
  }
}

function clearInput() {
  $('#website-title').val('');
  $('#website-url').val('');
  $('#website-title').focus();
}

function countArticles(){
  return $('article').length;
}

function totalRead() {
  return $('.read').length;
}

function totalUnread() {
  return $('article').length - $('.read').length;
}

function countBookmarks(){
  $('.total-count').text(countArticles());
  $('.read-count').text(totalRead());
  $('.unread-count').text(totalUnread());
}
