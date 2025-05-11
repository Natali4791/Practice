import React from "react";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
const ContentItem = (props) => {
  return (
    <div>
      {props.setOfLabels.map((item, index) => (
        <div key={item.id} className="card m-3">
          <img
            src={`https://jsonplaceholder.typicode.com/photos`}
            className="card-img-top"
            /*{item.cardImg}*/ alt="Фейковые картинки"
          />
          <div className="card-body">
            <h5 className="card-title">{item.title.slice(0, 30)}</h5>
            <p className="card-text">{item.body.slice(0, 50)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ContentItem;
