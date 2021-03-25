addHTML = (file, before) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", `${file}`, true);
  xhttp.responseType = "document";
  xhttp.send();
  xhttp.onload = (response) => {  
      const fileDoc = response.target.responseXML;
      let fileHead = fileDoc.getElementsByTagName("head")[0];
      fileHead = fileHead.getElementsByTagName("*");
      const originalHead = document.getElementsByTagName("head")[0];
      for (element of fileHead) {
        originalHead.appendChild(element);
      }
      let fileBody = fileDoc.getElementsByTagName("body")[0];
      fileBody = fileBody.getElementsByTagName("*");
      const originalBody = document.getElementsByTagName("body")[0];
      if (before === true) {
        for (element of fileBody) {
          originalBody.insertBefore(element, originalBody.childNodes[0]);
        }
      }
      else {
        for (element of fileBody) {
          originalBody.appendChild(element);
        }
      }
  }  
}
