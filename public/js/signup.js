/* eslint-disable */
const signup = async (email, name, password, passwordConfirm) => {
  try {
    console.log(email, password);
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:5000/api/v1/users/signup",
      data: {
        email: email,
        name: name,
        password: password,
        passwordConfirm: passwordConfirm,
      },
    });
    console.log(res);
    if (res.data.status === "success") {
      alert("Signed in successfully");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (err) {
    alert(err.response.data.message);
  }
};

const signupBtn = document.getElementById("signupBtn");

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const passwordConfirm = document.getElementById("passwordConfirm").value;
  signup(email, name, password, passwordConfirm);
});
