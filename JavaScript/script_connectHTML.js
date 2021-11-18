// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function sayHello () {
    var name =
     document.getElementById("name").value;
     var message = "<h2>Hello " + name + "!</h2>";
  
    // document
    //   .getElementById("content")
    //   .textContent = message;
  
    document                            /*Permette di far vedere testo (message) anche usando tag <h2> */ 
      .getElementById("content")        /* Richiamo content come id perché è il div che voglio printare */
      .innerHTML = message;
  
    if (name === "student") {
      var title = 
        document
          .querySelector("#title")    /*al posto di getElementId , uso questo che è selettore di CSS per elementi e non ID */
          .textContent;
      title += " & Lovin' it!";
      document
          .querySelector("h1")
          .textContent = title;
    }
  }