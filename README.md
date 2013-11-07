timon
===

![alt tag](http://www.inseparabile.com/images/Suricato_2_1_.jpg)


Appcelerator Titanium Alloy test-study client app for a mongoDB crud rest api.

This project builds an iOS-iPad client app (timon) of a self-hosted mongoDB Node.js (Express)
server application (pumbaa).

Timon presents a custom Alloy sync adapter, named ti-mongodb, which allows basic crud operation
through a rest api in order to fetch and persist data on a remote mongoDB database server.

The UI implements a SplitWindow with master/detail windows and native behaviour.
It dynamically display a collection of models which can differ in attributes structures, fetched 
from the mongoDB database server-app.

The MonoDB-Node.js server application's project is [pumbaa](https://github.com/tripitakit/pumbaa)

At present, only the fetching is enabled.
Work is in progress for Create, Update, Delete operations.

This project will eventually evolve into something useful, for now it is an interesting test-study.