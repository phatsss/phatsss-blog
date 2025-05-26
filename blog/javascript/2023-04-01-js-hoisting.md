---
slug: hoisting-in-javascript
date: 2023-04-01
title: "JavaScript EP2: Hoisting🫵🏻"
description: Hoisting🫵🏻 in JavaScript
authors: phatsss
tags: [Javascript]
language: lo
---
Hoisting - JS Developer ຫຼາຍຄົນກໍ່ຄົງຄຸ້ນຫູກັບຄຳນີ້ຢູ່ບໍ່ໜ້ອຍເນື່ອງຈາກຫຼາຍໆເທື່ອທີ່ໄປຄົ້ນວິທີແກ້ error ຢູ່ google ມັກຈະເຫັນຄົນມາບອກວ່າ error ນີ້ເກີດຈາກ hoisting, ແຕ່ hoisting ມັນແມ່ນແບ້ຫຍັງລ່ະ? ດຽວບົດຄວາມນີ້ຈະມາອະທິບາຍວ່າແບ້ອີ່ຫຍັງຄື hoisting.

<!-- truncate -->
ຕອນທີ່ເລີ່ມຂຽນ JavaScript ຊ່ວງແລກໆກໍ່ເຄີຍພໍ້ເຫດການທີ່ວ່າ variable ບາງໂຕມັນ `undefined` ແບບງົງໆ, ຖືກໂຍນ `ReferenceErrors` ໃສ່ໜ້າ ແລະ ອີກບັນຫາອື່ນໆ. Hoisting ມັກຖືກຫຼາຍຄົນອະທິບາຍວ່າເປັນການໃສ່ຕົວປ່ຽນ ແລະ function ໄວ້ຢູ່ເທິງສຸດຂອງໄຟລ໌, ແຕ່ວ່າ ມັນແມ່ນແບບນັ້ນແທ້ບໍ່ລ່ະ? ໃຈເຢັນກ່ອນໄບຣ໌ອັນມັນບໍ່ແມ່ນແບບນັ້ນເລີຍ, ມັນບໍ່ແມ່ນສາເຫດຂອງສິ່ງທີ່ເກີດຂຶ້ນ ເຖິງມັນຊິເບິ່ງຄືວ່າມັນໜ້າຈະເປັນແບບນັ້ນກໍ່ຕາມ.

ເມື່ອ JavaScript Engine ເລີ່ມເຮັດວຽກກັບ script ທີ່ເຮົາຂຽນ ສິ່ງທຳອິດທີ່ມັນເຮັດກໍ່ຄືການຕັ້ງຄ່າ memory ສຳລັບ data ໃນ code ຂອງເຮົາ. ຈະຍັງບໍ່ມີການ execute ໃດໆໃນຂັ້ນຕອນນີ້ເທື່ອ ເວົ້າງ່າຍໆກໍ່ຄືມັນເປັນພຽງການກະກຽມທຸກຢ່າງສຳລັບການ execution. ວິທີການໃນການ store ສ່ວນຂອງ function ແລະ ຕົວປ່ຽນນັ້ນແຕກຕ່າງກັນ, function ຈະຖືກ store ໄວ້ໂດຍອ້າງອີງ function ທັງໝົດ.
![reference to the entire function](https://res.cloudinary.com/practicaldev/image/fetch/s--lLfiCbTX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif7.gif)

ສ່ວນຂອງຕົວປ່ຽນຈະມີຈຸດທີ່ແຕກຕ່າງຢູ່ໜ້ອຍໜຶ່ງຄື: ໃນ ES6+ ຈະມີການປະກາດຕົວປ່ຽນແບບ `let` ແລະ `const`. ຕົວປ່ຽນທີ່ປະກາດດ້ວຍ `let` ແລະ `const` keyword ຈະຖືກ store ແບບ `uninitialized`
![let and const](https://res.cloudinary.com/practicaldev/image/fetch/s--vRtKMspn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif8.gif)

ຕົວປ່ຽນທີ່ປະກາດດ້ວຍ `var` keyword ຈະຖືກ store ດ້ວຍຄ່າ default ຄື `undefined`
![var](https://res.cloudinary.com/practicaldev/image/fetch/s--zvlaEaAo--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif9.gif)

ເມື່ອຂັ້ນຕອນຕ່າງໆທີ່ກ່າວມາສຳເລັດແລ້ວ ເຮົາຈຶ່ງຈະສາມາດ execute code ໄດ້. ມາເບິ່ງນຳກັນວ່າຖ້າເຮົາໃຊ້ `console.log()` 3 ອັນຢູ່ເທິງສຸດຂອງໄຟລ໌ກ່ອນທີ່ເຮົາຈະປະກາດຟັງຊັ່ນ ແລະ ຕົວປ່ຽນ. ເວົ້າງ່າຍກໍ່ຄືເອີ້ນໃຊ້ກ່ອນທີ່ຈະປະກາດ
ເນື່ອງຈາກ function ຖືກ store ໄວ້ໂດຍການອ້າງອີງເຖິງ code ທັງໝົດ, ດັ່ງນັ້ນເຮົາຈະເຫັນວ່າເຮົາສາມາດເອີ້ນໃຊ້ function ກ່ອນທີ່ເຮົາຈະປະກາດ function.
![execution phase](https://res.cloudinary.com/practicaldev/image/fetch/s--nk1taOke--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif16.gif)

ເມື່ອເຮົາອ້າງເຖິງຕົວປ່ຽນທີ່ປະກາດດ້ວຍ `var` keyword ແລ້ວທຳການເອີ້ນໃຊ້ກ່ອນທີ່ຈະປະກາດຕົວປ່ຽນ, ແນ່ນອນວ່າມັນຈະໂຍນຄ່າ default ມາໃຫ້ນັ້ນກໍ່ຄື: `undefined`, ແຕ່ບາງເທື່ອມັນກໍ່ຈະເປັນ `unexpected`. ໃນຫຼາຍໆກໍລະນີຖ້າພົບເຫດການແບບນີ້ແມ່ນໃຫ້ສັນນິຖານໄວ້ກ່ອນເລີຍວ່າ: ເຮົາອາດຈະລືມປະກາດຕົວປ່ຽນກ່ອນການເອີ້ນໃຊ້ຫຼືບໍ່?
![invoked var before declare](https://res.cloudinary.com/practicaldev/image/fetch/s--2nai6XPr--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif17.gif)

ເພື່ອປ້ອງກັນບໍ່ໃຫ້ສາມາດອ້າງອີງຕົວປ່ຽນທີ່ເປັນ `undefined` ເຊັ່ນດຽວກັບການເອີ້ນໃຊ້ `var` keyword ທີ່ເຮົາເຫັນໃນຕົວຢ່າງ. ຈະມີ `ReferenceError` ຖືກໂຍນອອກມາເມື່ອໃດກໍ່ຕາມທີ່ເຮົາພະຍາຍາມເອີ້ນໃຊ້ຕົວປ່ຽນທີ່ເປັນ `uninitialized`. zone ທີ່ເຮົາເອີ້ນໃຊ້ຕົວປ່ຽນກ່ອນການປະກາດຈະເອີ້ນວ່າ: temporal dead zone - ເຮົາບໍ່ສາມາດອ້າງອີງ ຫຼື ເອີ້ນໃຊ້ຕົວປ່ຽນກ່ອນການ `initialization` ໄດ້(ລວມໄປເຖິງ classes ນຳ)
![ReferenceError](https://res.cloudinary.com/practicaldev/image/fetch/s--VVPlWhGC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif18.gif)

ເມື່ອ JavaScript Engine ເຮັດວຽກຮອດແຖວທີ່ເຮົາປະກາດຕົວປ່ຽນໄວ້, ມັນຈະທຳການຂຽນທັບ value ທີ່ຢູ່ໃນ memory ທີ່ເປັນ value ທີ່ເຮົາຂຽນໄວ້ໃນ code.
![overwritten](https://res.cloudinary.com/practicaldev/image/fetch/s--LGEaCMkS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif12.gif)

ສະຫຼຸບ:
- `function` ແລະ `variables` ຈະຖືກ store ໄວ້ໃນ memory ສຳລັບການ execution ກ່ອນທີ່ຈະທຳການ execute code ຂອງເຮົາ, ຂະບວນການທີ່ວ່າມາເອີ້ນວ່າ hoisting.
- `function` ຈະຖືກ store ໂດຍອ້າງອີງເຖິງ `function` ທັງໝົດ, ສ່ວນຕົວປ່ຽນທີ່ໃຊ້ `var` keyword ຈະຖືກ store ດ້ວຍຄ່າ default ຄື:​ `undefined` ແລະ ຕົວປ່ຽນທີ່ໃຊ້ `let` ແລະ `const` keyword ແມ່ນຈະຖືກ store ດ້ວຍ `uninitialized`

---
ອ້າງອີງ: [🔥🕺🏼 JavaScript Visualized: Hoisting](https://dev.to/lydiahallie/javascript-visualized-hoisting-478h)
