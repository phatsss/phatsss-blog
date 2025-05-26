---
slug: prototypal-inheritance-in-javascript
date: 2023-04-10
title: "JavaScript EP5: Prototypal Inheritance🤰🏻👨‍👩‍👧‍👦"
description: Prototypal Inheritance in JavaScript
authors: phatsss
tags: [Javascript]
language: lo
---
ຕອນທີ່ເຮົາຂຽນ JavaScript ເຊື່ອວ່າທຸກຄົນກໍ່ລ້ວນແລ້ວແຕ່ເຄີຍໃຊ້ບັນດາ built-in methods ກັນທັງນັ້ນເຊັ່ນ: .length, .split(), .join(), etc. ບໍ່ວ່າຈະເປັນການໃຊ້ເພື່ອຈຸດປະສົງໃດໆ ຫຼື ໃຊ້ກັບປະເພດຂໍ້ມູນໃດໆກໍ່ຕາມເຊັ່ນ: string,array, object. ແຕ່ຫຼາຍໆຄົນກໍ່ອາດຈະບໍ່ສົງໄສເລີຍວ່າບັນດາ methods ເຫຼົ່ານັ້ນມັນມາຈາກໄສ? ຢ່າບອກໃດວ່າມັນຄືເວດມົນ 🪄🤣. ອັນທີ່ຈິງຖ້າຈະໃຫ້ຕອບຄຳຖາມດ້ານເທິງແບບສັ້ນໆເລີຍ ຄຳຕອບກໍ່ຈະໄດ້ປະມານວ່າ: ຍ້ອນອີ່ຫຍັງບາງຢ່າງທີ່ເອີ້ນວ່າ prototypal inheritance. ແຕ່ເຊື່ອບໍ່ວ່າໃນຕອນທີ່ຂຽນ code ເຮົາໃຊ້ມັນຫຼາຍກວ່າທີ່ຄິດອີກ, ສະນັ້ນເຮົາມາສຶກສາໃຫ້ເຂົ້າໃຈກ່ຽວກັບ prototypal inheritance ໃຫ້ຫຼາຍຂຶ້ນນຳກັນ.

<!-- truncate -->
ສົມມຸດວ່າເຮົາມີເວັບທີ່ໃຫ້ຄົນທົ່ວໄປສາມາດເຂົ້າໄປເບິ່ງຂໍ້ມູນຂອງໝາໄດ້, ເຮົາມັກຈະຕ້ອງໄດ້ສ້າງ object ຫຼາຍໆອັນທີ່ເປັນ type ດຽວກັນ.

ສຳລັບຂໍ້ມູນຂອງໝາ, ເຮົາຕ້ອງການ object ທີ່ເປັນຕົວແທນຂອງຂໍ້ມູນໝາໂຕນັ້ນ. ແທນທີ່ເຮົາຈະຂຽນ object ໃໝ່ທຸກໆຄັ້ງ ໃນທີ່ນີ້ເຮົາຈະໃຊ້ constructor function(ຮູ້ແຫຼະວ່າພາກັນຄິດຫຍັງຢູ່, ເລື່ອງຂອງ class ດຽວເຮົາຈະມາເວົ້າກັນອີກຕື່ມພາຍຫຼັງ)ເຊິ່ງເຮົາກໍ່ສາມາດສ້າງ instance ຂອງ Dog ໄດ້ດ້ວຍ keyword ໃໝ່ໄດ້ເຊັ່ນກັນ.

ໝາທຸກໆໂຕຂອງເຮົາຈະມີຂໍ້ມູນດັ່ງນີ້: `name`, `breed`, `color` ແລະ function ທີ່ບອກວ່າໝາເຫົ່າຫຼືບໍ່ຄື `bark`🐕.

![dog object](https://res.cloudinary.com/practicaldev/image/fetch/s--pDfw39RK--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/caurw7uuk62htpldgtln.png)

ເມື່ອເຮົາສ້າງ `Dog` constructor function ສຳເລັດ, ມັນບໍ່ແມ່ນ object ດຽວທີ່ເຮົາຈະສ້າງ, ມັນຍັງມີ object ອື່ນທີ່ຖືກສ້າງໂດຍອັດຕະໂນມັດຄື: prototype. ໂດຍ default ແລ້ວ object ນີ້ບັນຈຸ constructor property ທີ່ອ້າງອີງເຖິງ original constructor function, ເຊິ່ງໃນກໍລະນີນີ້ແມ່ນ `Dog`.
![constructor function](https://res.cloudinary.com/practicaldev/image/fetch/s--dWGIZ_zz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/9howj4i3zvlgun3svppp.gif)

prototype property ໃນ Dog constructor function ເປັນ non-enumerable(ນັບບໍ່ໄດ້) ໝາຍຄວາມວ່າມັນຈະບໍ່ສະແດງເມື່ອເຮົາ access ເຂົ້າ objects properties, ແຕ່ມັນຍັງມີຢູ່.

ແລ້ວເປັນຫຍັງເຮົາຈຶ່ງມີ property object?, ກ່ອນອື່ນເຮົາມາສ້າງ dogs ຈັກໂຕສອງໂຕທີ່ເຮົາຕ້ອງການສະແດງ. ເພື່ອໃຫ້ເຂົ້າໃຈງ່າຍ, ເຮົາຈະສ້າງ dog1 ແລະ dog2 ເຊິ່ງ dog1 ມີຊື່ວ່າ Daisy ເປັນພັນລາບາດໍ ສີດຳສຸດໜ້າຮັກ ແລະ dog2 ຊື່ວ່າ Jack ເປັນພັນ ແຈັກຣັດເຊວ ສີຂາວທີ່ກ້າຫານພ້ອມບວກກັບທຸກຢ່າງ.
![Dog Object](https://res.cloudinary.com/practicaldev/image/fetch/s--O_jSVpBB--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/lyajz4lade30ci2koirq.png)

ເມື່ອເຮົາລອງ log ເບິ່ງ dog1 ຜ່ານ console ແລະ expand properties ຂອງມັນອອກມາເບິ່ງຈະໄດ້ດັ່ງນີ້:
![dog1](https://res.cloudinary.com/practicaldev/image/fetch/s--cA-2FOVV--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/tt4yfoz8ckmxfofv3f9v.gif)

ເຮົາຈະເຫັນ properties ທີ່ເຮົາໄດ້ເພີ່ມເຂົ້າເຊັ່ນ: `name`, `breed`, `color` ແລະ `bark`. ແຕ່ໆໆໆ ເຫັນຫຍັງບໍ່? ໄອ້ property `__proto__` ຄືແບ້ອີ່ຫຍັງອີກລ່ະບາດນິ?🤯 ມັນ non-enumerable(ນັບບໍ່ໄດ້), ເຊິ່ງມັນກໍ່ໝາຍຄວາມວ່າໂດຍປົກກະຕິມັນຈະບໍ່ສະແດງເມື່ອເຮົາ get properties ໃນ object, ດຽວເຮົາມາຂະຫຍາຍຄວາມຈຸດນີ້ນຳກັນ.
![__proto__](https://res.cloudinary.com/practicaldev/image/fetch/s--zxO-eMV0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/dye57pcku5cfaz0er60c.gif)

ັມັນຄ້າຍຄືກັບ Dog.prototype object ເລີຍ, ແຕ່ເຮົາລອງເດົາເບິ່ງວ່າ `__proto__` ແມ່ນເປັນການອ້າງອີງ Dog.prototype object🤔. ແຕ່ເຊື່ອບໍ່ວ່ານີ້ແມ່ນ **prototypal inheritance** - ແຕ່ລະ instance ຂອງ constructor ສາມາດເຂົ້າເຖິງ prototype ຂອງ constructor ໄດ້🥶.
![dog properties object](https://res.cloudinary.com/practicaldev/image/fetch/s--FBGV--dx--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/t6kiav029gl2e0hv1xct.gif)

ແລ້ວມັນຄັກບ່ອນໃດ?🫣, ບາງເທື່ອເຮົາກໍ່ມີ properties ທີ່ instance ທັງໝົດໃຊ້ຮ່ວມກັນ. ຕົວຢ່າງໃນກໍລະນີນີ້ແມ່ນ `bark function`, ເຊິ່ງທຸກໆ instance ແມ່ນມີຄືກັນທັງໝົດ ແລ້ວເປັນຫຍັງເຮົາຈຶ່ງຕ້ອງມາສ້າງ function ໃໝ່ທຸກຄັ້ງທີ່ເຮົາສ້າງ `dog` ແຖມຍັງໃຊ້ memory ໃນແຕ່ລະຄັ້ງອີກ? ທັງໆທີ່ເຮົາສາມາດເພີ່ມ function ນີ້ລົງໄປໃນ `Dog.prototype` object ໄດ້ເລີຍ😂.
![add function to Dog.prototype](https://res.cloudinary.com/practicaldev/image/fetch/s--2026kdwz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/59nlnyqioosaowj09xn8.gif)

ເມື່ອເຮົາພະຍາຍາມທີ່ຈະ access property ໃນ instance ທຳອິດ engine ຈະຄົ້ນຫາຢູ່ local ເພື່ອເບິ່ງວ່າ property ໄດ້ຖືກ defined ໃນ object ເອງຫຼືບໍ່?. ແຕ່ຢ່າງໃດກໍ່ຕາມ ຖ້າມັນບໍ່ພົບ property ທີ່ເຮົາຕ້ອງການ access ນັ້ນ, engine ຈະທຳການເຂົ້າໄປເບິ່ງຢູ່ prototype ຜ່ານ `__proto__` property.
![access prototype](https://res.cloudinary.com/practicaldev/image/fetch/s--gg5KU5nB--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/fabyyjot1s78mttyzzk8.gif)

ຕອນນີ້ມັນເປັນພຽງຂັ້ນຕອນດຽວ, ແຕ່ມັນຍັງມີອີກຫຼາຍຂັ້ນຕອນຕື່ມອີກ. ຖ້າຫາກ follow ຕາມຕົວຢ່າງທີ່ຜ່ານມາຈະສັງເກດເຫັນວ່າເຮົາບໍ່ໄດ້ເພີ່ມ property 1 ລາຍການ, ເມື່ອເຮົາ expand `__proto__` object ທີ່ສະແດງ `Dog.prototype`. `Dog.prototype` ເປັນ object ໝາຍຄວາມວ່າທີ່ຈິງແລ້ວມັນເປັນ instance ຂອງ `Object constructor` ສະແດງວ່າ `Dog.prototype` ກໍ່ມີ `__proto__` property, ເຊິ່ງເປັນການອ້າງອີງເຖິງ  `Object.prototype`.
![Object.prototype](https://res.cloudinary.com/practicaldev/image/fetch/s--vJ7k8Gb3--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/8vk5w6loliot818f2lcd.gif)

ໃນທີ່ສຸດເຮົາກໍ່ໄດ້ຄຳຕອບແລ້ວວ່າບັນດາ `built-in methods` ມາຈາກໄສ, ມາຢູ່ໃນ prototype chain ນັ້ນເອງ🤩. ຖ້າໃຜຍັງບໍ່ໄດ້ຄຳຕອບກັບໄປອ່ານອີກຮອບເດີ 5555.

ຕົວຢ່າງ: `.toString()` method. ມັນຖືກ defined ຢູ່ local ໃນ `dog1` object ບໍ່? ເທົ່າທີ່ເຫັນກະບໍ່ໃດລ່ະ😂 ຫຼື ມັນຖືກ defined ຢູ່ໃນ object `dog1.__proto__` ແລ້ວມັນມີການອ້າງອີງເຖິງ `Dog.prototype` ບໍ່? ບໍ່ໜ້າຈະແມ່ນເຊັ່ນກັນ, ແຕ່ມັນຖືກ defined ຢູ່ໃນ `Dog.prototype.__proto__` ທີ່ອ້າງອີງເຖິງ `Object.prototype` ພີ້ນ່ະ🤣.
![Dog.prototype.__proto__](https://res.cloudinary.com/practicaldev/image/fetch/s--16IwaVkk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/fpt5nndkbq5kau0nqeqj.gif)

ຕອນນີ້ເຮົາຫາກໍ່ໄດ້ໃຊ້ constructor functions (`function Dog() { ... }`) ທີ່ຍັງເປັນວິທີຂຽນທີ່ຖືກຕ້ອງຢູ່ໃນພາສາ JavaScript, ແຕ່ມີວິທີທີ່ງ່າຍກວ່ານັ້ນໃນການໃຊ້ constructor functions ທີ່ເຮັດວຽກຮ່ວມກັນກັບ prototypes ຄື: `classes`.

> ການໃຊ້ classes ເປັນພຽງການປ່ຽນວິທີຂຽນເພື່ອໃຫ້ເຮົາໃຊ້ constructor functions ໄດ້ກະທັດຮັດ ແລະ ເຂົ້າໃຈງ່າຍຂຶ້ນເທົ່ານັ້ນ, ເຊິ່ງທຸກຢ່າງຍັງຄົງເຮັດວຽກປົກກະຕິ.

ເຮົາຂຽນ classes ດ້ວຍ `class` keyword. ໂດຍພື້ນຖານ class ຈະມີ `constructor` function, ບັນດາ properties ທີ່ເຮົາຕ້ອງການເພີ່ມໃນ prototype ແມ່ນຖືກ defined ຢູ່ໃນ body ຂອງ classes.
![classes](https://res.cloudinary.com/practicaldev/image/fetch/s--3PePIjz5--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/qnbqubcipqjl5pb3i8ds.gif)

ອີກຂໍ້ດີຂອງການໃຊ້ class ກໍ່ຄືເຮົາສາມາດ `extend` classes ອື່ນໆໄດ້.

ເຮົາຕ້ອງການສະແດງໝາສາຍພັນຊິວາວາຫຼາຍໆໂຕ, ເພື່ອໃຫ້ຕົວຢ່າງຂອງເຮົາເຂົ້າໃຈງ່າຍ ເຮົາຈະສົ່ງ property `name` ໄປ Dog class ແທນ `name`,`breed` ແລະ `color`. ແຕ່ວ່າຊິວາວາຍັງຄົງມີສະກິວພິເສດຢູ່ຄື: ມັນເຫົ່າເກັ່ງແຖມຍັງສຽງແຫຼມໆນ້ອຍໆອີກ🤣 ແທນທີ່ມັນຈະເຫົ່າແບບດຸດັນເຣົ້າໃຈ(`Woof`), ຖ້າເປັນຊິວາວາອາດຈະເປັນ `small woof`.

ໃນ `extended class` ເຮົາສາມາດ access ເຂົ້າໄປ parent class' constructor ໂດຍໃຊ້ `super` keyword. ສ່ວນບັນດາ arguments ທີ່ parent class' constructor ຕ້ອງການ ເຮົາຕ້ອງສົ່ງຄ່າໄປ super, ເຊິ່ງໃນກໍລະນີນີ້ແມ່ນ `name`.
![Dog Class](https://res.cloudinary.com/practicaldev/image/fetch/s--Fitn1c9K--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/tx25dar3duqo0z2bpfam.png)

`myPet` ສາມາດ access ເຂົ້າໄດ້ທັງ `Chihuahua.prototype` ແລະ `Dog.prototype` (ແລະ `Object.prototype` ໂດຍອັດຕະໂນມັດ, ເນື່ອງຈາກ `Dog.prototype` ເປັນ object).
![prototypal inheritance](https://res.cloudinary.com/practicaldev/image/fetch/s--WOeqUeM3--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/qija16dju8t5j1ksy0ps.gif)

ເນື່ອງຈາກ `Chihuahua.prototype` ມີ `smallBark` function ແລະ `Dog.prototype` ມີ `bark` function ເຮົາຈຶ່ງສາມາດ access ໄດ້ທັງ `smallBark` ແລະ `bark` ໃນ `myPet`.

ເຮົາລອງຈິນຕະນາການເບິ່ງວ່າ prototype chain ບໍ່ໄດ້ access ໄປໄດ້ຕະຫຼອດ. ຖ້າຫາກວ່າມີ object ທີ່ເປັນ prototype ເທົ່າກັບຄ່າ `null`, ໃນກໍລະນີນີ້ແມ່ນ `Object.prototype` object ຖ້າເຮົາພະຍາຍາມ access property ທີ່ມັນບໍ່ພົບຢູ່ local ຫຼື prototype chain ມັນຈະ return ຄ່າ `undefined`.
![prototype chain equal null](https://res.cloudinary.com/practicaldev/image/fetch/s---EseK2fk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/1905zxijp45soy0jzle2.gif)

---
ເຖິງແມ່ນວ່າໃນບົດຄວາມນີ້ໄດ້ອະທິບາຍທຸກຢ່າງກ່ຽວກັບການໃຊ້ constructor functions ແລະ classes ໄປແລ້ວ, ແຕ່ມັນກໍ່ຍັງມີອີກວິທີອື່ນເຊັ່ນກັນໃນການທີ່ຈະເພີ່ມ prototypes ໃນ objects ເຊັ່ນ: `Object.create` method, ເຊິ່ງ method ນີ້ເຮົາສາມາດສ້າງ object ໃໝ່ ແລະ ສາມາດລະບຸໄດ້ເລີຍວ່າ prototype ຂອງ object ເຮົາຈະມີໜ້າຕາແບບໃດ.

ວິທີການແມ່ນເຮົາຈະທຳການສົ່ງ object ໃນຮູບແບບຂອງ argument ໄປ `Object.create` method, object ທີ່ເຮົາສົ່ງເຂົ້າໄປຈະເປັນ prototype ຂອງ object ທີ່ເຮົາສ້າງ.
![Object.create](https://res.cloudinary.com/practicaldev/image/fetch/s--uw9DJFU0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/kbwwsn1fd4gngd05tm9a.png)

ເຮົາມາລອງ log ເບິ່ງ object ທີ່ເຮົາຫາກໍ່ສ້າງລອງເບິ່ງ:
![log Object.create](https://res.cloudinary.com/practicaldev/image/fetch/s--9sWtvaRG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/6zzt8zpy85gtitxmpwi9.gif)

ເຮົາບໍ່ໄດ້ທຳການເພີ່ມ properties ໃດໆເຂົ້າໄປໃນ `me` opbject, ມັນມີພຽງ `__proto__` property ທີ່ non-enumerable(ບໍ່ສາມາດນັບໄດ້)ເທົ່ານັ້ນ. `__proto__` property ມີການອ້າງອີງໄປຍັງ object ທີ່ເຮົາໄດ້ທຳການ defined ໃຫ້ເປັນ prototype. `person` object ທີ່ມີ `name` ແລະ `age` ເປັນ property, ເນື່ອງຈາກ `person` object ເປັນ object ເຊິ່ງ value ຂອງ `__proto__` property ໃນ `person` object ແມ່ນ `Object.prototype`.

ອ້າງອີງ: [🎉👨‍👩‍👧‍👧 JavaScript Visualized: Prototypal Inheritance](https://dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co)