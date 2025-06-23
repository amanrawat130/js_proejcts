   
      const start = document.getElementById("start");
      const stop = document.getElementById("stop");
      let interval;
      let flag = false;

      start.addEventListener("click", function () {
        if (flag) return;

        interval = setInterval(function () {
          // <---- solid random color ---->
          // document.body.style.background = getRandomColor();

          // <------- gradient random color ----->
          let color1 = randomGradientColor();
          let color2 = randomGradientColor();
          const angle = Math.floor(Math.random() * 360);
          const gradientColor = `linear-gradient(${angle}deg, ${color1}, ${color2})`
          console.log(gradientColor)

          document.body.style.background = gradientColor;
          
          flag = true;
        }, 1000);
      });

      stop.addEventListener("click", function () {
        console.log("event clicked");
        clearInterval(interval);
        flag = false;
      });

      function getRandomColor() {                       //solid color function
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        console.log(`rgb(${r},${g},${b})`);

        return `rgb(${r},${g},${b})`;
        // console.log(r)
      }

      function randomGradientColor() {                          // linear gradient color function
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        console.log(color);
        return color;
      }
      // getRandomColor()