import React, {useState} from "react";
// Styles
import styles from "./Match.module.css";
//Images
import fotoFavour1 from "@assets/images/favour1.jpg";
// Components
import MatchingCard from "@components/MatchingCard/MatchingCard";

interface CardVariants {
  hidden: { opacity: number; x: number; };
  visible: { opacity: number; x: number; };
  right: { opacity: number; x: number; };
  left: { opacity: number; x: number; };
}

interface MatchCard {
    id: number,
    title: string,
    description: string,
    location: string,
    image: string,
    swipedRight?: boolean | null,
    animation: typeof cardVariants[keyof typeof cardVariants];
}

const cardVariants: CardVariants = {
    hidden: {opacity: 0, x: -100},
    visible: {opacity: 1, x: 0},
    right: {opacity: 0, x: 500},
    left: {opacity: 0, x: -500},
};

const dragConstraints = {
    top: 0,
    bottom: 0,
    left: -200,
    right: 200,
};

const Match: React.FC = () => {
    const cardData: Array<MatchCard> = [
        {
            id: 1,
            title: "Card 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aperiam architecto dignissimos, illo laboriosam laborum nam obcaecati sequi sint! Ipsam, numquam, quas. Deserunt dolorem eligendi optio praesentium, rerum sint.",
            location: "This is a location",
            image: fotoFavour1,
            animation: cardVariants.visible,
            swipedRight: null
        },
        {
            id: 2,
            title: "Card 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aperiam architecto dignissimos, illo laboriosam laborum nam obcaecati sequi sint! Ipsam, numquam, quas. Deserunt dolorem eligendi optio praesentium, rerum sint.",
            location: "This is a location",
            image: fotoFavour1,
            animation: cardVariants.visible,
            swipedRight: null
        },
        {
            id: 3,
            title: "Card 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aperiam architecto dignissimos, illo laboriosam laborum nam obcaecati sequi sint! Ipsam, numquam, quas. Deserunt dolorem eligendi optio praesentium, rerum sint.",
            location: "This is a location",
            image: fotoFavour1,
            animation: cardVariants.visible,
            swipedRight: null
        },
        {
            id: 4,
            title: "Card 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aperiam architecto dignissimos, illo laboriosam laborum nam obcaecati sequi sint! Ipsam, numquam, quas. Deserunt dolorem eligendi optio praesentium, rerum sint.",
            location: "This is a location",
            image: fotoFavour1,
            animation: cardVariants.visible,
            swipedRight: null
        },
    ];

    const [cards, setCards] = useState<Array<MatchCard>>(cardData);
    const handleSwipe = (cardIndex, direction) => {
        const newCards: Array<MatchCard> = [...cards];
        const card: MatchCard = newCards[cardIndex];

        if (direction === "right") {
            card.animation = cardVariants.right;
        } else {
            card.animation = cardVariants.left;
        }

        setCards(newCards.filter((c) => c.id !== card.id));
    };

    return (
        <div className={styles['Match']}>

            {cards.map((card, index) => (
                <MatchingCard
                    title={card.title}
                    imgSrc={card.image}
                    description={card.description}
                    location={card.location}
                    onLikeClick={() => console.log("like")}
                    onDislikeClick={() => console.log("dislike")}
                    customStyles={styles['card']}
                    key={card.id}
                    motionProps={{
                        drag: "x",
                        dragConstraints: dragConstraints,
                        onDragEnd: (event, {offset, velocity}) => {
                            const swipePower = Math.abs(offset.x * velocity.x);
                            console.log(swipePower)
                            if (swipePower > 1000) {
                                console.log(offset.x > 0 ? "right" : "left")
                                handleSwipe(index, offset.x > 0 ? "right" : "left");
                            }
                        },
                        animate: card.animation,
                        transition: {type: "spring", stiffness: 200, damping: 20},
                        className: `card card--${card.swipedRight === true ? "right" : "left"}`
                    }}
                >

                </MatchingCard>
            ))}
        </div>
    );
};

export default Match;
