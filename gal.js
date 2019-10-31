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
let array = [];
function get()
{
    let id = document.getElementById("id").value;
           let id1='';
         if(id !== ""){
           id1="/"+id;
         }
    let Fname = document.getElementById("first_name").value;
    if (Fname !== '') {
        array.push('first_name='+ Fname)
    }

    let lname = document.getElementById("last_name").value;
    if (lname !== '') {
        array.push('last_name='+ Fname)
    }
    let page = document.getElementById("PN").value;
    if (page !== '') {
        array.push('page='+page)
    }
    let y=id1+ '?' + array.join('&')
    console.log(y);
    const obj = new Headers();
    obj.append('Authorization','Bearer YYcizpb-E7TuZKyRzxr3Dm5MuPvAZKDLTXP_');
    obj.append('Content-Type', 'application/json');
    fetch('https://gorest.co.in/public-api/photos  '+y, {
            method: 'GET',
            headers: obj
        })
        .then(response => response.json())
        .then(data => console.log(data));
}


document.getElementById("button2").addEventListener("click",post);

function post()
{
    let Fname = document.getElementById("first_name").value;

    let lname = document.getElementById("last_name").value;

    let email = document.getElementById("email").value;
    
    let gender = document.getElementById("gender").value;
   
    const obj = new Headers();
    obj.append('Authorization','Bearer YYcizpb-E7TuZKyRzxr3Dm5MuPvAZKDLTXP_');
    obj.append('Content-Type', 'application/json');
    fetch('https://gorest.co.in/public-api/users', {
            method: 'POST',
            headers: obj,
            body:JSON.stringify({
             first_name:Fname,
             last_name:lname,
             email:email,
             gender:gender,


            })
        })
        .then(response => response.json())
        .then(data => console.log(data));
}