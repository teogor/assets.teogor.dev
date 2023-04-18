const xhttp = new XMLHttpRequest();

// Define the callback function
xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        // Insert the navbar HTML into the #navbar element
        document.getElementById("navbar").innerHTML = this.responseText;
    }
};

// Open the file and send the request
xhttp.open("GET", "https://assets.teogor.dev/components/navbar/navbar.html", true);
xhttp.send();