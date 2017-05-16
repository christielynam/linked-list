$(window).on('load', function() {
  $('#website-title').focus();
})




var $enterBtn = $('.enter-btn');
var $deleteBtn = $('.delete-btn');
var totalCounter = 0;
var readCounter = 0;
var unreadCounter = 0;


function countBookmarks(){
  totalCounter = readCounter + unreadCounter;
  $('.total-count').text(totalCounter);
  $('.read-count').text(readCounter);
  $('.unread-count').text(unreadCounter);
}


$enterBtn.on('click', function() {
  prependBookmark();
  clearInput();
  toggleEnterDisable();
  unreadCounter++
  countBookmarks();
  })

//Constructor function in prepend() if needed
// function Bookmark(title, url) {
//   this.title = title;
//   this.url = url;
// }
// var bookmark = new Bookmark($title, $url);


function prependBookmark() {

  var $bookmarkLibrary = $('.bookmark-container');
  var $title = $('#website-title').val();
  var $url = $('#website-url').val();

  $bookmarkLibrary.prepend(
    `<article class="bookmark read">
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

// $readBtn.on('click', function() {
//   var $readBtn = $('.read-btn');
//
// })

function toggleEnterDisable() {
  var $title = $('#website-title').val();
  var $url = $('#website-url').val();

  if (($title.length === 0) || ($url.length === 0)) {
    $enterBtn.prop('disabled', true);
  } else {
    $enterBtn.prop('disabled', false);
  }
}


$('#website-title').on('input', function() {
  toggleEnterDisable();
})
$('#website-url').on('input', function() {
  toggleEnterDisable();
})

function clearInput() {
  $('#website-title').val('');
  $('#website-url').val('');
  $('#website-title').focus();
}

$('.bookmark-container').on('click', '.delete-btn', function() {
  $(this).parents('.bookmark').remove();
  $('#website-title').focus();

  if(readCounter > 0) {
    readCounter = readCounter - 1;
  }
  unreadCounter = unreadCounter - 1;
  countBookmarks();
});
