#timon#


![alt tag](http://www.inseparabile.com/images/Suricato_2_1_.jpg)


Appcelerator Titanium Alloy test-study client app for a mongoDB crud rest api.

This project builds an iPad client application (timon) for a self-hosted (mongoDB + node.js + express)
server application (pumbaa).

Timon presents a custom Alloy sync adapter, named ti-mongodb, which allows basic crud operation
through a rest api in order to fetch and persist data on a remote mongoDB database server.

The UI implements a minimalistic SplitWindow with master/detail windows and native behaviour.
It displays a collection of models which can differ in attributes structures, fetched 
from the mongoDB database server-app.


## Features ##
- iPad native SplitWindow UI
- Custom Alloy sync adapter, ti-mongodb
- Fetch a collection of mongodb documents with schema-free models into an Alloy/backbone collection
- Display, Create, Update and Delete documents

This project will eventually evolve into something useful, for now it is an intriguing proof of concept study.

###Pumbaa, the server###
The mongoDB Node.js Express server-application's project is [pumbaa](https://github.com/tripitakit/pumbaa)
Thre is a live **pumbaa** instance to test the app (http://pumbaa.iosvappo.it)
In your browser see the (client default) docs collection @ http://pumbaa.iosvappo.it/docs.


