$(window).on('load', function() {
  $('#website-title').focus();
  toggleClearDisable();
})

$(window).on('click', function() {
  toggleClearDisable();
})

$(window).on('keyup', function(event) {
  if ($('#website-title').val() !== '' && $('#website-url').val() !== '' && event.keyCode === 13) {
    validateURL();
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

$('.enter-btn').on('click', function(event) {
  event.preventDefault();
  validateURL();
  toggleEnterDisable();
})

$('.bookmark-container').on('click', '.read-btn', function() {
  $(this).parents('.bookmark').toggleClass('read');
  countBookmarks();
})

$('.clear-btn').on('click', function() {
    $('.bookmark.read').remove();
    countBookmarks();
    displayPlaceholder();
})

$('.bookmark-container').on('click', '.delete-btn', function() {
  $(this).parents('.bookmark').remove();
  $('#website-title').focus();
  countBookmarks();
  displayPlaceholder();
})

function displayPlaceholder() {
  if ($('.bookmark').length === 0) {
    $('.filler-container').show();
  } else {
    $('.filler-container').hide();
  }
}

function amendURL() {
  var input = $('#website-url');
  if (input.val().substring(0,4) == 'www.') {
    input.val('http://www.' + input.val().substring(4));
  }
}

function validateURL() {
  var input = $('#website-url').val();
  if (/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(input)) {
   prependBookmark();
   countBookmarks();
   clearInput();
  } else {
  alert("invalid URL");
  $('#website-url').val('');
  $('#website-url').focus();
  }
  displayPlaceholder();
}

function prependBookmark() {
  var $bookmarkLibrary = $('.bookmark-container');
  var $title = $('#website-title').val();
  var $url = $('#website-url').val();
  var $newBookmark = `<article class="bookmark">
    <div class="content">
      <h2 class="title">${$title}</h2>
      <a class="link" href="${$url}">${$url}</a>
      <div class="btn-container">
        <button class="read-btn" type="button" name="read">Read</button>
        <button class="delete-btn" type="button" name="delete">Delete</button>
      </div>
    </div>
  </article>`;
  $bookmarkLibrary.prepend($newBookmark);
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

function toggleClearDisable() {
  if ($('.bookmark.read').length === 0) {
    $('.clear-btn').prop('disabled', true);
  } else {
    $('.clear-btn').prop('disabled', false);
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
