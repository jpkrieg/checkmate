import express from "express";
import http from "http";
import { Server, Socket } from "socket.io";
import cors from "cors";
import index from "./routes/index";

// express backend serves on http://localhost:5000
// this is configured in the client's package.json's "proxy" node
const port = 5000;

const app: express.Application = express();
app.use(cors());
app.use(index);

const httpServer = http.createServer(app);
const io = new Server(httpServer,
	{
		cors: {
			origin: "http://192.168.1.17",
			methods: ["GET", "POST"]
		}
	}
);
	
io.on("connection", (socket: Socket) =>
	{
		// ...
	}
);

// handle socket.io connections
let interval: NodeJS.Timeout;
io.on("connection", (socket: Socket) =>
	{
		console.log("New client connected");

		if (interval) {
			clearInterval(interval);
		}

		interval = setInterval(() => getApiAndEmit(socket), 1000);

		socket.on("disconnect", () =>
			{
				console.log("Client disconnected");
				clearInterval(interval);
			}
		);
	}
);

const getApiAndEmit = (socket: Socket) =>
{
	const response = new Date();
	// Emitting a new message. Will be consumed by the client
	socket.emit("FromAPI", response);
};

httpServer.listen(port, () => console.log(`Listening on port ${port}`));

// app.listen(port, () => `Server running on port ${port}`);


// dummy API endpoint for getting customer data
// app.get('/api/customers', (req, res) => {
// 	const customers = [
// 		{id: 1, firstName: 'John', lastName: 'Doe'},
// 		{id: 2, firstName: 'Brad', lastName: 'Traversy'},
// 		{id: 3, firstName: 'Mary', lastName: 'C'},
// 	];

// 	res.json(customers);
// });