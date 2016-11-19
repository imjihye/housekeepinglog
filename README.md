# housekeepinglog

# install

## express

```sh
npm update -g express-generator
express [dirname]
```

## mongodb directory
```sh
mkdir data
```

# coding

## jade code
- layout.jade
- index.jade

## app.js
- mongo & monk
```sh
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('db-ip:27017/housekeepinglo');

var routes = require('./routes/index');
....
```
- user db
```
app.use(function(req, res, next){
  req.db = db;
  next();
});
app.use('/', routes);
app.use('/users', users);
...
```

## database
- db server (db connection configuration)
```sh
mongod --dbpath [mongo db data path] --fork --logpath [mongo db log path]/mongod.log
```
- db start (db connection check)
```sh
mongo
```
- mongodb command
```
> show dbs
> show tables or show collections or db.getCollectionNames()
```
- ref : https://www.tutorialspoint.com/mongodb/
## index.js