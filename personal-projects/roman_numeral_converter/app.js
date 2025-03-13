const resultParagraph = document.getElementById('result');
const inputField = document.getElementById('number-input');
const submitButton = document.querySelector('.convert-btn');

submitButton.addEventListener('click', () => {
    const number = inputField.value;
    convertNumber(number);
});

inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const number = inputField.value;
        convertNumber(number);
    }
});

const romanNumerals = [
    { value: 1000000, numeral: 'M̅' },
    { value: 900000, numeral: 'C̅M̅' },
    { value: 500000, numeral: 'D̅' },
    { value: 400000, numeral: 'C̅D̅' },
    { value: 100000, numeral: 'C̅' },
    { value: 90000, numeral: 'X̅C̅' },
    { value: 50000, numeral: 'L̅' },
    { value: 40000, numeral: 'X̅L̅' },
    { value: 10000, numeral: 'X̅' },
    { value: 9000, numeral: 'I̅X̅' },
    { value: 5000, numeral: 'V̅' },
    { value: 4000, numeral: 'I̅V̅' },
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
];


const convertNumber = (number) => {
    if (isNaN(number) || number <= 0 || !Number.isInteger(number)) {
        resultParagraph.innerText = "❌ Please enter a number greater than or equal to 1";
        resultParagraph.style.display = "block";
        return ""; // On arrête la fonction
    }

    let result = []; 

    romanNumerals.forEach(element => {
        while (number >= element.value) {
            result.push(element.numeral);
            number -= element.value;
        }
    });

    const finalResult = result.join(""); 
    resultParagraph.innerText = `Roman number : ${finalResult}`;
    resultParagraph.style.display = "block"; 

    return finalResult; 
};

