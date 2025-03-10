const textInput = document.querySelector("#text-input");
const checkButton = document.querySelector(".check-btn");
const resultDisplay = document.querySelector("#result");

checkButton.addEventListener("click", () => {
    const userInput = textInput.value;
    const checker = new PalindromeChecker();
    checker.displayResult(userInput);
});

class PalindromeChecker {

    /**
     * Cleans the text by removing accents, numbers, and special characters.
     * @param {string} text - The text to clean.
     * @returns {string} - The cleaned text in lowercase.
     * @throws {Error} - If the cleaned text has less than 2 letters.
     */
    sanitizeText(text) {
        const cleaned = text
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-zA-Z]/g, "")
            .toLowerCase();

        if (!cleaned || cleaned.length < 2) {
            throw new Error("The word must contain at least 2 letters and cannot consist only of numbers or special characters! &#9888;");
        }

        return cleaned;
    }

    /**
     * Converts the text into an array and creates a reversed version.
     * @param {string} text - The text to reverse.
     * @returns {{ originalArray: string[], reversedArray: string[] }} - The original and reversed arrays.
     */
    cloneAndReverse(text) {
        const originalArray = [...text];
        const reversedArray = [...originalArray].reverse();
        return { originalArray, reversedArray };
    }

    /**
     * Checks if the given text is a palindrome.
     * @param {string} text - The text to check.
     * @returns {boolean} - `true` if the text is a palindrome, otherwise `false`.
     */
    isPalindrome(text) {
        const { originalArray, reversedArray } = this.cloneAndReverse(text);
        return originalArray.join("") === reversedArray.join("");
    }

    /**
     * Displays the result of the palindrome check.
     * @param {string} text - The user input text.
     */
    displayResult(text) {
        const trimmedText = text.trim();

        if (!trimmedText) {
            this.showMessage("Please enter a word! &#9888;", "#FF8C00");
            return;
        }

        try {
            const originalText = trimmedText;
            const cleanText = this.sanitizeText(trimmedText);

            if (originalText.toLowerCase() !== cleanText) {
                throw new Error("The word must not contain spaces, numbers or special characters! &#9888;");
            }

            const isPalindrome = this.isPalindrome(cleanText);
            const message = isPalindrome
                ? `"${originalText}" is a palindrome! &#9989;` 
                : `"${originalText}" is not a palindrome. &#10060;`;

            const color = isPalindrome ? "#1ab188" : "#F93060";

            this.showMessage(message, color);
        } catch (error) {
            this.showMessage(error.message, "#FF8C00");
        }
    }

    /**
     * Updates the result display with the given message and color.
     * @param {string} message - The message to display.
     * @param {string} color - The text color.
     */
    showMessage(message, color) {
        resultDisplay.style.display = "block";
        resultDisplay.style.color = color;
        resultDisplay.innerHTML = message;
    }
}
