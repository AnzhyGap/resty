// $('#breadcrumbs').load('/modules/breadcrumbs.html', function () {// После загрузки контента, будет выполнена эта функция
//     let titleText = $('title').text();// назначаем переменную в которую помещаем из <title> страницы текст
//     $('#breadcrumbs').find('h1').text(titleText);// Находим в #breadcrumbs <h1> и в него вписываем текст из нашей переменной
// });


fetch('modules/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
        /*********** No scroll body if burger menu opened ***********/
        const burgerCheckbox = document.querySelector('.burger');
        console.log(burgerCheckbox);
        burgerCheckbox.addEventListener('click', () => {
            document.body.classList.toggle('no-scroll')
        });
    });
fetch('modules/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });
fetch('modules/popular_goods.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('popular_goods').innerHTML = data;
    });
fetch('modules/change_goods.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('change_goods').innerHTML = data;
    });
fetch('modules/how_resty_work.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('how_resty_work').innerHTML = data;
    });
fetch('modules/accessories.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('accessories').innerHTML = data;
    });
fetch('modules/promo.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('promo').innerHTML = data;
    });
fetch('modules/benefits.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('benefits').innerHTML = data;
    });
fetch('modules/reviews.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('reviews').innerHTML = data;
    });
fetch('modules/breadcrumbs.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('breadcrumbs').innerHTML = data;
    });

const menuButton = document.getElementById('menu-button');
const dropdownMenu = document.getElementById('dropdown-menu');
const selectedOptionText = document.getElementById('selected-option-text');
const menuItems = document.querySelectorAll('[role="menuitem"]');

menuButton.addEventListener('click', () => {
    const isHidden = dropdownMenu.classList.contains('hidden');
    if (isHidden) {
        dropdownMenu.classList.remove('hidden');
        menuButton.setAttribute('aria-expanded', 'true');
    } else {
        dropdownMenu.classList.add('hidden');
        menuButton.setAttribute('aria-expanded', 'false');
    }
});

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        selectedOptionText.textContent = item.dataset.value;
        menuItems.forEach(i => {
            i.classList.remove('active');
        });
        item.classList.add('active');
        dropdownMenu.classList.add('hidden');
        menuButton.setAttribute('aria-expanded', 'false');
    });
});

document.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !dropdownMenu.classList.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
        menuButton.setAttribute('aria-expanded', 'false');
    }
});
