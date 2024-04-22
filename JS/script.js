// Make page ready to manipulate before starting
$(document).ready(function () {
  // Access the id button (add)
  $("#button").click(function () {
    // Create variable toAdd to process data from input tag (name=ListItem), .val() is used for any value inputted
    let toAdd = $("input[name=ListItem]").val();
    // Appends "li" with "toAdd" to "ul"
    $("ul").append("<li>" + toAdd + "</li>");
  });
  // Remove any 'li' item by double clicking "dblclick"
  $(document).on("dblclick", "li", function () {
    $(this).toggleClass("strike");
  });
  // Clear input box after entering item. .focus binds event handler to the focus event
  $("input").focus(function () {
    $(this).val("");
    //
  });
  // Sorts the "ul" so that any "li" can be reordered
  $("ul").sortable();

  //   Create X for users to delete "li" item
  $(document).createTextNode("X"),
    function () {
      $(this).deleteButton.append(document.createTextNode("X"));
    };
});
