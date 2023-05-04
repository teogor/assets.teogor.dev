// Create a new XMLHttpRequest object
const footerXhttp = new XMLHttpRequest();

// Define the callback function to be executed when the readyState and status of the request change
footerXhttp.onreadystatechange = function () {
    // Check if the readyState is 4 and the status is 200, indicating that the request is complete and successful
    if (this.readyState === 4 && this.status === 200) {
        // Insert the HTML content of the response into the #footer element
        document.getElementById("footer").innerHTML = this.responseText;
        
        // Update the current year
        const currentYear = new Date().getFullYear();
        document.getElementById("year").textContent = currentYear.toString();
    }
};

// Open a GET request to the specified URL for the navbar HTML file
footerXhttp.open("GET", "https://assets.teogor.dev/components/footer/footer.html", true);

// Send the request
footerXhttp.send();