//Check to see if form is valid
function submitForm(signup) {
    'use strict';
  var user = document.forms.signup.email.value;
    console.log(user);
var split = user.split("@");
var username = split[0];
    console.log(split[0]);
var ref = new Firebase("https://<YOUR FIREBASE>.firebaseio.com/" );
ref.createUser({
  email    : document.forms.signup.email.value,
  password : document.forms.signup.pass.value
}, function(error, userData) {
  if (error) {
    console.log("Error creating user:", error);
  } else {
      
      var isNewUser = true;
      
    ref.onAuth(function(authData) {
         if(authData && isNewUser) {
             ref.child("users").child(authData.uid).set({
                 provider: authData.provider,
                 name: getName(authData)
             });
             
         }  
      });
      var usersRef = ref.child("users");
             usersRef.set(auth.uid);
      
    console.log("Successfully created user account with uid:", userData.uid);
      
      
     self.location.href = "../index.html";
      
  }
});
    
}