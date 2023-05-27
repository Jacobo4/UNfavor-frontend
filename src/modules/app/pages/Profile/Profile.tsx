// Core
import React, {useEffect, useState} from "react";
// Router
import {Link, useParams} from "react-router-dom";
// Redux

import {useAppDispatch, useAppSelector} from "@store/hooks";
import {getProfileInfo, UserProfile, getMatchesHistory} from "@store/user/userAsyncAction";
//Styles
import styles from "./Profile.module.css";
// Icons
import {BiUser, BiHistory} from "react-icons/bi";
import {IoLocation} from "react-icons/io5";
// Components
import HistoryTab from "./components/HistoryTab";
import UserTab from "./components/UserTab";
import ReportUserDialog from "./components/ReportUserDialog";
import { Rating } from "@mui/material";
const urlImage = "https://api.dicebear.com/6.x/adventurer/svg?seed=";
const Profile: React.FC = () => {
    /// =========================== Router ===========================
    const {userEmail} = useParams();
    const isMe = userEmail === undefined;

    /// =========================== Redux ===========================
    const dispatch = useAppDispatch();
    const {myUserInfo, anotherUserInfo} = useAppSelector((state) => state.user);
    const {token} = useAppSelector((state) => state.auth);
    const user: UserProfile = isMe ? myUserInfo : anotherUserInfo;

    /// =========================== Tabs ===========================
    const [activeTab, setActiveTab] = useState<number>(0)
    const getAvg = () => {
        if(user.favor.reviews.review_num && user.favor.reviews.review_sum){
            return (user.favor.reviews.review_sum/user.favor.reviews.review_num);
        }
        return 0;
    };  
    useEffect(() => {
        dispatch(getProfileInfo({email: isMe ? token.email : userEmail}));
        
    }, []);


    return (
        user && (
            <main className={styles["Profile"]}>
                <section className={styles["profileData"]}>
                    <figure className={styles["avatar"]}>
                        <img
                            src={urlImage + token.email}
                            alt=""
                        />
                        
                    </figure>
                    <div className={styles["info"]}>
                        <div className={styles["userInfo"]}>
                            <h2>{user.name}</h2>
                            <div>
                                <IoLocation/>
                                <span>{user.favor.location}</span>
                            </div>
                        </div>
                        <div className={styles["Raitings"]}>
                            <h3>Calificación Promedio</h3>
                            <div className={styles["stars"]}>
                              <h4>{getAvg()}</h4>
                              <Rating
                                size="large"
                                precision={0.5}
                                value={getAvg()}
                                readOnly
                              />
                            </div>
                            <h3>Favores Realizados</h3>
                            <h4>{(user.favor.reviews.review_num)? user.favor.reviews.review_num:"0"}</h4>
                            <ReportUserDialog isVisible={!isMe}/>
                        </div>
                    </div>
                </section>

                <section className={styles["user"]}>
                    <div className={styles["nav"]}>
                        <button
                            onClick={() => {
                                setActiveTab(0)
                            }}
                            className={activeTab === 0 ? styles["active"] : styles["disabled"]}
                        >
                            <BiUser/>
                            Información del usuario
                        </button>
                        {isMe &&
                            <button
                                onClick={() => {
                                    setActiveTab(1)
                                }}
                                className={activeTab === 1 ? styles["active"] : styles["disabled"]}
                            >
                                <BiHistory/>
                                Historial
                            </button>
                        }
                    </div>
                    <UserTab isActive={activeTab === 0} user={user} isMe={isMe}/>
                    {isMe &&
                        <HistoryTab isActive={activeTab === 1} />
                    }
                </section>
            </main>
        )
    );
};

export default Profile;
