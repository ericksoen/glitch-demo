# Overview

You have a file that contains request/response data for one of your applications. The data is expected to contain the following structure:

`Timestamp,Endpoint,CustomerId,StatusCode,Durationms`

One of your customers has called up to complain about a poor experience using your application. Some questions to think about answering:

* How many times has the customer invoked your application?
* How many of the requests by that returned an unsuccessful response code?
* How many of the requests by that customer returned a successful response code but took longer than 800ms

We have already provided a file reader that reads the log lines. Identify the question you'd like to answer first. You are not constrained by the Glitch toolset, so if you have tools, keybinding, etc., and feel more comfortable working locally, feel free to download the source code and share from your screen.

To open the Glitch terminal, open up the `Tools` panel from the left, vertical menu and select `Terminal`.

To run the application, invoke `node index.js`.

