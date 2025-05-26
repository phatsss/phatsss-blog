---
slug: generators-and-iterators-in-javascript
date: 2023-04-24
title: "JavaScript EP6: Generators and Iterators🔌🩻"
description: Generators and Iterators in JavaScript
authors: phatsss
tags: [Javascript]
language: lo
---
ນັບຕັ້ງແຕ່ ES6 ເປັນຕົ້ນມາ, JavaScript ມີສິ່ງໜຶ່ງທີ່ໂຄດຄັກເລີຍນັ້ນກໍ່ຄື generator functions ເຊິ່ງຫຼາຍໆຄົນທີ່ຂຽນ JavaScript ກໍ່ອາດຈະມີບາງຄົນທີ່ໃຊ້ ແລະ ສ່ວນໃຫຍ່ກໍ່ອາດຈະບໍ່ໄດ້ໃຊ້ເລີຍ, ແຕ່ຂໍບອກໄວ້ກ່ອນວ່າມັນ cool ອີ່ຫຼີ ຢາກໃຫ້ທຸກຄົນໄດ້ລອງ🛸.

<!-- truncate -->
ວ່າແຕ່ generator functions ມັນແມ່ນແບ້ຫຍັງອີກແລ້ວວວວ?🤣, ທຳອິດເຮົາມາເບິ່ງ function ແບບທຳມະດາ ແລະ ແບບເດີມໆກັນກ່ອນ.
![normal function](https://res.cloudinary.com/practicaldev/image/fetch/s--SPQNaFkb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/2ta7m1vxju6j1dzg7t7c.png)

ຂ້ອຍຮູ້ວ່າພວກເຈົ້າຄິດຫຍັງຢູ່, ແຕ່ແມ່ນແລ້ວ ມັນກະແຄ່ function ທຳມະດາໆອັນໜຶ່ງ ແລະ ທາງໃນ function ມີການ log ຄ່າທີ່ເປັນ string ອອກມາ 4 ຕົວ.
![run normal function](https://res.cloudinary.com/practicaldev/image/fetch/s--NYzqeCCE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/unsiscmakhlgxl4dcji7.gif)

ບາງຄົນກໍ່ອາດຈະຄິດວ່າເປັນຫຍັງຕ້ອງມາ run code ໂງ່ໆໃຫ້ມັນເສຍເວລາຊີວິດເບິ່ງວ່ະ? ແຕ່ກະນັ້ນລ່ະ ເຮົາກໍ່ເຫັນວ່າ function ມັນກໍ່ເຮັດວຽກຕາມປົກກະຕິຂອງມັນຕັ້ງແຕ່ເລີ່ມຕົ້ນຈົນຈົບ(ຍົກເວັ້ນໃນກໍລະນີທີ່ມີຂໍ້ຜິດພາດອີ່ຫຍັງບາງຢ່າງ)ໂດຍໃຊ້ **run-to-completion** ໂມເດວ, ປະເດັນຄືເຮົາບໍ່ສາມາດເຮັດໃຫ້ function ນີ້ຢຸດການເຮັດວຽກກາງຄັນໄດ້🤯.

ມາຮອດຈຸດທີ່ຟິນທີ່ສຸດແລ້ວ: generator function ຈະບໍ່ໄດ້ follow ຕາມ run-to-completion model, ນີ້ໝາຍຄວາມວ່າເຮົາສາມາດຢຸດການເຮັດວຽກຂອງ generator function ໄດ້ໃນຂະນະທີ່ມັນເຮັດວຽກຢູ່ຫວາ? ໃຈເຢັນນນ!!! ເຮົາມາເບິ່ງນຳກັນກ່ອນວ່າ generator function ແມ່ນຫຍັງ? ແລະ ເຮົາຈະຈັດການກັບມັນໄດ້ດ້ວຍວິທີໃດແດ່.

ເຮົາສາມາດຂຽນ generator function ໂດຍການຂຽນເຄື່ອງໝາຍດອກຈັນ ຫຼື ເຄື່ອງໝາຍດາວ ຫຼື ເຄື່ອງໝາຍແບ້ອີ່ຫຍັງຈັກຢ່າງທີ່ມີໜ້າຕາແບບນີ້(*) ຢູ່ທາງຫຼາຍຂອງ function keyword.
![generator function](https://res.cloudinary.com/practicaldev/image/fetch/s--hqnT9Dtn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/7j9pxfpvmecip71ldjwg.png)

ແຕ່ນັ້ນກໍ່ບໍ່ແມ່ນທັງໝົດຂອງສິ່ງທີ່ເຮົາຕ້ອງເຮັດ, ເນື່ອງຈາກ generator function ແລະ regular function ໂດຍທົ່ວໄປແຕກຕ່າງກັນຢ່າງສິ້ນເຊີງ:
- ການເອີ້ນໃຊ້ generator function ຈະທຳການ return **generator object** ທີ່ເປັນ iterator.
- ເຮົາສາມາດໃຊ້ `yield` keyword ໃນ generator function ເພື່ອເຮັດໃຫ້ function ນັ້ນຢຸດການເຮັດວຽກຊົ່ວຄາວ.

ວ່າແຕ່ມັນໝາຍຄວາມວ່າຈັ່ງໃດລ່ະ?🤔.
ເຮົາມາເລີ່ມກັນຕັ້ງແຕ່ທຳອິດເລີຍຄື: ການເອີ້ນໃຊ້ generator function ຈະມີການ return **generator object** ອອກມາ. ແຕ່ເມື່ອເຮົາທຳການເອີ້ນໃຊ້ regular function, code ທີ່ຢູ່ໃນ function body ຈະຖືກ execute ແລະ ທຳການ return value ອອກມາປົກກະຕິ. ແຕ່ເຖິງຢ່າງໃດກໍ່ຕາມ, ເມື່ອເຮົາໄດ້ເອີ້ນໃຊ້ generator function ມັນຈະ return **generator object** ອອກມາ, ເຊິ່ງເມື່ອເຮົາທຳການ log value ທີ່ໄດ້ເບິ່ງຈະມີໜ້າຕາດັ່ງນີ້:
![generator object](https://res.cloudinary.com/practicaldev/image/fetch/s--aXTBozny--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/lyuivuuepy1hzpok8rc5.gif)

ເຊື່ອວ່າຫຼາຍໆຄົນທີ່ອ່ານມາຮອດນີ້ຄົງຈະຫຼອນສົມຄວນຢູ່, ໃນການນຳໃຊ້ຕົວຈິງມັນອາດຈະບໍ່ມີຄວາມຈຳເປັນທີ່ຈະຕ້ອງໃຊ້ properties ທັງໝົດທີ່ເຮົາເຫັນໃນ log. ດຽວເຮົາມາເບິ່ງນຳກັນຕໍ່ວ່າ generator object ມັນສາມາດນຳໃຊ້ແນວໃດໄດ້ແນ່🥶.

ທຳອິດເຮົາຈະຍ້ອນກັບໄປອີກໜ້ອຍໜຶ່ງເພື່ອທີ່ຈະຕອບຄຳຖາມທີ່ວ່າ: generator function ແຕກຕ່າງກັບ regular function ແນວໃດ?, ເຊິ່ງຄຳຕອບໃນທີ່ນີ້ກໍ່ຄົງຈະແມ່ນ: ໃນ generator function ເຮົາສາມາດໃຊ້ `yeild` keyword ເພື່ອຢຸດການ execution ໄດ້.

ຕົວຢ່າງ: ເຮົາສາມາດຂຽນ generator function ແບບນີ້ໄດ້.
![genFunc](https://res.cloudinary.com/practicaldev/image/fetch/s--DMCbuRT2--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/1qo0upq0meh6gj2gs08o.png)
ໃນ function ດ້ານເທິງ `yield` keyword ເຮັດວຽກແນວໃດ?, ການ execution ຂອງ generator ຈະຢຸດ(`pause`)ກໍ່ຕໍ່ເມື່ອມັນພົບ `yield` keyword ແລະ ຈຸດພີກຂອງການໃຊ້ generator ຄືຕອນທີ່ເຮົາເອີ້ນໃຊ້ function ຄັ້ງຕໍ່ໄປຄື ມັນຈະຈື່ວ່າຄັ້ງຫຼ້າສຸດທີ່ມັນຖືກຢຸດມັນຖືກຢຸດຢູ່ບ່ອນໃດ ແລະ ມັນສາມາດດຳເນີນການຕໍ່ຈາກຈຸດເດີມໄປໄດ້ເລີຍ😱. ມາເບິ່ງນຳກັນວ່າມັນເກີດຫຍັງຂຶ້ນຢູ່ບ່ອນນີ້ແນ່?
1. ຄັ້ງທຳອິດທີ່ເຮົາ run, ມັນຈະ "pauses" ໃນແຖວທຳອິດ ແລະ yields ຄ່າ '✨' ທີ່ເປັນ string.
2. ເມື່ອເຮົາ run ຄັ້ງທີ 2, ມັນຈະເລີ່ມຈາກແຖວທີ່ມັນຢຸດເທື່ອກ່ອນຄື `yield` keyword ອັນທຳອິດ. ມັນຈະ run ໄປເລື້ອຍໆຈົນຮອດ `yield` keyword ທີ 2 ແລະ yields ຄ່າ '💕' ທີ່ເປັນ string.
3. ເມື່ອເຮົາ run ຄັ້ງທີ 3,​ ມັນຈະເລີ່ມຈາກແຖວທີ່ມັນຢຸດໄວ້ຈາກເທື່ອກ່ອນ ຫຼື ຈາກ `yield` keyword ທີ 2. ເຊິ່ງມັນກໍ່ຈະເຮັດຄືເກົ່າກໍ່ຄືມັນຈະ run ໄປເລື້ອຍໆຈົນຮອດ `return` keyword(ເນື່ອງຈາກບໍ່ມີ `yield` keyword ອື່ນແລ້ວ) ແລະ ມັນຈະທຳການ return ຄ່າ `Done!` ອອກໄປ.

ວ່າແຕ່ເຮົາຈະເອີ້ນໃຊ້ generator function ໄດ້ແນວໃດທັງໆທີ່ເຮົາກໍ່ເຫັນແລ້ວວ່າການທີ່ເຮົາເອີ້ນໃຊ້ generator function ມັນຈະ return generator object ອອກມາ?🤔 ບ່ອນນີ້ແຫຼະທີ່ເຮົາຈະໄດ້ generator object ອອກມາຫຼິ້ນ(ບອກໄດ້ເລີຍວ່າບັນເທີງກັນທົ່ວໜ້າ🤣).

ໃນ generator object ຈະມີ `next` method ມາໃຫ້ນຳ(ຢູ່ໃນ prototype chain). ເຊິ່ງ method ນີ້ເຮົາຈະໃຊ້ໃນການ iterate generator object, ແຕ່ໃນການທີ່ຈະຈື່ state ຂອງຈຸດທີ່ມັນຢຸດກ່ອນໜ້ານີ້ຫຼັງຈາກທີ່ມັນ yield value, ເຮົາຕ້ອງ assign generator object ໃນຮູບແບບຂອງ variable ໃນຕົວຢ່າງເຮົາໃຊ້ຊື່ວ່າ `genObj` ຫຍໍ້ມາຈາກ `generatorObject`.
![generatorObject](https://res.cloudinary.com/practicaldev/image/fetch/s--23CZeKcI--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/y54clkzwbc9oemzgybh5.gif)

ເຮົາມາເບິ່ງກັນຕໍ່ອີກວ່າຈະເກີດຫຍັງຂຶ້ນຖ້າເຮົາເອີ້ນໃຊ້ `next` method ທີ່ຢູ່ໃນ `genObj` generator object.
![genObj generator object](https://res.cloudinary.com/practicaldev/image/fetch/s--n1Qw3ur9--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/ryzc9gpzw4x5f0eqhzad.gif)

generator ຈະທຳການ run ຈົນກວ່າຈະພົບກັບ `yield` keyword ທຳອິດ, ເຊິ່ງໃນຕົວຢ່າງມັນຈະຢູ່ແຖວທຳອິດ ມັນໄດ້ທຳການ yield object ທີ່ມີ `value` property  ແລະ `done` property.

`{ value: ... , done: ... }`

- `value` property ຈະເປັນ value ທີ່ເຮົາໄດ້ທຳການ yield ໄວ້.
- `done` property ເປັນຄ່າ boolean, ທີ່ຈະເປັນຄ່າ true ກໍ່ຕໍ່ເມື່ອ generator function ໄດ້ທຳການ return value ອອກໄປແລ້ວ(ບໍ່ແມ່ນ yield)

ເຮົາໄດ້ທຳການຢຸດການ iterate ໃນ generator ທີ່ເບິ່ງຄືກັບວ່າ function ມັນຖືກ `paused`, ບອກເລີຍວ່າສຸດຈັກປະລັກຂິກເລີຍ. ດຽວເຮົາມາລອງເອີ້ນໃຊ້ `next` method ອີກຮອບລອງເບິ່ງ.
![call next method](https://res.cloudinary.com/practicaldev/image/fetch/s--9l_dv85d--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/e7hz87c6xtd31qjx19va.gif)

ທຳອິດເຮົາໄດ້ທຳການ log ຄ່າທີ່ເປັນ string ອອກມາເບິ່ງຈະໄດ້ `First log!` ຢູ່ໃນ console.log(), ແຕ່ເນື່ອງຈາກມັນບໍ່ແມ່ນ `yield` ຫຼື `return` keyword ມັນຈຶ່ງເຮັດວຽກຕໍ່ຈົນກວ່າຈະພົບ `yield` keyword ທີ່ໄດ້ຄ່າ `'💕'`. object ທີ່ໄດ້ຈາກການ `yield` ໂດຍ value property ຈະໄດ້ `'💕'` ແລະ done property, ເຊິ່ງ done property ຈະຍັງເປັນຄ່າ `false` ເນື່ອງຈາກ generator ຍັງບໍ່ມີການ return ເທື່ອ.

ເຮົາມາລອງໃຊ້ `next` method ອີກຮອບ, ໜ້າຈະເປັນຮອບສຸດທ້າຍແລ້ວມັ້ງ🤣
![last next method](https://res.cloudinary.com/practicaldev/image/fetch/s--P1hGzgIq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/33epxsx8znmhm0qojsuu.gif)

ເຮົາໄດ້ທຳການ log ຄ່າທີ່ເປັນ string ຈະໄດ້ `Second log!` ຢູ່ໃນ console.log() ຄືເກົ່າ, ຈາກນັ້ນມັນຈະພົບ `return` keyword ພ້ອມດ້ວຍຄ່າ `'Done!'`. object ທີ່ຖືກ return ອອກມາຈະໄດ້ value property ແມ່ນ `'Done!'`, ມາຮອດຕອນນີ້ເຮົາໄດ້ທຳການ return ຄ່າອອກໄປແລ້ວ ດັ່ງນັ້ນ value ຂອງ done property ຈະມີຄ່າເປັນ `true`.

done property ຖືວ່າເປັນອີກສ່ວນທີ່ສຳຄັນທີ່ສຸດເລີຍກໍ່ວ່າໄດ້, ເຊິ່ງເຮົາສາມາດ iterate generator object ໄດ້ພຽງຄັ້ງດຽວເທົ່ານັ້ນ. ແລ້ວຖ້າສົມມຸດເຮົາເອີ້ນໃຊ້ `next` method ອີກຮອບມັນຈະເກີດຫຍັງຂຶ້ນ?
![return from generator function](https://res.cloudinary.com/practicaldev/image/fetch/s--Xe9VmNyb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/wooo83by4eh12akmg5wb.gif)
ຄຳຕອບກໍ່ງ່າຍໆເລີຍຄືມັນຈະທຳການ return ຄ່າ `undefined` ອອກມາທຸກຄັ້ງ, ແຕ່ຖ້າຕ້ອງການຢາກຈະ iterate ອີກກໍ່ພຽງສ້າງ generator object ໃໝ່.

---

ດັ່ງທີ່ເຮົາໄດ້ເຫັນດ້ານເທິງແລ້ວວ່າ generator function ຈະທຳການ return iterator(generator object), ແຕ່ iterator ແມ່ນຫຍັງອີກແລ້ວບາດນິ? ເອົາຄຳຕອບໄວ້ກ່ອນແລ້ວຄ່ອຍໄປເບິ່ງຕົວຢ່າງນຳກັນດ້ານລຸ່ມ. iterator ໝາຍເຖິງ object ທີ່ຖືກ return ອອກມາ ແລະ ເຮົາສາມາດໃຊ້ `for of` loops ແລະ spread operator ກັບ object ນັ້ນໆໄດ້.

ເຮົາລອງ spread ຄ່າທີ່ຖືກ yield ເຊິ່ງຈະເປັນຂໍ້ມູນຮູບແບບຂອງ array ໂດຍນຳໃຊ້ `[... ]` syntax.
![spread operator](https://res.cloudinary.com/practicaldev/image/fetch/s--rZrIexdt--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/xgk99j592vbx3qirw5or.gif)

ຫຼື ອາດຈະໃຊ້ `for of` loop
![for of](https://res.cloudinary.com/practicaldev/image/fetch/s--RAEn2yjk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/98k242jz3bqorkjhukwl.gif)
ຫຼື ອາດຈະໃຊ້ວິທີອື່ນກໍ່ໄດ້ເຊັ່ນກັນ.

ແຕ່ວ່າແມ່ນຫຍັງທີ່ເຮັດໃຫ້ iterator ເປັນ iterator?😳 ຄຳຕອບງ່າຍກໍ່ຍ້ອນວ່າເຮົາສາມາດໃຊ້ `for-of` loops ແລະ `spread` syntax ກັບ arrays, strings, maps ແລະ sets ໄດ້ນັ້ນເອງ, ສ່ວນອີກເຫດຜົນກໍ່ຍ້ອນມັນມີການ implement ສິ່ງທີ່ເອີ້ນວ່າ **iterator protocol**: `[Symbol.iterator]`. ຖ້າຍັງບໍ່ເຂົ້າໃຈ ເຮົາມາເບິ່ງຕົວຢ່າງນຳກັນດີກວ່າ.
![iterator protocol](https://res.cloudinary.com/practicaldev/image/fetch/s--llTXHrg7--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/hs2sf1oj537c56yaej1h.png)
ບັນດາ `array`,`string` ແລະ `generatorObject` ລ້ວນແລ້ວແຕ່ເປັນ iterators. ເຮົາລອງມາເບິ່ງ value ຂອງມັນດີກວ່າ `[Symbol.iterator]` property.
![Symbol.iterator](https://res.cloudinary.com/practicaldev/image/fetch/s--WWSsnUX7--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/a7inxsrvrp8ykg3xw6zu.gif)
ແຕ່ value ຂອງ `[Symbol.iterator]` ທີ່ເຫັນຢູ່ໃນນັ້ນບໍ່ສາມາດ iterate ໄດ້ບໍ່? ເພື່ອຕອບຄຳຖາມນີ້ເຮົາໄປເບິ່ງຕົວຢ່າງນຳກັນເລີຍ.
![value of iterator](https://res.cloudinary.com/practicaldev/image/fetch/s--1IBldFRj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/tpuzuy58g8m7grxvqw8x.gif)
ຄຳຕອບທຳອິດຄື: ແມ່ນແລ້ວ😄, ແຕ່ໃຈເຢັນກ່ອນໄອ້ສອງຢ່າຟ້າວເສຍໃຈໄປ ຄ່າຂອງມັນແຄ່ບໍ່ໄດ້ຢູ່ບ່ອນນັ້ນຊື່ໆ🤣. ດັ່ງນັ້ນຖ້າຢາກໄດ້ value ອອກມາເຮົາກໍ່ພຽງແຕ່ທຳການ add `[Symbol.iterator]` property ເຂົ້າໄປແບບ manual ແລະ ເຮົາຈະສາມາດ iterate ໄດ້ນັ້ນເອງ.

`[Symbol.iterator]` ມີການ return iterator ອອກມາ, ເຊິ່ງມັນຈະພ່ວງ `next` method ທີ່ຈະ return object ອອກມາຄ້າຍໆກັບຕົວຢ່າງທີ່ເຮົາເຫັນຜ່ານມາ: `{ value: '...', done: false/true }`.

ເພື່ອຄວາມງ່າຍ, ເຮົາສາມາດ set value ຂອງ `[Symbol.iterator]` ໃຫ້ເທົ່າກັບ generator function ເຊິ່ງມັນຈະ return iterator ອອກມາໂດຍ default ຢູ່ແລ້ວ, ລອງສ້າງ object ທີ່ເຮົາສາມາດ iterate ໄດ້ ແລະ ທຳການ yield value ຂອງ object ທັງໝົດ.
![Symbol.iterator equal generator function](https://res.cloudinary.com/practicaldev/image/fetch/s--S-0xsWy9--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/oysyy7v71o2q9q9mrcsx.png)
ສັງເກດເບິ່ງວ່າຈະເກີດຫຍັງຂຶ້ນຖ້າຫາກເຮົາໃຊ້ spread syntax ຫຼື `for-of` loop ກັບ object ທີ່ເຮົາໄດ້ມາ
![using spread syntax with iterator](https://res.cloudinary.com/practicaldev/image/fetch/s--y4uwsswR--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/pw2qq1tkfbp8zccuecac.gif)
ຫຼືເຮົາອາດຈະຕ້ອງການພຽງແຕ່ object keys, ຖ້າແບບນີ້ກໍ່ງ່າຍໆເລີຍ ເຮົາພຽງທຳການ yield `Object.keys(this)` ແທນ `this`
![Object.keys(this)](https://res.cloudinary.com/practicaldev/image/fetch/s--JKxhr5ZJ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/ankit4dn67unnwzfkv9y.png)
ມາເບິ່ງຜົນລັບນຳກັນ
![res of Object.keys(this)](https://res.cloudinary.com/practicaldev/image/fetch/s--OOE8nOyw--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/75kf40lqcqrudzqgkeb7.gif)

`Object.keys(this)` ເປັນ array, ດັ່ງນັ້ນ value ທີ່ຖືກ yield ຈະໄດ້ເປັນ array ຈາກນັ້ນເຮົາຈະ spread array ທີ່ເຮົາໄດ້ມາໄປເປັນ array ອື່ນໆ ສິ່ງທີ່ຈະເກີດຂຶ້ນກໍ່ຄືເຮົາຈະໄດ້ nested array ມາແທນ. ເຮົາບໍ່ໄດ້ຕ້ອງການ array ແບບນີ້, ເຮົາພຽງຕ້ອງການ yield ແຕ່ລະ key ເທົ່ານັ້ນ.

ເຮົາສາມາດ yield value ຈາກ iterator ຢູ່ໃນ generator ໄດ້ໂດຍໃຊ້ `yield*` keyword, ສົມມຸດວ່າເຮົາມີ generator function ທີ່ yield ທຳອິດຈະ yield "🥑" ຕໍ່ມາເຮົາມີການ yield values ມາຈາກ iterator(ໃນຕົວຢ່າງນີ້ເຮົາຈະໃຊ້ເປັນ array) ເຊິ່ງໃນກໍລະນີນີ້ເຮົາໄດ້ໃຊ້ `yield*` keyword, ຈາກນັ້ນເຮົາໄດ້ທຳການແທນຄ່າດ້ວຍ generator ອື່ນ.
![yield*](https://res.cloudinary.com/practicaldev/image/fetch/s--8ZUO_nmt--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/jtyn5s5o3vdhjkbwwyb0.gif)
ແຕ່ລະ value ຂອງ generator ທີ່ໄດ້ແທນຄ່າຈະຖືກ yield ກ່ອນທີ່ມັນຈະທຳການ iterate `genObj` iterator ຕໍ່ໄປ.

ນີ້ຄືສິ່ງທີ່ເຮົາຕ້ອງເຮັດໃນກໍລະນີທີ່ເຮົາຕ້ອງການ object keys ທັງໝົດ
![object keys](https://res.cloudinary.com/practicaldev/image/fetch/s--pDQ9YJem--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/btr4ytbb04c44qfs96v2.gif)

---
ສຳລັບການນຳໃຊ້ generator function ອີກແບບໜຶ່ງກໍ່ຄື: ເຮົາສາມາດໃຊ້ເປັນ observer functions ໄດ້, ເນື່ອງຈາກ generator ສາມາດລໍຖ້າ incoming data ແລະ ເມື່ອມີ data ຖືກສົ່ງຜ່ານເຂົ້າມາເທົ່ານັ້ນມັນຈຶ່ງຈະທຳການ process. ເບິ່ງຕົວຢ່າງດ້ານລຸ່ມ🧐
![generator as a observer functions](https://res.cloudinary.com/practicaldev/image/fetch/s--tfcD--K5--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/fts36exs5chxacikjeo3.png)
ສິ່ງໜຶ່ງທີ່ຕ່າງກັນຢ່າງຊັດເຈນເລີຍໃນທີ່ນີ້ແມ່ນເຮົາບໍ່ໄດ້ມີພຽງ `yield [value]` ຄືກັບທີ່ເຮົາເຫັນໃນຕົວຢ່າງທີ່ຜ່ານມາ, ແຕ່ເຮົາໄດ້ assign ຄ່າໄວ້ໃນຕົວປ່ຽນທີ່ຊື່ວ່າ `second` ແລະ ມີການ yield value ທີ່ເປັນ string ເຊິ່ງມີຄ່າ `First!`, ເຊິ່ງ value ນີ້ເອງຈະຖືກ yield ໃນຄັ້ງທຳອິດທີ່ເຮົາເອີ້ນໃຊ້ `next` method.

ມາເບິ່ງວ່າຈະເກີດຫຍັງຂຶ້ນເມື່ອເຮົາເອີ້ນໃຊ້ `next` method ຄັ້ງທຳອິດ.
![yield value & assign to const keyword](https://res.cloudinary.com/practicaldev/image/fetch/s--q1ylTmRk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/ob5a4yi79it9q2ben137.gif)
ເມື່ອມັນພໍ້ `yield` ໃນແຖວທຳອິດ ແລະ ມັນໄດ້ທຳການ yield value `First!`, ດັ່ງນັ້ນ value ຂອງຕົວປ່ຽນ `second` ຈະມີຄ່າແນວໃດ?

ແນ່ນອນວ່າມັນຈະເປັນ value ທີ່ເຮົາສົ່ງໄປໃນ `next` method ທີ່ເຮົາເອີ້ນໃຊ້ໃນຄັ້ງຕໍ່ໄປ, ເຮົາມາລອງສົ່ງ value ທີ່ເປັນ string ດັ່ງນີ້ `'I like JavaScript'` ເຂົ້າໄປໃນ `next` method.
![pass value to next method](https://res.cloudinary.com/practicaldev/image/fetch/s--g9vc9eyY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/l1840pp2k9h9bgpt1geo.gif)
ສິ່ງທີ່ສຳຄັນທີ່ຕ້ອງສັງເກດໃນທີ່ນີ້ຄື: ເບິ່ງວ່າການເອີ້ນໃຊ້ `next` method ຍັງບໍ່ໄດ້ມີການ track input ໃດໆເທື່ອ ເຮົາພຽງ start observer ໂດຍການເອີ້ນໃຊ້ໃນຄັ້ງທຳອິດ. generator ຈະລໍຖ້າ input ຈາກເຮົາກ່ອນທີ່ມັນຈະສືບຕໍ່ການເຮັດວຽກຂອງມັນຕໍ່ໄປ ແລະ ອາດຈະປະມວນຜົນຄ່າທີ່ເຮົາສົ່ງໄປໃນ `next` method.

---
ເປັນຫຍັງເຮົາຈຶ່ງຕ້ອງໃຊ້ generator function?

ຂໍ້ດີຢ່າງໜຶ່ງຂອງການໃຊ້ generator ຄືຄວາມຈິງທີ່ວ່າມັນເປັນ **lazily evaluated**, ໝາຍຄວາມວ່າ value ທີ່ຖືກ return ຫຼັງຈາກທີ່ມີການເອີ້ນໃຊ້ `next` method ຈະຖືກ compute ຫຼັງຈາກທີ່ເຮົາຮ້ອງຂໍເທົ່ານັ້ນ(ປະມານວ່າສັ່ງໃຫ້ເຮັດຈຶ່ງເຮັດ🫡). fucntion ປົກກະຕິຈະບໍ່ມີແບບນີ້ - value ທັງໝົດຈະຖືກ generate ໃຫ້ເຮົາໃນກໍລະນີທີ່ເຮົາຈຳເປັນຕ້ອງໃຊ້ໃນອານາຄົດ.
![lazily evaluated](https://res.cloudinary.com/practicaldev/image/fetch/s--HDINzSjh--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/7b24mkp7io3gmnn8pzwa.gif)
ເທົ່າທີ່ຜ່ານມາມັນກໍ່ເບິ່ງຄືກັບ use cases ອື່ນໆ, ແຕ່ມັນຈະຊ່ວຍໃຫ້ເຮົາມີທາງເລືອກທີ່ຈະສາມາດ control ການ iterate datasets ທີ່ໃຫຍ່ໆໄດ້.

ລອງຈິນຕະນາການເບິ່ງວ່າເຮົາມີ list ຂອງ book clubs📚, ເພື່ອໃຫ້ຕົວຢ່າງຂອງເຮົາງ່າຍ ແລະ ສັ້ນເຮົາຈຶ່ງມີ data ດັ່ງນີ້: ແຕ່ລະ book clubs ຈະມີ member ພຽງ 1 ຄົນ ແລະ ອ່ານປື້ມຫຼາຍຫົວທີ່ສະແດງໃນ `books` array.
![books array](https://res.cloudinary.com/practicaldev/image/fetch/s--xs97vroJ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/8opapd1iddlgj1ljixje.png)
ຕອນນີ້ເຮົາຕ້ອງການທີ່ຈະຫາ book ທີ່ມີ id ເທົ່າກັບ `ey812`, ໃນການຄົ້ນຫາເຮົາອາດຈະໃຊ້ nested `for-loop` ຫຼື `forEach` helper, ແຕ່ນັ້ນກໍ່ໝາຍຄວາມວ່າເຮົາຍັງຄົງສາມາດ iterate data ໄດ້ເຖິງແມ່ນວ່າເຮົາຈະພົບຂໍ້ມູນທີ່ເຮົາຕ້ອງການແລ້ວກໍ່ຕາມ.
ສິ່ງທີ່ຄັກກ່ຽວກັບ generator ໃນທີ່ນີ້ຄື: ມັນຈະບໍ່ເຮັດວຽກໄປເລື້ອຍໆຈົນກວ່າເຮົາຈະບອກໃຫ້ມັນເຮັດ-ໝາຍຄວາມວ່າເຮົາສາມາດປະເມີນ item ທີ່ຖືກ return ອອກມາໄດ້ ແລະ ຖ້າມັນເປັນ item ທີ່ເຮົາຕ້ອງການ ເຮົາກໍ່ບໍ່ຈຳເປັນທີ່ຈະຕ້ອງເອີ້ນໃຊ້ `next` method. ເຮົາລອງມາເບິ່ງນຳກັນວ່າຈະເປັນແນວໃດ.

ທຳອິດເຮົາຈະທຳການສ້າງ generator ທີ່ມີການ iterate `books` array ຂອງແຕ່ລະ team member, ເຮົາຈະສົ່ງຄ່າ `books` array ຂອງ team member ເຂົ້າໄປໃນ function ຈາກນັ້ນຈະມີການ iterate array ແລະ ທຳການ yield ແຕ່ລະ book
![pass books array to generator](https://res.cloudinary.com/practicaldev/image/fetch/s--VIKQMt8N--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/vokf28crwuvbmksd57m5.png)
ຫຼັງຈາກທີ່ເຮົາໄດ້ generator ດ້ານເທິງມາແລ້ວ, ຕໍ່ໄປເຮົາຕ້ອງໄດ້ສ້າງອີກ generator ທີ່ iterate `clubMembers` array. ເຊິ່ງໃນຈຸດນີ້ເຮົາບໍ່ໄດ້ສົນໃຈຂໍ້ມູນຂອງ member ເນື່ອງຈາກເຮົາຕ້ອງການທີ່ຈະ iterate ຂໍ້ມູນຂອງ `books` ເທົ່ານັ້ນ. ຢູ່ໃນ `iterateMembers` generator ເຮົາໄດ້ທຳການ yield `iterateBooks` ໂດຍການສົ່ງ `books` ຂອງ member ເຂົ້າໄປ.
![yield iterateBooks](https://res.cloudinary.com/practicaldev/image/fetch/s--wOo9Qoct--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/fy8mxxjj0uvs6rarm6mi.png)
ມາຮອດຂັ້ນຕອນສຸດທ້າຍເຮົາຈະທຳການ iterate bookclubs, ເຊິ່ງມັນກໍ່ຄືກັບຕົວຢ່າງທີ່ຜ່ານມາ ເຮົາບໍ່ໄດ້ສົນໃຈຂໍ້ມູນຂອງ bookclubs, ແຕ່ເຮົາສົນໃຈພຽງ club members(ສະເພາະ books ຂອງແຕ່ລະ member). ເຮົາຈະທຳການ yield `iterateMembers` ແລະ ທຳການສົ່ງ `clubMembers` array ເຂົ້າໄປ.
![pass club member to iterateMembers](https://res.cloudinary.com/practicaldev/image/fetch/s--cPaacK9G--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/x1lor0omqw9t5k2kq4iv.png)
ເພື່ອທີ່ຈະ iterate ທັງໝົດທີ່ຂຽນມາ, ເຮົາຕ້ອງການ generator object ທີ່ iterable ໂດຍການສົ່ງ `bookClub` array ເຂົ້າໄປໃນ `iterateBookClubs` generator, ຈາກນັ້ນເຮົາຈະທຳການເອີ້ນໃຊ້ໂດຍການສ້າງຕົວປ່ຽນ `it` ຂຶ້ນມາເພື່ອເປັນ iterator.
![generator object](https://res.cloudinary.com/practicaldev/image/fetch/s--fz9lH3an--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/omg23omwi8a1d7nn1it3.png)
ຫຼັງຈາກຜ່ານຂັ້ນຕອນທຸກຢ່າງມາແລ້ວເຮົາຈະທຳການເອີ້ນໃຊ້ `next` method ຈົນກວ່າເຮົາຈະໄດ້ຂໍ້ມູນຂອງ book ໂດຍທີ່ id ຂອງ book ຕ້ອງເທົ່າກັບ `ey812`.
![call next method for book id ey812](https://res.cloudinary.com/practicaldev/image/fetch/s--uenUfDOJ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/72ghm4ev6el3no9esk1l.gif)
ຕອນນີ້ເຮົາບໍ່ຈຳເປັນຕ້ອງ iterate data ທັງໝົດເພື່ອເອົາຂໍ້ມູນຂອງ book, ແຕ່ເຮົາພຽງຫາຂໍ້ມູນເທົ່າທີ່ເຮົາຕ້ອງການຕົວຈິງແທນ. ສ່ວນການເອີ້ນໃຊ້ `next` method ດ້ວຍຕົວເອງນັ້ນອາດຈະເປັນເລື່ອງທີ່ຂັດຫູຂັດຕາໄປແນ່, ດັ່ງນັ້ນເຮົາຈຶ່ງຕ້ອງໄດ້ສ້າງ function ໃນການເອີ້ນໃຊ້ `next` method ຈົນກວ່າເຮົາຈະໄດ້ຂໍ້ມູນຕາມທີ່ເຮົາຕ້ອງການ.
ເຮົາຈະທຳການສົ່ງ id ຂອງ book ເຂົ້າໄປໃນ `findBook` function ເພື່ອທຳການຄົ້ນຫາ book ຕາມ id ທີ່ເຮົາສົ່ງເຂົ້າໄປ, ຖ້າພົບວ່າ id(ທີ່ສົ່ງເຂົ້າໄປ) ແລະ `value.id` ຕົງກັນມັນກໍ່ຈະທຳການໂຍນ value ອອກມາ, ແຕ່ຖ້າທັງ 2 id ບໍ່ຕົງກັນມັນກໍ່ຈະທຳການເອີ້ນໃຊ້ `next` method ອີກຄັ້ງແທນ.
![findBook function](https://res.cloudinary.com/practicaldev/image/fetch/s--_XcgekW2--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/hxyeemfr3q8pqqotk51j.png)
![res of findBook function](https://res.cloudinary.com/practicaldev/image/fetch/s--oqOXhNFY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/x1zh0ygt5yfq5vb2f5at.gif)
ແນ່ນອນວ່າໃນຕົວຢ່າງທີ່ຍົກມາມັນຍັງເປັນຂໍ້ມູນທີ່ໜ້ອຍ, ແຕ່ລອງຄິດພາບເບິ່ງວ່າເຮົາມີ data ທີ່ຫຼາຍແຮງ ຫຼື ອາດຈະເປັນຂໍ້ມູນທີ່ຖືກ stream ເຂົ້າມາແລ້ວເຮົາຕ້ອງການທີ່ຈະແປງຂໍ້ມູນເຫຼົ່ານັ້ນ ຫຼື ອາດຈະຕ້ອງການຫາຂໍ້ມູນພຽງຢ່າງດຽວຈາກ datasets ໃຫຍ່ໆ. ໂດຍປົກກະຕິເຮົາຕ້ອງໄດ້ຖ້າໃຫ້ dataset ຂອງເຮົາພ້ອມກ່ອນເຮົາຈຶ່ງຈະເລີ່ມການແປງຂໍ້ມູນເຫຼົ່ານັ້ນໄດ້. ແຕ່ຖ້າໃຊ້ generator function ເຮົາສາມາດຂໍຂໍ້ມູນພຽງໜ້ອຍດຽວ, ກວດສອບຂໍ້ມູນ ແລະ value ຈະຖືກ generate ກໍ່ຕໍ່ເມື່ອເຮົາທຳການເອີ້ນໃຊ້ `next` method ເທົ່ານັ້ນ.

---
- ອ້າງອີງ: [💡🎁 JavaScript Visualized: Generators and Iterators](https://dev.to/lydiahallie/javascript-visualized-generators-and-iterators-e36)
