const openBtns = document.querySelectorAll(".btn");
const closeBtns = document.querySelectorAll("#closeBtn");


openBtns.forEach( function(openbtn){
  openbtn.addEventListener("click", function (e) {
    let desc = this.parentElement.nextElementSibling;
    desc.classList.add('position');
  })
})

closeBtns.forEach( function(closebtn){
  closebtn.addEventListener("click", function(e) {
    let descBox = this.parentElement;
    descBox.classList.remove('position');
  })
})
