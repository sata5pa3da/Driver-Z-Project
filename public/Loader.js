const href = window.location.href


function loadJS(FILE_URL, async = true) {
    let scriptEle = document.createElement("script");
  
    scriptEle.setAttribute("src", FILE_URL);
    scriptEle.setAttribute("type", "text/javascript");
    scriptEle.setAttribute("async", async);
  
    document.body.appendChild(scriptEle);
  
    // success event 
    scriptEle.addEventListener("load", () => {
      console.log("File loaded")
    });
     // error event
    scriptEle.addEventListener("error", (ev) => {
      console.log("Error on loading file", ev);
    });
}


//Function responsible for making a request to the server to retrieve the paths to the scripts to be loaded on the client
async function LoadScripts(){
    const res = await fetch(href + "Scripts");
    const response = await res.json();
    
//     for(let data in response.Data){
//         loadJS(data);
//     }
// }


LoadScripts();
