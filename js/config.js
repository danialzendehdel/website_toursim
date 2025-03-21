const config = {
    paypal: {
        clientId: 'your-paypal-sandbox-client-id',
        // Note: Never include PayPal secret in frontend code
        // We'll need to handle sensitive operations through a secure backend service
    },
    // Add other public configuration settings here
};

// Prevent modifications to the config object
Object.freeze(config); 