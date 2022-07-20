import React, { useState } from "react";
import "./gallery.css";
import Img1 from "./img/1.jpg";
import Img2 from "./img/2.jpg";
import Img3 from "./img/3.jpg";
import Img4 from "./img/4.jpg";
import Img5 from "./img/5.jpg";
import Img6 from "./img/6.jpg";
import Img7 from "./img/7.jpg";
import Img8 from "./img/8.jpg";
import Img9 from "./img/9.jpg";
import Img10 from "./img/10.jpg";
import Img11 from "./img/11.jpg";
import Img12 from "./img/12.jpg";
import cImg1 from "./img/c1.jpg";
import cImg2 from "./img/c2.jpg";
import cImg3 from "./img/c3.jpg";
import cImg4 from "./img/c4.jpg";
import cImg5 from "./img/c5.jpg";
import cImg6 from "./img/c6.jpg";
import cImg7 from "./img/c7.jpg";
import cImg8 from "./img/c8.jpg";
import cImg9 from "./img/c9.jpg";
import cImg10 from "./img/c10.jpg";
import cImg11 from "./img/c11.jpg";
import cImg12 from "./img/c12.jpg";
import CloseIcon from "@mui/icons-material/Close";
import ImageSlider from "react-image-comparison-slider";

const Gallery = ({ startFrom, endAt }) => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
      cimgSrc: cImg1,
      desc: "Skupina bombona od kojih se jedan ističe po izgledu ambalaže te sadržaju unutar ambalaže",
    },
    {
      id: 2,
      imgSrc: Img2,
      cimgSrc: cImg2,
      desc: "Mrkve postavljene u posudu. Jedna od njih drugačijeg je oblika od ostalih",
    },
    {
      id: 3,
      imgSrc: Img3,
      cimgSrc: cImg3,
      desc: "Tanjuri sa postavljenim priborom. Ali jedan od tanjura ne sadrži uzorak cvijeta",
    },
    {
      id: 4,
      imgSrc: Img4,
      cimgSrc: cImg4,
      desc: "Lišče u šumi od kojeg jedan list nije uobičajene boje za lišče među kojim se nalazi",
    },
    {
      id: 5,
      imgSrc: Img5,
      cimgSrc: cImg5,
      desc: "Figure postavljene za početak društvene igre. No nisu sve figure istog oblika",
    },
    {
      id: 6,
      imgSrc: Img6,
      cimgSrc: cImg6,
      desc: "Skupina ključeva. Za jedan od njih nije poznato što točno otključava",
    },
    {
      id: 7,
      imgSrc: Img7,
      cimgSrc: cImg7,
      desc: "Televizor naizgled spreman za paljenje zajedno sa daljinskim upravljačem",
    },
    {
      id: 8,
      imgSrc: Img8,
      cimgSrc: cImg8,
      desc: "Zmija na grani drveta",
    },
    {
      id: 9,
      imgSrc: Img9,
      cimgSrc: cImg9,
      desc: "Žaba u kretnji šumom",
    },
    {
      id: 10,
      imgSrc: Img10,
      cimgSrc: cImg10,
      desc: "Ptica koja se sprema utažiti žeđ. Ili jednostavno uživa u pogledu",
    },
    {
      id: 11,
      imgSrc: Img11,
      cimgSrc: cImg11,
      desc: "Leptir koji promatra zelenilo u šumi",
    },
    {
      id: 12,
      imgSrc: Img12,
      cimgSrc: cImg12,
      desc: "Konstruirana je realnost u kojoj je vrijeme koje sat pokazuje noćno vrijeme, unatoč tome što pogled kroz prozor jasno pokazuje da je dan",
    },
  ];

  // "model" more like model
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [tempCimgSrc, setTempCimgSrc] = useState("");
  const [desc, setDesc] = useState("");
  const [opacity, setOpacity] = useState("");
  const getImg = (imgSrc, cImgSrc, desc) => {
    setOpacity("0.00");
    setTempImgSrc(imgSrc);
    setTempCimgSrc(cImgSrc);
    setDesc(desc);
    setModel(true);
  };
  const close = () => {
    setModel(false);
    setOpacity("1.00");
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <ImageSlider
          image1={tempImgSrc}
          image2={tempCimgSrc}
          defaultProgress={0}
          onSlide={() => {}}
        />
        <div className="desc">
          <p>{desc}</p>
        </div>
        <CloseIcon onClick={() => close()} />
      </div>
      <div className="gallery" style={{ opacity: opacity }}>
        {data.map((item, index) => {
          if (item.id >= startFrom && item.id <= endAt) {
            return (
              <div
                className="image"
                key={index}
                onClick={() => getImg(item.imgSrc, item.cimgSrc, item.desc)}
              >
                <img src={item.imgSrc} style={{ width: "100%" }} />
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Gallery;
