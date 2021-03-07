// populate process.env
import * as dotenv from "dotenv"
dotenv.config()

// express + middlewares
import express from "express";
import helmet from "helmet";
import cors from "cors";

// mongodb + data schemas
import mongoose from "mongoose";
import GameSchema from "./models/Game"
import UserSchema from "./models/User"
import PGN from "./models/PGN"

// websockets + web server + routes
import http from "http";
import { Server, Socket } from "socket.io";
import Index from "./routes/Index";
import Auth from "./routes/Auth"
import Users from "./routes/Users";

// initialize the express application
const app: express.Application = express();

// set up express middlewares
app.use(cors());				// enable cross-origin requests
app.use(helmet());				// secure app with various HTTP headers
app.use(express.json());		// parses client requests from json to javascript objects

// set up routes
app.use(Index);
app.use(Auth);
app.use(Users);

// set up mongoose with our local mongodb instance
const URI = process.env.mongoURI || "mongodb://127.0.0.1:27017/checkmate-db";
const options: object= {
	useNewUrlParser: true,
		useCreateIndex: true,
		autoIndex: true
	}
	mongoose
	.connect(URI, options)
	.then(() => console.log("Mongo Connected"))
	.catch(err => console.log(err));

// start listening for http reqyests on port 5000
const port = 5000;	
const httpServer = http.createServer(app);
httpServer.listen(port, () => console.log(`Listening on port ${port}`));

// also set up 

//// SOCKET CODE
// const io = new Server(httpServer,
// 	{
// 		cors: { // for now you need a CORS disabling extension to make this work
// 			origin: "http://192.168.1.18",
// 			methods: ["GET", "POST"]
// 		}
// 	}
// );

// let state = "new state";
// let prevTime: number = Date.now();
// let thisTime: number = Date.now();
// let count: number = 0;

// // Handle New Connections
// io.on("connection", (socket: Socket) =>
// 	{
// 		console.log("New client connected");

// 		socket.join("client-pool")

// 		socket.on("disconnect", () =>
// 			{
// 				console.log("Client disconnected");
// 			}
// 		);

// 		socket.on("client-update-1", (message: string) =>
// 			{
// 				prevTime = thisTime;
// 				thisTime = Date.now();
// 				console.log(++count);
// 				console.log((thisTime - prevTime) / 1000, "-------" + thisTime + "---------" + prevTime)

// 				state = "1";
// 				io.to("client-pool").emit("server-update", state);
// 			}
// 		);

// 		socket.on("client-update-2", (message: string) =>
// 			{
// 				prevTime = thisTime;
// 				thisTime = Date.now();
// 				console.log(++count);
// 				console.log((thisTime - prevTime) / 1000, "-------" + thisTime + "---------" + prevTime)

// 				state = "2";
// 				io.to("client-pool").emit("server-update", state);
// 			}
// 		);
// 	}
// );