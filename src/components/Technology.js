import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { happy } from "./Api";
import "./sports.css";
import advertise from "../images/advertise.jpg";
export default function Technology() {
  const [data] = useContext(happy);

  const [Update, setUpdate] = useState(false);
  const clickhandler = () => {
    setUpdate(true);
  };
  let navigatetopage = useNavigate();
  const filtereddata = data.filter((list) => list.name === "Technology");

  return (
    <div>
      <div>
        <h1 className="maintext">Tech</h1>
        <hr className="horizon1"></hr>
      </div>

      <div className="containermain">
        {filtereddata
          .filter((value) => (Update ? value.id >= 11 : value.id <= 13))
          .map((items) => {
            return (
              <div
                className="newtab"
                onClick={() => navigatetopage(`/name/${items.id}`)}
              >
                <img className="imagesmain" src={items.urlToImage} alt="" />
                <div className="insidecont">
                  <h2 className="titlehead"> {items.title}</h2>
                  <p className="description">{items.url}</p>
                  <p className="date">
                   <span className="onedate">{items.name}</span>/<span className="twodate">{items.publishedAt}</span>
                  </p>
                </div>
                <div className="horiz2" >< hr/></div>
              </div>
            );
          })}
      </div>
      <button className="button" onClick={clickhandler}>
        show more
      </button>
      <div className="loadmore1">
                  <img
                    className="advertiseimage"
                    src={advertise}
                    alt="advertisement"
                  />
                  <h2 className="advertise"> Advertisement</h2>
                </div>

       <div className="toppost1">
        <h1>TopPosts</h1>
     
        {filtereddata
          .filter((value) => value.id >= 14)
          .map((items) => {
            return (
              <div
                
                onClick={() => navigatetopage(`/name/${items.id}`)}
              >
                <img className="imagetoppost" src={items.urlToImage} alt="" />
                <div className="boxinside">
                  <h3 className="titleside"> {items.title} </h3>
                  <p className="urlside">{items.url}</p>
                  <h4 className="dateside">
                    {items.name}/{items.publishedAt}
                  </h4>
                </div>
                <hr />
                
              </div>
            );
          })}
      </div>
    </div>
  );
}
