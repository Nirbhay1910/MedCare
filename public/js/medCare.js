/* eslint-disable*/
const makeMed = async (name, active) => {
  await axios({
    method: "POST",
    url: "http://127.0.0.1:5000/api/v1/medicines/addMed",
    data: {
      name: name,
      active: active,
    },
  });
};
const medChanges = async () => {
  const medsAct = document.querySelectorAll("#incomplete-tasks li label");
  const medsNotAct = document.querySelectorAll("#completed-tasks li label");
  await axios({
    method: "DELETE",
    url: "http://127.0.0.1:5000/api/v1/medicines/deleteAllMed",
  });
  let i = 0;
  for (; i < medsAct.length; ) {
    const name = medsAct[i].innerHTML;
    console.log(name);
    makeMed(name, true);
    i = i + 1;
  }
  let j = 0;
  for (; j < medsNotAct.length; ) {
    const name2 = medsNotAct[j].innerHTML;
    console.log(name2);
    makeMed(name2, false);
    j = j + 1;
  }
};

const SaveChanges = document.getElementById("saveMed");
SaveChanges.addEventListener("click", medChanges);
