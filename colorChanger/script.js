
    document.getElementById("blue").addEventListener("click", function () {
      document.body.style.backgroundColor = document.body.style.backgroundColor === 'blue' ? "" : "blue";
    });

    document.getElementById("green").addEventListener("click", function () {
      document.body.style.backgroundColor = document.body.style.backgroundColor === "green" ? "" : "green";
    });

    document.getElementById("yellow").addEventListener("click", function () {
      document.body.style.backgroundColor = document.body.style.backgroundColor === "yellow" ? "" : "yellow";
    });

    document.getElementById("pink").addEventListener("click", function () {
      document.body.style.backgroundColor = document.body.style.backgroundColor === "pink" ? "": "pink";
    });

    document.getElementById("red").addEventListener("click", function () {
      document.body.style.backgroundColor = document.body.style.backgroundColor === "red" ? "" : "red";
    });
    document.getElementById("violet").addEventListener("click", function () {
      document.body.style.backgroundColor = document.body.style.backgroundColor === "violet" ? "" : "violet";
    });


    document.getElementById("btn").addEventListener("click", function(){
      if(document.getElementById('btn').textContent === 'Remove Color'){
        document.body.style.backgroundColor = '';
        document.getElementById('btn').textContent = "Get Color";
        document.getElementById('color').value = '';
        return; 
      }
      const inputColor = document.getElementById('color').value
      if(inputColor){
        document.getElementById('btn').textContent = "Remove Color"
      }
      console.log(typeof(inputColor));
      console.log(inputColor === "" ? "no color" : inputColor)
      document.body.style.backgroundColor = inputColor; 
      
    })
