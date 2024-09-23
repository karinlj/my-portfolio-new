import { useState, useEffect } from "react";
import HeaderPages from "../layout/HeaderPages";
import { client } from "../../client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IAbout } from "../../interfaces";
import styled from "styled-components";
import { device, colors } from "../styles/variables";
import coverImage from "../../images/hugo.jpg";
import { StyledCenteredText, StyledContentLoading } from "../styles/general";

// const StyledCard = styled.div.attrs({
//   className: "pict_card",
// })`
//   background: #f9f9f9;
//   padding: 1.2rem 0.7rem 4rem 0.7rem;
//   color: ${colors.textcolor_dark};
//   height: 400px;
//   border-radius: 25px;

//   //clamp(minimum, preferred, maximum);
//   img {
//     // height: clamp(4rem, 26vw, 26rem);
//     object-fit: cover;
//     object-position: 50% 70%;
//     width: 100%;
//     /* border-radius: 25px 25px 0 0; */
//     border-radius: 25px;
//   }
// `;

// const StyledInfoBox = styled.div.attrs({
//   className: "info_box",
// })`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   background: ${colors.background_darkgrey_darker};
//   padding: 2rem 1.5rem 4rem 1.5rem;
//   color: ${colors.textcolor_light};
//   border-radius: 25px;
//   height: 400px;
//   p {
//     font-size: 1.5rem;
//   }
// `;

// const StyledInfoBox = styled.div.attrs({
//   className: "info_box",
// })`
//   display: flex;
//   align-items: center;
//   width: 85%;
//   margin-bottom: 1rem;
// `;

// const StyledReloadBtn = styled.button.attrs({
//   className: "reload_btn",
// })`
//   background: ${colors.pink_light};
//   border: none;
//   padding: 0.5rem;
//   margin-top: 2rem;
//   border-radius: 50%;
//   /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
//   &:hover {
//     /* filter: drop-shadow(0 0 3px ${colors.background_darkgrey}); */
//     filter: drop-shadow(0 0 3px white);

//     transition: all 1s ease;
//   }
//   i {
//     color: ${colors.background_darkgrey};
//     font-size: 2rem;
//   }
// `;

const AboutExtra = () => {
  const [index, setIndex] = useState(0);

  const [aboutData, setAboutData] = useState<IAbout | null>(null);
  const [loadingAbout, setLoadingAbout] = useState(false);

  const abortContrl = new AbortController();
  const getAboutData = () => {
    client
      .getEntries({
        content_type: "aboutDataFront",
        signal: abortContrl.signal,
      })
      .then((response) => {
        setAboutData(response.items[0] as any);
        setLoadingAbout(false);
      })
      .catch((error) => console.log("error", error));
  };

  const boxes = [
    {
      text: "I get inspired by my cats and nature, colors and culture and being active within animal welfare.",
      imageLeft: "filip_lo",
      imageCenter: "vilda2",
      imageRight: "lo",
    },
    {
      text: "blabla2",
      imageLeft: "truls_tree",
      imageCenter: "hugo_play",
      imageRight: "filip_truls",
    },
    {
      text: "blabla3",
      imageLeft: "filip_lo",
      imageCenter: "vilda",
      imageRight: "lo",
    },
  ];

  const handleClick = () => {
    if (index < 2) {
      setIndex(index + 1);
    } else setIndex(0);
  };

  // const VisualBugs = () => {
  //   const [index, setIndex] = useState(0);
  //   const animals = ["zebra", "cheetah", "lion", "giraffe", "meerkat", "elephant", "leopard"];

  //   // const boxes = [
  //   //   { text: "blabla", imageLeft: "zebra", imageRight: "cheetah" },
  //   //   { text: "blabla", imageLeft: "zebra", imageRight: "cheetah" },
  //   // ];

  //   // const cardsGrid = boxes.map((box, i) => {
  //   //   return (
  //   //     <>
  //   //       <div>{box.text}</div>
  //   //       <img src={require(`../../img/${box.imageLeft}.jpg`).default} key={i} alt={box} />
  //   //       <img src={require(`../../img/${box.imageRight}.jpg`).default} key={i} alt={box} />
  //   //     </>
  //   //   );
  //   // });

  //   // const animalImg = cardsGrid[index];

  //   const images = animals.map((animal, i) => {
  //     return <img src={require(`../../img/${animal}.jpg`).default} key={i} alt={animal} />;
  //   });
  //   //före
  //   const animalImg = images[index];
  //   const animalLabel = animals[index];

  //   const handleClick = () => {
  //     //7 images: if index < 6 (0-5), add 1
  //     if (index < animals.length - 1) {
  //       setIndex((index) => index + 1);
  //     } else {
  //       setIndex(0);
  //     }
  //   };
  //   useEffect(() => {
  //     // console.log("index: ", index);
  //   }, [index]);

  const cardsGrid = boxes.map((box, i) => {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <StyledInfoBox>
              {" "}
              <p>{box.text}</p>
              <StyledReloadBtn onClick={handleClick}>
                {" "}
                <i className="fas fa-redo"></i>
              </StyledReloadBtn>
            </StyledInfoBox>
          </div>

          <div className="col">
            <StyledCard>
              {" "}
              <img
                src={require(`../../images/${box.imageLeft}.jpg`)}
                key={i}
                alt="cat"
              />
            </StyledCard>
          </div>

          <div className="col">
            <StyledCard>
              {" "}
              <img
                src={require(`../../images/${box.imageCenter}.jpg`)}
                key={i}
                alt="cat"
              />
            </StyledCard>
          </div>

          <div className="col">
            <StyledCard>
              {" "}
              <img
                src={require(`../../images/${box.imageRight}.jpg`)}
                key={i}
                alt="cat"
              />
            </StyledCard>
          </div>
        </div>
      </div>
    );
  });

  const cardTema = cardsGrid[index];

  //get Items from contentful
  useEffect(() => {
    setLoadingAbout(true);
    getAboutData();
    //eslint-disable-next-line
  }, []);

  return (
    <main>
      <div className="container">
        <HeaderPages heading="Something more about me ..." color="pink" />
        <section>
          {cardTema}
          {/* <div className="container">
            <div className="row">
              <div className="col">
                <StyledCard>{cardTema}</StyledCard>
              </div>
              <div className="col">
                {" "}
                <StyledCard>pict</StyledCard>
              </div>
              <div className="col">
                {" "}
                <StyledCard>pict</StyledCard>
              </div>
            </div>
          </div> */}
        </section>
      </div>
    </main>
  );
};
export default AboutExtra;
