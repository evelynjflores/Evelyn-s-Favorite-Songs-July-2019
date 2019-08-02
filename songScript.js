function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  if (x) {
  x.className=(x.className=='hidden')?'unhidden':'hidden';
  }
  else {
    x.style.display = "none";
  }
}
