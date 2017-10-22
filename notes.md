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
