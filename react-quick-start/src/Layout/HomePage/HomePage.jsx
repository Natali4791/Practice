import React, { useState, useEffect } from "react";
import axios from "axios";
import ContentItem from "./components/ContentItem";
import HeaderItem from "./components/HeaderItem";
import FooterItem from "./components/FooterItem";
const baseUrl = "https://jsonplaceholder.typicode.com/posts";
// const imgUrl = "https://jsonplaceholder.typicode.com/photos";

const HomePage = () => {
  const title = "Новое название карточек";
  const [labels, setLabels] = useState([
    // { id: 1, cardTitle: "Заголовок 1", cardText: "Описание 1" },
    // { id: 2, cardTitle: "Заголовок 2", cardText: "Описание 2" },
    // { id: 3, cardTitle: "Заголовок 3", cardText: "Описание 3" },
    // { id: 4, cardTitle: "Заголовок 4", cardText: "Описание 4" },
    // { id: 5, cardTitle: "Заголовок 5", cardText: "Описание 5" },
    // { id: 6, cardTitle: "Заголовок 6", cardText: "Описание 6" },
  ]);
  // const [pictures, setPictures] = useState([]);
  // useEffect(() => {
  //   axios.get(imgUrl).then((res1) => {console.log(res1);

  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      // const temp = [];
      setLabels(res.data.slice(0, 5)); /*.forEach(*/
      // {
      // userId,
      // id,
      // title,
      // body
      // }
      // (item) => {
      //   temp.push({
      //     id: item.id,
      //     cardTitle: item.title.slice(0, 10),
      //     cardText: item.body.slice(0, 50),
      //   });
      // }
      /*);*/
      // setLabels(temp);
    });
  });
  return (
    <div className="container col-10">
      <HeaderItem headerText={title} />
      <ContentItem setOfLabels={labels} />

      <FooterItem />
    </div>
  );
};

export default HomePage;

//{ id: 1, cardTitle: "Новый Заголовок 1", cardText: "Новое Описание 1" }

{
  /* <button
        className="btn btn-primary m-3"
        onClick={() => {
          setLabels([
            ...labels,
            { id: 1, cardTitle: "Новый Заголовок 1", cardText: "Новое Описание 1" },
          ]);
        }}
      >
        Добавить элемент
      </button> */
}
