const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const modalCont = document.getElementById("modal-container");

openBtn.addEventListener("click", () => handleModal("open"));
closeBtn.addEventListener("click", () => handleModal("close"));

function handleModal(option) {
  modalCont.style.display = option == "open" ? "block" : "none";
}

window.addEventListener("click", function (e) {
  if (e.target === modalCont) modalCont.style.display = "none";
});
