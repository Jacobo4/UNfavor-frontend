import React, {useState} from "react";
// Motion
import {motion, HTMLMotionProps} from "framer-motion";
// Styles
import styles from "./MatchingCard.module.css";
//Icons
import {SlLike, SlDislike} from "react-icons/sl";

interface IProps {
  customStyles?: string
  imgSrc: string;
  title: string;
  description: string;
  location: string;
}

const MatchingCard: React.FC<any> = ({card, index, removeCard, active}) => {
  const [leaveX, setLeaveX] = useState(0);
  const onDragEnd = (_e: any, info) => {
    if (info.offset.x > 100) {
      setLeaveX(1000);
      removeCard(card);
    }
    if (info.offset.x < -100) {
      setLeaveX(-1000);
      removeCard(card);
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
          className={styles['MatchingCard']}
          data-testid="active-card"
        >
          <img
            className={styles.ImageFavour}
            src={card.image}
            alt="Persona Pintando Casa"
            draggable={false}
          />
          <div className={styles.InfoContainer}>
            {/*Texts*/}
            <div className={styles.InfoTextContainer}>
              <h3>{card.title}</h3>
              <h4>{card.location}</h4>
              <p>{card.description}</p>
            </div>

            {/*Buttons*/}
            <div className={styles.ButtonContainer}>
              <button className={styles.ButtonDis}>
                <SlDislike></SlDislike>
              </button>
              <button className={styles.ButtonLike}>
                <SlLike></SlLike>
              </button>
            </div>

          </div>
        </motion.div>
    </>
  );
};
export default MatchingCard;
