var $enterBtn = $('.enter-btn');

var $deleteBtn = $('.delete-btn');
var $bookmarkLibrary = $('.bookmark-container');



$enterBtn.on('click', function() {
  prependBookmark();
  console.log('button working')
})

//Constructor function in prepend() if needed
// function Bookmark(title, url) {
//   this.title = title;
//   this.url = url;
// }
// var bookmark = new Bookmark($title, $url);


function prependBookmark() {

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

$readBtn.on('click', function() {
  var $readBtn = $('.read-btn');

})
