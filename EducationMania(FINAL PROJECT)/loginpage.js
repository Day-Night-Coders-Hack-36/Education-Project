

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDr3ZgYOAz6wPtPk1uWln-Qt5M8IbDQRnY",
    authDomain: "form-1492f.firebaseapp.com",
    projectId: "form-1492f",
    storageBucket: "form-1492f.appspot.com",
    messagingSenderId: "476373371073",
    appId: "1:476373371073:web:c1afebe569319209ba6c40"
  };
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
// Functions Coding
  const auth = firebase.auth();
	
	
	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}
	
	
	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		
		
		
	}
	
	
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}
	
	
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			window.location.replace("index.html");
			
			//Take user to a different or home page

			//is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
		}
		
		
		
	});
