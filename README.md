# CrowdSpy

CrowdSpy is a Web-Service which utilises gamification approaches to derive crowd parameter from aerial images of major events.

Crowd context is an information that goes beyond crowd / people density information. During major events (like music festivals or football games) a high crowd density does not necessarily indicate high risk for dangerous situations (e.g. mass panic). In contrary, a high people density might result from queues in front of refreshment stand, from a group of friends talking or dancing as well as other – more or less – harmless situations.

This is a bachelor thesis with the goal to develop a geo-game to derive crowd context information from aerial images.

To start the service you need node.js and MongoDB installed.

Then run `npm install` and `bower install` in the console.

You need to create an empty folder named `data` in the node directory.

Then run `mongod --dbpath (path to data folder)` from a mongo console to start the database.

After that you have to start the server with `node server.js`