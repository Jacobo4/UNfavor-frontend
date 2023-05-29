import styles from "./ProfileControl.module.css";
import React, {useEffect} from "react";
import {getUsersToReview, controlFavor} from "@store/Admin/adminAsyncActions";
import ControlCard from "./components/ControlCard";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import NoItemsLeft from "@root/components/NoItemsLeft/NoItemsLeft";
import {AllUserInfo} from "@store/Admin/adminSlice";
import {BiHappyBeaming} from "react-icons/bi";

const ProfileControl: React.FC = () => {
    const dispatch = useAppDispatch();
    const {usersToReview}: { usersToReview: Array<AllUserInfo> } = useAppSelector((state) => state.admin);
    useEffect(() => {
        dispatch(getUsersToReview());
    }, []);

    return (
        <div className={styles.ProfileControl}>
            <div className={styles.headInfo}>
                <h1>
                    Control de Perfiles
                </h1>
                <h2>
                    Aprueba o rechaza los perfiles que incumplen con las reglas de la comunidad.
                </h2>
            </div>

            <div className={styles.ControlCardsContainer}>


                {usersToReview && usersToReview.map((user: AllUserInfo, index) =>
                        (user.favor.favor_state === "REVIEWING")
                        && <ControlCard
                            key={index}
                            user={user}
                        />
                )}
                {usersToReview.length === 0 &&
                    <NoItemsLeft
                        customStyles={styles['noItemsLeft']}
                        subtitle={""}
                        title={"No hay más usuarios por revisar"}
                        reloadItems={true}
                        reloadItemsAction={()=>dispatch(getUsersToReview())}
                        icon={<BiHappyBeaming/>}/>
                }


            </div>


        </div>
    );
};

export default ProfileControl;
