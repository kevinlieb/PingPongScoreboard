var a = 0;
io.on('connection', function(socket){
  setInterval(function () {spewCount()}, 3000);
});


function spewCount() {
  io.emit('count', a, {for: everyone});
  a++;
}

