var $title = $('#website-title').val();
var $url = $('#website-url').val();
var $enterBtn = $('.enter-btn');
var $readBtn = $('.read-btn');
var $deleteBtn = $('.delete-btn');
var $bookmarkLibrary = $('.bookmark-container');



//Constructor function in prepend()
function Bookmark(title, url) {
  this.title = title;
  this.url = url;
}

var bookmark = new Bookmark($title, $url);
