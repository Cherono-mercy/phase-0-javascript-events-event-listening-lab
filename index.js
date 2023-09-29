//Function to create event listener
function addingEventListener() {
  //Get the element we want to add the event listener to and save it to a variable
  const input = document.getElementById("input");
  //Creating a named function to be called by our event listener
  function clickAlert() {
    alert("I was clicked!");
  }
  //Calling the addEventListener() method and passing it the name of the event to listen for and the callback function to handle it
  input.addEventListener("click", clickAlert);
}
addingEventListener(); //Calling addEventListener() function to execute it and activate the event listener.
