var photo = document.getElementById("test");
        fetch("http://127.0.0.6:3000/",
         { method :'GET'
        })
        .then(response=>response.json())
        .then(data=>{
            let ha = data.photos;
            for(let i=0 ; i<20 ; i++){
           photo.innerHTML += `<img src="${ha[i]}" class = "img"/>`;
          console.log( `<img src="${ha[i]}" class = "img"/>`);
        }
        });
          