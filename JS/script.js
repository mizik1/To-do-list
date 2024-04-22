// Make page ready to manipulate before starting
$(document).ready(function () {
  // Access the id button (add)
  $("#button").click(function () {
    // Create variable toAdd to process data from input tag (name=ListItem), .val() is used for any value inputted
    let toAdd = $("input[name=ListItem]").val();
    let li = $("<li>") + toAdd + "</li>");

  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.text("X");

  li.append(crossOutButton);

  crossOutButton.on("click", function () {
    li.addClass("delete");
  });

  $('ul').append(li)
});
  // Remove any 'li' item by double clicking "dblclick"
  $(document).on("dblclick", "li", function () {
    $(this).toggleClass("strike");
  });
  // Clear input box after entering item. .focus binds event handler to the focus event
  $("input").focus(function () {
    $(this).val("");
 
  // Sorts the "ul" so that any "li" can be reordered
  $("ul").sortable();
});
