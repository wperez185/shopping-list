$(document).ready(function() {
  $("#js-shopping-list-form").submit(function(event) {
    event.preventDefault();
    var shoppingList = $("#shopping-list-entry").val();
    console.log(shoppingList);
    // $("ul").append(shoppingList).addClass(".shopping-list");
    var html = $('<li>' + shoppingList +
      '<span class="shopping-item js-shopping-item"></span>' +
      '<div class="shopping-item-controls">' +
      '<button class="js-shopping-item-toggle">' +
      '<span class="button-label">check</span>' +
      '</button>' +
      '<button class="js-shopping-item-delete">' +
      '<span class="button-label">delete</span>' +
      '</button>' +
      '</div>' +
      '</li>');
        // $("input").val("");
        $("#js-shopping-list-form")[0].reset();
    $("ul").append($(html));
    console.log($(html));
  });


  $(".shopping-item-toggle").click(function(event) {
    //  $(event.currentTarget).addClass("shopping-item__checked");
    // console.log($(event.currentTarget).parent().parent().find('span'));
    if ($(event.currentTarget).parent().parent().find('.shopping-item').hasClass("shopping-item__checked")) {
      $(event.currentTarget).parent().parent().find('.shopping-item').removeClass("shopping-item__checked");
    } else {
      $(event.currentTarget).parent().parent().find('.shopping-item').addClass("shopping-item__checked");
    }

  });


  $(".shopping-item-delete").click(function(event) {
    $(event.currentTarget).closest('li').remove();
    console.log($(event.currentTarget));
  });
});
