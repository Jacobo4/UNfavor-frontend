import React, {useState} from "react";
// Styles
import styles from "./Match.module.css";
import "./MatchOverrides.css"
//Images
import fotoFavour1 from "@assets/images/favour1.jpg";
import bgMatch from "@assets/images/bgMatch.jpg";
// Components
import MatchingCard from "./components/MatchingCard";
import {AnimatePresence} from "framer-motion";
import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";


export interface MatchCard {
    id: number,
    title: string,
    description: string,
    location: string,
    image: string,
}

const Match: React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(true);
    const handleClose = () => setOpenModal(false);
    const cardData: Array<MatchCard> = [
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

    const [cards, setCards] = useState<null | Array<MatchCard>>(cardData);

    // index of last card
    const activeIndex: number = cards.length - 1;
    const removeCard = (oldCard: MatchCard) => {
        setCards((currentCards) =>
            currentCards.filter((card: MatchCard) => {
                return card.id !== oldCard.id;
            })
        );
    };

    return (
        <div  className={styles['Match']}>


            <Dialog  className={'overrideDialog'} onClose={handleClose} open={openModal}>
                <h1 className={'text-shadows'}>¡MATCH!</h1>

            </Dialog>


            <div className={styles['bgMatch']} style={{backgroundImage: `url(${bgMatch})`}}></div>

            <div className={styles['container']}>
                <AnimatePresence>
                    {cards.map((card: MatchCard, index) => (
                        <MatchingCard
                            key={index}
                            index={index}
                            active={index === activeIndex}
                            removeCard={() => removeCard(card)}
                            card={card}
                        />
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Match;
