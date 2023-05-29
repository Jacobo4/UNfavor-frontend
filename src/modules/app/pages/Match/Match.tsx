// Core
import React, {useEffect, useState} from "react";
// Redux
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {getMatches, likeMatch, dislikeMatch} from "@store/match/matchAsyncAction";
import {removeMatch} from "@store/match/matchSlice";
// Styles
import styles from "./Match.module.css";
import "./MatchOverrides.css"
// Images
import bgMatch from "@assets/images/bgMatch.jpg";
// Animations
import {AnimatePresence} from "framer-motion";
// Mui

import Dialog from "@mui/material/Dialog";
// Types
import type {Match} from "@store/match/matchAsyncAction"
// Icons
import {MdHeartBroken} from "react-icons/md";
// Components
import MatchCard from "@globalComponents/MatchCard/MatchCard";
import NoItemsLeft from "@root/components/NoItemsLeft/NoItemsLeft";

const broadcast = new BroadcastChannel('matches-channel');

const Match: React.FC = () => {
    const [position, setCurrentPosition] = useState<GeolocationPosition|null>(null);
    /// =========================== General ===========================
    const dispatch = useAppDispatch();
    /// =========================== Dialog ===========================
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const handleClose = () => setOpenDialog(false);

    /// =========================== Matches ===========================
    const {matches}: { matches: Array<Match> } = useAppSelector((state) => state.match);

    const likeMatchFavor = async (id) => {
        try {
            await dispatch(likeMatch({userId: id}));
        } catch (error) {
            console.error(error)
        }
    }

    const dislikeMatchFavor = async (id) => {
        try {
            await dispatch(dislikeMatch({userId: id}));
        } catch (error) {
            console.error(error)
        }
    }

    const removeCard = (indexToRemove: number) => {
        dispatch(removeMatch(indexToRemove));
    };

    useEffect(() => {

        navigator.geolocation.getCurrentPosition( (pos)=> {
            dispatch(getMatches({latitude: pos.coords.latitude, longitude: pos.coords.longitude}));
            setCurrentPosition(pos);
        });


        const handleNotifications = (event) => {
            setOpenDialog(true);
            console.log(event.data.payload)
        }
        broadcast.addEventListener('message', handleNotifications)
        return () => {
            broadcast.removeEventListener('message', handleNotifications);
        };
    }, []);

    return (
        <div className={styles['Match']}>


            <Dialog className={'overrideDialog'} onClose={handleClose} open={openDialog}>
                <h1 className={'text-shadows'}>¡MATCH!</h1>
            </Dialog>


            <div className={styles['bgMatch']} style={{backgroundImage: `url(${bgMatch})`}}></div>

            <div className={styles['container']}>
                <AnimatePresence>
                    {matches &&
                        matches.map((card: Match, index) => (
                            <MatchCard
                                key={index}
                                index={index}
                                likeCb={() => likeMatchFavor(card.user_id)}
                                removeCardCB={() => removeCard(index)}
                                card={card}
                                dislikeCb={() => dislikeMatchFavor(card.user_id)}/>
                        ))
                    }
                </AnimatePresence>
                {matches && matches?.length === 0 && (
                    <NoItemsLeft
                                icon={<MdHeartBroken/>}
                                title={"Ya no tienes matches"}
                                subtitle={"¡Sigue buscando!"}
                                reloadItems={true}

                                reloadItemsAction={()=>{dispatch(getMatches({latitude: position.coords.latitude, longitude: position.coords.longitude}))}}
                            />
                )}

            </div>
        </div>
    );
};

export default Match;
