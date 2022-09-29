// ! 29.09.2022 ====== Асинхронность и синхронность ==================
// ? JavaScript — это однопоточный язык программирования, в котором может быть выполнено только что-то одно за раз. То есть, в одном потоке движок JavaScript может обработать только 1 оператор за раз.Хоть однопоточные языки и упрощают написание кода, поскольку вы можете не беспокоиться о вопросах параллелизма, это также означает, что вы не сможете выполнять долгие операции, такие как доступ к сети, не блокируя основной поток.

// setTimeout(() => {
//   for (let i = 0; i < 100; i++) {
//     console.log("Сработает только после того, как цикл закончится");
//   }
// });

// let ul = document.getElementsByTagName("ul");
// for (let i = 0; i < 10; i++) {
//   let li = document.createElement("li");
//   li.innerText = `задача ${i}`;
//   ul[0].append(li);
// }

//  ! === setTimeout// setInterval===
// ? setTimeout - позволяет вызвать функцию один раз через определенный интервал времени
// setTimeout(() => {
//   console.log("Привет космос");
// }, 0);
// console.log(2);
// console.log(3);
// console.log(4);

// ? setInterval -позволяет вызвать функцию регулярно, повторяя вызов через определенный интервал времени
// let a = 0;
// let b = setInterval(() => {
//   //   console.log("Регулярно");
//   console.log(++a);
// }, 1000);

// let c = setTimeout(() => {
//   clearInterval(b);
// }, 5000);

// clearTimeout(b); // все очищается

// ? clearInterval - отменяет таймаут, ранее установленный вызовом setInterval/setTimeout

// ! === Promise =======
// ? Это объект, в котором лежит ответ на наш запрос
// Интерфейс Promise (промис) представляет собой обёртку для значения, неизвестного на момент создания промиса. Он позволяет обрабатывать результаты асинхронных операций так, как если бы они были синхронными: вместо конечного результата асинхронного метода возвращается своего рода обещание (дословный перевод слова "промис") получить результат в некоторый момент в будущем.
// Promise может находиться в трёх состояниях:
// ? 1).ожидание (pending): начальное состояние, не исполнен и не отклонён.
// ? 2). исполнено (fulfilled): операция завершена успешно.
// ? 3). отклонено (rejected): операция завершена с ошибкой.

// const p = new Promise((fulfilled, rejected) => {
//   let a = 1 + 2;
//   setTimeout(() => {
//     if (a == 2) {
//       fulfilled("Ваш запрос успешно выполнен");
//     } else {
//       rejected("Извините, ваш запрос выполнен безуспешно");
//     }
//   }, 2000);
// });
// console.log(p);
// console.log("Отправляю запрос на Бэк"); // Отправляю запрос на Бэк

// p.then((okMessage) => {
//   console.log(okMessage);
// })
//   .catch((errMessage) => {
//     console.error(errMessage); // main.js:66 Извините, ваш запрос выполнен безуспешно  КАК ОШИБКА
//   })
//   .finally(() => {
//     console.log("Ваш запрос выполнился, но без понятия как?"); // Ваш запрос выполнился, но без понятия как?
//   });

// ! === ЗАПРОСЫ ====
// todo  MLHttpRequest

// ? fetch -  это один из методов для совершения запроса на БЭК
// let arr = [];

// let data = fetch("https://jsonplaceholder.typicode.com/users");
// data
//   .then((response) => {
//     return response.json(); // преобразование в обычный формат из БЭк-формата
//   })
//   .then((info) => {
//     console.log(info);
//     arr = info;
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// //   todo HTTP  статусы
// setTimeout(() => {
//   console.log(arr);
//   arr.forEach((item) => {
//     console.log(item.name);
//   });
// }, 3000);

/////////////////////////////////////

// Import stylesheets
// import './style.css';

// ! 29/09/2022 Классная работа. Асинхронность, промисы и HTTP.

// Используя API списка всех стран
// выведите таблицу с информацией о
// всех странах наподобие такой:
// API: https://restcountries.eu/rest/v2/all

fetch("https://restcountries.com/v3.1/all")
  .then((result) => result.json())
  .then((data) => {
    data.forEach((item) => {
      //   console.log(item);
      let elem = `
            <tr>
                <td>${item.cca2}</td> // вытащили код страны                  
                <td class = "img" style="background: url(${item.flags.svg}")></td>          
                <td>${item.name.official}</td>  // вытащили название стран        
                <td>${item.capital}</td>  // вытащили название столиц      
                <td>${item.population}</td>  // вытащили кол-во населения      
            </tr>
            `;
      $("tbody").append(elem);
      $(".img").css("background-size", "contain");
    });
  });

///////////////////////////////////
// Import stylesheets
// import './style.css';

// ! 29/0/2022 Асинхронность, промисы и HTTP.  Домашняя работа

// Задание №1
// Создать программу - список покемонов.

// Пример:
// Bulbasaur
// Ivysaur
// Venusaur
// Charmander
// Charmeleon
// Charizard
// Squirtle
// … и т.п.

// При клике на имя покемона, показать рядом (в соседнем div-е) или во всплывающем
// окне информацию об этом покемоне, например:

// Имя: Charmeleon
// Тип: fire
// Рост: 11
// Вес: 190
// Изображение покемона (дополнительно)

// Указания:
// Список покемонов (первые 20 штук) получить через запрос к API:
// https://pokeapi.co/api/v2/pokemon/
// Информацию о каждом покемоне получать через запрос к API:
// https://pokeapi.co/api/v2/pokemon/{id}/
// где {id} - номер покемона
// Подсказка об используемых ключах результата
// (предположим что полученный объект у вас лежит в переменной result)
// Изображение: result.sprites.front_default
// Имя: result.name
// Тип: массив result.types. Из каждого элемента массива можно взять только type.name
// Рост: result.height
// Вес: result.weight

// Дополнительно:
// Используя ссылку на следующую страницу в результате (ссылку на API следующих
// результатов) реализовать пагинацию (постраничный вывод) в программе, т.е.:
// На клик по ссылке “Next” делать запрос на следующие 20 штук, заменять текущий список.
// Реализовать “Previous” и “Next” - возможность возвращаться на страницу ранее
// let div = document.getElementById("app");
// const getPokemons = async () => {
//   const pokemons = [];
//   await fetch("https://pokeapi.co/api/v2/pokemon/")
//     .then((res) => res.json())
//     .then((data) => data.results.forEach((i) => pokemons.push(i)))
//     .catch((e) => console.log(e));

//   for (let i = 0; i < pokemons.length; i++) {
//     let p = document.createElement("p");
//     p.innerHTML = pokemons[i].name;
//     div.appendChild(p);

//     p.addEventListener("click", () => {});
//   }
// };
// getPokemons();
