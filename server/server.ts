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
		cors: { // for now you need a CORS disabling extension to make this work
			origin: "http://192.168.1.18",
			methods: ["GET", "POST"]
		}
	}
);

let state = "new state";
let prevTime: number = Date.now();
let thisTime: number = Date.now();
let count: number = 0;

// Handle New Connections
io.on("connection", (socket: Socket) =>
	{
		// console.log("New client connected");

		socket.join("client-pool")

		socket.on("disconnect", () =>
			{
				// console.log("Client disconnected");
			}
		);

		socket.on("client-update-1", (message: string) =>
			{
				prevTime = thisTime;
				thisTime = Date.now();
				console.log(++count);
				console.log((thisTime - prevTime) / 1000, "-------" + thisTime + "---------" + prevTime)

				state = "1";
				io.to("client-pool").emit("server-update", state);
			}
		);

		socket.on("client-update-2", (message: string) =>
			{
				prevTime = thisTime;
				thisTime = Date.now();
				console.log(++count);
				console.log((thisTime - prevTime) / 1000, "-------" + thisTime + "---------" + prevTime)

				state = "2";
				io.to("client-pool").emit("server-update", state);
			}
		);
	}
);

const getApiAndEmit = (socket: Socket) =>
{
	const response = new Date();
	// Emitting a new message. Will be consumed by the client
	socket.emit("DataSentFromServer", response);
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