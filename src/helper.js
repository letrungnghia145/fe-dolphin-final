import Swal from "sweetalert2";

function checkIsEmail(text) {
  var re =
    /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/; /*eslint no-useless-escape: 0*/
  return re.test(text);
}

function alertNotice(message, confirmButtonText, btnColor) {
  return Swal.fire({
    title: message,
    confirmButtonText: confirmButtonText ? confirmButtonText : "OK",
    icon: "warning",
    showCloseButton: true,
    buttonsStyling: false,
    customClass: {
      confirmButton: `btn btn-${!btnColor ? "primary" : btnColor}`,
    },
  });
}

function alertSuccess(message, confirmButtonText, btnColor) {
  return Swal.fire({
    text: message,
    title: "Success",
    icon: "success",
    buttonsStyling: false,
    confirmButtonText: confirmButtonText ? confirmButtonText : "OK",
    customClass: {
      confirmButton: `btn btn-${!btnColor ? "primary" : btnColor}`,
    },
    showCloseButton: true,
  });
}

function scrollTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

export const Utils = {
  checkIsEmail: (email) => checkIsEmail(email),
  alertNotice: (message, confirmButtonText, btnColor) =>
    alertNotice(message, confirmButtonText, btnColor),
  alertSuccess: (message, confirmButtonText, btnColor) =>
    alertSuccess(message, confirmButtonText, btnColor),
  scrollTop: () => scrollTop(),
};
