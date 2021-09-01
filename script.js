const changeForm = (id) => {
  let selectValue = id.options[id.selectedIndex].value;
  let formLocation = document.getElementById("selected-form");
  let asideMessage = document.getElementById("aside-message");

  let windowWidth = window.innerWidth;

  switch (selectValue) {
    case "facebook-ad":
      formLocation.innerHTML =
        `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfTPJVGg2mAJXXLxpjY_LhxCmxo6mvTvGdOfx-ZrqvDtVitgw/viewform?embedded=true" width="${windowWidth <= 640 ? 300 : 640}" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`;
      asideMessage.style.display = "block";
      break;
    case "google-ad":
      formLocation.innerHTML =
        `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSevHVx5KfUncIDOaqt0Js_f17WaY4di4lv92qG14pF_b0umnA/viewform?embedded=true" width="${windowWidth <= 640 ? 300 : 640}" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`;
      asideMessage.style.display = "block";
      break;
    case "youtube-video":
      formLocation.innerHTML =
        `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfqFuRU3mLZtkXFKLAFuFcdyS2YOLjGhfKl3HogaKcuHAqLQQ/viewform?embedded=true" width="${windowWidth <= 640 ? 300 : 640}" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`;
      asideMessage.style.display = "block";
      break;
    case "photo-post":
      formLocation.innerHTML =
        `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScRGskXsPrYn2JU_u1WJ5MT4XY9L_bsjHqWFD0FJHMQs9iIMQ/viewform?embedded=true" width="${windowWidth <= 640 ? 300 : 640}" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`;
      asideMessage.style.display = "block";
      break;
    case "email-subject":
      formLocation.innerHTML =
        `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScxGHP42GyV8rOGC8UD2JIyCeVEq8S_4kSnZfmdjNWtNeK-8A/viewform?embedded=true" width="${windowWidth <= 640 ? 300 : 640}" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`;
      asideMessage.style.display = "block";
      break;
    default:
      formLocation.innerHTML = "";
      asideMessage.style.display = "none";
  }
};

var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
