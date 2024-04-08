// Function to fetch fruits data from the locally stored JSON file
function fetchFruitsData() {
  // Assuming fruits.json is located in the same directory
  fetch("data/fruits.json")
    .then((response) => response.json())
    .then((data) => {
      const fruitsSelect = document.getElementById("fruitsSelect");
      const fruits2Select = document.getElementById("fruits2Select");
      const fruits3Select = document.getElementById("fruits3Select");

      data.sort((a, b) => a.name.localeCompare(b.name));
      data.forEach((fruit) => {
        const option = document.createElement("option");
        const option2 = document.createElement("option");
        const option3 = document.createElement("option");

        option.value = fruit.name; // Assuming 'name' contains the fruit name
        option.textContent = fruit.name; // Assuming 'name' contains the fruit name

        option2.value = fruit.name; // Assuming 'name' contains the fruit name
        option2.textContent = fruit.name;

        option3.value = fruit.name; // Assuming 'name' contains the fruit name
        option3.textContent = fruit.name;

        fruitsSelect.appendChild(option);
        fruits2Select.appendChild(option2);
        fruits3Select.appendChild(option3);
      });
    })
    .catch((error) => {
      console.error("Error fetching fruits data:", error);
    });
}

// Call the function to populate select options when the page loads
fetchFruitsData();
