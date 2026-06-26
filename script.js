const video = document.getElementById("wildlifeVideo");
const videoButton = document.getElementById("videoButton");

videoButton.addEventListener("click", function () {
  if (video.hidden) {
    video.hidden = false;
    video.play();
    videoButton.textContent = "Hide Video";
    return;
  }

  if (video.paused) {
    video.play();
    videoButton.textContent = "Hide Video";
  } else {
    video.pause();
    video.hidden = true;
    videoButton.textContent = "Show and Play Video";
  }
});