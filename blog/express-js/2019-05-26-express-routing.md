---
slug: express-routing
date: 2019-05-26
title: Express Routing
description: Express Routing
authors: phatsss
tags: [NodeJS, Express]
language: lo
---
Routing ແມ່ນການກຳນົດ URL ຫຼື Path ທີ່ໃຊ້ເອີ້ນຂໍ້ມູນຜ່ານ HTTP request (GET,POST,PUT,DELETE…) ແລ້ວທຳການສົ່ງ Response ກັບໄປ ຫຼື ເຮັດວຽກຢ່າງໃດຢ່າງໜຶ່ງຕາມທີ່ໄດ້ກຳນົດໄວ້ວ່າເມື່ອມີການ Request ເຂົ້າມາທີ່ Path ນີ້ແລ້ວຈະໃຫ້ເຮັດວຽກຫຍັງເປັນຕົ້ນ.
<!-- truncate -->
ຮູບແບບຂອງ Routing ຈະມີດັ່ງນີ້:
```expressjs
    // app.METHOD(PATH, HANDLER)

    app.get('/',function(){});
```
**app** ແມ່ນ Instance ຂອງ Express(ເວົ້າງ່າຍໆກໍ່ຄື app ເປັນຕົວແທນຂອງ Express)
```expressjs
    const express = require('express')
    const app = express()
```
**METHOD **ແມ່ນ HTTP request method ເປັນ method ໃນການສົ່ງຂໍ້ມູນເຊັ່ນ: get,post,put,delete…

**PATH** ແມ່ນ URL ຫຼື Domain ນັບຕັ້ງແຕ່ “/” ໂຕທີ 3 ຂຶ້ນໄປເຊັ່ນ: *h[ttps://laox.la/u/phatz](https://laox.la/u/phatz) :PATH ທີ່ໄດ້ກໍ່ຈະແມ່ນ “/u/phatz”

**HANDLER** ແມ່ນສ່ວນທີ່່ກຳນົດການເຮັດວຽກເມື່ອ Path ກົງກັບ request ທີ່ເຂົ້າມາ

**ຕົວຢ່າງ: **ເມື່ອມີ get request ມາທີ່ “/”(root path) ຈະທຳການສົ່ງຄຳວ່າ “hello world” ກັບໄປດັ່ງ code ດ້ານລຸ່ມ
```expressjs
    var express = require('express')
    var app = express()
    
    // respond with "hello world" when a GET request is made to the //homepage

    app.get('/',(req, res)=> {

    res.send('hello world')

    })
```
## Route methods

Route methods ຖືກດັດແປງມາຈາກ HTTP request methods ແລ້ວນຳມາແນບເຂົ້າກັບ Instance ຂອງ Express class

ຕົວຢ່າງ: ການກຳນົດ route ຮູບແບບ GET ແລະ POST methods ໃຫ້ກັບ root path ຂອງ app
```expressjs
    // GET method route
    app.get('/', (req, res)=> {
      res.send('GET request to the homepage')
    })
    
    // POST method route
    app.post('/',(req, res)=> {
      res.send('POST request to the homepage')
    })
```
ນອກຈາກນີ້ແລ້ວຍັງມີ methods ທີ່ສາມາດດັກຈັບທຸກໆ request ທີ່ເຂົ້າມາໄດ້ອີກ, ເຊິ່ງການກຳນົດກໍ່ຈະຢູ່ໃນຮູບແບບ app.all() ເຊິ່ງໃຊ້ສຳຫຼັບການກຳນົດໃຫ້ເຮັດວຽກໃນ middleware ຟັງຊັ່ນ ຫຼື ຟັງຊັ່ນທີ່ໃຊ້ສຳຫຼັບຈັດການກັບ HTTP request ທຸກ methods ທີ່ເກີດຂຶ້ນ

**ຕົວຢ່າງ:**ເມື່ອມີ request methods ໃດໆກໍ່ຕາມທີ່ເຂົ້າມາທີ່ “/secret” ຈະທຳການສະແດງຄຳວ່າ “Accessing the secret section ...” ຈາກນັ້ນຈຶ່ງຈະເຮັດວຽກທີ່ Handler ໃນຟັງຊັ່ນລຳດັບຖັດໄປໂດຍໃຊ້ next()
```expressjs
    app.all('/secret', (req, res, next)=> {
      console.log('Accessing the secret section ...')
      next() // ສັ່ງການໃຫ້ໄປເຮັດວຽກທີ່ Handler ຟັງຊັ່ນຖັດໄປ
    })
```
## Route paths

ແມ່ນສ່ວນທີ່ເອົາໄວ້ກຳນົດສ່ວນຂອງປາຍທາງດັ່ງຕົວຢ່າງທີ່ຜ່ານມາເຮົາກໍ່ໄດ້ກຳນົດ “/secret” ເມື່ອເຮົາເຂົ້າໄປທີ່ path ນັ້ນໆແລ້ວຈະກຳນົດໃຫ້ເຮັດຫຍັງເປັນຕົ້ນ

Route path ສາມາດຢູ່ໃນຫຼາຍຮູບແບບເຊັ່ນ:

* stinrg ເຊັ່ນ: “/” , “/about” , “/random.text”

* string pattern ເຊັ່ນ: “/ab?cd” , “/ab+cd” , “‘/ab*cd’”

* regular expression ເຊັ່ນ/a/ , /.*fly$/

ເຄື່ອງໝາຍ ?, +, * ແລະ () ແມ່ນເປັນສ່ວນໜຶ່ງຂອງຮູບແບບ regular expression

hyphen (-) ແລະ dot (.) ແມ່ນສ່ວນໜຶ່ງຂອງຮູບແບບ String

ໃນກໍລະນີທີ່ຕ້ອງການນຳໃຊ້ເຄື່ອງໝາຍ $ ແມ່ນໃຫ້ໃຊ້ຢູ່ໃນຮູບແບບ ([ and ]) ຕົວຢ່າງ: ຕ້ອງເຂົ້າໄປທີ່ path “/data/$book” ກໍ່ຈະຂຽນຢູ່ໃນຮູບແບບ “/data/([\$])book”

route paths ຮູບແບບ String
```expressjs
    //This route path will match requests to the root route, /
    app.get('/', function (req, res) {
      res.send('root')
    })
    

    //  This route path will match requests to /about
    app.get('/about', function (req, res) {
      res.send('about')
    })
    

    //  This route path will match requests to /random.text
    app.get('/random.text', function (req, res) {
      res.send('random.text')
    })
```
route paths ຮູບແບບຂອງ string pattern

* ຖ້າມີເຄື່ອງໝາຍ ? ຢູ່ຫຼັງຕົວອັກສອນໃດໆ ຕົວອັກສອນນັ້ນໆຈະມີຫຼືບໍ່ມີກໍ່ໄດ້ເຊັ່ນ:“/ab?cd” ກໍ່ຈະໄດ້ “/acd” ແລະ “/abcd”
```expressjs
    app.get('/ab?cd', function (req, res) {
      res.send('ab?cd')
    })
```
* ຖ້າມີເຄື່ອງໝາຍ + ຢູ່ຫຼັງຕົວອັກສອນໃດໆ ຕົວອັກສອນນັ້ນຈະມີຈັກຕົວກໍ່ໄດ້ເຊັ່ນ: “/ab+cd” ກໍ່ຈະໄດ້ “/abcd” , “/abbcd” , “/abbbcd” , “/abbb…cd”
```expressjs
    app.get('/ab+cd', function (req, res) {
      res.send('ab+cd')
    })
```
* ຖ້າມີເຄື່ອງໝາຍ * ຢູ່ຕຳແໜ່ງໃດໝາຍເຖິງຈະມີຕົວອັກສອນມາເພີ່ມ ຫຼື ບໍ່ມີກໍ່ໄດ້ເຊັ່ນ: “/ab*cd” ກໍ່ຈະໄດ້ “/abcd”, “/abxcd”, “/abRANDOMcd”, “/abLAOScd” ໆລໆ
```expressjs
    app.get('/ab*cd', function (req, res) {
      res.send('ab*cd')
    })
```
* ຖ້າມີເຄື່ອງໝາຍ () ໝາຍເຖິງການຈັດກຸ່ມໃຫ້ກັບຕົວອັກສອນໃດກໍ່ຕາມທີ່ຢູ່ໃນນັ້ນ ສ່ວນຫຼາຍຈະໃຊ້ຮ່ວມກັບເຄື່ອງໝາຍອື່ນໆເຊັ່ນ: “ab(cd)?e” ກໍ່ຈະໄດ້ “/abcde” ແລະ “/abe”
```expressjs
    app.get('/ab(cd)?e', function (req, res) {
      res.send('ab(cd)?e')
    })
```
route paths ຮູບແບບຂອງ regular expression
```expressjs
    app.get(/a/, function (req, res) {}) 
    //ໝາຍເຖິງທຸກໆ path ທີ່ມີຕົວອັກສອນ a ໃນນັ້ນເຊັ່ນ: "/about" , "/data", "/contact" ...

    app.get(/.*fly$/, function (req, res) {})
    //ໝາຍເຖິງທຸກໆ path ທີ່ລົງທ້າຍດ້ວຍ fly ເຊັ່ນ: "/butterfly", "/dragonfly" ເປັນຕົ້ນ
```
## Route parameters

route parameters ຫຼື ເອີ້ນອີກຢ່າງໜຶ່ງວ່າ URL segments ເອົາໄວ້ສຳຫຼັບເກັບຄ່າຕ່າງໆໄວ້ຢູ່ໃນ URL ແລະ ຈະຖືກເອີ້ນໃຊ້ຜ່ານ req.params ໂດຍທີ່ຊື່ຂອງ parameters ຈະຖືກກຳນົດດ້ວຍ key
```expressjs
    Route path: /users/:userId/books/:bookId
    Request URL: http://localhost:3000/users/34/books/8989
    req.params: { "userId": "34", "bookId": "8989" }
```
ຈາກຕົວຢ່າງດ້ານເທິງຈະເຫັນວ່າມີ 2 key ຄື: userId ແລະ bookIdເຊິ່ງສາມາດກຳນົດ route ໄດ້ດັ່ງນີ້:
```expressjs
    app.get('/users/:userId/books/:bookId', function (req, res) {
      res.send(req.params)
    })
```
* ຊື່ຂອງ parameters ຕ້ອງເປັນຕົວອັກສອນ ຫຼື ຕົວເລກ [A-Za-z0–9]

ສຳລັບ hyphen (-) ແລະ dot (.) ເອົາໄວ້ເຊື່ອມຕໍ່ລະຫວ່າງ 2 parameters ເຂົ້າດ້ວຍກັນ
```expressjs
    Route path: /flights/:from-:to
    Request URL: http://localhost:3000/flights/LAX-SFO
    req.params: { "from": "LAX", "to": "SFO" }

    Route path: /plantae/:genus.:species
    Request URL: http://localhost:3000/plantae/Prunus.persica
    req.params: { "genus": "Prunus", "species": "persica" }
```
ນອກຈາກນີ້ເຮົາຍັງສາມາດຄວບຄຸມຄ່າຂອງຂໍ້ມູນທີ່ເຂົ້າມາໄດ້ອີກໂດຍນຳໃຊ້ວົງເລັບ () ຕໍ່ທ້າຍ parameters ທີ່ເຮົາຕ້ອງການເຊັ່ນ:
```expressjs
    Route path: /user/:userId(\d+)
    Request URL: http://localhost:3000/user/42
    req.params: {"userId": "42"}
```
ຈະເຫັນວ່າ (\d+)ເປັນການກຳນົດວ່າຂໍ້ມູນຊຸດນີ້ຈະຕ້ອງເປັນຕົວເລກຕັ້ງແຕ່ 0–9 ເທົ່ານັ້ນ

“\d” ຕົວເລກ 0–9

“\D” ຕົວອັກຂະລະທຸກຕົວຍົກເວັ້ນຕົວເລກ 0–9

“\s” ຊ່ອງວ່າງທຸກຕົວ

“\S”ຕົວອັກຂະລະທຸກຕົວຍົກເວັ້ນຊ່ອງວ່າງ

“\w” ຕົວອັກສອນ ຕົວເລກທຸກຕົວ ຍົກເວັ້ນຕົວອັກຂະລະພິເສດ . \ + * ? [ ^ ] % $ ( ) { } = ! < > | : -

“\W” ຕົວອັກຂະລະພິເສດທຸກຕົວ ແລະ ຊ່ອງວ່າງ ຍົກເວັ້ນ ຕົວອັກສອນ ແລະ ຕົວເລກ

## Route handlers

route handlers ແມ່ນເປັນຟັງຊັ່ນທີ່ຈະເຮັດວຽກເມື່ອ request ທີ່ເຂົ້າມາກົງກັບຮູບແບບທີ່ເຮົາໄດ້ກຳນົດໄວ້ ໂດຍທີ່ເຮົາສາມາດສັ່ງໃຫ້ມັນເຮັດວຽກໄດ້ຫຼາຍກວ່າ 1 ຟັງຊັ່ນໂດຍນຳໃຊ້ middleware function ມາຊ່ວຍໂດຍມີຄຳສັ່ງ next() ເພື່ອສັ່ງໃຫ້ມັນເຮັດວຽກໃນຟັງຊັ່ນຖັດໄປ

ຖ້າເຮົາມີຫຼາຍຟັງຊັ່ນເຮົາກໍ່ສາມາດກຳນົດເປັນຮູບແບບຂອງ Array ຫຼື ຈະໃຊ້ເປັນຮູບແບບປະສົມປະສານກໍ່ໄດ້

ຮູບແບບຟັງຊັ່ນດຽວ
```expressjs
    app.get('/example/a', function (req, res) {
      res.send('Hello from A!')
    })
```
ຖ້າມີຫຼາຍກວ່າ 1 ຟັງຊັ່ນ
```expressjs
    app.get('/example/b', function (req, res, next) {
      console.log('the response will be sent by the next function ...')
      next()
    }, function (req, res) {
      res.send('Hello from B!')
    })
```
ຮູບແບບ Array
```expressjs
    var cb0 = function (req, res, next) {
      console.log('CB0')
      next()
    }
    
    var cb1 = function (req, res, next) {
      console.log('CB1')
      next()
    }
    
    var cb2 = function (req, res) {
      res.send('Hello from C!')
    }
    
    app.get('/example/c', [cb0, cb1, cb2])
```
ຮູບແບບປະສົມປະສານ
```expressjs
    var cb0 = function (req, res, next) {
      console.log('CB0')
      next()
    }
    
    var cb1 = function (req, res, next) {
      console.log('CB1')
      next()
    }
    
    app.get('/example/d', [cb0, cb1], function (req, res, next) {
      console.log('the response will be sent by the next function ...')
      next()
    }, function (req, res) {
      res.send('Hello from D!')
    })
```
## Response methods

res(response object)ສ່ວນນີ້ແມ່ນເຮັດໜ້າທີ່ໃນການສົ່ງຂໍ້ມູນ ຫຼື ຜົນໄດ້ຮັບກັບໄປໃຫ້ຜູ້ໃຊ້ແລະ ສິ້ນສຸດຂະບວນການເຮັດວຽກຂອງ request, response

response ທີ່ມັກໃຊ້ເປັນປະຈຳກໍ່ຈະມີ:

[res.download()](https://expressjs.com/th/4x/api.html#res.download) ຈະໃຊ້ໃນການດາວໂຫຼດໄຟລ໌ທີ່ຕ້ອງການ
```expressjs
    res.download('/report-12345.pdf');
    
    res.download('/report-12345.pdf', 'report.pdf');
    
    res.download('/report-12345.pdf', 'report.pdf', function(err){
      if (err) {
        // ອາດຈະແຈ້ງເຕືອນຂໍ້ຜິດພາດໂດຍນຳໃຊ້ res.send()
      } else {
        // ອາດຈະທຳການນັບຈຳນວນຂອງການດາວໂຫຼດ ໆລໆ
      }
    });
```
[res.end()](https://expressjs.com/th/4x/api.html#res.end) ຈົບການເຮັດວຽກຂອງ res ໂດຍບໍ່ສົ່ງຄ່າໃດໆກັບ
```expressjs
    res.end();
    res.status(404).end();
```
[res.json()](https://expressjs.com/th/4x/api.html#res.json) ສົ່ງຂໍ້ມູນກັບໃນຮູບແບບຂອງ JSON
```expressjs
    res.json(null);
    res.json({ user: 'tobi' });
    res.status(500).json({ error: 'message' });
```
[res.jsonp()](https://expressjs.com/th/4x/api.html#res.jsonp) ສົ່ງຂໍ້ມູນກັບໃນຮູບແບບຂອງ JSON ໂດຍຮອງຮັບ JSONP
```expressjs
    res.jsonp(null);
    // => callback(null)
    
    res.jsonp({ user: 'tobi' });
    // => callback({ "user": "tobi" })
    
    res.status(500).jsonp({ error: 'message' });
    // => callback({ "error": "message" })
```
[res.redirect()](https://expressjs.com/th/4x/api.html#res.redirect) ກຳນົດໃຫ້ໄປຍັງpath ຫຼື URL ທີ່ກຳນົດ
```expressjs
    res.redirect('/foo/bar');
    res.redirect('http://example.com');
    res.redirect(301, 'http://example.com');
    res.redirect('../login');

    res.redirect('http://google.com');
```
[res.render()](https://expressjs.com/th/4x/api.html#res.render) ສັ່ງໃຫ້ render view template ແລ້ວສົ່ງ HTML String ມາໃຫ້ຜູ້ໃຊ່
```expressjs
    // ສົ່ງ view template ທີ່ຖືກ render ແລ້ວມາໃຫ້ຜູ້ໃຊ້
    res.render('index');
    
    // ຖ້າຫາກມີການກຳນົດ callback 
    res.render('index', function(err, html) {
      res.send(html);
    });
    
    // ກຳນົດ local variable ແລ້ວສົ່ງໄປຍັງ view
    res.render('user', { name: 'Tobi' }, function(err, html) {
      // ...
    });
```
[res.send()](https://expressjs.com/th/4x/api.html#res.send) ສົ່ງຂໍ້ມູນກັບມາສະແດງໂດຍສາມາດຢູ່ໃນຮູບແບບຂອງ Buffer object ,String, object, ຫຼື Array ກໍ່ໄດ້
```expressjs
    res.send(new Buffer('whoop'));
    res.send({ some: 'json' });
    res.send('<p>some html</p>');
    res.status(404).send('Sorry, we cannot find that!');
    res.status(500).send({ error: 'something blew up' });
```
[res.sendFile()](https://expressjs.com/th/4x/api.html#res.sendFile) ນຳໄຟລ໌ມາສະແດງ
```expressjs
    app.get('/about',**function**(req, res){

    res.sendFile("C:\\projects\\expressjs\\about.html")

    // res.sendFile(path.join(__dirname+’/about.html’));

    //ໃຊ້ path module

    })
```

* ເວລາໃຊ້ງານຈິງເຮົາຈະໃຊ້ path module ເຂົ້າຊ່ວຍ

[res.sendStatus()](https://expressjs.com/th/4x/api.html#res.sendStatus) ເປັນການກຳນົດ status code ແລະ ສົ່ງຂໍ້ຄວາມແຈ້ງ
```expressjs
    res.sendStatus(200); // equivalent to res.status(200).send('OK')
    res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
    res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
    res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
```
## app.route()

ໃຊ້ໃນການກຳນົດເມື່ອມີຫຼາຍ methods ມາທີ່ route paths ດຽວກັນເຊິ່ງເຮົາສາມາດກຳນົດ method ຍ່ອຍໆລົງໄປໄດ້ອີກ ສົມມຸດວ່າມີການ request ມາທີ່ “/book” ໂດຍໃຊ້ GET method ແລ້ວໃຫ້ສະແດງ “Get a random book” ແຕ່ຖ້າໃຊ້ POST method ເຂົ້າມາທີ່ path ດຽວກັນແຕ່ໃຫ້ສະແດງ “Add a book”
```expressjs
    app.route('/book')
      .get(function (req, res) {
        res.send('Get a random book')
      })
      .post(function (req, res) {
        res.send('Add a book')
      })
      .put(function (req, res) {
        res.send('Update the book')
      })
```
## express.Router

ໃນການພັດທະນາລະບົບທີ່ຊັບຊ້ອນແລ້ວຖ້າຫາກຂຽນ route ໄວ້ທີ່ໄຟລ໌ດຽວກໍ່ຄົງຈະລຳບາກບໍ່ໜ້ອຍ ນອກຈາກ code ຈະບໍ່ເປັນລະບຽບແລ້ວຍັງຍາກຕໍ່ການແກ້ໄຂໃນອານາຄົດນຳອີກ, ດັ່ງນັ້ນ ຈຶ່ງມີການແຍກໄຟລ໌ອອກເປັນສ່ວນຍ່ອຍທີ່ເອີ້ນວ່າ module ແລ້ວທຳການເອີ້ນໃຊ້ແທນ

ເຮົາໃຊ້ express.Router class ເພື່ອສ້າງ module ຫຼື ໄຟລ໌ module ໃໝ່ທີ່ສາມາດເຊື່ອມຕໍ່ກັບການຈັດການຂອງ route, ຕົວ Router ຈະເປັນ instance ຂອງ expressRouter ເຊິ່ງກໍ່ເປັນ middleware ຕົວໜຶ່ງທີ່ສາມາດເອີ້ນໃຊ້ໄດ້ຈາກໄຟລ໌ຫຼັກ.

ຕົວຢ່າງ: ສ້າງໄຟລ໌ birds.js
```expressjs
    var express = require('express')
    var router = express.Router()

    //use()ເປັນການເອີ້ນໃຊ້ middleware function
    // middleware ທີ່ເຮັດວຽກໃນ router instance ກ່ອນຈະເຂົ້າໄປເຮັດວຽກໃນ router 
    //function
    router.use(function timeLog (req, res, next) {
      console.log('Time: ', Date.now())
      next()
    })
    // ກຳນົດ root path
    router.get('/', function (req, res) {
      res.send('Birds home page')
    })
    // ກຳນົດ path "/about"
    router.get('/about', function (req, res) {
      res.send('About birds')
    })
    //ທຳການ exports ເພື່ອໃຫ້ສາມາດຮຽກໃຊ້ຈາກໄຟລ໌ອື່ນໄດ້
    module.exports = router
```
ໄຟລ໌ app.js
```expressjs
    //ເປັນການນຳເຂົ້າໄຟລ໌ birds.js
    var birds = require('./birds')
    
    // ...

    //ເອີ້ນໃຊ້ "/" ທີ່ຢູ່ໃນໄຟລ໌ birds
    app.use('/birds', birds)
```
ເມື່ອເຂົ້າໄປທີ່ path “/birds” ກໍ່ຈະເຂົ້າໄປຫາ root path ທີ່ຢູ່ໃນໄຟລ໌ birds.js ແຕ່ຖ້າອ້າງເຖິງ path “/about” ທີ່ຢູ່ໃນ birds.js ຈະຕ້ອງເຂົ້າໃນຮູບແບບ “/birds/about”

ຂໍ້ມູນອ້າງອີງ: [expressjs.com](https://expressjs.com/th/guide/routing.html)
