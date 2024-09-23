<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDCU-UeIrUgVl82dG68uEjRl8QzvVmsj2c",
    authDomain: "denews-52927.firebaseapp.com",
    projectId: "denews-52927",
    storageBucket: "denews-52927.appspot.com",
    messagingSenderId: "329824929358",
    appId: "1:329824929358:web:15ede4d71ea8a5ca6be51f",
    measurementId: "G-D2V1YKLP6F"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  // Function to save user data in Firestore
  const saveUserData = async (uid) => {
    const username = Username.value;
    try {
      await setDoc(doc(firestore, "users", uid), {
        username: username,
        email: Email.value,
      });
      console.log("User data saved successfully");
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  // Handle the form submission
  const RegisterUser = async (evt) => {
    evt.preventDefault();

    const email = Email.value;
    const password = Password.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Save additional user data to Firestore
      await saveUserData(user.uid);
      console.log(user);

      // Redirect to plans.html
      window.location.href = "login.html";
    } catch (error) {
      alert(error.message);
      console.log(error.code, error.message);
    }
  };

  // Ensure DOM is loaded before accessing elements
  document.addEventListener("DOMContentLoaded", () => {
    // Form and field references
    const form = document.getElementById("register-form");
    const Username = document.getElementById("username");
    const Email = document.getElementById("email");
    const Password = document.getElementById("password");

    // Add form submit event listener
    form.addEventListener("submit", RegisterUser);
  });
</script>
