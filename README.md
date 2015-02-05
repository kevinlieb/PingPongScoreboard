# PingPongScoreboard
Open source web based scoreboard for Ping Pong.  Smartphone or tablet controlled.

API's:

Get score:
/score/<game> as a GET
```
{
  "P1":<number>,
  "P2":<number>
}
```

/score/<game> POST
```
{"P1":"+"}
```
or
```
{"P1:"-"} 
```
to decrement score for player 1
or
```
{"reset":true}
```
or
```
{"undoReset":true}
```


  
  
