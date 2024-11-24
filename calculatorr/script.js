let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let string = '';
buttonsArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        if (buttonText == 'DEL') {
            string = string.substring(0, string.length - 1);
            display.value = string;
        } else if (buttonText == 'AC') {
            string = '';
            display.value = string;
        } else if (buttonText == '=') {
            try {
                string = eval(string);
                display.value = string;
            } catch (error) {
                display.value = 'Error!';
                string = '';
            }
        } else if (buttonText == '.') {
            if (string.endsWith('.')) {
                display.value = 'Error!';
                setTimeout(() => {
                    display.value = string; // Revert back to the original value after showing the error
                }, 1000);
            } else {
                string += buttonText;
                display.value = string;
            }
        } else {
            string += buttonText;
            display.value = string;
        }
    });
});
