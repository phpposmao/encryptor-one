const textInput = document.getElementById("textInput");
const codifyButton = document.getElementById("codifyButton");
const decodifyButton = document.getElementById("decodifyButton");
const resultText = document.getElementById("resultText");

function codify() {
  const textArray = textInput.value.split("");
  
  for(let i = 0; i < textArray.length; i++) {
    if(textArray[i] === "e") {
      textArray[i] = "enter"
    }

    if(textArray[i] === "i") {
      textArray[i] = "imes"
    }

    if(textArray[i] === "a") {
      textArray[i] = "ai"
    }

    if(textArray[i] === "o") {
      textArray[i] = "ober"
    }

    if(textArray[i] === "u") {
      textArray[i] = "ufat"
    }
  }

  const codifiedText = textArray.join("");
  resultText.innerHTML = codifiedText;

  return codifiedText;
}

function decodify() {
  const textArray = textInput.value.split("");

  for(let i = 0; i < textArray.length; i++) {
    if(textArray[i] === "e" && textArray[i + 1] === "n" && textArray[i + 2] === "t" && textArray[i + 3] === "e" && textArray[i + 4] === "r" ) {
      textArray.splice(i + 1, 4);
    }

    if(textArray[i] === "i" && textArray[i + 1] === "m" && textArray[i + 2] === "e" && textArray[i + 3] === "s") {
      textArray.splice(i + 1, 3);
    }

    if(textArray[i] === "a" && textArray[i + 1] === "i") {
      textArray.splice(i + 1, 1);
    }

    if(textArray[i] === "o" && textArray[i + 1] === "b" && textArray[i + 2] === "e" && textArray[i + 3] === "r") {
      textArray.splice(i + 1, 3);
    }

    if(textArray[i] === "u" && textArray[i + 1] === "f" && textArray[i + 2] === "a" && textArray[i + 3] === "t") {
      textArray.splice(i + 1, 3);
    }
  }

  const decodifiedText = textArray.join("");resultText.innerHTML = decodifiedText;

  return decodifiedText;
}

codifyButton.onclick = codify;
decodifyButton.onclick = decodify;
