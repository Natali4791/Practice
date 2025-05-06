// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./css/index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const title = "Карточки с картинками";
// const copyright = "Авторские права принадлежат мне";
// const getRandom = () => {
//   const arr = Math.floor(Math.random() * 10);
//   return arr;
// };
// const items = ["React", "JavaScript", "Ajax", "HTML/CSS", "и ещё кое-что"];
// root
// .render
// <div className="container col-10">
//   {Array.from({ length: 5 }, (_, index) => (
//     <div className="card m-3">
//       <img src={`../public/T022.jpg/200`} className="card-img-top" alt="Мои картинки" />
//       <div className="card-body">
//         <h5 className="card-title">Заголовок карточки</h5>
//         <p className="card-text">
//           Должны были появиться разные картинки img src=https://picsum.photos/200 + index, но сайт
//           https://picsum.photos/200 не работает.
//         </p>
//       </div>
//     </div>
//   ))}
// </div>
// <HomePage />
// ();

//Вариант 1
//{
/* <ul>
<li>{items[0]}</li>
<li>{items[1]}</li>
<li>{items[2]}</li>
<li>{items[3]}</li>
</ul> */
//}

//Вариант 2
//{
/* <ul>
{items.map((item) => (
  <li>{item}</li>
))}
</ul> */
//}
//Вариант 3
//{/* <ul>
// {Array.from({ length: 5 }, (_, index) => (
//   <li>{`Элемент ${index + 1}`}</li>
// ))}
// </ul> *
//}
//Вариант 3
// Проверка четности тернарным оператором
//{
/* <ul>
{Array.from({ length: 5 }, (_, index) => (
  <li>{`Элемент ${getRandom() % 2 === 0 ? "even" : "odd"}`}</li>
))}
</ul>  */
//}
//Вставка inline стиля
/* <h1 style={{ color: "blue", fontSize: "50px" }}>{title}</h1> */
//Уникальный key ключ для каждого элемента
/* <ul>
{Array.from({ length: 5 }, (_, index) => (
  <li key={index}>{`${index + 1}. Элемент ${getRandom()} четный ${
    getRandom() % 2 === 0 ? "да" : "нет"
  }`}</li>
))}
</ul> */
//Моя попытка вставить свою картинку
/* <img src="./T022.jpg" className="card-img-top" alt="Тортики" /> */
//Рандомные картинки 200х200
// img
// src={`https://picsum.photos/${200 + index}/200`}
//Рандомные картинки 200х100
// src={`https://picsum.photos/${200 + index}/100`}
/* <img
src={`https://picsum.photos/${200 + index}/200`}
className="card-img-top"
alt="Разные картинки"
/> */
