const contentContainers = document.getElementsByClassName("content-container");

for (let i = 0; i < contentContainers.length; i++) {
  contentContainers[i].addEventListener("click", function () {
    if (contentContainers[i].className.includes(" active")) {
      contentContainers[i].className = contentContainers[i].className.replace(
        "active",
        ""
      );
      return;
    }
    contentContainers[i].className += " active";
  });
}
