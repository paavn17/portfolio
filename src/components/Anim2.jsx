import React from 'react'

function Anim2() {
    useEffect(() => {
        function sleep(ms) {
          return new Promise((resolve) => setTimeout(resolve, ms));
        }
    
        const phrases = ["Web Enthusiast", "Passionate Programmer", "Competitive Coder"];
        const el = document.getElementById("typewriter");
        const sleeptime = 100;
        let index = 0;
    
        const loop = async () => {
          while (true) {
            let word = phrases[index];
            
            for (let i = 0; i < word.length; i++) {
              el.innerText = word.substring(0, i + 1);
              await sleep(sleeptime);
            }
            await sleep(sleeptime * 10);
    
            for (let i = word.length; i > 0; i--) {
              el.innerText = word.substring(0, i - 1);
              await sleep(sleeptime);
            }
            await sleep(sleeptime * 5);
    
            index = (index + 1) % phrases.length; 
          }
        };
    
        loop();
      }, []);
    
      return (
        <div className="main h-screen w-full bg-zinc-950 text-white flex flex-col items-center justify-center">
          <h1>I'm Pavan</h1>
          
        </div>
      );
    }

export default Anim2