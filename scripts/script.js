// I. VAriables
const searchInput = document.querySelector('.search');
const drinkList = [...document.querySelectorAll('.main-list__item')];

// II. Functions
const searchEngine = event => {
    const text = event.target.value.toLowerCase().trim();
    drinkList.forEach(item => {
        if (item.textContent.toLowerCase().indexOf(text) !== -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
};

// III. Event listeners
searchInput.addEventListener('keyup', searchEngine);