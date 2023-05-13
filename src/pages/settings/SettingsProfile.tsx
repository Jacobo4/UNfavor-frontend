// Core
import React, {useEffect} from "react";
// Router
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {getProfileInfo} from "@store/user/userAsyncAction";
// Styles
import styles from "./SettingsProfile.module.css";
// Images
import avatar from "@assets/images/avatar.png";
// Icons
import {MdSettings} from "react-icons/md";
// Components
import SettingForm from "./components/SettingsForm";
const SettingsProfile: React.FC = () => {
    const {userInfo} = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();


    useEffect(() => {
        if (!userInfo) {
            dispatch(getProfileInfo());
        }
    }, []);

    return (
        <div className={styles.page}>
            <div className={styles.background}>
                <div>
                    <MdSettings/>
                    <h2>Settings</h2>
                </div>
            </div>
            <div className={styles.container}>
                <h2>Editar perfil</h2>
                <div className={styles.photo}>
                    <img src={avatar} alt=""/>

                </div>
                <div>
                    {userInfo && <SettingForm userInfo={userInfo}/>}
                </div>
            </div>

        </div>
    );
};

export default SettingsProfile;
