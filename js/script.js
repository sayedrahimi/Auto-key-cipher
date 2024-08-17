

// ------------Auto Key Encryption---------------


let GlobalAutoKey;
const btnchAuth = document.querySelector('#changeAuth');
btnchAuth.addEventListener('click', function () {
    const Text = document.querySelector('#plainTextAuth');
    const key = Number(document.querySelector('#keyAuth').value);
    console.log(key);
    const cText = document.querySelector('#cipherTextAuth');
    let plainText = Text.value;
    // plainIndex = plainIndex.toLowerCase();
    plainText = plainText.toLowerCase();
    // console.log(plainIndex);
    let alph = ['a', 'b', 'c', 'd', "e", 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const cipher = plainText.split('');
    let cipherIndex = [];
    let plainIndex = [];

    for (const alph2 of cipher) {
        // console.log(alph1,i);
        for (const [i, alph1] of alph.entries()) {
            if (alph2 == alph1) {
                // console.log(alph1, i);
                let letter = alph1;
                let indexLetter = i;
                plainIndex.push(i);
            };
        };
    };
    let AutoIndex = [...plainIndex];
    AutoIndex.unshift(key);
    GlobalAutoKey = [...AutoIndex];
    for (let j = 0; j < plainIndex.length; j++) {
        let n = plainIndex[j] + AutoIndex[j];
        if (n < 26) {
            let c = n;
            // console.log(c);
            cipherIndex.push(c);
        } else {
            c = n % 26;
            // console.log(c);
            cipherIndex.push(c);
        };
    };



    const cipherText = [];
    for (const n of cipherIndex) {
        for (const [i, alph1] of alph.entries()) {
            if (n == i) {
                // console.log(alph1, i);
                cipherText.push(alph1);
            }
        }
    };
    // console.log(cipherText);
    const Result = cipherText.join('');

    cText.innerHTML = Result;
    //end of function
    // console.log(`G::::${GlobalAutoKey}`);
});


// ------------Auto Key Decryption---------------
const btnchAuthD = document.querySelector('#changeAuthD');
btnchAuthD.addEventListener('click', function () {
    console.log(`G::::${GlobalAutoKey}`);
    const Text = document.querySelector('#plainTextAuthD');
    // console.log(plainText.value);
    const key = Number(document.querySelector('#keyAuthD').value);
    // console.log(key);
    const cText = document.querySelector('#cipherTextAuthD');
    let plainText = Text.value;
    plainText = plainText.toLowerCase();
    let alph = ['a', 'b', 'c', 'd', "e", 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const cipher = plainText.split('');
    let cipherIndex = [];
    let plainIndex = [];
    let nIndex = [];

    for (const alph2 of cipher) {
        // console.log(alph1,i);
        for (const [i, alph1] of alph.entries()) {
            if (alph2 == alph1) {
                // console.log(alph1, i);
                let letter = alph1;
                let indexLetter = i;
                plainIndex.push(i);
            };
        };
    };
    // let AutoIndex = [...plainIndex];
    // AutoIndex.unshift(key);
    for (let j = 0; j < plainIndex.length; j++) {
        let n = plainIndex[j] - GlobalAutoKey[j];
        // console.log(n);
        nIndex.push(n);
        if (n > 0) {

            if (n < 26) {
                let c = n;
                // console.log(c);
                cipherIndex.push(c);
            } else {
                c = n % 26;
                // console.log(c);
                cipherIndex.push(c);
            };
        } else {
            const f = (Math.floor(n / 26)) * 26;
            const m = n - f;
            if (m < 26) {
                let c = m;
                // console.log(c);
                cipherIndex.push(c);
            } else {
                c = m % 26;
                // console.log(c);
                cipherIndex.push(c);
            };

        }
    };

    // console.log(`Cipher:${plainIndex}`);
    // console.log(`Auto Key:${AutoIndex}`);
    // console.log(`C-A:${nIndex}`);
    // console.log(`%26:${cipherIndex}`);


    // console.log(cipherIndex);
    const cipherText = [];
    for (const n of cipherIndex) {
        for (const [i, alph1] of alph.entries()) {
            if (n == i) {
                // console.log(alph1, i);
                cipherText.push(alph1);
            }
        }
    };
    // console.log(cipherText);
    const Result = cipherText.join('');
    // console.log(Result);
    cText.innerHTML = Result;
    //end of function
});