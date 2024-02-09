// Constants holding references to input, button, and list elements.
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Create a map to match names according to how url shows it
const conversion = {
    "1 nephi": "1-ne",
    "2 nephi": "2-ne",
    "jacob": "jacob",
    "enos": "enos",
    "jarom": "jarom",
    "omni": "omni",
    "words of mormon": "w-of-m",
    "mosiah": "mosiah",
    "alma": "alma",
    "helaman": "hel",
    "3 nephi": "3-ne",
    "4 nephi": "4-ne",
    "mormon": "morm",
    "moroni": "moro"
};

// addEventListener
button.addEventListener("click", function() {
    if (input.value !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        const link = document.createElement('a'); // Create a link element

        // Splits the input by space, separates it, and makes it lowercase
        bookChapter = input.value.split(",");
        book = conversion[bookChapter[0].trim().toLowerCase()];
        chapter = bookChapter[1].trim().toLowerCase();

        // Set the link's href attribute to point to the book and chapter we just input
        link.href = `https://www.churchofjesuschrist.org/study/scriptures/bofm/${book}/${chapter}?lang=eng`;
        link.target = "_blank"; // Open link in a new tab/window

        // Set the text content of the link to the input value
        link.textContent = input.value;
        deleteButton.textContent = "❌";

        // Append the link and delete button to the list item
        li.appendChild(link);
        li.appendChild(deleteButton);

        // Append the list item to the list
        list.appendChild(li);

        // Add click event listener to the delete button
        deleteButton.addEventListener("click", function() {
            list.removeChild(li);
            input.focus();
        });

        input.focus();
        input.value = '';
    } else {
        alert('Input is empty!');
        input.focus();
    }
});