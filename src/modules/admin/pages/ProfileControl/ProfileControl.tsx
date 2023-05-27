import styles from "./ProfileControl.module.css";
import React, {useEffect} from "react";
import {getAllUsers, controlFavor} from "@store/Admin/adminAsyncActions";
import ControlCard from "./ControlCard";
import {useAppDispatch, useAppSelector} from "@store/hooks";

const ProfileControl: React.FC = () => {
    const dispatch = useAppDispatch();
    const {users} = useAppSelector((state) => state.admin);
    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    return (
        <div className={styles.ProfileControl}>
            {users && (
                <>
                    <div className={styles.headInfo}>
                        <h1>
                            Control de Perfiles
                        </h1>
                        <h2>
                            Aprueba o rechaza los perfiles que incumplen con las reglas de la comunidad.
                        </h2>
                    </div>

                    <div className={styles.ControlCardsContainer}>


                        {users.map((user, index) =>
                                (user.favor.favor_state === "REVIEWING") && (
                                    <ControlCard
                                        key={index}
                                        age={user.age}
                                        email={user.email}
                                        name={user.name}
                                        title={user.favor.title}
                                        description={user.favor.description}
                                        location={user.favor.location}
                                        userId={user._id}/>

                                )
                        )}


                    </div>


                </>
            )}
        </div>
    );
};

export default ProfileControl;
