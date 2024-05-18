function showProductInfo(productName, price) {
    // Construct the message for the pop-up
    var message = "Selected Product: " + productName + "\n";
    message += "Price: $" + price.toFixed(2) + "\n\n";
    message += "Are you sure you want to purchase this product?";

    // Display the confirmation pop-up
    var confirmPurchase = confirm(message);

    // If user confirms, proceed with purchase
    if (confirmPurchase) {
        // Display alert for enquiry
        alert("Talk to a representative & Make enquiry");
        alert("Tel: +23409163639969 | Whatsapp: +23409046546449");
        location.href = "https://wa.me/8116925586?text="

        // Redirect to WhatsApp with prefilled message
        // location.href = "https://wa.me/8116925586?text=" + encodeURIComponent("I'm interested in purchasing the product: " + productName);
    } else {
        // If user cancels, redirect to home page
        location.href = "index.html"; // Adjust the URL based on your home page
    }
}
