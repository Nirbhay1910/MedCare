/* eslint-disable */

const book = async (doctor) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:5000/api/v1/appointments/addAppointment",
      data: {
        doctor,
      },
    });
    if (res.data.status === "success") {
      alert(
        "Your appointment is scheduled. Hospital staff will contact you within an hour for details!"
      );
    }
  } catch (err) {
    alert(err.response.data.message);
  }
};

const delAppointment = async (appId) => {
  try {
    const res = await axios({
      method: "DELETE",
      url: "http://127.0.0.1:5000/api/v1/appointments/deleteAppointment",
      data: {
        id: appId,
      },
    });
    if (res.data.status === "success") {
      alert(
        "Your appointment is deleted. Hope you are in a better health now!"
      );
      location.reload();
    }
  } catch (err) {
    alert(err.response.data.message);
  }
};

const doctorFilter = document.getElementById("searchDoc");
if (doctorFilter) {
  doctorFilter.addEventListener("click", (e) => {
    e.preventDefault();
    const data = document.getElementById("searchFilter").value;
    if (data)
      location.replace(`http://127.0.0.1:5000/doctors?specialisation=${data}`);
    else location.replace("http://127.0.0.1:5000/doctors");
  });
}
const bookAppointment = document.querySelectorAll(".bookAppointment");
//console.log(bookAppointment);
if (bookAppointment) {
  bookAppointment.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      //console.log(bookAppointment[j]);
      const doctor = element.dataset.docid;
      //console.log(doctor);
      book(doctor);
    });
  });
}
const deleteAppointment = document.querySelectorAll(".deleteAppointment");
//console.log(bookAppointment);
if (deleteAppointment) {
  deleteAppointment.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      //console.log(bookAppointment[j]);
      const appId = element.dataset.docid;
      //console.log(doctor);
      delAppointment(appId);
    });
  });
}
