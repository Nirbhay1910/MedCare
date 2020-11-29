/* eslint-disable */
const login = async (email, password) => {
  try {
    console.log(email, password);
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:5000/api/v1/users/login",
      data: {
        email: email,
        password: password,
      },
    });
    console.log(res);
    if (res.data.status === "success") {
      alert("Logged in successfully");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (err) {
    alert(err.response.data.message);
  }
};

const logout = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "http://127.0.0.1:5000/api/v1/users/logout",
    });
    if ((res.data.status = "success")) location.assign("/");
  } catch (err) {
    alert("Error logging out! Try Again");
  }
};

const loginbtn = document.getElementById("loginSubmit");
const logoutbtn = document.getElementById("logoutbtn");

if (loginbtn) {
  loginbtn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    console.log(email, password);
    login(email, password);
  });
}

if (logoutbtn) {
  logoutbtn.addEventListener("click", logout);
}
