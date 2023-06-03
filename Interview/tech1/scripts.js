function romanToArabic(romanNumber) {
    const romanToArabicMap = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    };

    let arabicNumber = 0;
    let i = 0;

    while (i < romanNumber.length) {
        if (i + 1 < romanNumber.length && romanToArabicMap[romanNumber.substring(i, i + 2)]) {
            arabicNumber += romanToArabicMap[romanNumber.substring(i, i + 2)];
            i += 2;
        } else {
            arabicNumber += romanToArabicMap[romanNumber.substring(i, i + 1)];
            i++;
        }
    }

    return arabicNumber;
}

function arabicToRoman(arabicNumber) {
    const arabicToRomanMap = [
        { arabic: 1000, roman: 'M' },
        { arabic: 900, roman: 'CM' },
        { arabic: 500, roman: 'D' },
        { arabic: 400, roman: 'CD' },
        { arabic: 100, roman: 'C' },
        { arabic: 90, roman: 'XC' },
        { arabic: 50, roman: 'L' },
        { arabic: 40, roman: 'XL' },
        { arabic: 10, roman: 'X' },
        { arabic: 9, roman: 'IX' },
        { arabic: 5, roman: 'V' },
        { arabic: 4, roman: 'IV' },
        { arabic: 1, roman: 'I' }
    ];

    let romanNumber = '';

    for (let i = 0; i < arabicToRomanMap.length; i++) {
        while (arabicNumber >= arabicToRomanMap[i].arabic) {
            romanNumber += arabicToRomanMap[i].roman;
            arabicNumber -= arabicToRomanMap[i].arabic;
        }
    }

    return romanNumber;
}


console.log(romanToArabic('MMXXI'));
console.log(romanToArabic('XCIV'));

console.log(arabicToRoman(2021));
console.log(arabicToRoman(94));


function convert() {
    var input = document.getElementById('inputNumber').value;
    var output = document.getElementById('outputNumber');

    if (input.match(/^[IVXLCDM]+$/)) {
        var arabic = romanToArabic(input);
        output.innerHTML = arabic;
    } else if (input.match(/^[0-9]+$/)) {
        var roman = arabicToRoman(parseInt(input));
        output.innerHTML = roman;
    } else {
        output.innerHTML = 'Entrada inválida. Por favor, insira um número romano ou arábico válido.';
    }
}