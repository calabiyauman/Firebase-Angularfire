function loginForm(login){
    'use strict';
function authHandler(error, authData) {
  if (error) {
      
    console.log("Login Failed!", error);
      $('#error').append("<p>"+ error + "</p>");
      setTimeout(6000);
      self.location.href = "index.html";

  } else {
    console.log("Authenticated successfully with payload:", authData);
     self.location.href = "./dashboard/dashboard.html"; 
  }
}
var ref = new Firebase("https://grabbr.firebaseio.com");
ref.authWithPassword({
  email    : document.forms.login.email.value,
  password : document.forms.login.pass.value
}, authHandler);
};