#timon#


![alt tag](http://www.inseparabile.com/images/Suricato_2_1_.jpg)


Appcelerator Titanium Alloy client app with persistence on a mongoDB-node.js server app.

This project builds an iPad client application (timon) for a self-hosted node.js
server application providing webservices to access a mongoDB database (pumbaa).

Timon presents a custom Alloy sync adapter, named ti-mongodb, which allows basic crud operation
through a rest api in order to fetch and persist data on a remote mongoDB database server.

The UI implements a minimalistic SplitWindow with master/detail windows and native behaviour.
It displays a collection of models which can differ in attributes structures, fetched 
from the mongoDB database server-app. The "_id" attribute is used for models' titles,
in order to handle the collection of schema-less models/documents.

## Features ##
- iPad native SplitWindow UI
- Custom Alloy rest sync adapter to mongoDB: ti-mongodb
- Fetch a collection of mongodb documents with schema-free models into an Alloy/backbone collection
- Display, Create, Update and Delete documents

This project will eventually evolve into something useful, for now it is an intriguing proof of concept study.

###Pumbaa, the server###
The mongoDB Node.js Express server project is [pumbaa](https://github.com/tripitakit/pumbaa/wiki/pumbaa)
There is a live **pumbaa** server instance you can use to test the app (http://pumbaa.iosvappo.it)
In your browser inspect the test docs collection linking to http://pumbaa.iosvappo.it/docs.

Have fun :) !


