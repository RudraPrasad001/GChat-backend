import { Socket } from "socket.io";
import { Server } from "socket.io";
const RoomChat = (io:Server)=>{
io.on('connection', (socket:Socket) => {
  console.log("Socket connected:", socket.id);
  socket.on('joinRoom', (roomId) => {
  socket.join(roomId);
});


  socket.on('message', ({text,id,server}) => {
    console.log('Received message:', text);
    console.log("from server: ");
    console.log(server.server);
    socket.to(server.server).emit('message',{text,id});
  });

  socket.on('disconnect', () => {
    console.log("Socket disconnected:", socket.id);
  });
});}
export default RoomChat;