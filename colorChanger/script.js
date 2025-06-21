
    // document.getElementById("blue").addEventListener("click", function () {
    //   document.body.style.backgroundColor = document.body.style.backgroundColor === 'blue' ? "" : "blue";
    // });

    // document.getElementById("green").addEventListener("click", function () {
    //   document.body.style.backgroundColor = document.body.style.backgroundColor === "green" ? "" : "green";
    // });

    // document.getElementById("yellow").addEventListener("click", function () {
    //   document.body.style.backgroundColor = document.body.style.backgroundColor === "yellow" ? "" : "yellow";
    // });

    // document.getElementById("pink").addEventListener("click", function () {
    //   document.body.style.backgroundColor = document.body.style.backgroundColor === "pink" ? "": "pink";
    // });

    // document.getElementById("red").addEventListener("click", function () {
    //   document.body.style.backgroundColor = document.body.style.backgroundColor === "red" ? "" : "red";
    // });
    // document.getElementById("violet").addEventListener("click", function () {
    //   document.body.style.backgroundColor = document.body.style.backgroundColor === "violet" ? "" : "violet";
    // });

// <--- function for each approach ----> 

    // const container = document.querySelectorAll(".box");

    //   container.forEach(function(button){
    //       button.addEventListener("click", function(){
    //       console.log(this.id)
    //       document.body.style.backgroundColor = document.body.style.backgroundColor === this.id ? "": this.id;
                                       
    //       })
    //   })


    // <--- function without forEach approach ----> 

    const container = document.querySelector(".container")
    console.log(container);
    

    container.addEventListener("click", function(e){
      console.log(e.target) // "e" targeting the event
      console.log(this.id); // "this" targeting the container
      document.body.style.backgroundColor = document.body.style.backgroundColor === e.target.id ? "": e.target.id;
      
    })




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
