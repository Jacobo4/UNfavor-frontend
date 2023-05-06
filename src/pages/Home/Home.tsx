//Styles
import styles from "./Home.module.css";
import React from "react";
import logo from "@assets/images/logo.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import avatar from "@assets/images/avatar.png";
// import { ReactComponent as TopDecor } from "@assets/images/login/loginTopDecor.svg";
// @ts-ignore
import { ReactComponent as BottomDecor } from "@assets/images/login/loginBottomDecor.svg";
// @ts-ignore
import { ReactComponent as SideBgDecor } from "@assets/images/login/bgDecor.svg";
// @ts-ignore
import { ReactComponent as SideDecor } from "@assets/images/login/loginDecor.svg";
import { Link } from "react-router-dom";
import { useAppSelector } from "@store/hooks";

//Framer motion
import { motion } from "framer-motion";
import {
  slideIn,
  staggerContainer,
  textVariant,
} from "../../styles/motion";
import Card3d from "./Card3d";
import Slider from "./Slider";
import CreditsCard from "./CreditsCard";

const Home: React.FC = () => {
  const { isLogged } = useAppSelector((state) => state.auth);
  const creators = [
    {
      name: "Juan Jacobo Izquierdo Becerra",
      avatar: "https://lh3.googleusercontent.com/a-/ACB-R5TaTas8hZXgwR1IsgtMpxfjABQXDoYF3GkbST6LJA=s48-p",
      github: "https://github.com/Jacobo4",
      linkedin: "https://www.linkedin.com/in/juan-jacobo-izquierdo-9aa617217/",
      description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quod corrupti molestiae quibusdam ipsum voluptatem velit animi libero vero eveniet!",  
    },
    {
      name: "Natalia Andrea Quiroga Castillo",
      avatar: "https://lh3.googleusercontent.com/a/AGNmyxZCSIqgtAe8C5JxqkLE4E3gfEvj3hvJ36GP2Ng1WE8=s288",
      github: "https://github.com/nquirogac",
      linkedin: "https://www.linkedin.com/in/natalia-andrea-quiroga-castillo-7978a4213/",
      description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quod corrupti molestiae quibusdam ipsum voluptatem velit animi libero vero eveniet!",  
    },
    {
      name: "Fabian Leandro Lopez Gomez",
      avatar: "https://media.licdn.com/dms/image/C4D03AQG9Jym1CW9ugw/profile-displayphoto-shrink_800_800/0/1643224091817?e=1688601600&v=beta&t=ay0kLlRRUZBQ5Qp4gUk4TBrqeRb3FLETOiDF2Q7AWCU",
      github: "https://github.com/ElSistemologo",
      linkedin: "https://www.linkedin.com/in/leandrogomezfa/",
      description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quod corrupti molestiae quibusdam ipsum voluptatem velit animi libero vero eveniet!",  
    },
    {
      name: "Ivan Yared Lombana Lozano",
      avatar: "https://lh3.googleusercontent.com/a-/ACB-R5SyNM7IGod4ke6fdzGHoIq9Fd_UfVmRDgm56Avb_g=s48-p",
      github: "https://github.com/IvanLoLo",
      linkedin: "",
      description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quod corrupti molestiae quibusdam ipsum voluptatem velit animi libero vero eveniet!",  
    },
    {
      name: "Juan Camilo Zambrano Lopez",
      avatar: "https://lh3.googleusercontent.com/a-/ACB-R5SifGrQdp7k5sGnEKk7K0WFH7fgCTZBI05dN2csUg=s48-p",
      github: "https://github.com/juzambranol",
      linkedin: "https://www.linkedin.com/in/juan-camilo-zambrano-lopez-472a7424b/",
      description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quod corrupti molestiae quibusdam ipsum voluptatem velit animi libero vero eveniet!",  
    },
    {
      name: "Nicolas David Galindo Carvajal",
      avatar: "https://media.licdn.com/dms/image/C5603AQFwEgJ8vUiqVQ/profile-displayphoto-shrink_800_800/0/1614117310798?e=1688601600&v=beta&t=BSenyeI_ihGcLaQCqy5QjJps86JSjPKTIe1i3ZVW-JA",
      github: "https://github.com/NickGalindo",
      linkedin: "https://www.linkedin.com/in/nicolas-david-galindo-carvajal-a79a56207/",
      description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quod corrupti molestiae quibusdam ipsum voluptatem velit animi libero vero eveniet!",  
    },
  ]
  return (
    <div className={styles["Home"]}>
      <section className={styles["mainInfo"]}>
        <div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="onScreen"
            viewport={{ once: false, amount: 0.25 }}
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
                  <img src={logo} alt="" />
                </motion.div>
              </figure>

              <motion.h1 variants={textVariant(0.1)}>UNFavor</motion.h1>
              <motion.h2 variants={textVariant(0.15)}>
                Ofrece favores y recibe otros a cambio
              </motion.h2>
              {!isLogged && (
                <motion.div 
                variants={textVariant(0.15)}
                className={styles["buttonsContainer"]}>
                  <Link to={"/auth/signin"}
                  className={styles["buttonInfo"]}>Registrarme</Link>
                  <Link to={"/auth/login"}
                  className={styles["buttonInfo"]}>
                  Iniciar Sesión</Link>
                  <a href="/#Info" className={styles["buttonInfo"]}>
                    Más Información
                  </a>
                  <a href="/#credits" className={styles["buttonInfo"]}>
                    Créditos
                  </a>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
        <div className={styles["ilustration"]}>
          <motion.div
            variants={slideIn('right','tween',0.2,1)}
            
          >

              <SideDecor></SideDecor>
            
          </motion.div>
        </div>
      </section>
      <section id="Info" className={styles["InfoApp"]}>
        <div>
        <Card3d></Card3d>
        </div>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="onScreen"
            viewport={{ once: false, amount: 0.25 }}
          >
        <motion.h1
        variants={textVariant(0.1)}
        >Ofrece favores y recibe otros a cambio</motion.h1>
        <motion.h2
        variants={textVariant(0.1)}
        >
          UNFavor te permite ofrecer tus servicios como favores y encontrar
          personas que ofrezcan los servicios que buscas, permitiendo un
          intercambio
        </motion.h2>
        </motion.div>
      
      
      </section>
      <section id="Info" className={styles["InfoDetails"]}>
      <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="onScreen"
            viewport={{ once: false, amount: 0.25 }}
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
        >¡Encuentra el favor que necesites a la hora que necesites!</motion.h4>
        </motion.div>
        <Slider></Slider>
      </section>
      <section id="credits" className={styles["InfoCredits"]}>
      <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="onScreen"
            viewport={{ once: false, amount: 0.1 }}
          >
        <motion.h1
        variants={textVariant(0.1)}
        >Creadores</motion.h1>
        </motion.div>
        <div className={styles["credits"]}>
          <Stack direction="row" spacing={2}>
            <div className={styles["container"]}>
              {creators.map((creator) => 
              <CreditsCard 
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
  );
};

export default Home;
