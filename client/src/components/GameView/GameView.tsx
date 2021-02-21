import './GameView.css'

import React from 'react';
import socketIOClient from "socket.io-client";

type GameViewProps =
{
	clientId: string
}

const GameView: React.FC<GameViewProps> = ({clientId}) =>
{
	const [response, setResponse] = React.useState("socket not yet connected");
	
	const socket = socketIOClient("192.168.1.18:5000");

	React.useEffect(() => {
		socket.on("server-update", dataFromServer =>
			{
				setResponse(dataFromServer + "\n" + response);
				if (dataFromServer !== clientId)
				{
					socket.emit("client-update-" + clientId, clientId)
				}
			}
		);
		console.log("working")
	}, []);

	const sendUpdate = () =>
	{
		socket.emit("client-update-" + clientId, clientId)
	};

	return (
		<div>
			CLIENT {clientId}
			<br />
			<textarea value={response}/>
			<button onClick={sendUpdate}>Send Update</button>
		</div>
	);
};

export default GameView;