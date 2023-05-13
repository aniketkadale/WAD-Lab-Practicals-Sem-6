function login() {
    let email, password;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    let user = new Array();
    user = JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : [];

      if (
        user.some((v) => {
          return v.email == email && v.password == password;
        })
      ) {

        alert("Login Successfull");

        let currentUser = user.filter((v) => {
          return v.email == email && v.password == password;
        })[0];

        localStorage.setItem("username", currentUser.username);
        localStorage.setItem("email", currentUser.email);

       window.location.href = "data.html";

      } else {

        alert("Login Fail!!");
      }
}