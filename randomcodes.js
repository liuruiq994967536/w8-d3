/* -------- RANDOM CODES -------- */

// Function to generate combination of characters
function generateCode() {
  //Create variables to store generated codes and the type of characters we want to show as codes
  var code = "";
  var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxzy0123456789@#$";

  //Generate character multiple times using a loop
  for (let i = 1; i <= 8; i++) {
    var char = Math.random() * str.length;
    code += str.charAt(char);
  }

  return code;
}

// Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

// Disable Button
function disableButton(btnValue) {
  const submitButton = document.getElementById("submit");
  submitButton.disabled = btnValue;
  if (btnValue) {
    submitButton.style.backgroundColor = "rgba(73, 119, 209, 0.3)";
    submitButton.style.color = "rgba(255, 255, 255, 0.5)";
  } else {
    submitButton.style.backgroundColor = "rgba(73, 119, 209, 1)";
    submitButton.style.color = "rgba(255, 255, 255, 1)";
  }
}

function verificationCodeListener() {
  const codebox = document.getElementById("codeentered");
  codebox.addEventListener("input", (event) => {
    const getCode = event.target.value;
    const charset1 = getCode.trim();
    const charset2 = document.getElementById("codes").innerHTML.trim();

    if (charset1.length === charset2.length && charset1 === charset2) {
      disableButton(false);
    } else {
      disableButton(true);
    }
  });
}

verificationCodeListener();
