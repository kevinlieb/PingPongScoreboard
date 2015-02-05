# PingPongScoreboard
Open source web based scoreboard for Ping Pong.  Smartphone or tablet controlled.

API's:

Get score:
/score/<game> as a GET
{
  "p1":<number>,
  "p2":<number>
}

/score/<game> POST
{"p1":"+"} to increment score for player 1
or
{"p1:"-"} to decrement score for player 1
or
{"reset":true}
or
{"undoreset":true}


  
  
