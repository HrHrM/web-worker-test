# web worker test
 Just a little test for future learning

So what are Web Workers?
Web Workers are Javascript scripts executed from an HTML page that runs on a background thread away from the main execution thread. Data is sent between the main thread and workers through messages. Since these workers run on a separate thread than the main execution thread, you can utilize web workers to run process intensive tasks from the browser without creating blocking instances.

Lets go through what just happened:
- Our application created a web worker in main.js which runs the code from worker.js
- It sends the worker a message with the string ‘Happy Birthday’
- The worker, which had an event listener for ‘message’, received the message and ran the code within.
- The worker appended ‘to myself!’ to the message data creating ‘Happy Birthday to myself!’ and sends that as data within a message back to main.js
- Main.js, which also had an event listener for message, than console.log ‘Happy Birthday to myself!’.