# PingPongScoreboard
Open source web based scoreboard for Ping Pong.  Smartphone or tablet controlled.

API's:

Create a new game:
`/new` as a PUT, response is:
```
{"ok": <game-id>}
```

Get score:
`/score/<game-id>` as a GET, response is:
```
{
  "P1":<number>,
  "P2":<number>
}
```

`/score/<game>` as a POST, with the body:
```
{"P1":"+"}
```
or
```
{"P1:"-"} 
```
to increment and decrement scores

and to reset scores:
`/score/<game>` as a POST, with the body:
```
{"reset":true}
```

or undo the reset:
```
{"undoReset":true}
```

to get a list of games:
`/list` as a GET, response is:
```
[{
	"id": 1,
	"P1": 0,
	"P2": 11
},
{
	"id": 1,
	"P1": 0,
	"P2": 11
}]
```  
  
