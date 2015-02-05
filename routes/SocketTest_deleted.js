var express = require('express');
var router = express.Router();
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');
socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

router.get("/", function(rec, res, next) {
  console.log("i am in SocketTest.js");

  var a = 0;
  io.on('connection', function(socket){
    setInterval(function () {spewCount()}, 3000);
  });


  function spewCount() {
    io.emit('count', a, {for: everyone});
    a++;
  }
});

module.exports = router;



