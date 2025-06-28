import express from 'express';
const app = express();
import socket from '../socket/baseSocket';
import RoomChat from '../socket/roomChat';
import { AsyncLocalStorage } from 'async_hooks';

app.get("/",(req,res)=>{
  res.send("HELLO MATE")
})
RoomChat(socket.io);

socket.server.listen(3000, () => console.log("🚀 Server listening on port 3000"));
