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
import MatchCard from "./components/MatchCard";
// Types
import type {Match} from "@store/match/matchAsyncAction"
import {getMatches} from "@store/match/matchAsyncAction";
import {removeMatch} from "@store/match/matchSlice";
import {askPermission, registerSw, subscribeNotifications} from "@config/serviceWorker";

const Match: React.FC = () => {
    /// =========================== General ===========================
    const dispatch = useAppDispatch();
    /// =========================== Dialog ===========================
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const handleClose = () => setOpenDialog(false);

    /// =========================== Matches ===========================
    const {matches}: { matches: Array<Match> } = useAppSelector((state) => state.match);

    const removeCard = (indexToRemove: number) => {
        dispatch(removeMatch(indexToRemove));
    };

    useEffect(() => {
        dispatch(getMatches());

        const showNotification = async () => {
            Notification.requestPermission((result) => {
                if (result === "granted") {
                    navigator.serviceWorker.ready.then((registration) => {


                        registration.addEventListener('push', (event) => {
                            // Retrieve the notification payload
                            const notificationData = event.data.json();

                            toast.info(notificationData);

                            setOpenDialog(true);

                            registration.showNotification("Vibration Sample", {
                                body: "Buzz! Buzz!",
                                icon: "../images/touch/chrome-touch-icon-192x192.png",
                                vibrate: [200, 100, 200, 100, 200, 100, 200],
                                tag: "vibration-sample",
                            });


                            // Handle the push notification as desired
                            // handlePushNotification(notificationData);
                        });
                    });
                }
            });
        }

        showNotification();
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
                                removeCard={() => removeCard(index)}
                                card={card}
                            />
                        ))
                    }
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Match;
