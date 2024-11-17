
const display =  document.getElementById("display");

function appendToDisplay (input) {
   display.value += input;
  }
  
  function appendOperator(operator) {
   display.value += operator;
  }
  
  function clearDisplay() {
    display.value = '';
  }
  
  function deleteLast() {
    display.value = display.value.slice(0, -1);
  }
  function calculateResult(){
    display.value = eval (  )
  }

  function calculateResult() {
    if (display) {  // Ensure display exists
      const inputValue = display.value.trim();  // Get the current input
  
      // Check for specific inputs
      if (inputValue === "100+43") {
          display.value = "You are doing great!!";  // Display 'You are doing great!!'
      } else if (inputValue === "06+06") {
          display.value = "You are loved!";  // Display 'I love you'
      }
      else if (inputValue === "7+7") {
        display.value = "Miss u, lodicakes";  // Display 'I love you'
    }
       else { 
        
          try {
              display.value = eval(inputValue);  // Otherwise, evaluate as a normal math expression
          } catch (error) {
              display.value = 'Error';  // If there’s an error (e.g., invalid input)
          }
      }
  } else {
      console.log("Display element not found.");
  }
}