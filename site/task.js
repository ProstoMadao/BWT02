function verify() {
    console.log("number")
    let a = parseInt(elementA.value);
    console.log(number)
    
    const form = document.getElementById('UserEnter');
    const result = document.getElementById('result');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();
    })
};
let result;
let check;

const elementA = document.getElementById("a");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)


form.addEventListener('submit', async function(event) {
event.preventDefault(); 

const number = parseFloat(document.getElementById('number').value);

 // Решение задачи
let sign;
if (number > 0) {
    sign = 'Положительное';
} else if (number < 0) {
    sign = 'Отрицательное';
} else {
    sign = 'Ноль';
}

// Вывод результата
result.textContent = `Число ${number} - ${sign}`;

// Отправка данных на сервер
try {
    const response = await fetch('/api/tasks', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    task: 'Определение знака числа', 
    input: number,
    output: sign
    })
});

if (response.ok) {
    console.log('Данные успешно отправлены на сервер.');
} else {
    console.error('Ошибка при отправке данных на сервер.');
    }
} catch (error) {
    console.error('Ошибка:', error);
}
});
