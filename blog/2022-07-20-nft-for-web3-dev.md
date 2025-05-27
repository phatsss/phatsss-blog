---
slug: nft-for-web3-development
date: 2022-07-20
title: NFT ສະບັບ Blockchain Developer ແບບງົງໆ <ep.1/>
description: NFT ສະບັບ Blockchain Developer ແບບງົງໆ 
authors: phatsss
tags: [web3]
language: lo
---
NFT ເປັນ Token ອີກຊະນິດໜຶ່ງທີ່ຖືກສ້າງຂຶ້ນມາເພື່ອບໍ່ໃຫ້ມັນສາມາດທົດແທນກັນໄດ້ ແລະ ອາດເວົ້າໄດ້ວ່າ NFT Token ແຕ່ລະອັນມີຄວາມເປັນ Unique ໃນຕົວ.

<!-- truncate -->
ຈາກບົດຄວາມທີ່ແລ້ວທີ່ເຮົາໄດ້ເວົ້າເຖິງຮາກຖານທີ່ສຳຄັນທີ່ເຮັດໃຫ້ເກີດມີ NFT ມາຮອດທຸກມື້ນີ້(ຖ້າຫາກຍັງບໍ່ໄດ້ອ່ານ[ກົດທີ່ນີ້](https://dev.to/phatsss/nft-edwnykchngayd-55b5)ໄດ້ເລີຍ), ດັ່ງທີ່ເຮົາຮູ້ກັນແລ້ວວ່າ NFT ເປັນ Token ອີກຊະນິດໜຶ່ງທີ່ຖືກສ້າງຂຶ້ນມາເພື່ອບໍ່ໃຫ້ມັນສາມາດທົດແທນກັນໄດ້ ແລະ ອາດເວົ້າໄດ້ວ່າ NFT Token ແຕ່ລະອັນມີຄວາມເປັນ Unique ໃນຕົວ.

ໃນເມື່ອກ່ອນການສ້າງ NFT ຫຼື ການຂຽນ Smart Contact ມັນກໍ່ຈະຂຶ້ນຢູ່ກັບຜູ້ຂຽນເລີຍວ່າຈະຂຽນ Code ອອກມາແນວໃດ, ເມື່ອເປັນດັ່ງນັ້ນມັນເລີຍມີພະເອກຂີ່ມ້າຂາວແກມນ້ຳເງິນອອກສີບົວອ່ອນໆມາສ້າງມາດຕະຖານໃນການສ້າງ Token ຕ່າງໆຂຶ້ນມາ ແລະ ອົງກອນນັ້ນກໍ່ຄື: OpenZeppelin.

NFT ທຸກມື້ນີ້ກໍ່ຈະໃຊ້ມາດຕະຖານຫຼັກໆຢູ່ 2 ຢ່າງຄື: ERC-721 ແລະ ERC-1155

- ERC-721 ເປັນມາດຕະຖານທີ່ໃຊ້ສ້າງ Non Fungible Token ໝາຍຄວາມວ່າ Token ທີ່ຖືກສ້າງຂຶ້ນມາຈະມີຄວາມເປັນ Unique ແລະ ສາມາດສະແດງຄວາມເປັນເຈົ້າຂອງ, ເຊິ່ງຜູ້ທີ່ຖື Token ດັ່ງກ່າວສາມາດວາງຂາຍ Token ທີ່ຕົວເອງຖືໃນຕະຫຼາດໄດ້.

> ເຂົ້າໃຈ ERC-721 ໃນ 10 ວິນາທີ: ERC-721 ເປັນມາດຕະຖານທີ່ເນັ້ນໄປທີ່ການສ້າງ Token ທີ່ເປັນ Non Fungible Token ຫຼື NFT ເປັນຫຼັກ,​ ຄິດພາບວ່າ NFT ສ່ວນໃຫຍ່ທີ່ເປັນ ERC-721 ຈະເປັນຮູບພາບທີ່ເປັນໜຶ່ງດຽວ ບໍ່ມີຊ້ຳ ແລະ ຖືກສ້າງມາເພື່ອເປັນຂອງສະສົມເປັນຫຼັກ.
ອ່ານເພີ່ມໄດ້ທີ່: [ERC721-OpenZeppelin](https://docs.openzeppelin.com/contracts/4.x/erc721)


![ERC721 Example](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v6b27gk9pp8uje8n2cz1.png)
ຕົວຢ່າງ NFT ຂອງ Bored Ape Yacht Club ທຸກໆຕົວຈະເປັນມາດຕະຖານ ERC-721

- ERC-1155 ເປັນມາດຕະຖານທີ່ລວມເອົາ ERC-20, ERC-777 ແລະ ERC-721 ລວມເຂົ້າກັນ, ເຊິ່ງມັນກໍ່ຈະມີທັງຕົວທີ່ຖືກສ້າງຂຶ້ນມາແບບບໍ່ຊ້ຳ ແລະ ມີທັງຕົວທີ່ຊ້ຳກັນ. ERC-1155 ສ່ວນໃຫຍ່ຈະຖືກໃຊ້ໃນເກມ ຫຼື ອາດຈະເປັນ Collections ທີ່ຂາຍ NFT ທີ່ເປັນໄອເທັມດຽວຊ້ຳກັນຫຼາຍໆຕົວ.

> ເຂົ້າໃຈ ERC-1155 ໃນ 10 ວິນາທີ:​ ຕົວຢ່າງ ເຮົາມີໄອເທັມໃນເກມທີ່ເປັນອາວຸດ ແລະ ມີຄ່າຄວາມຫາຍາກໃນລະດັບທີ່ຕ່າງກັນເຊັ່ນ: ປືນລຳແສງເລເຊີຖືກຈຳກັດໃຫ້ມີພຽງ 5 ອັນໃນເກມ ແຕ່ປືນແກັບພໍ່ໃຫຍ່ພວງພັດມີໄດ້ຢ່າງບໍ່ຈຳກັດ(ອາດຈະເປັນອາວຸດພື້ນຖານຂອງຜູ້ທີ່ເຂົ້າມາຫຼິ້ນ). ອີກຕົວຢ່າງງ່າຍໆກໍ່ຄື: ພົງພັດ ໄດ້ສ້າງ NFT ມາ 1 ອັນ, ແຕ່ກຳນົດ Max Supply ໄວ້ທີ່ 1000 Token ໝາຍຄວາມວ່າ ທຸກຄົນທີ່ມາຊື້ຜົນງານດັ່ງກ່າວກໍ່ຈະໄດ້ NFT ຄືກັນ ພຽງແຕ່ກຳນົດໃຫ້ມີພຽງແຕ່ 1000 ອັນຢູ່ໃນຕະຫຼາດ.
ອ່ານເພີ່ມໄດ້ທີ່: [ERC1155-OpenZeppelin](https://docs.openzeppelin.com/contracts/4.x/erc1155)


![ERC1155 example](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sxdsjxzjteeam2aoj7o4.png)

ຕົວຢ່າງ NFT ຂອງ Crypto Hash Toys ເປັນມາດຕະຖານ ERC-1155 ເຊິ່ງຜູ້ທີ່ຊື້ກໍ່ຈະສາມາດໃຊ້ NFT ທີ່ຕົວເອງມີໄປຫຼິ້ນຢູ່ເທິງເວັບຂອງ [Crypto Hash Toys](https://www.cryptohashtoys.com) ໄດ້.

## ແລ້ວ NFT ທີ່ວາງຂາຍກັນຢູ່ເທິງ Platform ຕ່າງໆເປັນ NFT ປະເພດໃດ?
ໃນບົດຄວາມກ່ອນໜ້ານີ້ເຮົາໄດ້ເວົ້າເຖິງການສ້າງ NFT ຂຶ້ນມາໂດຍຈະມີ 2 ວິທີຫຼັກໆເລີຍກໍ່ຄື: ຂຽນ smart contact ເພື່ອສ້າງ Token ເອງ ແລະ ແບບທີ່ອັບໂຫຼດຜົນງານຂອງເຮົາຂຶ້ນເທິງ Platform ເພື່ອໃຊ້ smart contact ຂອງ platform ສ້າງ Token ໃຫ້.

NFT ທີ່ List ຂາຍຢູ່ເທິງ Platform ຕ່າງໆນັ້ນມີທັງແບບທີ່ຂຽນເອງ ແລະ ແບບທີ່ອັບໂຫຼດ, ເນື່ອງຈາກເມື່ອເຮົາຂຽນ smart contact ຕ່າງໆສຳເລັດແລ້ວເຮົາກໍ່ຈະເອົາ Code ຕ່າງໆ ຫຼື smart contact deploy ຂຶ້ນໄປເທິງ Main Network(network ໃດກໍ່ຕາມທີ່ບໍ່ແມ່ນ test network), ພໍເຮົາໄດ້ Token ມາແລ້ວເຮົາກໍ່ສາມາດເອົາໄປ List(ວາງຂາຍ) ຢູ່ Platform ໃດກໍ່ໄດ້.

`ການຂຽນ smart contact ຂຶ້ນມາເອງເຮົາຈຳເປັນຕ້ອງມີໜ້າເວັບໄຊເພື່ອເອົາໄວ້ mint NFT ແລະ ເຮົາກໍ່ຕ້ອງເສຍຄ່າ gas ຕອນທີ່ເຮົາ deploy smart contact ແລະ ເສຍຄ່າ gas ຕອນ mint NFT ອີກເທື່ອໜຶ່ງ`

## ເບິ່ງ NFT ແບບງົງໆ
ຕົວຢ່າງ NFT ຂອງ Bored Ape Yacht Club ກໍ່ຈະມີໜ້າເວັບທີ່ໃຫ້ຄົນທີ່ສົນໃຈເຂົ້າໄປ Mint NFT ອອກມາແລ້ວຄົນທີ່ໄດ້ NFT ມາກໍ່ຈະເອົາມາ List ຂາຍໃນ Platform ຕ່າງໆ, ເຊິ່ງ Collection ຂອງ BAYC ໄດ້ກຳນົດມາທັງໝົດ 10000 ຕົວ(ຫຼືເວົ້າໄດ້ວ່າ Max Supply ຂອງ BAYC ມີທັງໝົດ 10000 Tokens) ແຕ່ລະຕົວກໍ່ຈະມີ TokenID ຕັ້ງແຕ່ 0-9999(10000 ຕົວ)ເພື່ອລະບຸວ່າ Token ທີ່ຖືກ Mint ອອກມາມີລຳດັບທີເທົ່າໃດ.

ຕົວຢ່າງລາຍລະອຽດຂອງ NFT ທີ່ຢູ່ເທິງ opensea.io ກໍ່ຈະມີລາຍລະອຽດດັ່ງລຸ່ມນີ້:

> TokenID ເປັນການລະບຸ Index ໃຫ້ກັບ NFT ແຕ່ລະຕົວ

> Contract Address ເປັນ Token address ເຊິ່ງຫຼັງຈາກທີ່ເຮົາ Deploy Token ແລ້ວເຮົາກໍ່ຈະໄດ້ເລກ Address ຂອງ Token ມາ

> Token Standard ເປັນມາດຕະຖານຂອງ Token ເຊັ່ນ: ERC-721, ERC-1155, etc.

> Blockchain ເປັນ Network ທີ່ຜູ້ຂຽນ smart contact deploy ຂຶ້ນໄປ

> Metadata ເປັນສິ່ງທີ່ບົ່ງບອກທີ່ຢູ່ຂອງຮູບພາບ ແລະ Attribute ຕ່າງໆຂອງ NFT ເຊັ່ນ: background ສີຟ້າ, ລີງໃສ່ໝວກ, ສູບຢາ, ໃສ່ສ້ອຍເພັດ ຫຼື ໃສ່ແວ່ນຕາເທ້ໆເປັນຕົ້ນ

>  Creator Fees ເປັນຄ່າທຳນຽມທີ່ຫັກອອກໃຫ້ຜູ້ສ້າງ NFT ທຸກຄັ້ງຂອງການຂາຍ

![Detail Example](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5jdzqejw3i3gn42wcrn7.png)

ຈາກທີ່ກ່າວມາຂ້າງເທິງແລ້ວນັ້ນເຮົາກໍ່ສະຫຼຸບໄດ້ວ່າ 1 TokenID = ລີງ 1 ຕົວ(NFT) ແລະ ຖ້າເຮົາເຂົ້າໄປເບິ່ງໃນຕົວ smart contact ຂອງ BAYC ເອງກໍ່ເຫັນວ່າມັນມີ TokenURI ຂອງແຕ່ລະ Token, ຖ້າເອົາ URI ດັ່ງກ່າວໄປເປີດເບິ່ງກໍ່ຈະເຫັນ Metadata ຂອງ Token ນັ້ນໆ. ໃນ Metadata ກໍ່ຈະປະກອບດ້ວຍ image ແລະ property. 

![NFT metadata](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ybrltknbk8940ymschk0.png)
metadata ຂອງ BAYC #3030


![3030 properties](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sriehfdga98jys77f2n0.png)
Properties ຂອງ BAYC #3030 ກໍ່ຈະຄືກັນກັບ attributes ທີ່ເຫັນໃນ Metadata


`Frozen ທີ່ເຫັນໃນ opensea.io ໃນສ່ວນຂອງ Metadata ໝາຍຄວາມວ່າ Metadata ດັ່ງກ່າວແມ່ນບໍ່ສາມາດແກ້ໄຂໄດ້, ສະນັ້ນຜູ້ທີ່ຖື NFT ດັ່ງກ່າວກໍ່ຈະໝັ້ນໃຈໄດ້ວ່າຮູບພາບ ຫຼື NFT ທີ່ເຮົາຖືມັນຈະບໍ່ຖືກແກ້ໄຂ ຫຼື ຖືກລຶບໄດ້`

`ສຳລັບ ep.1 ກໍ່ຂໍຈົບໄວ້ເທົ່ານີ້ກ່ອນ, ສຳລັບ ep ຕໍ່ໄປຈະເປັນຫຍັງນັ້ນແມ່ນຕິດຕາມກັນຕໍ່. ຕັ້ງໃຈວ່າຈະຂຽນບົດຄວາມໄປຈົນຮອດຂຽນ smart contact ແບບງ່າຍໆແລ້ວ deploy ຂຶ້ນ test network ພຸ້ນລ່ະ, ຄັນດຸໃດລ່ະ🤣`
