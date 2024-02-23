const express = require('express');
const cors = require('cors');
require("dotenv").config();
const app = express();
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');


// router
const discusRoutes = require('./src/routes/discus')
const blogRoutes = require('./src/routes/blog')
const userRoutes = require('./src/routes/user')
const registerRoutes = require('./src/routes/registration')
const adminCheckRoutes = require('./src/routes/admin')
const recruiterCheckRoutes = require('./src/routes/recruiter')
const jobRoutes = require('./src/routes/job')
const quizRoutes = require('./src/routes/quiz3')
const HackathonCreateRoutes = require('./src/routes/hackathon')
const ConversationRoutes = require('./src/routes/conversation')
const MessageRoutes = require('./src/routes/message')


//middleware
app.use(express.json());
app.use(cors());


const mongoAtlasUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ssnfvav.mongodb.net/${process.env.DB_DB}?retryWrites=true&w=majority`;


// Connect to the MongoDB cluster
mongoose.connect(
  mongoAtlasUri)
  .then(() => console.log("connecting to mongoose"))
  .catch(err => console.log(err))

//discus Routes
app.use(discusRoutes)
app.use(blogRoutes)

//register Routes
app.use(registerRoutes)

// hackathonCreateRoutes
app.use(HackathonCreateRoutes)

//user routes
app.use(userRoutes)

app.use(jobRoutes)

app.use(quizRoutes)

// admin check
app.use(adminCheckRoutes)
// recruiter check
app.use(recruiterCheckRoutes)

//  conversation routes
app.use(ConversationRoutes)

// message routes
app.use(MessageRoutes)

app.listen(port,() => {
  console.log(`server is running on port:${port}`)

})

















// const http = require('http'); // Import the http module

// // Create HTTP server
// const server = http.createServer(app); // Pass app to createServer

// // Integrate Socket.IO with the HTTP server
// const { Server } = require("socket.io");
// const io = new Server(server, {
//   cors: true
// });

// // Socket.IO event handling
// const emailToSocketIdMap = new Map();
// const socketidToEmailMap = new Map();

// io.on("connection", (socket) => {
//   console.log(`Socket Connected`, socket.id);
//   // Handle socket events here
// });




// io.on("connection", (socket) => {
//   console.log(`Socket Connected`, socket.id);
//   socket.on("room:join", (data) => {
//     const { email, room } = data;
//     emailToSocketIdMap.set(email, socket.id);
//     socketidToEmailMap.set(socket.id, email);
//     io.to(room).emit("user:joined", { email, id: socket.id });
//     socket.join(room);
//     io.to(socket.id).emit("room:join", data);
//   });

//   // socket.on("user:call", ({ to, offer }) => {
//   //   io.to(to).emit("incomming:call", { from: socket.id, offer });
//   // });

//   // socket.on("call:accepted", ({ to, ans }) => {
//   //   io.to(to).emit("call:accepted", { from: socket.id, ans });
//   // });

//   // socket.on("peer:nego:needed", ({ to, offer }) => {
//   //   console.log("peer:nego:needed", offer);
//   //   io.to(to).emit("peer:nego:needed", { from: socket.id, offer });
//   // });

//   // socket.on("peer:nego:done", ({ to, ans }) => {
//   //   console.log("peer:nego:done", ans);
//   //   io.to(to).emit("peer:nego:final", { from: socket.id, ans });
//   // });
// });







