// Core
import React, {useEffect} from "react";
// Router
import {useAppDispatch, useAppSelector} from "@store/hooks";
import { getProfileInfo } from "@store/user/userAsyncAction";
// Styles
import styles from "./SettingsProfile.module.css";

// Icons
import {MdSettings} from "react-icons/md";
// Components
import SettingForm from "./components/SettingsForm";

const urlImage = "https://api.dicebear.com/6.x/adventurer/svg?seed=";
/**
 * The settings profile component.
 */
const SettingsProfile: React.FC = () => {
    const [position, setCurrentPosition] = useState<GeolocationPosition|null>(null);
      // Access the 'myUserInfo' and 'token' state from the application
    const {myUserInfo} = useAppSelector((state) => state.user);
    const { token } = useAppSelector((state) => state.auth);

  // Get the 'dispatch' function from the custom hook
  const dispatch = useAppDispatch();

  // Fetch the profile information when 'myUserInfo' is not defined
  useEffect(() => {
    if (!myUserInfo) {
      dispatch(getProfileInfo({ email: token.email }));
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
                <img
                            src={urlImage + token.email}
                            alt=""
                        />

                </div>
                <div>
                    {myUserInfo && <SettingForm userInfo={myUserInfo}/>}
                </div>
            </div>

        </div>
    );
};

export default SettingsProfile;
