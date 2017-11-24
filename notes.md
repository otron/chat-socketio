# this is a chat application or something, ayyy.

* following this guide: [https://socket.io/get-started/chat/](yeah this one about socket.io and getting
started and making a chat application)

It's not... it's not working at step... where it's supposed to go "a user connected" when someone loads the page.
I can't immediately figure out why.
Figured it out, I think. I'd split up the assignments/declarations more than they do in the example.
I.e. they're doing `var app = require('express')();` while I'm doing that as two statements:
`var express = require('express'); var app = express();`

But no it's still not working.
It's rendering all right but the console message that's supposed to show up when someone/-thing connects isn't doing so.

uhhhh. Lol it started working when I made the `script` tag w/ the src set to `/socket.io/socket.io.js` non-self-closing.
(from `<script src='...' />` to `<script src='...' > </script>`). That's weird.
The latter thing is what they do in the example/tutorial. I don't get that.
Ohhh there's a whole thing about it: https://stackoverflow.com/questions/69913/why-dont-self-closing-script-tags-work
In summary it's because the browsers see the self-closing tag as empty and just omit it.


oh dear we're pulling in jquery :(


## Emitting events

- `emit` is what the client does. An event is emitted from the client to the server. It's a 1-1 thing.


## Broadcasting events

- `broadcast` is what the server does to the clients. It's a 1-many (server - all the clients) type thing.

events are... just strings. There's no magic. Some are automatically broadcast/emitted as a part of/by socket.io (`connect`, `disconnect`
seem to be examples of such events).

## Todos

- run it in a docker container
- run it on a server inside a docker container
- add https/ssl
- add support for usernames
