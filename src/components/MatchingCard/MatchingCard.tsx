import React from "react";
// Motion
import {motion, HTMLMotionProps} from "framer-motion";
// Styles
import styles from "./MatchingCard.module.css";
//Icons
import {SlLike, SlDislike} from "react-icons/sl";

interface IProps {
    motionProps?: HTMLMotionProps<"div">,
    customStyles?: string
    imgSrc: string;
    title: string;
    description: string;
    location: string;
    onLikeClick?: () => void;
    onDislikeClick?: () => void;
    children?: React.ReactNode;
}

const MatchingCard = ({
                          motionProps,
                          customStyles,
                          imgSrc,
                          title,
                          description,
                          location,
                          onLikeClick,
                          onDislikeClick
                      }: IProps) => {
    const onLikeClickHandler = () => {
        onLikeClick();
    }

    const onDislikeClickHandler = () => {
        onDislikeClick();
    }
    return (
        <div className={`${styles["container"]} ${customStyles}`}>
            <motion.div {...motionProps} className={styles["card"]}>
                <img
                    className={styles.ImageFavour}
                    src={imgSrc}
                    alt="Persona Pintando Casa"
                    draggable={false}
                />
                <div className={styles.InfoContainer}>
                    {/*Texts*/}
                    <div className={styles.InfoTextContainer}>
                        <h3>{title}</h3>
                        <h4>{location}</h4>
                        <p>{description}</p>
                    </div>

                    {/*Buttons*/}
                    <div className={styles.ButtonContainer}>
                        <button onClick={onLikeClickHandler} className={styles.ButtonLike}>
                            <SlLike></SlLike>
                        </button>
                        <button onClick={onDislikeClickHandler} className={styles.ButtonDis}>
                            <SlDislike></SlDislike>
                        </button>
                    </div>

                </div>
            </motion.div>
        </div>
    );
};

export default MatchingCard;
