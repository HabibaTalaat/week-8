var getUserName = prompt("Hello! where are you?");

console. log(getUserName);

document.getElementById("username").innerText = getUserName;

// tooltip

/* tooltip link */

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })