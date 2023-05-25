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

const Profile: React.FC = () => {
    /// =========================== Router ===========================
    const {userEmail} = useParams();
    const isMe = userEmail === undefined;

    /// =========================== Redux ===========================
    const dispatch = useAppDispatch();
    const {myUserInfo, anotherUserInfo, matches} = useAppSelector((state) => state.user);
    const {token} = useAppSelector((state) => state.auth);
    const user: UserProfile = isMe ? myUserInfo : anotherUserInfo;

    /// =========================== Tabs ===========================
    const [activeTab, setActiveTab] = useState<number>(0)

    const getAvg = (reviews: any) => {
        let sum = 0;
        reviews.forEach((review: any) => {
            sum += review.stars;
        });
    };        

    useEffect(() => {
        dispatch(getProfileInfo({query: isMe ? token.email : userEmail}));
        dispatch(getMatchesHistory({state:"FINISHED"}));
        console.log(matches)
    }, []);


    return (
        user && (
            <main className={styles["Profile"]}>
                <section className={styles["profileData"]}>
                    <figure className={styles["avatar"]}>
                        <img
                            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                            {/*<div className={styles["stars"]}>*/}
                            {/*  <h4>{user.user_reviews_avg}</h4>*/}
                            {/*  <Rating*/}
                            {/*    size="large"*/}
                            {/*    precision={0.5}*/}
                            {/*    value={user.user_reviews_avg}*/}
                            {/*    readOnly*/}
                            {/*  />*/}
                            {/*</div>*/}
                            <h3>Favores Realizados</h3>
                            {/*<h4>{user.favor.user_reviews_num}</h4>*/}
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
                        <button
                            onClick={() => {
                                setActiveTab(1)
                            }}
                            className={activeTab === 1 ? styles["active"] : styles["disabled"]}
                        >
                            <BiHistory/>
                            Historial
                        </button>
                    </div>
                    <UserTab isActive={activeTab === 0} user={user}/>
                    <HistoryTab isActive={activeTab === 1}/>
                </section>
            </main>
        )
    );
};

export default Profile;
