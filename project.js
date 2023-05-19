// copy nội dung trong button
let copyText = (text) => {
  navigator.clipboard.writeText(text).then(
    () => alert("Copied " + text + " successfully."),
    () => alert("Copy failed. Please change browser.")
  );
};

//Chuyển tới fb

let go_fb = () => {
  window.location.assign("https://www.facebook.com/le.nobel.5");
};

//Nhập tên của người dùng

let text = document.cookie;
let your_name = "";
const d = new Date();
d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000); //cài ngày hết hạn cookie
if (text == null || text == "") {
  // check cookie có hay chưa - chưa thì nhập tên và lưu vào cookie
  your_name = prompt("What's your name?", "");
  if (your_name == null || your_name == "") {
    your_name = "Empty";
  } else {
    document.cookie = "your_name=" + your_name + ";expires=" + d.toUTCString();
  }
} else {
  let arr = text.split(";");
  let confirm_name;
  let new_arr = arr[arr.length - 1].split("="); // tránh TH không ghi đè
  your_name = new_arr[1].toUpperCase();
  confirm_name = confirm("Are you " + your_name + "?"); // Check xem đúng tên hay chưa nếu chưa nhập lại tên và lưu vào cookie
  if (confirm_name == false) {
    your_name = prompt("What's your name?", "");
    if (your_name == null || your_name == "") {
      your_name = "Empty";
    } else {
      document.cookie =
        "your_name=" + your_name + ";expires=" + d.toUTCString();
    }
  }
}
alert("Hello " + your_name.toUpperCase());
document.getElementById("user_information").innerHTML =
  "Hello " + your_name.toUpperCase() + ". Have a good day!";

// Hiển thị google map và form
let your_click = false;
let element = document.getElementById("under-avatar");
document.getElementById("img-avatar").addEventListener("click", () => {
  if (your_click == false) {
    element.style.display = "block";
    your_click = true;
  } else {
    element.style.display = "none";
    your_click = false;
  }
});
// check pass
element.addEventListener("submit", (event) => {
  event.preventDefault();
  let x = document.forms["my-form"]["pass"].value;
  if (x == "drive") {
    window.location.assign(
      "https://drive.google.com/drive/folders/1AkG7LJMA-9mC_nqlXQSZTWz84t4wC6iw?usp=share_link"
    );
  } else {
    alert("Wrong key, please try again.");
  }
});
//map
let message_error = document.getElementById("demo");
let my_map = document.getElementById("my-map");
let showPosition = (position) => {
  my_map.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
};
let showError = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      message_error.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      message_error.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      message_error.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      message_error.innerHTML = "An unknown error occurred.";
      break;
  }
};
if (navigator.geolocation) {
  navigator.geolocation.watchPosition(showPosition, showError);
} else {
  message_error.innerHTML =
    "Error. Geolocation isn't supported by this browser.";
}
