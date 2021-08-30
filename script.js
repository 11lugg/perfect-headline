const changeForm = (id) => {
  let selectValue = id.options[id.selectedIndex].value;
  let formLocation = document.getElementById("selected-form");

  switch (selectValue) {
    case "facebook-ad":
      formLocation.innerHTML =
        '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfTPJVGg2mAJXXLxpjY_LhxCmxo6mvTvGdOfx-ZrqvDtVitgw/viewform?embedded=true" width="640" height="912" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>';
      break;
    case "google-ad":
      formLocation.innerHTML = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSevHVx5KfUncIDOaqt0Js_f17WaY4di4lv92qG14pF_b0umnA/viewform?embedded=true" width="640" height="912" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>';
      break;
    case "youtube-video":
      formLocation.innerHTML = "<p>youtube video</p>";
      break;
    case "photo-post":
      formLocation.innerHTML = "<p>photo post</p>";
      break;
    case "email-subject":
      formLocation.innerHTML = "<p>email subject</p>";
      break;
    default:
      formLocation.innerHTML = "";
  }
};
