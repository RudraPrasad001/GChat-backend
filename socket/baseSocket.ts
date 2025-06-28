import { Server as SocketIoServer} from "socket.io";
import app from "../utils/express";
import http from 'http';
import RoomChat from "./roomChat";
const server = http.createServer(app);
const io = new SocketIoServer(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  }
});
const socket = {io,server};
export default socket;