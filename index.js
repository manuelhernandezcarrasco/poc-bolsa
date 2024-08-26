const WebSocket = require('ws');

const ws = new WebSocket('wss://api.matbarofex.com.ar/v2/live/symbol/', {
    headers: {
        'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
    }
});

ws.on('open', () => {
    const message = {
        action: "subscribe",
        request_id: 1,
        symbols: ["I.SOJA", "I.MAIZ", "I.TRIGO"]
    };
    ws.send(JSON.stringify(message));
});

ws.on('message', (data) => {
    console.log('Received:', data);
});

ws.on('error', (error) => {
    console.error('WebSocket error:', error);
});

ws.on('close', () => {
    console.log('WebSocket closed');
});
