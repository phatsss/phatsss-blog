---
slug: clean-architecture-using-react-typeScript
date: 2022-09-29
title: Clean Architecture using React TypeScript
description: Clean Architecture using React TypeScript
authors: phatsss
tags: [web-development, React, Typescript, Javascript]
language: lo
---
ຄວາມເຂົ້າໃຈກ່ຽວກັບ Architecture ນີ້ຈະບໍ່ໄດ້ຈຳກັດສະເພາະໃນບໍລິບົດຂອງພາສາໂປຣແກຣມພຽງຢ່າງດຽວ. ເຮົາຕ້ອງເຂົ້າໃຈແນວຄິດໂດຍທົ່ວໄປຂອງມັນເພື່ອເຂົ້າໃຈເຖິງສາເຫດ ແລະ ປະໂຫຍດຂອງ Architecture ນີ້, ເຊິ່ງວິທີການນີ້ຈະຄ້າຍຄືກັບການອອກແບບ ຫຼື SOLID pattern. ສະຫຼຸບກໍ່ຄືມັນບໍ່ໄດ້ຖືກຄິດຄົ້ນຂຶ້ນມາສຳຫຼັບພາສາໂປຣແກຣມໃດໜຶ່ງ ແຕ່ມັນສາມາດນຳໃຊ້ແນວຄິດນີ້ກັບພາສາອື່ນໆໄດ້ເຊັ່ນກັນກັບແນວຄິດຂອງ OOP.

<!-- truncate -->

## Introduction
**Architecture** ແມ່ນແນວຄິດທີ່ໃຊ້ໄດ້ກັບທຸກໆພາສາຂອງການຂຽນໂປຣແກຣມ, ໝາຍຄວາມວ່າຄວາມເຂົ້າໃຈກ່ຽວກັບ Architecture ນີ້ຈະບໍ່ໄດ້ຈຳກັດສະເພາະໃນບໍລິບົດຂອງພາສາໂປຣແກຣມພຽງຢ່າງດຽວ. ເຮົາຕ້ອງເຂົ້າໃຈແນວຄິດໂດຍທົ່ວໄປຂອງມັນເພື່ອເຂົ້າໃຈເຖິງສາເຫດ ແລະ ປະໂຫຍດຂອງ Architecture ນີ້, ເຊິ່ງວິທີການນີ້ຈະຄ້າຍຄືກັບການອອກແບບ ຫຼື SOLID pattern. ສະຫຼຸບກໍ່ຄືມັນບໍ່ໄດ້ຖືກຄິດຄົ້ນຂຶ້ນມາສຳຫຼັບພາສາໂປຣແກຣມໃດໜຶ່ງ ແຕ່ມັນສາມາດນຳໃຊ້ແນວຄິດນີ້ກັບພາສາອື່ນໆໄດ້ເຊັ່ນກັນກັບແນວຄິດຂອງ OOP.

ໝາຍເຫດ: ເປົ້າໝາຍຫຼັກຂອງ Clean Architecture ແມ່ນເພື່ອໃຫ້ Code ຂອງເຮົາລະອຽດຂຶ້ນ, ບຳລຸງຮັກສາໄດ້ ແລະ ທົດສອບໄດ້. ໃນໂປຣເຈັກນ້ອຍໆຖ້າຫາກເຮົາຂຽນແບບ Pure JS ໄວກວ່າການໃຊ້ Architecture ແລະ /test ກໍ່ບໍ່ຈຳເປັນຕ້ອງຫັນມາໃຊ້(ຖ້າບໍ່ມີຄວາມຈຳເປັນ), ແຕ່ໃນກໍລະນີທີ່ໂປຣເຈັກເຮົາມີຂະໜາດກາງ-ໃຫຍ່ທີ່ເຮັດວຽກຮ່ວມກັບ developer ຫຼາຍໆຄົນ ແລະ ບາງຄັ້ງກໍ່ອາດຈະໄດ້ແກ້ code ຂອງຄົນອື່ນເຮົາກໍ່ຄວນໃຊ້ເທາະ ຈຶ່ງຈະບໍ່ກັບມາເຈັບຫົວຕອນແກ້ Code ຄືນ.

> ໂຄງສ້າງທີ່ດີໃນດ້ານຂອງການພັດທະນາໂປຣແກຣມໃດໜຶ່ງຂຶ້ນມາຄວນແບ່ງ UI,Database ແລະ Business Logic ອອກຈາກກັນເພື່ອໃຫ້ຄວາມອິດສະລະຕໍ່ການ Test, ຕົວຢ່າງ: ຖ້າຢາກ test ໃນຝັ່ງຂອງ business logic ກໍ່ບໍ່ຕ້ອງກັງວົນເລື່ອງຂອງ UI ແລະ Database. ແລະ ໃນທາງກັບກັນ ຖ້າຢາກຈະ test ຝັ່ງຂອງ UI ກໍ່ຄວນບໍ່ມີສ່ວນຂອງ Business Logic ແລະ Database ມາກ່ຽວຂ້ອງ. ເມື່ອທຸກສ່ວນຖືກແຍກອອກຈາກກັນຢ່າງອິດສະລະແລ້ວເວລາ requirement ປ່ຽນໄປກໍ່ຈະເຮັດໃຫ້ການເພີ່ມ ຫຼື ແກ້ໄຂໄດ້ງ່າຍເຊິ່ງມັນຈະບໍ່ກະທົບທັງລະບົບ.

## ເປັນຫຍັງຈຶ່ງໃຊ້ Architecture?
ຄວາມຈຳເປັນໃນການໃຊ້ Architecture ກໍ່ຄືມັນຈະປະຢັດເວລາໃນລະຫວ່າງການພັດທະນາ, ການບຳລຸງຮັກສາລະບົບ, ການທົດສອບ ແລະ ການຂະຫຍາຍໂປຣເຈັກໃນອະນາຄົດທີ່ໃຊ້ເວລາໃນການພັດທະນາດົນ.
ສະຫຼຸບງ່າຍໆເລີຍກໍ່ຄື: ຖ້າວາງໂຄງບໍ່ດີຕັ້ງແຕ່ເລີ່ມມັນຍິ່ງຈະມີຄ່າໃຊ້ຈ່າຍທີ່ສູງຖ້າຫາກມີການປ່ຽນແປງໃນອະນາຄົດ, ສະນັ້ນຕ້ອງຄິດເຜື່ອອະນາຄົດໄວ້ນຳ.

## ຄຳຈຳກັດຄວາມຂອງ Clean Architecture ໂດຍທົ່ວໄປ
ໃນທີ່ນີ້ຈະບໍ່ໄດ້ອະທິບາຍເນື້ອໃນແບບລະອຽດ, ແຕ່ຈະຍົກເອົາແຕ່ປະເດັນຫຼັກໆແບບສັ້ນໆແທນ.

![Clean Architecture](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mxtln5g7xjk9l9oo74pc.png)

ແນວຄິດຫຼັກທີ່ຢູ່ເບື້ອງຫຼັງຂອງ diagram ນີ້ແມ່ນການແບ່ງ Application ອອກເປັນ layer (ມີຈັກ layer ກໍ່ໄດ້), ໂດຍທີ່ layer ທີ່ຢູ່ຊັ້ນໃນຈະບໍ່ຮູ້ຈັກ layer ທີ່ຢູ່ຊັ້ນນອກ ແລະ ແຕ່ລະ layer ຈະຊີ້ໄປຫາ Layer ທີ່ຢູ່ຊັ້ນໃນ(Outer Layer to Inner Layer). ຍິ່ງ layer ຢູ່ໄກຈາກສູນກາງເທົ່າໃດຍິ່ງເຫັນລາຍລະອຽດກ່ຽວກັບ Application ທີ່ເປັນ “non-business” ຫຼາຍຂຶ້ນເທົ່ານັ້ນ.

> ຈາກທີ່ໄດ້ອະທິບາຍມາແລ້ວວ່າໂຄງສ້າງທີ່ດີໃນການພັດທະນາກໍ່ການແຍກສ່ວນຂອງ UI, Database ແລະ Business Logic ອອກຈາກກັນ, ເຊິ່ງ Clean Architecture ກໍ່ຕອບໂຈດໃນຂະບວນການນີ້. ຈະເຫັນໄດ້ວ່າ Clean Architecture ມີການແບ່ງ layer ໄວ້ຢ່າງຊັດເຈນເຮັດໃຫ້ສາມາດ test ໄດ້ງ່າຍ ແລະ Maintance ພາຍຫຼັງໄດ້ງ່າຍອີກນຳ. Clean Architecture ຈະມີຂໍ້ຕົກລົງຮ່ວມກັນຢູ່ວ່າ layer ຊັ້ນນອກຈະປຽບເໝືອນກົນໄກຕ່າງໆ ແລະ layer ຊັ້ນໃນຈະປຽບເໝືອນ policy ຕ່າງໆ, ຖ້າຫາກ layer ຊັ້ນນອກຕ້ອງການ referrence ໄປຫາ layer ຊັ້ນໃນຈະຕ້ອງເຮັດຕາມ policy ທີ່ກຳນົດໄວ້ ໂດຍທີ່ layer ຊັ້ນໃນຈະບໍ່ຮັບຮູ້ເຖິງ layer ທີ່ຢູ່ຊັ້ນນອກໄດ້, ຊື່ຕ່າງໆຂອງ layer ຊັ້ນນອກຈະບໍ່ຖືກອ້າງອີງເຖິງ layer ຊັ້ນໃນ ແລະ layer ຊັ້ນນອກຈະບໍ່ສົ່ງຜົນກະທົບຕໍ່ layer ຊັ້ນໃນ.
> ງົງແມ່ນບໍ່? ຂ້ອຍກະງົງຄືກັນ 🤣🤣🤣, ເພື່ອງົງຕື່ມ ເຮົາໄປຕໍ່ຍາວໆກັນເລີຍ 555

- **Entities**: ເປັນ Layer ຊັ້ນໃນສຸດເຊິ່ງຈະບັນຈຸ business logic ຂອງ Application ແລະ ຈະບໍ່ມີ platform dependencies, ເຊິ່ງ Entities ຈະອະທິບາຍເຖິງ business logic ຂອງ Application ຢ່າງດຽວເທົ່ານັ້ນ.

ຕົວຢ່າງ: ໃນ Class ຂອງ "cart" ເຮົາສາມາດເພີ່ມ item, ລຶບ item, etc. ເຊິ່ງໃນ Layer ນີ້ຈະບໍ່ກ່ຽວກັບບັນດາເຟຣມເວີກຕ່າງໆທີ່ເຮົາໃຊ້ເຊັ່ນ React, Databases ເລີຍ.

ປລ. platform dependencies ຂ້າງເທິງແມ່ນເວົ້າສະເພາະເຈາະຈົງເຖິງບັນດາ libraries ຕ່າງໆເຊັ່ນ: React, Angular, Express, etc. ແມ່ນຈະບໍ່ໄດ້ເອີ້ນໃຊ້ໃນ Layer ນີ້.

> ສະຫຼຸບແບບ 5 ວິ: Entities ປຽບເໝືອນ Data Model ຂອງເຮົາທີ່ຈຳແນກວ່າ Data ເຮົາຈະເກັບຫຍັງແນ່ ແລະ ມີ Structure ແນວໃດ.

- **Use cases**: ໃນ layer ທີ 2 ຂອງ diagram ນີ້ຈະບັນຈຸ use cases(Interactors). Use cases ແມ່ນສ່ວນທີ່ອະທິບາຍເຖິງວິທີການໂຕ້ຕອບກັບ Entities ໃນບໍລິບົດຂອງ Application ຂອງເຮົາ.

ຕົວຢ່າງ: ຖ້າຫາກ Entity ຂອງ cart ຮູ້ຈັກພຽງແຕ່ວ່າໂຕມັນເອງສາມາດເພີ່ມ item, ໃນທີ່ນີ້ use case ເຮົາກໍ່ຮູ້ວ່າມັນສາມາດນຳເອົາ item ຈາກ cart ແລະ ສົ່ງ item ເຫຼົ່ານັ້ນໄປສູ່ repository.

> ສະຫຼຸບແບບ 5 ວິ: Use cases ເປັນສ່ວນທີ່ເກັບ Business Logic ຕ່າງໆແລ້ວເອີ້ນໃຊ້ Entity ອີກເທື່ອໜຶ່ງ.

- **Gateways, Presenters, etc**. ໃນທີ່ນີ້ Gateways = Repositories, Presenters = View Models. ເຊິ່ງເປັນ layer ທີ່ມີໜ້າທີ່ໃນການເຊື່ອມຕໍ່ລະຫວ່າງ business rules ຂອງ application ແລະ platform ສ່ວນຕ່າງໆຂອງລະບົບ.

ຕົວຢ່າງ: repositories ຈະມີ interface ທີ່ມີການ implement classes ໄວ້ເພື່ອ access APIs ຫຼື repositories ແລະ View Model interface ຈະໃຊ້ເພື່ອເຊື່ອມຕໍ່ກັບ React Component ດ້ວຍການເອີ້ນໃຊ້ business logic.

ປລ. ໃນຕົວຢ່າງຂອງເຮົາ Use cases ແລະ Repositories ຈະຢູ່ໃນລຳດັບທີ່ແຕກຕ່າງກັນ ເພາະວ່າການເຮັດວຽກສ່ວນໃຫຍ່ຂອງ front-end ແມ່ນຮັບ ແລະ ສົ່ງ data ຜ່ານ API ເປັນຫຼັກ.

> ສະຫຼຸບແບບ 5 ວິ:ອາດເວົ້າໄດ້ວ່າ layer ນີ້ແມ່ນສ່ວນທີ່ເອົາໄວ້ແປງຮູບແບບຂອງຂໍ້ມູນເຊັ່ນ ຢາກແປງຮູບແບບຂໍ້ມູນຈາກ format ໃດໆກໍ່ຕາມໃຫ້ເປັນ format ທີ່ application ເຮົາເຂົ້າໃຈ ແລະ ໃຊ້ໄດ້ງ່າຍ. ຕົວຢ່າງ ແປງຈາກ json format ເປັນ object ທີ່ເຮົາຕ້ອງການ, ເຊິ່ງເຮົາເອີ້ນສິ່ງທີ່ເຮົາໜ້າທີ່ເຫຼົ່ານີ້ວ່າ Adapter.

- **External interfaces**: ເປັນ platform dependent layer, ໃນຊັ້ນນີ້ເຮົາຈະເຫັນການ direct access ໄປ API, React Components, etc. ມັນເປັນ layer ທີ່ຍາກໃນການ test ແລະ build abstraction.

> ສະຫຼຸບແບບ 5 ວິ: layer ນີ້ເປັນສ່ວນທີ່ຈັດການກັບ framework ທີ່ເຮົາໃຊ້ໃນໂປຣເຈັກ ໃນສ່ວນນີ້ເຮົາອາດຈະບໍ່ໄດ້ຂຽນ code ຫຼາຍແຕ່ກໍ່ເປັນສ່ວນທີ່ສຳຄັນເພາະເປັນສ່ວນທີ່ເອົາໄວ້ໃຊ້ຕິດຕໍ່ກັບ framework ຕ່າງໆທີ່ເຮົາໃຊ້ເຊັ່ນ: ການຂຽນ code ເພື່ອສ້າງ database connection ເປັນຕົ້ນ.

## Clean Architecture ສຳຫຼັບ frontend
ຖ້າອ່ານຫົວຂໍ້ດ້ານເທິງແລ້ວຍັງບໍ່ເຫັນພາບເທື່ອ, ເຮົາມາລອງເບິ່ງວ່າຖ້າເອົາມາໃຊ້ໃນເບື້ອງຂອງ frontend ແລ້ວ ມັນອອກມາໜ້າຕາແບບໃດ.

![Clean Architecture for frontend](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r67k7y3wracuinlrj71u.png)

- **Entities**: ຄວາມໝາຍຂອງ Entities ກໍ່ຈະຄ້າຍຄືກັບຄຳອະທິບາຍດ້ານເທິງ, ເຊິ່ງ Entities ຈະເປັນວິທີການໃນການເກັບ state ແລະ ສ່ວນໃຫຍ່ກໍ່ມັກໃຊ້ເພື່ອຈຸດປະສົງນີ້ເປັນຫຼັກ.

- **Repository interfaces**: ເປັນ Interfaces ທີ່ໃຊ້ເພື່ອເຂົ້າເຖິງ API, database, storages, etc. ມັນອາດຈະເບິ່ງຄືແປກໆທີ່ interfaces ຈະຢູ່ layer ຊັ້ນໃນກວ່າ use case, ເຖິງຢ່າງໃດກໍ່ຕາມໃນບໍລິບົດຂອງການໃຊ້ງານສະແດງໃຫ້ເຫັນວ່າ use case ຈະຮູ້ repositories ແຕ່ repositories ຈະບໍ່ຮູ້ຫຍັງກ່ຽວກັບ layer ຂອງ use case ເລີຍ ແລະ repositories ພັດຮູ້ກ່ຽວກັບ entities ນີ້ຈຶ່ງເປັນສາເຫດທີ່ເຮັດໃຫ້ interfaces ຢູ່ໃນ layer ນີ້.

- **Use Cases**: ຄວາມໝາຍຂອງ use case ກໍ່ແມ່ນແບບດຽວກັນກັບດ້ານເທິງຄື Objects ທີ່ຈະນຳໃຊ້ໃນການ implement business logic ໃນບໍລິບົດຂອງ Application ຂອງເຮົາ(ຮູ້ວ່າຈະເຮັດຫຍັງກັບ entities ເຊັ່ນ: send, upload, filter, merge)

- **View Models ແລະ View Interfaces**:

1. View Model - ແມ່ນໃຊ້ທົດແທນ Presenters ຈາກ diagram ທີ 1. ໃນໂປຣເຈັກຂອງເຮົາຈະໃຊ້ MVVP Architecture(instead of MVP\MVC\MV*), ອະທິບາຍໂດຍຫຍໍ້ຄື: ຄວາມແຕກຕ່າງຂອງ MVVP ມີພຽງຢ່າງດຽວຄື: Presenter ຈະຮູ້ກ່ຽວກັບ View ແລະ ວິທີການເອີ້ນ method ຂອງມັນ, ແຕ່ ViewModel ບໍ່ຮູ້ຈັກ View ແລະ ມີພຽງ method ດຽວທີ່ notify ເຖິງການປ່ຽນແປງຕ່າງໆ. View ເຮັດໜ້າທີ່ພຽງແຕ່ "monitor" state ຂອງ View Model. ຫຼັກການຂອງ MVVP ແມ່ນຈະເຮັດວຽກໄປໃນທິດທາງດຽວ(View → ViewModel) ໃນຂະນະທີ່ MVP ເຮັດວຽກແບບ 2 ທິດທາງ (View ︎← → Presenter), dependencies ໜ້ອຍລົງ ແລະ test ງ່າຍກວ່າ.

2. View Interfaces - ໃນກໍລະນີນີ້, ຈະມີໜຶ່ງ class ພື້ນຖານສຳລັບ Views ທັງໝົດ, ໂດຍທີ່ View Model ຈະແຈ້ງເຕືອນ(notify) View ກໍຕໍ່ເມື່ອມີການປ່ຽນແປງໃດໜຶ່ງເກີດຂຶ້ນ. ເຊິ່ງຈະໃຊ້ onViewModelChanged() method ແລະ ນີ້ກໍ່ແມ່ນໜຶ່ງໃນຕົວຢ່າງຂອງ dependency inversion.

- **External interfaces**: ຄວາມໝາຍຂອງຂໍ້ນີ້ກໍ່ເຊັ່ນດຽວກັນກັບ diagram ທີ 1, layer ນີ້ຈະບັນຈຸບັນດາ platform-dependent implementations ຕ່າງໆ. ໃນກໍລະນີທີ່ application ຂອງເຮົາພັດທະນາໂດຍໃຊ້ React components ແລະ implementations interfaces ເພື່ອເຂົ້າເຖິງ API (ຮູບປະກອບດ້ານລຸ່ມ), ເຖິງຢ່າງໃດກໍ່ຕາມໃນ layer ນີ້ເຮົາສາມາດໃຊ້ framework ໃດກໍ່ໄດ້(AngularJS, VueJS, ReactJS, ReactNative, etc.) ແລະ storage ໃດກໍ່ໄດ້(IndexDB, LocalStorage, etc.), ເຊິ່ງ Clean Architecture ຊ່ວຍໃຫ້ເຮົາສາມາດແຍກໃຊ້ສະເພາະ framework, libraries ແລະ technologies ໃດກໍ່ໄດ້. ດັ່ງນັ້ນເຮົາຈຶ່ງສາມາດ test ໄດ້ງ່າຍ ແລະ ຈະປ່ຽນໄປໃຊ້ framework ໃດກໍ່ໄດ້.

![implementations interface](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vwu32jxa1xpaempjffd8.png)
arrow ສີແດງແມ່ນສະແດງເຖິງ flow ຂອງ data(ແຕ່ບໍ່ແມ່ນບັນດາ dependencies, dependency diagram ແມ່ນສະແດງຢູ່ diagram ດ້ານເທິງ), ບັນດາ structure ທີ່ກ່າວມາດ້ານເທິງກໍ່ສາມາດປ່ຽນແປງໃຫ້ເໝາະສົມກັບ application ທີ່ເຮົາພັດທະນາ.

## ໃນການໃຊ້ງານຈິງເຮົາຈະວາງ Structures ໄດ້ດັ່ງນີ້

![clean architecture file structure](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xpt7z2ycqptemzii39yq.png)

- **data** - ບັນຈຸບັນດາ classes ທີ່ໃຊ້ໃນການເຂົ້າເຖິງ data,ຖ້າປຽບທຽບໃສ່ diagram folder ນີ້ຈະເປັນ layer ຊັ້ນໃນສຸດຍ້ອນວ່າງໃນນີ້ຈະມີ classes ສຳລັບ implementing repository interfaces. ດັ່ງນັ້ນ classes ເຫຼົ່ານີ້ຈະຖືກໃຊ້ໃນການເຊື່ອມຕໍ່ກັບ API ແລະ platform dependent(local storage, cookies, etc.)

- **domain** - classes ເຫຼົ່ານີ້ບັນຈຸບັນດາ business logic, ໃນ folder ນີ້ຈະມີ Entities, Use Cases ແລະ Repository Interfaces. ໃນ entities folder ຈະແບ່ງເປັນ 2 folder ຍ່ອຍຄື: models ແລະ structures.
**models**: ເປັນບັນດາ logic ຕ່າງໆ ແລະ **structures** ຈະເປັນ data structure.

- **presentation** - folder ນີ້ບັນຈຸ View Models, View Interfaces ແລະ View (framework components).

ຈາກໂຄງສ້າງດ້ານເທິງມັນກໍ່ບໍ່ແມ່ນສິ່ງຕາຍຕົວທີ່ເຮົາຈະຕ້ອງກຳນົດແບບນີ້ເປະໆ, ສະນັ້ນ ເຮົາກໍ່ຕ້ອງປັບໃຊ້ຕາມຈຸດປະສົງ ແລະ ຄວາມເໝາະສົມ.

> ສຸດທ້າຍນີ້ກໍ່ຫວັງວ່າບົດຄວາມນີ້ຈະເປັນປະໂຫຍດໃຫ້ແກ້ຜູ້ອ່ານບໍ່ຫຼາຍ ຫຼື ອາດຈະບໍ່ມີເລີຍ 5555, ແຕ່ຖ້າຢາກໃຫ້ຂຽນອະທິບາຍ Code ຕົວຈິງກໍ່ລອງທັກຫຼັງໄມມາ ຫຼື ຖິ້ມເມັ້ນປະໄວ້ດຽວຈະພະຍາຍາມກັບມາຂຽນຕໍ່.


> ບົດຄວາມນີ້ຖອດເອົາສະເພາະບາງສ່ວນມາຈາກ [The Clean Architecture using React and TypeScript. Part 1: Basics](https://medium.com/@rostislavdugin/the-clean-architecture-using-react-and-typescript-a832662af803) 