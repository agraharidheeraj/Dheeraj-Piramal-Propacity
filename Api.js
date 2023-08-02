document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form data
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      meta: formData.get("meta")
    };
  
    // Send the data to the API using fetch
    fetch("https://api.propacity.in/api/v1/webhooks/integration/794d3601-ec97-454f-a3b8-6c5961ff8da8/insertLead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseData => {
      // Hide the form and show the thank you card
      document.getElementById("contactForm").style.display = "none";
      document.getElementById("thankYouCard").style.display = "block";
    })
    .catch(error => {
      console.error("Error:", error);
      // You can handle error display or logging here
    });
  });