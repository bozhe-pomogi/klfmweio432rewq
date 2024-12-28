document.addEventListener('DOMContentLoaded', () => {
    const cat = document.getElementById('cat');
    const meowSound = document.getElementById('meow-sound');
    const countdownElement = document.getElementById('countdown');

    cat.addEventListener('click', () => {
        const currentYear = new Date().getFullYear();
        if (currentYear === 2025) {
            meowSound.play();
            alert("Приветик, конфетик! Ты нашла мой секретик! Ты получила талон на 500 поцелуев от меня (можно воспользоваться в любое время 🤭)")
        } else {
            meowSound.play();
        }
    });

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄';
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowflake.style.fontSize = Math.random() * 50 + 10 + 'px';
        document.body.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 50000);
    }

    function updateCountdown() {
        const now = new Date();
        const nextYear = 2025;
        const newYear = new Date(`January 1, ${nextYear} 00:00:00`);
        const timeDifference = newYear - now;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.textContent = `До нового ${nextYear} года осталось: ${days} дней ${hours} часов ${minutes} м ${seconds} с`;

        if (timeDifference <= 0) {
            countdownElement.textContent = `Солнышко, поздравляю тебя с Новым Годом! 😊❤️ 
                Желаю тебе всегда быть такой умной, красивой, милой! 🤗 Очень сильно тебя люблю и желаю всего наилучшего!
                Уверен, что в новом году нас ждет много всего хорошего 🥰`;
        }
    }

    setInterval(createSnowflake, 800);
    setInterval(updateCountdown, 1000);
});