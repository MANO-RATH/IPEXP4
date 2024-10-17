class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

const validateAndSubmit = (event) => {
    event.preventDefault();
    
    try {
        const name = document.getElementById('name').value;
        if (!/^[a-zA-Z\s]{2,50}$/.test(name)) {
            throw new ValidationError('Name should only contain letters and spaces (2-50 characters)');
        }

        const mobile = document.getElementById('mobile').value;
        if (!/^\d{9}$/.test(mobile)) {
            throw new ValidationError('Mobile number must be exactly 9 digits');
        }

        const email = document.getElementById('email').value;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new ValidationError('Please enter a valid email address');
        }

        const message = document.getElementById('message').value;
        if (message.length > 50) {
            throw new ValidationError('Message cannot exceed 50 characters');
        }

        generateReceipt();
        return false;
    } catch (error) {
        alert(error.message);
        return false;
    }
};

const generateReceipt = () => {
    const receiptDate = new Date();
    const orderNumber = Math.floor(Math.random() * 1000000);

    const receiptContent = `
        <div class="receipt">
            <h4>Order Confirmation</h4>
            <p>Date: ${receiptDate.toLocaleDateString()}</p>
            <p>Time: ${receiptDate.toLocaleTimeString()}</p>
            <p>Order Number: #${orderNumber}</p>
            <hr>
            <p>Customer Name: ${document.getElementById('name').value}</p>
            <p>Mobile: ${document.getElementById('mobile').value}</p>
            <p>Email: ${document.getElementById('email').value}</p>
            <p>Size: ${document.getElementById('size').value}</p>
            <p>Color: ${document.getElementById('color').value}</p>
            <p>Custom Message: ${document.getElementById('message').value}</p>
            <hr>
            <p class="text-success">Your order has been successfully placed!</p>
        </div>
    `;

    document.getElementById('receiptContent').innerHTML = receiptContent;
    new bootstrap.Modal(document.getElementById('receiptModal')).show();
};