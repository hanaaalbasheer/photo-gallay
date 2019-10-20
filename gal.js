function openNav(m) {
    document.getElementById("overlay").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("overlay").style.display = "none";
  }

var index=1;
gallarey(index)
function arrows(n){
    gallarey(index +=n);
}
function gallarey(x){
    let images = document.querySelectorAll(".subover >img");
    
    for(let i=0; i<images.length; i++){
        images[i].style.display = "none";
    }
    if(x > images.length){ index = 1}
    if(x < 1){ index = images.length}
    images[index-1].style.display = "block";
}
