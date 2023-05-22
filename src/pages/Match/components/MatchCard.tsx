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



interface MatchCardIProps {
    card: Match
    index: number;
    removeCard: () => void;
}

const MatchCard: React.FC<MatchCardIProps> = ({card, index, removeCard}) => {
    const [leaveX, setLeaveX] = useState(0);
    const dispatch = useAppDispatch();
    const handleLikeMatch = async () => {
        try {
            await dispatch(likeMatch({userId: card.id}));
            setLeaveX(1000);
            removeCard();
        } catch (error) {
            console.error(error)
        }
    }
    const handleDislikeMatch = () => {
        setLeaveX(-1000);
        removeCard();
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
                className={styles['MatchCard']}
                data-testid="active-card"
            >
                <img
                    className={styles.ImageFavour}
                    src={bgMatch}
                    alt="Persona Pintando Casa"
                    draggable={false}
                />
                <div className={styles.InfoContainer}>
                    {/*Texts*/}
                    <div className={styles.InfoTextContainer}>
                        <h3>{card.title}</h3>
                        <h6><Link to={"/"}> {card.email} </Link> </h6>
                        <h4>{card.location}</h4>
                        <p>{card.description}</p>
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
