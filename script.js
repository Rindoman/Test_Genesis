const questions = document.querySelector('.questions');
const right = document.querySelector('.right');
const caption = document.querySelector('.caption');
const descr = document.querySelector('.descr');
const h2Hide = document.querySelector('.caption_2');
const modalWindow = document.querySelector('#modal-window');
const modalWin = document.querySelector('.modal-win');
const modalText = document.querySelector('.modal-text');
const modalNum = document.querySelector('.modal-num');
const twoTiers = document.querySelector('.links');
const start = document.querySelector('#start');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const form = document.querySelector('.registration');
const ansver = document.querySelectorAll('.ansver');
let counter = 0;
const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);


modalWin.style.display = 'none';
start.addEventListener('click', () => {
    ansver
        .forEach(function (element) {
            element.style.display = 'block';
        });
    caption.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a urna sit amet';
    descr.innerHTML = '';
    descr.style.marginBottom = '60px';
    h2Hide.innerHTML = '';
    right.style.animation = 'move 1s ease both';
    twoTiers
        .classList
        .add('two-tiers');
    root
        .style
        .setProperty('--main-color', '#fc8950');
    start.style.display = 'none';
    mod();
})

function mod() {
    for (let i = 0; i < ansver.length; i++) {
        ansver[i].onclick = modal;
    }

    function modal() {
        modalWindow.style.display = 'block';
        modalWin.style.display = 'block';
        btn4.style.display = 'block';
        let allInputs = questions.querySelectorAll('input');
        allInputs.forEach((ansver) => {
            let text = {
                num1: '51.7%',
                text1: 'людей обращают внимание на а.',
                text1_1: 'пользователей — Вариант А',
                num2: '30%',
                text2: 'людей обращают внимание на б.',
                text2_2: 'пользователей — Вариант Б',
                num3: '46.2%',
                text3: 'людей обращают внимание на с.'
            }
            if (this.name === 'btn1') {
                modalText.innerHTML = text.text1;
                modalNum.innerHTML = text.num1;
            } else if (this.name === 'btn2') {
                modalText.innerHTML = text.text2;
                modalNum.innerHTML = text.num2;
            }
            if (this.name == 'btn3') {
                modalText.innerHTML = text.text3;
                modalNum.innerHTML = text.num3;
            }
        });
    }
    if (counter === 0) {
        btn4.addEventListener('click', () => {
            modalWin.style.display = 'none';
            btn4.style.display = 'none';
            modalWindow.style.display = 'none';
            let text = {
                num1: '47.6%',
                text1_1: 'пользователей — Вариант А',
                num2: '52.4%',
                text2_2: 'пользователей — Вариант Б'
            }
            btn1.addEventListener('click', () => {
                modalText.innerHTML = text.text1_1;
                modalNum.innerHTML = text.num1;
                btn4.style.display = 'block';
            })
            btn2.addEventListener('click', () => {
                modalText.innerHTML = text.text2_2;
                modalNum.innerHTML = text.num2;
                btn4.style.display = 'block';
            })
            caption.innerHTML = 'Lorem ipsum';
            root.style.setProperty('--main-color', '#fcc150');
            btn3.style.display = 'none';
            counter++;
            if (counter === 1) {
                caption.innerHTML = 'Lorem ipsum dolor sit amet';
                btn4.addEventListener('click', () => {
                    root.style.setProperty('--main-color', '#1da7c0');
                    btn1.style.display = 'none';
                    btn2.style.display = 'none';
                    form.style.display = 'block';
                    btn4.style.display = 'none';
                    root.style.setProperty('--main-color', '#1da7c0');
                })
            }
        })
    }
}

function select(name) {
    return document.querySelector(name);
}

let checkRegistrFields = {
    nameString: "",
    emailString: "",
    passwordString: "",
    errorMessage: select("#error-message"),
    checkRegName: function () {
        let currentName = select('#name');
        let name = select("#name").value;
        let namePattern = /^(\s?[A-Z]{1}[a-z]+){1,3}$|^(\s?[А-ЯЁ]{1}[а-яё]+){1,3}$|^(\s?[А-ЩЮЯЄІЇҐ’'`]{1}[а-щьюяєіїґ’'`]+){1,3}$/;
        let checkName = namePattern.test(name);
        if (!checkName) {
            select(".input-name")
                .classList
                .add("input-wrong-data");
            currentName
                .classList
                .add("green");
            this.nameString = "Имя должно начинаться с заглавной буквы и не содержать цифр!";
        } else {
            this.nameString = "";
            select(".input-name")
                .classList
                .remove("input-wrong-data");
        }
        this.checkValid();
        return checkName;
    },
    checkRegEmail: function () {
        let currentMail = select("#new-email");
        let email = select("#new-email").value;
        let emailPattern = /^\w+([\.-]?\w+)*@[a-z]+([\.-]?\w+)*(\.\w{2,6})+$/;
        let checkEmail = emailPattern.test(email);
        if (!checkEmail) {
            select('.input-email')
                .classList
                .add("input-wrong-data");
            currentMail
                .classList
                .add("green");
            this.emailString = "Введите существующий E-mail!";
        } else {
            this.emailString = '';
            select('.input-email')
                .classList
                .remove("input-wrong-data");
            currentMail
                .classList
                .add("green");
        }
        this.checkValid();
        return checkEmail;
    },

    checkRegPass: function () {
        let currentPass = select("#new_pass");
        let password = select("#new_pass").value;
        let passwordPattern = /\s+/;
        let checkPassword = !(passwordPattern.test(password) || password.length < 5 || password.length > 32);
        if (!checkPassword) {
            select(".input-pass")
                .classList
                .add("input-wrong-data");
            currentPass
                .classList
                .add("green");
            this.passwordString = "Пароль должен содержать минимум 5 и не больше 32 символов!";
        } else {
            this.passwordString = "";
            select(".input-pass")
                .classList
                .remove("input-wrong-data");
            currentPass
                .classList
                .add("green");
        }
        this.checkValid();
        return checkPassword;
    },

    checkValid: function () {
        return this.errorMessage.innerHTML = `<p>${this.nameString}</p><p>${this.emailString}</p><p>${this.passwordString}</p>`;
    }
};