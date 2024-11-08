//The first thing we are going to check is to see if our page has been fully rendered
document.addEventListener("DOMContentLoaded", (loaded) => {
  //Now let's test to make sure our connection is working
  console.log("Our JS is working!!");

  //Declare variables
  let a = 200;
  let b = 100;
  let c = a + b;

  //const variables cannot be changed once the value has been assigned
  const value1 = 500;
  const value2 = 600;
  let total = value1 + value2;

  //Variables to output the values to our HTML
  document.getElementById("ex1").innerHTML =
    "<h4>JavaScript Variables</h4>" +
    "<p>let: The value of c is: " +
    c +
    "</p>" +
    "<p>const: The value of total is: " +
    total +
    "</p>";

  //Send a welcome message to the console
  console.log("Welcome!");

  //Create a new element
  const mainElement = document.getElementById("main");
  const newRow = document.createElement("div");

  //Create and append the h element
  const newHeading = document.createElement("h2");
  newHeading.textContent = "JS main element.";
  newRow.appendChild(newHeading);

  //Create and append the new paragraph
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "JS is alright :).";
  newRow.appendChild(newParagraph);

  //Create and append the new image
  const newImage = document.createElement("img");
  newImage.src = "./img/chrome.png";
  newImage.alt = "Chrome Logo";
  newRow.appendChild(newImage);

  //Styling to the new content
  newRow.style.cssText =
    "padding: 20px; background-color: #e0e0e0; margin-top: 20px;";
  newHeading.style.cssText = "color: #f8f8f8; font-size: 20px;";
  newParagraph.style.cssText = "color: #f8f8f8; font-size: 20px;";
  newImage.style.cssText =
    "width: 100px; height: auto; display: block; margin-top: 10px;";
});
