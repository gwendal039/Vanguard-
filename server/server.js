const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 3000 });
const players = {};
let nextId = 1;

wss.on('connection', (ws) => {
  const id = nextId++;
  players[id] = { x: 0, y: 1, z: 0 };
  ws.id = id;
  ws.send(JSON.stringify({ type: 'init', id }));

  ws.on('message', (data) => {
    const msg = JSON.parse(data);
    if (msg.type === 'move') {
      players[id] = { x: msg.x, y: msg.y, z: msg.z };
    }
  });

  ws.on('close', () => delete players[id]);
});

setInterval(() => {
  const data = JSON.stringify({ type: 'state', players });
  wss.clients.forEach((ws) => ws.send(data));
}, 50);

console.log('Server running on ws://localhost:3000');
