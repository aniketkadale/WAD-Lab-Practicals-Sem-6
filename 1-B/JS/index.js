function saveData() {
  let username, email, password;
  username = document.getElementById("username").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  let userRecords = new Array();

  userRecords = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  if (
    userRecords.some((v) => {
      return (v.email = email);
      alert("Data saved!");
    })
  ) {
    alert("Duplicate data!");
  } else {
    userRecords.push({
      username: username,
      email: email,
      password: password,
    });


    localStorage.setItem("users", JSON.stringify(userRecords))
  }
}

