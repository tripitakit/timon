#timon#


![alt tag](http://www.inseparabile.com/images/Suricato_2_1_.jpg)


Appcelerator Titanium Alloy test-study client app for a mongoDB crud rest api.

This project builds an iPad client application (timon) for a self-hosted (mongoDB + node.js + express)
server application (pumbaa).

Timon presents a custom Alloy sync adapter, named ti-mongodb, which allows basic crud operation
through a rest api in order to fetch and persist data on a remote mongoDB database server.

The UI implements a minimalistic SplitWindow with master/detail windows and native behaviour.
It displays a collection of models which can differ in attributes structures, fetched 
from the mongoDB database server-app. The "_id" attribute is used for models' titles,
in order to handle the collection of schema-less models/documents.

## Devel progress status ##
- Fetch and display a collection of mongodb documents.
- Update and Delete documents from the collection.
- Lifted a public pumbaa server and pointed the app to it

Work is in progress for Create operations.

This project will eventually evolve into something useful, for now it is an interesting test-study.

###Pumbaa, the server###
The mongoDB Node.js Express server-application's project is [pumbaa](https://github.com/tripitakit/pumbaa)
