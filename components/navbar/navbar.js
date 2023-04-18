// Create a new XMLHttpRequest object
const navbarXhttp = new XMLHttpRequest();

// Define the callback function to be executed when the readyState and status of the request change
navbarXhttp.onreadystatechange = function () {
    // Check if the readyState is 4 and the status is 200, indicating that the request is complete and successful
    if (this.readyState === 4 && this.status === 200) {
        // Insert the HTML content of the response into the #navbar element
        document.getElementById("navbar").innerHTML = this.responseText;
    }
};

// Open a GET request to the specified URL for the navbar HTML file
navbarXhttp.open("GET", "https://assets.teogor.dev/components/navbar/navbar.html", true);

// Send the request
navbarXhttp.send();