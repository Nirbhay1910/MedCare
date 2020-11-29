/* eslint-disable */
const updateSettings = async (data, type) => {
  try {
    const url =
      type === "password"
        ? "http://127.0.0.1:5000/api/v1/users/updateMyPassword"
        : "http://127.0.0.1:5000/api/v1/users/updateMe";

    const res = await axios({
      method: "PATCH",
      url,
      data,
    });

    if (res.data.status === "success") {
      alert(`${type.toUpperCase()} updated successfully!`);
      location.reload();
    }
  } catch (err) {
    alert(err.response.data.message);
  }
};

const updateSettingsBtn = document.getElementById("updateSettings");
const updatePasswordBtn = document.getElementById("updatePassword");

if (updateSettingsBtn) {
  updateSettingsBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", document.getElementById("nameChange").value);
    form.append("email", document.getElementById("emailChange").value);
    form.append("photo", document.getElementById("uploadUserPhoto").files[0]);
    await updateSettings(form, "data");
  });
}

if (updatePasswordBtn) {
  updatePasswordBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const passwordCurrent = document.getElementById("currentPassword").value;
    const password = document.getElementById("newPassword").value;
    const passwordConfirm = document.getElementById("confirmPassword").value;
    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      "password"
    );
  });
}
