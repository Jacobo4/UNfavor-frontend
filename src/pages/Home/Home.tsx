import React, {useEffect, useState} from "react";
// Router
import {Link} from "react-router-dom";
// Redux
import {useAppSelector} from "@store/hooks";
// Styles
import styles from "./Home.module.css";
// MUI
import Stack from "@mui/material/Stack";
// Images
import logo from "@assets/images/logo.png";
import fotoFavour1 from "@assets/images/favour1.jpg";
// @ts-ignore
import {ReactComponent as SideDecor} from "@assets/images/login/loginDecor.svg";
// Framer motion
import {AnimatePresence, motion} from "framer-motion";
import {
  slideIn,
  staggerContainer,
  textVariant,
} from "@styles/motion.js";
// Components
import MatchingCard from "../Match/components/MatchingCard";
import Slider from "./components/Slider";
import CreditsCard from "./components/CreditsCard";
import DommieCard from "./components/DommieCard";

const cardData: Array = [
  {
    id: 1,
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aperiam architecto dignissimos, illo laboriosam laborum nam obcaecati sequi sint! Ipsam, numquam, quas. Deserunt dolorem eligendi optio praesentium, rerum sint.",
    location: "This is a location",
    image: fotoFavour1,
  },
  {
    id: 2,
    title: "Card 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aperiam architecto dignissimos, illo laboriosam laborum nam obcaecati sequi sint! Ipsam, numquam, quas. Deserunt dolorem eligendi optio praesentium, rerum sint.",
    location: "This is a location",
    image: fotoFavour1,
  },
  {
    id: 3,
    title: "Card 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aperiam architecto dignissimos, illo laboriosam laborum nam obcaecati sequi sint! Ipsam, numquam, quas. Deserunt dolorem eligendi optio praesentium, rerum sint.",
    location: "This is a location",
    image: fotoFavour1,
  },
  {
    id: 4,
    title: "Card 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aperiam architecto dignissimos, illo laboriosam laborum nam obcaecati sequi sint! Ipsam, numquam, quas. Deserunt dolorem eligendi optio praesentium, rerum sint.",
    location: "This is a location",
    image: fotoFavour1,
  },
];

const creators = [
  {
    id: 1,
    name: "Juan Jacobo Izquierdo Becerra",
    avatar: "https://lh3.googleusercontent.com/a-/ACB-R5TaTas8hZXgwR1IsgtMpxfjABQXDoYF3GkbST6LJA=s48-p",
    github: "https://github.com/Jacobo4",
    linkedin: "https://www.linkedin.com/in/juan-jacobo-izquierdo-9aa617217/",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quod corrupti molestiae quibusdam ipsum voluptatem velit animi libero vero eveniet!",
  },
  {
    id: 2,
    name: "Natalia Andrea Quiroga Castillo",
    avatar: "https://lh3.googleusercontent.com/a/AGNmyxZCSIqgtAe8C5JxqkLE4E3gfEvj3hvJ36GP2Ng1WE8=s288",
    github: "https://github.com/nquirogac",
    linkedin: "https://www.linkedin.com/in/natalia-andrea-quiroga-castillo-7978a4213/",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quod corrupti molestiae quibusdam ipsum voluptatem velit animi libero vero eveniet!",
  },
  {
    id: 3,
    name: "Fabian Leandro Lopez Gomez",
    avatar: "https://media.licdn.com/dms/image/C4D03AQG9Jym1CW9ugw/profile-displayphoto-shrink_800_800/0/1643224091817?e=1688601600&v=beta&t=ay0kLlRRUZBQ5Qp4gUk4TBrqeRb3FLETOiDF2Q7AWCU",
    github: "https://github.com/ElSistemologo",
    linkedin: "https://www.linkedin.com/in/leandrogomezfa/",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quod corrupti molestiae quibusdam ipsum voluptatem velit animi libero vero eveniet!",
  },
  {
    id: 4,
    name: "Ivan Yared Lombana Lozano",
    avatar: "https://lh3.googleusercontent.com/a-/ACB-R5SyNM7IGod4ke6fdzGHoIq9Fd_UfVmRDgm56Avb_g=s48-p",
    github: "https://github.com/IvanLoLo",
    linkedin: "https://www.linkedin.com/in/ivanlombana/",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quod corrupti molestiae quibusdam ipsum voluptatem velit animi libero vero eveniet!",
  },
  {
    id: 5,
    name: "Juan Camilo Zambrano Lopez",
    avatar: "https://lh3.googleusercontent.com/a-/ACB-R5SifGrQdp7k5sGnEKk7K0WFH7fgCTZBI05dN2csUg=s48-p",
    github: "https://github.com/juzambranol",
    linkedin: "https://www.linkedin.com/in/juan-camilo-zambrano-lopez-472a7424b/",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quod corrupti molestiae quibusdam ipsum voluptatem velit animi libero vero eveniet!",
  },
  {
    id: 6,
    name: "Nicolas David Galindo Carvajal",
    avatar: "https://media.licdn.com/dms/image/C5603AQFwEgJ8vUiqVQ/profile-displayphoto-shrink_800_800/0/1614117310798?e=1688601600&v=beta&t=BSenyeI_ihGcLaQCqy5QjJps86JSjPKTIe1i3ZVW-JA",
    github: "https://github.com/NickGalindo",
    linkedin: "https://www.linkedin.com/in/nicolas-david-galindo-carvajal-a79a56207/",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quod corrupti molestiae quibusdam ipsum voluptatem velit animi libero vero eveniet!",
  },
];

const Home: React.FC = () => {
  const {isLogged} = useAppSelector((state) => state.auth);
  console.log(isLogged);
  const isAdmin = useAppSelector((state) => state.auth.token?.admin);
  console.log(isAdmin);
  /// =========================== Cards ===========================
  const [cards, setCards] = useState(cardData);
  const activeIndex = cards.length - 1; // index of last card
  const removeCard = (oldCard) => {
    setCards((currentCards) =>
      currentCards.filter((card) => {
        return card.id !== oldCard.id;
      })
    );
  };

  return (
    <main className={styles["Home"]}>
      <div className={styles['section-wrapper']}>
        <section className={styles["mainInfo"]}>
          <div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="onScreen"
              viewport={{once: false, amount: 0.25}}
            >
              <div className={styles["Info"]}>
                <figure className={styles["logo"]}>
                  <motion.div
                    animate={{
                      rotate: [300, 0, 0, 300, 0],
                      borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                      duration: 50,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  >
                    <img src={logo} alt=""/>
                  </motion.div>
                </figure>

                <motion.h1 variants={textVariant(0.1)}>UNFavor</motion.h1>
                <motion.h2 variants={textVariant(0.15)}>
                  Ofrece favores y recibe otros a cambio
                </motion.h2>
                {isLogged && isAdmin &&(
                  <div
                    className={styles["buttonsContainerAdmin"]}>

                    <Link to={"/auth/login"} //CAMBIAR A "/admin/profilecontrol"
                          className={styles["buttonInfo"]}>
                      Ir a perfil de administrador</Link>
                    

                  </div>
                )}
                {!isLogged && (
                  <div
                    className={styles["buttonsContainer"]}>

                    <Link to={"/auth/login"}
                          className={styles["buttonInfo"]}>
                      Iniciar Sesión</Link>
                    <a href="/#Info" className={styles["buttonInfo"]}>
                      Más Información
                    </a>

                  </div>
                )}
              </div>
            </motion.div>
          </div>
          <div className={styles["ilustration"]}>
            <motion.div
              variants={slideIn('right', 'tween', 0.2, 1)}

            >

              <SideDecor></SideDecor>

            </motion.div>
          </div>
        </section>
      </div>
      <div className={styles['section-wrapper']}>
        <section id="Info" className={styles["InfoApp"]}>
          <div className={styles['cardsContainer']}>
            <AnimatePresence>
              {cards.map((card, index) => (
                <DommieCard
                  key={index}
                  index={index}
                  active={index === activeIndex}
                  removeCard={() => removeCard(card)}
                  card={card}
                />
              ))}
            </AnimatePresence>
             {cards.length === 0 ? (
                <h5>Terminaste con los favores!</h5>
              ) : null}
          </div>
          <div className={styles['slogan']}>
            <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="onScreen"
            viewport={{once: false, amount: 0.25}}
          >
            <motion.h1
              variants={textVariant(0.1)}
            >Ofrece favores y recibe otros a cambio
            </motion.h1>
            <motion.h2
              variants={textVariant(0.1)}
            >
              UNFavor te permite ofrecer tus servicios como favores y encontrar
              personas que ofrezcan los servicios que buscas, permitiendo un
              intercambio
            </motion.h2>
          </motion.div>
          </div>



        </section>

      </div>
      <div className={styles['section-wrapper']}>
        <section id="Info" className={styles["InfoDetails"]}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="onScreen"
            viewport={{once: false, amount: 0.25}}
          >
            <motion.h1
              variants={textVariant(0.1)}
            >
              ¿Necesitas ayuda? La comunidad está aquí para ti con nuestro
              intercambio de favores.
            </motion.h1>
            <motion.h2
              variants={textVariant(0.1)}
            >
              UNFavor te permite ofrecer tus servicios como favores y encontrar
              personas que ofrezcan los servicios que buscas, permitiendo un
              intercambio
            </motion.h2>
            <motion.h4
              variants={textVariant(0.1)}
            >¡Encuentra el favor que necesites a la hora que necesites!
            </motion.h4>
          </motion.div>
          <Slider></Slider>
        </section>

      </div>
      <div className={styles['section-wrapper']}>
        <section id="credits" className={styles["InfoCredits"]}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="onScreen"
            viewport={{once: false, amount: 0.1}}
          >
            <motion.h1
              variants={textVariant(0.1)}
            >Creadores
            </motion.h1>
          </motion.div>
          <div className={styles["credits"]}>
            <Stack direction="row" spacing={2}>
              <div className={styles["container"]}>
                {creators.map((creator) =>
                  <CreditsCard key={creator.id}
                    name={creator.name}
                    img={creator.avatar}
                    description={creator.description}
                    github={creator.github}
                    linkedin={creator.linkedin}
                  />
                )}


              </div>
            </Stack>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
