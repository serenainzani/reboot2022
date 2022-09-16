// const appointments = [
//   {
//     id: 0,
//     date: "10 / 06 / 2022",
//     time: "11:00am",
//   },
//   {
//     id: 1,
//     date: "11 / 06 / 2022",
//     time: "1:00pm",
//   },
// ];

const submit = document.getElementById("submit");
const appointmentList = document.querySelector(".list-group");
const translator_choice = document.getElementById("translator?");
const languages = document.querySelector(".language");
const available_appointments = document.querySelector(
  ".available-appointments"
);
const personal_details = document.querySelector(".details");
const confirm_appointment = document.getElementById("confirm");
const book_appointment = document.getElementById("book");
const success_message = document.querySelector(".alert-success");

const main = () => {
  submit.addEventListener("click", () => {
    appointmentList.style.display = "block";
    // appointments.forEach((appointment) => {
    //   const appointmentListItem = document.createElement("button");
    //   appointmentListItem.innerHTML = appointment.date;
    //   appointmentList.appendChild(appointmentListItem);
    // });
  });

  translator_choice.addEventListener("click", () => {
    translator_choice_val =
      translator_choice.options[translator_choice.selectedIndex].value;
    if (translator_choice_val === "Yes") {
      languages.style.display = "block";
    }
  });

  confirm_appointment.addEventListener("click", () => {
    personal_details.style.display = "block";
  });

  available_appointments.addEventListener("click", () => {
    const chosen_appointment = document.getElementById(event.srcElement.id);
    chosen_appointment.style.backgroundColor = "rgb(13 110 253 / 66%)";
    confirm_appointment.style.display = "block";
  });

  book_appointment.addEventListener("click", () => {
    success_message.style.display = "block";
  });
};

main();
