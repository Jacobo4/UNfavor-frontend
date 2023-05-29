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
// @ts-ignore
import {ReactComponent as SideDecor} from "@assets/images/login/loginDecor.svg";
// Framer motion
import {AnimatePresence, motion} from "framer-motion";
import {
    slideIn,
    staggerContainer,
    textVariant,
} from "@globalStyles/motion.js";
// Components
import Slider from "./components/Slider";
import CreditsCard from "./components/CreditsCard";
import MatchCard from "@globalComponents/MatchCard/MatchCard";
// Types
import {Match} from "@store/match/matchAsyncAction";
import NoItemsLeft from "@root/components/NoItemsLeft/NoItemsLeft";
import {MdHeartBroken} from "react-icons/md";

const cardData: Array<Match> = [
    {
        "user_id": "6474a2083c65493970d792b7",
        "name": "Jacobo",
        "age": 19,
        "favor_date_published": "2023-04-25T00:00:00.000Z",
        "favor_title": "Pet Sitting",
        "favor_description": "Take care of someone's pets while they are away.",
        "favor_category": "Any",
        "favor_review_avg": 5,
        "favor_img_url": "https://www.elcomercio.com/wp-content/uploads/2023/01/feid-ec-1-700x391.jpg"
    },
    {
        "user_id": "6474a2193c65493970d792bd",
        "name": "Alejandra",
        "age": 20,
        "favor_date_published": "2023-05-24T00:00:00.000Z",
        "favor_title": "House Cleaning",
        "favor_description": "Clean and organize someone's home.",
        "favor_category": "Any",
        "favor_review_avg": 3,
        "favor_img_url": "https://www.elcomercio.com/wp-content/uploads/2023/01/feid-ec-1-700x391.jpg"
    },
    {
        "user_id": "6474a2203c65493970d792c0",
        "name": "Andrés",
        "age": 18,
        "favor_date_published": "2023-05-24T00:00:00.000Z",
        "favor_title": "Meal Preparation",
        "favor_description": "Cook and package meals for someone who is busy or unable to cook.",
        "favor_category": "Any",
        "favor_review_avg": 3,
        "favor_img_url": "https://www.elcomercio.com/wp-content/uploads/2023/01/feid-ec-1-700x391.jpg"
    },
    {
        "user_id": "6474a2283c65493970d792c3",
        "name": "Angel",
        "age": 20,
        "favor_date_published": "2023-01-16T00:00:00.000Z",
        "favor_title": "Garden Maintenance",
        "favor_description": "Help with gardening tasks such as weeding, watering, and planting.",
        "favor_category": "Any",
        "favor_review_avg": 3,
        "favor_img_url": "https://www.elcomercio.com/wp-content/uploads/2023/01/feid-ec-1-700x391.jpg"
    },
    {
        "user_id": "6474a23d3c65493970d792c9",
        "name": "Juan Camilo",
        "age": 21,
        "favor_date_published": "2023-01-17T00:00:00.000Z",
        "favor_title": "Errand Assistance",
        "favor_description": "Run errands on behalf of someone, such as picking up prescriptions or mailing packages.",
        "favor_category": "Any",
        "favor_review_avg": 5,
        "favor_img_url": "https://www.elcomercio.com/wp-content/uploads/2023/01/feid-ec-1-700x391.jpg"
    }
];

const creators = [
    {
        id: 1,
        name: "Juan Jacobo Izquierdo Becerra",
        avatar: "https://media.licdn.com/dms/image/D5635AQGkHYQeX4IfSg/profile-framedphoto-shrink_200_200/0/1669044745251?e=1685638800&v=beta&t=0z4zMRhYDabaLFcZKV2WK7-xOdmh-AK2L-abS_k3yq0",
        linkedin: "https://www.linkedin.com/in/juan-jacobo-izquierdo-9aa617217/",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quod corrupti molestiae quibusdam ipsum voluptatem velit animi libero vero eveniet!",
    },
    {
        id: 2,
        name: "Natalia Andrea Quiroga Castillo",
        avatar: "https://media.licdn.com/dms/image/C5603AQGh9Jp0-HnlJA/profile-displayphoto-shrink_200_200/0/1654382968764?e=1690416000&v=beta&t=71-vVO0LVSxolKprh3Ts_del8aWd5ELjbl8yEWWT6WE",
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
        avatar: "https://scontent.fbog4-1.fna.fbcdn.net/v/t31.18172-8/26758202_1545578398844583_6227205994640363557_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=C-gKpg1kLUcAX9Nwy_6&_nc_ht=scontent.fbog4-1.fna&oh=00_AfDtO8a_0XGT0z-6yzvh3Q_ONbLmHc-8JuRHRhkzzBqNtg&oe=6496F11C",
        github: "https://github.com/IvanLoLo",
        linkedin: "https://www.linkedin.com/in/ivanlombana/",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quod corrupti molestiae quibusdam ipsum voluptatem velit animi libero vero eveniet!",
    },
    {
        id: 5,
        name: "Juan Camilo Zambrano Lopez",
        avatar: "https://scontent.fbog4-1.fna.fbcdn.net/v/t39.30808-6/249209413_4451798031579211_418906861013948822_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=huyUIYijn5AAX-pmbfs&_nc_ht=scontent.fbog4-1.fna&oh=00_AfArNrP0OF3f0SudfjUeKOxUbQ5sJe8tGsn4w1vIbcmd4g&oe=64756863",
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

    const isAdmin = useAppSelector((state) => state.auth.token?.admin);

    /// =========================== Cards ===========================
    const [cards, setCards] = useState(cardData);
    const reloadCards = () =>{setCards(cardData)};
    const removeCard = (oldCard) => {
        setCards((currentCards) =>
            currentCards.filter((card) => {
                return card.user_id !== oldCard.user_id;
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
                                {isLogged && isAdmin && (
                                    <div
                                        className={styles["buttonsContainerAdmin"]}>

                                        <Link to={"/admin/profilecontrol"}
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
                                <MatchCard
                                    key={index}
                                    customStyles={styles['matchCard']}
                                    index={index}
                                    removeCardCB={() => removeCard(card)}
                                    card={card}
                                    dislikeCb={() => null}
                                    likeCb={() => null}/>
                            ))}
                        </AnimatePresence>
                        {cards.length === 0 && (
                            <NoItemsLeft
                                icon={<MdHeartBroken/>}
                                title={"Ya no tienes matches"}
                                subtitle={"¡Sigue buscando!"}
                                reloadItems={true}
                                reloadItemsAction={reloadCards}
                            />
                        )}
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
