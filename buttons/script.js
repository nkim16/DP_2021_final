$('#btn1').click(function() {
  // reset modal if it isn't visible
  if (!($('.modal.in').length)) {
    $('.modal-dialog').css({
      top: 0,
      left: 0
    });
  }
  $('#myModal').modal({
    backdrop: false,
    show: true
  });

  $('.modal-dialog').draggable({
    handle: ".modal-header"
  });
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}