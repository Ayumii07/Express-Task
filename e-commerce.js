const EventEmitter = require('events');
// Create event emitter object
const orderEvent = new EventEmitter();

// Event: Order Received
orderEvent.on('orderReceived', (orderId) => {
    console.log(`Order ${orderId} received.`);
    orderEvent.emit('orderConfirmed', orderId);
});

// Event: Order Confirmed
orderEvent.on('orderConfirmed', (orderId) => {
    console.log(`Order ${orderId} confirmed.`);
    orderEvent.emit('orderShipped', orderId);
});

// Event: Order Shipped
orderEvent.on('orderShipped', (orderId) => {
    console.log(`Order ${orderId} shipped.`);
    orderEvent.emit('orderDelivered', orderId);
});

// Event: Order Delivered
orderEvent.on('orderDelivered', (orderId) => {
    console.log(`Order ${orderId} delivered.`);
});

// Start the process
const orderId = 101;
orderEvent.emit('orderReceived', orderId);