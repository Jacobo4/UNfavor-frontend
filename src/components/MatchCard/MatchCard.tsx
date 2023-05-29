import React, {useState} from "react";
// Redux
import {useAppDispatch} from "@store/hooks";
import {likeMatch} from "@store/match/matchAsyncAction";
// Motion
import {motion, HTMLMotionProps} from "framer-motion";
// Images
import bgMatch from "@assets/images/favour1.jpg";
// Styles
import styles from "./MatchCard.module.css";
// Icons
import {SlLike, SlDislike} from "react-icons/sl";
// Types
import type {Match} from "@store/match/matchAsyncAction";
import {Link} from "react-router-dom";
import {Rating} from "@mui/material";



interface MatchCardIProps {
    card: Match;
    customStyles?: string;
    index: number;
    likeCb: () => void;
    dislikeCb: () => void;
    removeCardCB: () => void;
}

const MatchCard: React.FC<MatchCardIProps> = ({card, customStyles, index,likeCb, dislikeCb, removeCardCB}) => {
    const [leaveX, setLeaveX] = useState(0);
    const dispatch = useAppDispatch();
    const handleLikeMatch = async () => {
        await likeCb();
        setLeaveX(1000);
        removeCardCB();
    }
    const handleDislikeMatch = async () => {
        await dislikeCb();
        setLeaveX(-1000);
        removeCardCB();
    }
    const onDragEnd = (_e: any, info) => {
        if (info.offset.x > 100) {
            handleLikeMatch();
        }
        if (info.offset.x < -100) {
            handleDislikeMatch();
        }
    };

    return (
        <>
            <motion.div
                drag={true}
                dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
                onDragEnd={onDragEnd}
                initial={{
                    scale: 1,
                }}
                animate={{
                    scale: 1.05,
                    rotate: `${index % 2 === 0 ? 3 : -3}deg`,
                }}
                exit={{
                    x: leaveX,
                    opacity: 0,
                    scale: 0.5,
                    transition: {duration: 0.2},
                }}
                className={`${styles['MatchCard']} ${customStyles}`}
                data-testid="active-card"
            >
                <img
                    className={styles.ImageFavour}
                    src={card.favor_img_url}
                    alt='Mi favor'
                    draggable={false}
                />
                <div className={styles.InfoContainer}>
                    {/*Texts*/}
                    <div className={styles.InfoTextContainer}>
                        <h2>{card.favor_title} - {card.favor_category}</h2>
                        <Rating readOnly defaultValue={0} value={card.favor_review_avg}/>
                        <h4>Nombre: {card.name}</h4>
                        <h4>Edad: {card.age}</h4>
                        <h5>Fecha publicación: {new Date(card.favor_date_published).toLocaleDateString('es-CO')}</h5>
                        <p>{card.favor_description}</p>
                    </div>

                    {/*Buttons*/}
                    <div className={styles.ButtonContainer}>
                        <button onClick={handleDislikeMatch} className={styles.ButtonDis}>
                            <SlDislike></SlDislike>
                        </button>
                        <button onClick={() => handleLikeMatch()} className={styles.ButtonLike}>
                            <SlLike></SlLike>
                        </button>
                    </div>

                </div>
            </motion.div>
        </>
    );
};
export default MatchCard;
