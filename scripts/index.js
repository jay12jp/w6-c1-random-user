$(document).ready(function() {

  $.ajax({
    url: 'https://randomuser.me/api/?results=20&nat=gb,us',
    success: function(data) {
      var users = data.results;
      displayUsers(users);
    }
  });

  // displays a list of users
  function displayUsers(users) {
    users.forEach(function(user) {
      var $container = $('.container');
      var $tile = $('<div class="tile"></div>');
      var name = user.name.first + ' ' + user.name.last;
      var $name = $('<p></p>');
      $name.text(name);

      var location = user.location.city + ', ' + user.location.state;
      var $location = $('<p></p>');
      $location.text(location);

      var $img = $('<img>');
      $img.attr('src', user.picture.large);

      $tile.append($img, $name, $location);
      $container.append($tile);
    });
  }
  // on form submit
  $('search-form').on('submit', function(event) {
    event.preventDefault();

    var $checked = $('#search-form input:checked');
    var values = [];
    $checked.each(function() {
      var $elem = $(this);
      var value = $elem.val();
      values.push(value);
    });
    var param = values.join();
    console.log(param);
  });

});
