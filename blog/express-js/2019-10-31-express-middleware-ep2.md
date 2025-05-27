---
slug: express-middleware-ep2
date: 2019-10-31
title: Express Middleware ep2
description: Express Middleware
authors: phatsss
tags: [NodeJS, Express]
language: lo
---
ຈາກບົດຄວາມກ່ອນໆທີ່ຜ່ານມາເຮົາກໍ່ໄດ້ຮູ້ຈັກກັບ Middleware ປະເພດຕ່າງໆໄປແລ້ວ, ໃນບົດຄວາມນີ້ເຮົາກໍ່ຈະມາທຳຄວາມຮູ້ຈັກກັບ Built-in middleware ເຊິ່ງເປັນ middleware ທີ່ມາພ້ອມກັບຕົວ express ຈະມີຕົວໃດແນ່ນັ້ນໄປເບິ່ງກັນເລີຍຍຍຍຍ.
<!-- truncate -->

![Photo by [Dominik Vanyi](https://unsplash.com/@dominik_photography?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)](https://cdn-images-1.medium.com/max/10608/0*oL6FHRkQRjq3IjeR)*Photo by [Dominik Vanyi](https://unsplash.com/@dominik_photography?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)*

ເລີ່ມຕົ້ນໃນ Express Application ໃຫ້ທຳການເອີ້ນໃຊ້: Express Module ແລະ ກຳນົດ app ໃຫ້ເປັນ instance ຂອງ Express
```expressjs
    const express = require(‘express’)
    const app = express()
```
ໃນການນຳໃຊ້ Built-in middleware ແຕ່ລະຕົວກໍ່ຈະເອີ້ນໃຊ້ຜ່ານ instance ຂອງ Express Module ເຊິ່ງຈະມີ Method ທັງໝົດ 4 Method ດັ່ງນີ້:

* ```express.Router()```

* ```express.static()```

* ```express.json()```

* ```express.urlencoded()```

## express.Router()

ໜ້າທີ່ຫຼັກໆຂອງ Router ກໍ່ແມ່ນຈັດການກັບ request ທີ່ເຂົ້າມາແລ້ວທຳການກຳນົດວ່າຈະໃຫ້ສົ່ງຫຍັງກັບໄປ ຫຼື ຈະໃຫ້ເຮັດວຽກຫຍັງຕໍ່, ການສ້າງ router ກໍ່ປຽບດັ່ງການສ້າງ applications ຍ່ອຍໆໄວ້ແລ້ວທຳການເອີ້ນໃຊ້ຜ່ານ ```app.use()``` ອີກເທື່ອໜຶ່ງນັ້ນເອງ
> ອ່ານບົດຄວາມທີ່ກ່ຽວຂ້ອງໄດ້ລຸ່ມນີ້:
[**ວ່າດ້ວຍເລື່ອງ Routing ຂອງ Express**
*Routing ແມ່ນຫຍັງ?*medium.com](https://medium.com/@pphatskps/%E0%BA%A7%E0%BB%88%E0%BA%B2%E0%BA%94%E0%BB%89%E0%BA%A7%E0%BA%8D%E0%BB%80%E0%BA%A5%E0%BA%B7%E0%BB%88%E0%BA%AD%E0%BA%87-routing-%E0%BA%82%E0%BA%AD%E0%BA%87-express-27f857308e34)

**ຕົວຢ່າງ: **ເຮົາສ້າງໄຟລ໌ ```Birds.js``` ເຊິ່ງໃນນີ້ເຮົາໄດ້ມີການກຳນົດ Route ໄວ້ດັ່ງລຸ່ມນີ້:

**Birds.js**
```expressjs
    var express = require('express')
    var router = express.Router()

    //ເມື່ອມີການເອີ່ນໃຊ້ໄຟລ໌ນີ້ຈະເຮັດວຽກໃນສ່ວນຂອງ router.use(ບໍ່ໄດ້ກຳນົດ path) ກ່ອນສະເໝີ

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
ຢູ່ທີ່ໄຟລ໌ ```app.js``` ທຳການ ```import``` ໄຟລ໌ ```Birds.js``` ຜ່ານ ```require()``` ແລ້ວເອີ້ນໃຊ້ຜ່ານ ```app.use()```

**app.js**
```expressjs
    var birds = require('./birds')
    //ເປັນການນຳເຂົ້າໄຟລ໌ birds.js
    .
    .
    .

    app.use('/birds', birds)
    // ...//ເອີ້ນໃຊ້ "/" ທີ່ຢູ່ໃນໄຟລ໌ birds
```
ຈາກຕົວຢ່າງດ້ານເທິງຈະເຫັນວ່າເມື່ອມີ request ມາທີ່ path ```“/birds”``` ກໍ່ຈະທຳການເຂົ້າໄປເຮັດວຽກທີ່ໄຟລ໌ ```birds.js``` ຈາກນັ້ນຈະທຳການສະແດງ ວັນເວລາຜ່ານ console ແລ້ວສະແດງຂໍ້ຄວາມ “Birds home page” ທາງໜ້າຈໍ

* **ສັງເກດ**: ເມື່ອເຂົ້າໄປທີ່ path ```“/birds”``` ກໍ່ຈະເຂົ້າໄປຫາ root path ທີ່ຢູ່ໃນໄຟລ໌ ```birds.js``` ແຕ່ຖ້າຢາກອ້າງເຖິງ path ```“/about”``` ທີ່ຢູ່ໃນ ```birds.js``` ຈະຕ້ອງເຂົ້າໃນຮູບແບບ ```“/birds/about”```

## express.static()

ໃຊ້ໃນການເອີ້ນໃຊ້ ```static files``` ເຊັ່ນ: ໄຟລ໌ຮູບພາບ, css, js … ເຫຼົ່ານີ້ເປັນຕົ້ນ ຫຼື ທີ່ຮູ້ຈັກກັນທົ່ວໄປກະຄື folder ທີ່ເກັບໄຟລ໌ຕ່າງທີ່ເຮົາຕ້ອງການໃຊ້ໃນ project ຫັ້ນລ່ະ

* **ຄິດພາບຕາມ:** ເວລາເອີ້ນໃຊ້ files ຮູບພາບໃນ html tag ກໍ່ຈະຕ້ອງກຳນົດ path ທີ່ເກັບຮູບພາບນັ້ນໄວ້, ຈຶ່ງຈະສາມາດສະແດງຮູບພາບນັ້ນໄດ້ ແຕ່ຖ້າເອີ້ນຜິດຮູບນັ້ນກໍ່ຈະບໍ່ສະແດງນັ້ນເອງ.

ຮູບແບບໃນການໃຊ້ແມ່ນ:
```expressjs
    express.static(root, [options])
```
ຕົວຢ່າງ:ໃນ express project ທີ່ໄດ້ຈາກ express generator ຈະມີໂຄງສ້າງໄຟລ໌ດັ່ງນີ້:

![](https://cdn-images-1.medium.com/max/2000/1*BJtLpXByJ_FGWlNo_t14rQ.png)

ແລະ ມີການກຳນົດ static folder ດັ່ງນີ້:

![](https://cdn-images-1.medium.com/max/2050/1*lTX7O6I7w8Xhj_eas3s23A.png)

ເມື່ອກຳນົດສຳເລັດແລ້ວກໍ່ສາມາດເອີ້ນບັນດາໄຟລ໌ຕ່າງໆທີ່ຢູ່ໃນ ```public folder``` ໄດ້ເລີຍ

![](https://cdn-images-1.medium.com/max/2732/1*3TYWEY_D5NqEjzMCkAV0sA.png)

ຈາກຮູບຈະເຫັນວ່າໃນສ່ວນຂອງ ```view(layout.pug)``` ໄດ້ມີການເອີ້ນໃຊ້ ```style.css``` ທີ່ຢູ່ໃນໂຟເດີ stylesheets ແລະ ໂຟເດີ stylesheets ກໍ່ຢູ່ໃນ ```public``` ອີກເທື່ອດັ່ງນັ້ນຫາກເຮົາມີ folder ໄວ້ເກັບຮູບພາບ ໄຟລ໌ອື່ນໆທີ່ໃຊ້ໃນໂປຣເຈັກເຮົາກໍ່ສາມາດເອົາໄວ້ຢູ່ທີ່ ```public``` ແລ້ວທຳການເອີ້ນໃຊ້ໄດ້ເລີຍ.

## express.json()

ໃຊ້ສຳລັບແປງຂໍ້ມູນທີ່ຢູ່ໃນຮູບແບບ JSON String ໃຫ້ຢູ່ໃນຮູບແບບ JSON Object, ເນື່ອງຈາກການສົ່ງຂໍ້ມູນໂດຍປົກກະຕິແລ້ວ NodeJS ຈະສົ່ງຂໍ້ມູນໃນຮູບແບບຂອງ binary data ທີ່ເອີ້ນອີກຢ່າງໜຶ່ງວ່າ ```OCTET-STREAM``` ຫຼື ໄຟລ໌ທີ່ບໍ່ມີການລະບຸນາມສະກຸນຂອງໄຟລ໌ຕົງໆ ໂດຍໄຟລ໌ທີ່ຖືກສົ່ງໄປຈະຖືກນຳມາໃຊ້ຫຼາຍຮູບແບບທີ່ແຕກຕ່າງກັນເຊັ່ນ: ສົ່ງຂໍ້ມູນຮູບພາບມາແບບ ```OCTET-STREAM``` ກໍ່ສາມາດດາວໂຫຼດແລ້ວບັນທຶກເປັນໄຟລ໌ JPEG ຫຼື PNG ໄດ້.

ເວົ້າຕາມພາສາບ້ານໆເລີຍກໍ່ຄື: ຖ້າບໍ່ໃຊ້ ```express.json()``` ເວລາເຮົາຮັບຂໍ້ມູນຈາກຟອມມາໃນຮູບແບບ json string ແລ້ວມັນຈະ undefined.

ເພື່ອໃຫ້ເຫັນພາບເຮົາມາເບິ່ງຕົວຢ່າງນຳກັນເລີຍ.

**ຕົວຢ່າງ:**ເຮົາຈະສົ່ງຂໍ້ມູນຜ່ານຟອມໂດຍໃຊ້ POST method ແລະ ນຳໃຊ້ Ajax ໃນການສົ່ງດັ່ງນີ້:

* ກ່ອນອື່ນຜູ້ຂຽນໄດ້ສ້າງໂປຣເຈັກໂດຍໃຊ້ express-generatorດັ່ງນັ້ນໃນໂປຣເຈັກໂດຍພື້ນຖານມັນຈະມີການເອີ້ນໃຊ້ບັນດາ middleware ທີ່ຈຳເປັນໃຫ້ຮຽບຮ້ອຍແລ້ວ.

```app.js``` : ສັງເກດເຫັນວ່າມີການເອີ້ນໃຊ້ ```express.json()```

![app.js](https://cdn-images-1.medium.com/max/2732/1*fwKodftyrWwL10u2JW4V6A.png)*app.js*

```index.pug``` : ໜ້າຟອມ

![index.pug](https://cdn-images-1.medium.com/max/2732/1*o9bJA_Zieiaq0BTcDy5Q4w.png)*index.pug*

```ajax.js``` ແຍກສ່ວນຂອງການສົ່ງຂໍ້ມູນອອກມາຕ່າງຫາກຍ້ອນວ່າຜູ້ຂຽນໄດ້ໃຊ້ pug template engine ໃນການຂຽນ view ດັ່ງນັ້ນມັນຈຶ່ງຂ້ອນຂ້າງມີບັນຫານກັບ syntax ຂອງ jquery ຢູ່ສົມຄວນເລີຍແຍກອອກສ່ະະະ

![ajax.js](https://cdn-images-1.medium.com/max/2732/1*tu1EpZf-9d4f4Y9Et2WZJg.png)*ajax.js*

```index.js```:ກຳນົດ Router ໃຫ້ກັບ request ທີ່ເຂົ້າມາ, ຈະເຫັນວ່າໄດ້ກຳນົດໃຫ້ມີການສະແດງຄ່າທີ່ສົ່ງເຂົ້າມາ ແລະ ສະແດງປະເພດຂອງຂໍ້ມູນທີ່ໄດ້ມາ

![index.js](https://cdn-images-1.medium.com/max/2732/1*8FCAJtVI7j-RHfCCuZ3Isg.png)*index.js*

ຜົນທີ່ໄດ້:

![](https://cdn-images-1.medium.com/max/2732/1*XIqr63ST5iKIZ5M7qbc-Vg.png)

![](https://cdn-images-1.medium.com/max/2732/1*TOjfCMIGnK3wys1FC48k5Q.png)

ຈະເຫັນໄດ້ວ່າຂໍ້ມູນທີ່ສົ່ງມານັ້ນຈະຢູ່ໃນຮູບແບບຂອງ ```Object``` ເປັນທີ່ຮຽບຮ້ອຍ ດັ່ງນັ້ນເຮົາກໍ່ສາມາດອ້າງອີງຜ່ານ ```req.body[0].value``` ກໍ່ຈະໄດ້ ```value``` ທີ່ຢູ່ໃນ ```‘name’``` ແລ້ວ.

## express.urlencoded()

ໃຊ້ສຳລັບແປງຂໍ້ມູນຈາກຟອມທີ່ຢູ່ໃນຮູບແບບ ```url encoded``` ເປັນ ```Object```

ຕົວຢ່າງ: ຂໍ້ມູນທີ່ໄດ້ຈາກຟອມຈະຢູ່ໃນຮູບແບບ
```expressjs
    mytext=This%20is%20me!!!&mynumber=1
```
ຈາກຟອມປະມານນີ້:

![form.pug](https://cdn-images-1.medium.com/max/2732/1*Q_9mkcw7-h4x3rMMPJZtvg.png)*form.pug*

ໃນສ່ວນຂອງ ```express.urlencoded()``` ນີ້ມີຮູບແບບການໃຊ້ງານຄືກັນກັບ ```express.json()``` ເລີຍ ດັ່ງຂັ້ນຕອນລຸ່ມນີ້:
```expressjs
    app.use(express.urlencoded({ extended: false }));
```
![app.js](https://cdn-images-1.medium.com/max/2732/1*wt0rY87sf3kQgiF-xB7S-Q.png)*app.js*

    *ຖ້າບໍ່ປະກາດໃຊ້  ```express.urlencoded()``` ແລ້ວເມື່ອຮັບຄ່າຈາກຟອມທີ່ຢູ່ໃນຮູບແບບຂອງ url encoded ມັນຈະບໍ່ສາມາດອ່ານຄ່າດັ່ງກ່າວໄດ້.

ກໍ່ຈົບກັນໄປແລ້ວສຳລັບ Middleware ທີ່ pack ມາພ້ອມກັບ express framework ສຳລັບໃຜສົນໃຈສຶກສາເພີ່ມຕື່ມກໍ່ສາມາດເຂົ້າໄປເບິ່ງທີ່ເວບໄຊຫຼັກຂອງ express ໄດ້ເລີຍຕາມລິ້ງດັ່ງລຸ່ມນີ້:
[**Express - Node.js web application framework**
*Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and…*expressjs.com](https://expressjs.com/)

ສຳລັບບົດຄວາມຕໍ່ໄປເຮົາຈະມາຂຽນເລື່ອງນັ້ນຝາກຕິດຕາມຕອນຕໍ່ໄປ.
