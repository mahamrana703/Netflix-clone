var myVids = document.getElementsByClassName("myVid");
for (var i = 0; i < myVids.length; i++) {
  myVids[i].addEventListener("mouseover", function () {
    this.play();
  });

  myVids[i].addEventListener("mouseleave", function () {
    this.pause();
  });
}
