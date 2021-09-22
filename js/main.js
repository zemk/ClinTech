const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("tab-active");
    });
    e.target.classList.add("tab-active");

    contents.forEach(content => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

var modal = document.getElementById('myModal');
 
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
 btn.onclick = function() {
  modal.style.display = "block";
}
 span.onclick = function() {
  modal.style.display = "none";
}
 window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}