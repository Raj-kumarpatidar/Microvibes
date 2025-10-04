document.getElementById('order-form').addEventListener('submit', function(e) {
    e.preventDefault(); // This stops the form from its default submission behavior

    // Get form data
    const name = this.elements['name'].value;
    const phone = this.elements['phone'].value;
    const orderDetails = this.elements['order-details'].value;
    const deliveryAddress = this.elements['delivery-address'].value;

    // Define your WhatsApp number
    const whatsappNumber = 'your_whatsapp_number_here'; // Replace with your WhatsApp number including country code (e.g., 919876543210)

    // Create the message
    const message = `Hello Microvibes! I'd like to place an order.
    
*Name:* ${name}
*WhatsApp Number:* ${phone}
*Order Details:*
${orderDetails}
    
*Delivery Address:*
${deliveryAddress}
    
Please confirm my order. Thank you!`;

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Redirect the user to WhatsApp
    window.open(whatsappUrl, '_blank');
});