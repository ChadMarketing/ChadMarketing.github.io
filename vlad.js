// курсор
const cursor = document.querySelector(".custom-cursor");

// Обновление позиции курсора
document.addEventListener("mousemove", (event) => {
  cursor.style.left = `${event.pageX}px`;
  cursor.style.top = `${event.pageY}px`;
});

// музыка
const music = document.getElementById("backgroundMusic");
const toggle = document.getElementById("musicToggle");

let isPlaying = false;

const toggleMusic = () => {
  if (isPlaying) {
    music.pause();
  } else {
    music.play();
  }
  isPlaying = !isPlaying;
};

// Событие клика на картинку для старта музыки
toggle.addEventListener("click", toggleMusic);

// Попытка запустить музыку сразу при загрузке страницы (при необходимости)
window.addEventListener("load", () => {
  // Музыка будет запускаться только по клику на кнопку
  console.log("Нажмите на кнопку для воспроизведения музыки.");
});

// вторая страница
const img = document.querySelector(".slime-container img");
const displacementFilter = document.querySelector("feDisplacementMap");
const fartSound = document.getElementById("fart-sound");

img.addEventListener("mouseenter", () => {
  displacementFilter.setAttribute("scale", "20"); // Фиксированная небольшая деформация
  fartSound.currentTime = 0; // Сбрасываем время воспроизведения (чтобы звук срабатывал всегда)
  fartSound.play(); // Играем звук пУка 💨
});

img.addEventListener("mouseleave", () => {
  displacementFilter.setAttribute("scale", "0"); // Плавное возвращение
});
img.addEventListener("mouseenter", () => {
  fartSound.currentTime = 0;
  fartSound.play();
});

// текст
document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".animate-text");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Когда элемент виден, добавляем класс для анимации
          entry.target.classList.add("slide-in");
        } else {
          // Когда элемент выходит, убираем класс для перезапуска анимации
          entry.target.classList.remove("slide-in");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(text);
});
//
const wordContainer = document.getElementById("word");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Когда контейнер появляется на экране, начинаем анимацию
        const letters = entry.target.querySelectorAll(".letter");
        entry.target.style.opacity = 1; // Показываем контейнер

        // Для каждой буквы сбрасываем анимацию и повторно запускаем
        letters.forEach((letter, index) => {
          letter.style.animation = "none"; // Сброс анимации
          void letter.offsetWidth; // Хитрый способ сбросить анимацию
          letter.style.animation = `moveLetter 1s forwards ${index * 0.1}s`; // Перезапуск анимации с задержкой
        });

        // Добавляем капельки
        createDropsForLetters(entry.target);
      } else {
        // Когда элемент выходит с экрана, скрываем его
        wordContainer.style.opacity = 0;
      }
    });
  },
  { threshold: 0.5 } // Порог 50% видимости элемента
);

observer.observe(wordContainer);

function createDrop(x, y) {
  const drop = document.createElement("div");
  drop.classList.add("drop");

  // Устанавливаем фиксированное положение для каждой капли
  drop.style.left = `${x}px`; // x - это координата на странице, откуда капля будет падать
  drop.style.top = `${y}px`; // y - это координата, определяющая начальную точку

  // Случайная длительность анимации для каждой капли (скорость падения)
  const duration = Math.random() * 5 + 5; // 2-5 секунд
  drop.style.animationDuration = `${duration}s`;

  // Добавляем каплю на страницу
  document.body.appendChild(drop);

  // Удаляем каплю по завершении анимации
  setTimeout(() => {
    drop.remove();
  }, duration * 400); // Время, которое длится анимация (умножаем на 1000 для миллисекунд)
}

// Например, создаем капли с определенной позиции (x, y)
setInterval(() => {
  createDrop(1050, 1260);
  createDrop(1090, 1260);
  createDrop(1150, 1260);
  createDrop(1210, 1260);
  createDrop(1270, 1260);
  createDrop(1330, 1260);
  createDrop(1390, 1260);
  createDrop(1450, 1260);
  createDrop(1310, 1260);
  createDrop(1370, 1260);
  createDrop(1430, 1260);
  createDrop(1490, 1260);
  createDrop(1550, 1260);
  createDrop(1590, 1260);
  createDrop(1630, 1260);
  createDrop(1680, 1260);
  createDrop(1720, 1260);
}, 1500); // Интервал для создания новых капель

// Список фраз
const phrases = [
  {
    text: "Dominate the Market with All-in-One Marketing Power🚀",
    left: "28%",
  },
  { text: "Your Gateway to Unstoppable Marketing Growth🤩", left: "29.3%" },
  { text: "Maximize Your Reach – All Marketing, One Place🔥", left: "30.5%" },
  { text: "The Only Marketing Arsenal You’ll Ever Need✨", left: "31%" },
  { text: "Crush the Competition with Full-Stack Marketing💫", left: "29%" },
  { text: "One Hub, Infinite Marketing Possibilities⭐", left: "33%" },
  {
    text: "Supercharge Your Brand – All Marketing, Zero Limits🚀",
    left: "28%",
  },
  {
    text: "From Zero to Viral – The Ultimate Marketing Machine🤩",
    left: "28%",
  },
  {
    text: "All-in-One Marketing – Built for Explosive Growth🔥",
    left: "30.2%",
  },
  {
    text: "Skyrocket Your Success with Complete Marketing Domination✨",
    left: "25%",
  },
];

// Выбираем случайную фразу
const randomIndex = Math.floor(Math.random() * phrases.length);
const randomPhrase = phrases[randomIndex];

// Находим элемент с id "randomText"
const textElement = document.getElementById("randomText");

// Вставляем текст и применяем стили
textElement.textContent = randomPhrase.text; // <-- Устанавливаем только текст
textElement.style.left = randomPhrase.left; // <-- Применяем стиль left

// текст цена
document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".text_2");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Когда элемент виден, добавляем класс для анимации
          entry.target.classList.add("slide-in-1");
        } else {
          // Когда элемент выходит, убираем класс для перезапуска анимации
          entry.target.classList.remove("slide-in-1");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(text);
});
