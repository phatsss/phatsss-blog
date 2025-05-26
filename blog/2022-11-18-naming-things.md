---
slug: naming-things
date: 2022-11-18
title: Naming Things
description: naming for developers
authors: phatsss
tags: [dev-standards, web-development]
language: lo
---
ສິ່ງໜຶ່ງທີ່ຂ້ອນຂ້າງຈະເປັນບັນຫາສຳລັບເຫຼົ່າ developer ຫຼາຍໆຄົນກໍ່ຄົງຈະມີການຕັ້ງຊື່ຕົວປ່ຽນນີ້ລ່ະ ມັນອາດຈະເບິ່ງຄືເປັນບັນຫານ້ອຍໆທີ່ຫຼາຍຄົນເບິ່ງຂ້າມ ແຕ່ມັນກໍ່ສ້າງຄວາມລຳຄານໃຈໃຫ້ຄົນໃນທີມບໍ່ຫຼາຍກໍ່ໜ້ອຍເລີຍແຫຼະ.
*ຢຸດຕັ້ງຊື່ຕົວປ່ຽນທີ່ມັນບໍ່ໄດ້ສື່ຄວາມໝາຍໃດໆໄດ້ແລ້ວ.

<!-- truncate -->
ໃນຂະບວນການຂອງການພັດທະນາໂປຣເຈັກໃດໜຶ່ງນອກຈາກຈະມີ Architecture ທີ່ດີ ແລະ ທີມທີ່ມີຄຸນນະພາບແລ້ວ(ແລະ ຕ້ອງເທ້ໆແນ່ຈັກໜ້ອຍ) ສິ່ງໜຶ່ງທີ່ລະເລີຍບໍ່ໄດ້ເລີຍກໍ່ຄົງຈະແມ່ນມາດຕະຖານໃນການພັດທະນາ, ເຊິ່ງມາດຕະຖານໃນການພັດທະນາສຳລັບແຕ່ລະທີມ ຫຼື ແຕ່ລະອົງກອນກໍ່ອາດຈະໃຊ້ບໍ່ຄືກັນ, ສິ່ງໜຶ່ງທີ່ຂ້ອນຂ້າງຈະເປັນບັນຫາສຳລັບເຫຼົ່າ developer ຫຼາຍໆຄົນກໍ່ຄົງຈະມີການຕັ້ງຊື່ຕົວປ່ຽນນີ້ລ່ະ ມັນອາດຈະເບິ່ງຄືເປັນບັນຫານ້ອຍໆທີ່ຫຼາຍຄົນເບິ່ງຂ້າມ ແຕ່ມັນກໍ່ສ້າງຄວາມລຳຄານໃຈໃຫ້ຄົນໃນທີມບໍ່ຫຼາຍກໍ່ໜ້ອຍເລີຍແຫຼະ.

ເມື່ອລອງຊອກຂໍ້ມູນປະມານວ່າ: "ໜ້າວຽກທີ່ຍາກທີ່ສຸດຂອງບັນດານັກພັດທະນາ" ພົບວ່າການຕັ້ງຊື່ອີ່ຫຍັງບາງຢ່າງຈະຕິດໜຶ່ງໃນນັ້ນສະເໝີ(ບາງເທື່ອຂ້ອຍເອງກະໃຊ້ເວລາໃນການຕັ້ງຊື່ຟັງຊັ່ນ ຫຼື ຕົວປ່ຽນດົນກວ່າການຂຽນຟັງຊັ່ນໂດຍລວມອີກ ຮະຮະຮ່າາາາ), ດັ່ງນັ້ນ ເຮົາມາເບິ່ງວິທີການຕັ້ງຊື່ຕົວປ່ຽນໃຫ້ອ່ານງ່າຍ ແລະ ເປັນມາດຕະຖານໃຫ້ກັບທີມໃນການພັດທະນາກັນດີກວ່າ.

**ກ່ອນອື່ນໝົດ, ຢຸດຕັ້ງຊື່ທີ່ມັນບໍ່ໄດ້ສື່ຄວາມໝາຍໃດໆໄດ້ແລ້ວ**
ຕົວຢ່າງ:

- ຊື່ທີ່ຍອດນິຍົມເຊັ່ນ:
```js
var foo, bar
```

- ຊື່ທີ່ເຊີຍທີ່ສຸດເຊັ່ນ: `data`
```js 
const data1, data_1
```

- ຊື່ທີ່ເປັນຄຳຫຍໍ້ພໍເຊົາໄດ້ກະເຊົາ(ຍົກເວັ້ນ `id`)ເຊັ່ນ:
```js
let acc
let pos
let auth
let mod
let inq
```

- ຈຳພວກ local variable ທັງຫຼາຍກໍ່ເຊົາຕັ້ງຊື່ສັ້ນພຽງ 1 ຕົວອັກສອນໄດ້ແລ້ວເຊັ່ນ:
```js
let i,j,k,x,y,z
//ຢ່າມາບອກວ່າໃຊ້ 2 ຕົວອັກສອນລຽງກັນແລ້ວຊິລອດໃດ, ກອງຢູ່ນຳກັນນີ້ແຫຼະ
let xx,yy,zz
```

- ອີກຂໍ້ທີສຳຄັນ ແລະ ພົບຫຼາຍເລີຍກໍ່ແມ່ນ: ການສະກົດຄຳສັບຜິດໆໃນການຕັ້ງຊື່(ແນະນຳລົງ spell check extendsion ໄວ້)

ຍັງບໍ່ໝົດພຽງເທົ່ານີ້, paper ຫົວຂໍ້ Linguistic antipatterns: what they are and how developers perceive them ໄດ້ອະທິບາຍເຖິງບັນຫາທີ່ເກີດຂຶ້ນຊ້ຳໆໃນການພັດທະນາ software ເຊັ່ນ: ການຕັ້ງຊື່, ເອກະສານ ແລະ ການອະທິບາຍໜ້າທີ່ການເຮັດວຽກຂອງລະບົບ ເຊິ່ງໄດ້ສະຫຼຸບໄວ້ 17 ຂໍ້ດັ່ງນີ້:

1. `Getter method` ເຮັດວຽກຫຼາຍກວ່າການ `return` ຄ່າກັບມາໂດຍບໍ່ມີເອກະສານມາອະທິບາຍ
2. `isXXX method` ທຳການ `return` ຄ່າອື່ນໆທີ່ບໍ່ແມ່ນ `boolean`
3. `Setter method` ທຳການ `return` ຄ່າກັບອອກມາໄດ້
4. ຊື່ຂອງ `method` ບອກວ່າ `return` ຄ່າພຽງຄ່າດຽວ, ແຕ່ໃນຄວາມເປັນຈິງພັດສົ່ງ `List/Array` ຫຼື `Null` ອອກມາເຊັ່ນ `List getUser()`
5. `Comment` ຂອງ `method` ບອກວ່າມີເງື່ອນໄຂນັ້ນນີ້, ແຕ່ໃນ code ພັດບໍ່ມີ
6. ໃນ `method` ມັກຈະມີການ validate ຂໍ້ມູນ, ແຕ່ບໍ່ແຈ້ງຄວາມຜິດພາດໃດໆອອກມາເລີຍ ເຮັດວຽກໄດ້ໃນກໍລະນີທີ່ສຳເລັດເທົ່ານັ້ນໂດຍທີ່ບໍ່ມີເອກະສານໃດມາອະທິບາຍ
7. `Getter method` ບໍ່ທຳການ `return` ຄ່າຫຍັງເລີຍ
8. ຊື່ຂອງ `method` ບໍ່ສື່ເຖິງການເຮັດວຽກຕົວຈິງເຊັ່ນ: `void isValid()`
9. `method` ທີ່ທຳການແປງຄ່າຈາກຄ່າໜຶ່ງໄປເປັນອີກຄ່າໜຶ່ງ ບໍ່ທຳການ `return` ຄ່າອອກມາ
10. ຊື່ຂອງ `method` ບອກວ່າ `return` ຄ່າຫຼາຍກວ່າ 1 ຕົວເຊັ່ນ: `List/Array` ແຕ່ໃນຄວາມເປັນຈິງພັດສົ່ງຄ່າດຽວກັບມາເຊັ່ນ: `int getUsers()`
11. ຊື່ `method` ກັບຊະນິດຂອງການ `return` ຂັດແຍ່ງກັນ
12. ຊື່ `method` ກັບ `Comment` ຂອງ `method` ຂັດແຍ່ງກັນ
13. ຊື່ຕົວປ່ຽນເປັນເອກະພົດ ແຕ່ມີຄ່າເປັນພະຫູພົດເຊັ່ນ: `List User`
14. ຊື່ຕົວປ່ຽນເປັນພະຫູພົດ ແຕ່ມີຄ່າເປັນເອກະພົດເຊັ່ນ: `List Users`
15. ຊື່ບອກວ່າເປັນຊະນິດ `boolean` ແຕ່ຄວາມຈິງພັດບໍ່ແມ່ນ(ເຈົ້າຫຼອກລວງຂ້ອຍ)
16. ຊື່ ແລະ ຊະນິດຂໍ້ມູນຂອງຕົວປ່ຽນຂັດແຍ່ງກັນ
17. ຊື່ ແລະ `Comment` ຂອງຕົວປ່ຽນຂັດແຍ່ງກັນ

ເຮົາລອງມາສຳຫຼວດໂຕເອງເບິ່ງວ່າເຮົາມີພຶດຕິກຳດ້ານເທິງ ຫຼື ບໍ່?, ແຕ່ໂດຍສ່ວນຕົວຜູ້ຂຽນເອງຂໍຮັບບາບໄປເຕັມໆແຕ່ພຽງຜູ້ດຽວ(ຂ້ານ້ອຍຜິດໄປແລ້ວ ງ່າາາາາາາາ)

ແຕ່ເຖິງຢ່າງໃດກໍ່ຕາມຢ່າຟ້າວທໍ້ໃຈເທື່ອ, ທຸກບັນຫາມີທາງເຂົ້າສະເໝີ ເຮົາມາລອງປັບປ່ຽນວິທີການຕັ້ງຊື່ໃຫ້ເປັນມາດຕະຖານຫຼາຍຂຶ້ນ, ເພື່ອເປັນບຸນຕາໃຫ້ແກ່ຜູ້ພົບເຫັນກັນດີກວ່າ.
**ຂໍ້ຄວນປະຕິບັດໃນການຊຳລະບາບທັງປວງ**

- **ຕັ້ງຊື່ຕົວປ່ຽນໃຫ້ອ່ານແລ້ວເຂົ້າໃຈ(ໝາຍເຖິງຄົນອື່ນຕ້ອງເຂົ້າໃຈນຳໃດ ບໍ່ແມ່ນເຂົ້າໃຈແຕ່ຜູ້ດຽວ 5555)**
ຊື່ຂອງຕົວປ່ຽນຄວນຈະອະທິບາຍຈຸດປະສົງຂອງມັນໄດ້ຢ່າງຊັດເຈນ, ຫຼີກລ່ຽງການໃຊ້ຄຳທີ່ອ່ານແລ້ວເຂົ້າໃຈຍາກ
*ເລືອກ case ໃນການຕັ້ງຊື່ໃຫ້ເໝາະສົມເຊັ່ນ: camel case
ຕົວຢ່າງ:
```js
//bad
const mydate = moment().format("YYYY/MM/DDD")

//good
const currentDate = moment().format("YYYY/MM/DDD")
```

- **ຕັ້ງຊື່ຕົວປ່ຽນໃຫ້ Search ໄດ້ງ່າຍ**
ບາງບົດຄວາມອາດຈະບອກວ່າ: ຢ່າສ້າງຕົວປ່ຽນໃນເມື່ອເຮົາກໍ່ສາມາດໃຊ້ Monomorphic Forms ໄດ້, ເຊິ່ງເຮົາບໍ່ຄວນທີ່ຈະຂະຫຍາຍສິ່ງເຫຼົ່ານີ້ເພື່ອໃຊ້ `Constants` ເພາະຈະເຮັດໃຫ້ code ອ່ານຍາກ ແລະ search ຍາກຂຶ້ນ, ແຕ່ສິ່ງທີ່ຄວນເຮັດກໍ່ຄື ເກັບຄ່າເຫຼົ່ານັ້ນໄວ້ໃນຕົວປ່ຽນ `const` ແລະ ໃຊ້ CONSTANT_CASE ໃນການຕັ້ງຊື່ຕົວປ່ຽນ.
ຕົວຢ່າງ:
```js
// 86400000 ຄືອີ່ຫຍັງກ່ອນ?
setTimeout(blastOff, 86400000)

//ປະກາດຕົວປ່ຽນ constant ດ້ວຍຕົວອັກສອນໃຫຍ່
const MILLISECONDS_PER_DAY = 60 * 60 * 24 * 1000 //86400000
setTimeout(blastOff, MILLISECONDS_PER_DAY)
```

- **ຫຼີກລ່ຽງການຕັ້ງຊື່ຕົວປ່ຽນທີ່ຕ້ອງໄດ້ຄາດເດົາ**
ມັນຈະເປັນການດີທີ່ເຮົາຈະຕັ້ງຊື່ຕົວປ່ຽນໃຫ້ຊັດເຈນພາຍໃນ `array.forEach()` ແທນທີ່ຈະໃຊ້ຕົວຫຍໍ້ທີ່ບໍ່ສື່ຄວາມໝາຍໃດໆເລີຍ, ເຊິ່ງແນ່ນອນວ່າມັນອາດຈະແຈກຢາພາລາໃຫ້ພາຍຫຼັງກໍ່ເປັນໄດ້.
```js
//bad
const Car = {
 carMake: "Honda",
 carModel: "Civic",
 carColor: "Gray"
}
const paintCar = (car, color) => {
 car.carColor = color
}

//good
const Car = {
 make: "Honda",
 model: "Civic",
 color: "Gray"
}
const paintCar = (car, color) => {
 car.color = color
}
```

- **ຫຼີກລ່ຽງສິ່ງທີ່ບໍ່ຈຳເປັນ**
ຖ້າຫາກຊື່ `Class` ຫຼື `Object` ບົ່ງບອກຢູ່ແລ້ວວ່າພວກມັນຫຍໍ້ມາຈາກຫຍັງ ກໍ່ບໍ່ຈຳເປັນທີ່ຈະຕ້ອງເພີ່ມຂໍ້ມູນນັ້ນລົງໃນຊື່ຕົວປ່ຽນອີກ. ຈາກຕົວຢ່າງດ້ານລຸ່ມ: ເຮົາຮູ້ຢູ່ແລ້ວວ່າເຮົາກຳລັງເວົ້າເຖິງ `Car` ຫຼື `paintCar` ດັ່ງນັ້ນ ເຮົາກໍ່ບໍ່ຈຳເປັນທີ່ຈະຕ້ອງເພີ່ມຄຳວ່າ `car` ໃນຕົວປ່ຽນຊ້ຳອີກຮອບ.
 ```js
//bad
const Car = {
 carMake: "Honda",
 carModel: "Civic",
 carColor: "Gray"
}
const paintCar = (car, color) => {
 car.carColor = color
}

//good
const Car = {
 make: "Honda",
 model: "Civic",
 color: "Gray"
}
const paintCar = (car, color) => {
 car.color = color
}
```

- **ໃຊ້ `Default Arguments` ໃນ `Functions`**
ຫຼີກລ່ຽງການໃຊ້ Short-Circuiting ຫຼື Conditionals ໃນ Functions ເພື່ອເຮັດໃຫ້ Code ຂອງເຮົາ Clean ແລະ ທີ່ສຳຄັນກວ່ານັ້ນຄື: ຈົ່ງຈື່ໄວ້ວ່າ ສະເພາະ `Undefined Arguments` ເທົ່ານັ້ນທີ່ຈະໄດ້ຮັບຄ່າໂດຍ Function ຂອງເຮົາ Default Values ຈະບໍ່ແທນທີ່ Falsy Values ອື່ນໆ.
```js
//bad
const createMicrobrewery = (name) => {
 const breweryName = name || "Home Brew Co."
 // ...
}

//good
const createMicrobrewery = (name = "Home Brew Co.") => {
 // ...
}
```

- **ໃຊ້ Default Arguments ຢ່າງຊານສະຫຼາດ**
ຕາມກົດເກນທົ່ວໄປແມ່ນ ໃຫ້ຈຳກັດຈຳນວນ Arguments ຂອງ Function ໄວ້ປະມານ 2-3 Arguments. ຫາກມີການຮັບ Arguments ເປັນຈຳນວນຫຼາຍກໍ່ອາດຈະມີຄວາມເປັນໄປໄດ້ທີ່ Function ຂອງເຮົາອາດຈະເຮັດວຽກຫຼາຍຢ່າງເກີນໄປ, ແຕ່ຖ້າຫາກຢາກໃຊ້ຫຼາຍ Arguments ແມ່ນແນະນຳໃຫ້ໃຊ້ JS Object ເປັນ Argument ເພື່ອໃຫ້ເກີດຄວາມຊັດເຈນວ່າມີ Properties ໃດແດ່ທີ່ Function ຕ້ອງການ ແລະ ເຮົາສາມາດໃຊ້ ES6 Destructuring Syntax ໄດ້.
```js
//bad
const createMenu = (title, body, buttonText, cancellable) => {
 // ...
}

createMenu("Foo","Bar","Baz",true)

//good
const createMenu = ({title, body, buttonText, cancellable}) => {
 // ...
}

createMenu({
title: "Foo",
body: "Bar",
buttonText: "Baz",
cancellable: true
})
```

- **ແຕ່ລະ Functions ຄວນເຮັດໜ້າທີ່ພຽງຢ່າງດຽວ**
ຢ່າລືມວ່າ Functions ໃດມີໄວ້ເພື່ອເຮັດຫຍັງ, ໝາຍຄວາມວ່າພະຍາຍາມຂຽນ Code ຂອງເຮົາໃຫ້ເປັນ Module ແລະ ພະຍາຍາມຂຽນ Function ໃຫ້ມີຂະໜາດນ້ອຍລົງເພື່ອໃຫ້ມັນເຮັດໜ້າທີ່ຢ່າງໃດຢ່າງໜຶ່ງພຽງຄັ້ງດຽວ, ສິ່ງທີ່ຈະຊ່ວຍໃຫ້ໝັ້ນໃຈໄດ້ວ່າ Code ຂອງເຮົານັ້ນງ່າຍຕໍ່ການ Test ແລະ ທຳຄວາມເຂົ້າໃຈ, ທີ່ສຳຄັນຄືຢ່າຕັ້ງຈຸດປະສົງຫຼາຍໆຢ່າງພາຍໃນ Function ດຽວ.
```js
//bad
const emailClients = (clients) => {
 clients.forEach(client => {
  const clientRecord = database.lookup(client)
  if(clientRecord.isActive()){
   email(client)
  }
})
}

//good
const emailClients = (clients) => {
 clients.filter(isActiveClient).forEach(email)
}

const isActiveClient = (client) => {
 const clientRecord = database.lookup(client)
 return clientRecord.isActive()
}
```

- **ຕັ້ງຊື່ Functions ໃຫ້ອ່ານແລ້ວເຂົ້າໃຈ**
ກວດສອບໃຫ້ແນ່ໃຈວ່າເຮົາຕັ້ງຊື່ Functions ທີ່ສາມາດເຂົ້າໃຈໄດ້ຢ່າງຊັດເຈນວ່າ Functions ນັ້ນໃຊ້ໄວ້ເຮັດຫຍັງ, ການຕັ້ງຊື່ Function ທີ່ມີຄວາມໝາຍບໍ່ຊັດເຈນຈະເຮັດໃຫ້ຄົນທີ່ມາອ່ານ Code ຈະຕ້ອງເບິ່ງຄຳ Definition ແລະ Logic ຂອງ Function ເພື່ອທຳຄວາມເຂົ້າໃຈໜ້າທີ່ຂອງແຕ່ລະ Function, ເຊິ່ງກໍ່ຈະເຮັດໃຫ້ເສຍເວລາຕື່ມໄປອີກ.
```js
//bad
const addToDate = (date, month) => {
 // ...
}

const date = new Date()

//ເວລາເອີ້ນໃຊ້ມັນກໍ່ຍາກທີ່ຈະເຂົ້າໃຈໄດ້ຈາກຊື່ຟັງຊັ່ນວ່າໄດ້ເພີ່ມຫຍັງ
addToDate(date, 1)

//good
const addMonthToDate = (month, date) => {
 // ...
}

const date = new Date()
addMonthToDate(1, date)
```

- **ຫຼີກລ່ຽງການໃຊ້ Code ທີ່ຊ້ຳຊ້ອນກັນ, ເຮັດໃຫ້ Code ສັ້ນລົງ ແລະ Clean ຂຶ້ນ**
ສິ່ງທີ່ເຮັດໃຫ້ເຈັບຫົວທີ່ສຸດກໍ່ຄື: ມີການໃຊ້ Code ແບບດຽວຊ້ຳໆກັນໃນຫຼາຍໆ Sections ຂອງ Code, ເຊິ່ງມັນມັກຈະເກີດຂຶ້ນເນື່ອງຈາກ Logic ບາງຢ່າງມີການເຮັດວຽກແຕກຕ່າງກັນພຽງເລັກນ້ອຍ, ແຕ່ເຖິງຢ່າງໃດກໍ່ຕາມ ລອງຄິດພາບວ່າຖ້າຫາກເຮົາພົບ Bud ໃນ Logic ເຮົາຕ້ອງໄດ້ນຳໄປແກ້ໃນທຸກໆ Sections.

- **ບໍ່ຄວນໃຊ້ Flags ເປັນ Function Parameters**
ເຫດຜົນທີ່ເຮົາບໍ່ຄວນໃຊ້ Flags ເປັນ Funstion Parameters ມີພຽງຢ່າງດຽວຄື: Function ຂອງເຮົາເຮັດຫຼາຍໜ້າທີ່ ແລະ ໃນຂໍ້ທີ່ຜ່ານມາກໍ່ບອກແລ້ວວ່າມັນເປັນແນວທາງທີ່ບໍ່ຄວນເຮັດ, ດັ່ງນັ້ນ ແນະນຳໃຫ້ແບ່ງ Function ອອກເປັນ 2 Functions ແທນ.
```js
//bad
const createFile = (name, temp) => {
 if(temp){
  fs.create(`./temp/${name}`)
 }else{
  fs.create(name)
 }
}

//good
const createFile = (name) => {
 fs.create(name)
}

const createTempFile = (name) => {
 fs.create(`./temp/${name}`)
}
```


> ອ້າງອີງ:
[https://www.somkiat.cc/meaningful-name/](https://www.somkiat.cc/meaningful-name/)
ແລະ 
[https://www.techstarthailand.com/blog/detail/10-Tips-to-write-cleaner-JavaScript-code/2147](https://www.techstarthailand.com/blog/detail/10-Tips-to-write-cleaner-JavaScript-code/2147)