// Core
import React, {useEffect, useState} from "react";
// Redux
import {useAppDispatch, useAppSelector} from "@store/hooks";
// Styles
import styles from "./Match.module.css";
import "./MatchOverrides.css"
// Images
import bgMatch from "@assets/images/bgMatch.jpg";
// Animations
import {AnimatePresence} from "framer-motion";
// Mui
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
// Components
import MatchCard from "@globalComponents/MatchCard/MatchCard";
// Types
import type {Match} from "@store/match/matchAsyncAction"
import {getMatches, likeMatch} from "@store/match/matchAsyncAction";
import {removeMatch} from "@store/match/matchSlice";
import {askPermission, getUserSubscription, registerSw, subscribeNotifications} from "@config/serviceWorker";
import {toast} from "react-toastify";
import NoItemsLeft from "@root/components/NoItemsLeft/NoItemsLeft";
import {MdHeartBroken} from "react-icons/md";

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
            console.log("asd")
            await dispatch(likeMatch({userId: id}));
        } catch (error) {
            console.error(error)
        }
    }

    const dislikeMatchFavor = async (id) => {
        console.log("dislike", id)
    }

    const removeCard = (indexToRemove: number) => {
        dispatch(removeMatch(indexToRemove));
    };

    useEffect(() => {

        navigator.geolocation.getCurrentPosition( (pos)=> {
            dispatch(getMatches({latitude: pos.coords.latitude, longitude: pos.coords.longitude}));
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
                                likeCb={() => likeMatchFavor(card.id)}
                                removeCardCB={() => removeCard(index)}
                                card={card}
                                dislikeCb={() => null}/>
                        ))
                    }
                </AnimatePresence>
                {matches && matches?.length === 0 && (
                    <NoItemsLeft
                                icon={<MdHeartBroken/>}
                                title={"Ya no tienes matches"}
                                subtitle={"¡Sigue buscando!"}
                                reloadItems={true}
                                reloadItemsAction={()=>{dispatch(getMatches())}}
                            />
                )}

            </div>
        </div>
    );
};

export default Match;
