//encrypt function
function encrypt(str, n) {
  const bigAlpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const smallAlpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let finelyIndex;
  let finelyArray;
  let encryptChar = "";

  for (let i = 0; i < str.length; i++) {
    // search for big alpha and small alpha
    let index_In_BigAlpha = bigAlpha.indexOf(str[i]);
    let index_In_SmallAlpha = smallAlpha.indexOf(str[i]);
    // empty string ..
    if (index_In_BigAlpha === -1 && index_In_SmallAlpha === -1) {
      encryptChar += str[i];
      continue;
    }

    let index =
      index_In_BigAlpha !== -1 ? index_In_BigAlpha : index_In_SmallAlpha;
    finelyIndex = index + n;
    // // no bigger than 25
    if (finelyIndex > 25) {
      finelyIndex %= 26;
    }
    // // for A to Z
    if (finelyIndex < 0) {
      finelyIndex += 26;
    }

    finelyArray = index_In_BigAlpha !== -1 ? bigAlpha : smallAlpha;
    encryptChar += finelyArray[finelyIndex];
  }

  return encryptChar;
}

//decrypt function
function decrypt(str, n) {
  const bigAlpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const smallAlpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let finelyIndex;
  let finelyArray;
  let decryptChar = "";

  for (let i = 0; i < str.length; i++) {
    // search for big alpha and small alpha
    let index_In_BigAlpha = bigAlpha.indexOf(str[i]);
    let index_In_SmallAlpha = smallAlpha.indexOf(str[i]);
    // empty string ..
    if (index_In_BigAlpha === -1 && index_In_SmallAlpha === -1) {
      decryptChar += str[i];
      continue;
    }

    let index =
      index_In_BigAlpha !== -1 ? index_In_BigAlpha : index_In_SmallAlpha;
    finelyIndex = index - n;
    // // no bigger than 25
    if (finelyIndex > 25) {
      finelyIndex %= 26;
    }
    // // for A to Z
    if (finelyIndex < 0) {
      finelyIndex += 26;
    }

    finelyArray = index_In_BigAlpha !== -1 ? bigAlpha : smallAlpha;
    decryptChar += finelyArray[finelyIndex];
  }
  console.log(finelyIndex, "kam");
  return decryptChar;
}

// export { encrypt, decrypt };
