/**
 * Represents the monitor component.
 */
import React, { useEffect } from "react";

//Styles
import styles from "./Monitor.module.css";
//Redux
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { getMatchesHistory } from "../../../../store/user/userAsyncAction";
// Icons
import {MdHeartBroken} from "react-icons/md";

// Components
import FavorCard from "./components/FavorCard";
import NoItemsLeft from "@root/components/NoItemsLeft/NoItemsLeft";

/**
 * The monitor component that displays the user's matches and favor cards.
 */
const Monitor: React.FC = () => {
  const dispatch = useAppDispatch();
  const { matches } = useAppSelector((state) => state.user);

  useEffect(() => {
    // Fetch matches history
    dispatch(getMatchesHistory({ option: "ANYTHING" }));
    console.log(matches);
  }, []);

  return (
    <main className={styles["Monitor"]}>
      {matches && (
        <>
          <div className={styles["favorsWrapper"]}>
            {matches.length === 0 && (
              <NoItemsLeft
                icon={<MdHeartBroken/>}
                title={"Aún no tienes matches"}
                subtitle={"¡Sigue buscando!"}
                goTo={"/match"}
                goToMessage={"¡Encuentra tu match!"}
              />
            )}
            {matches.length !== 0 &&
              matches.map((info, index) => <FavorCard key={index} {...info} />)}
          </div>
        </>
      )}
    </main>
  );
};

export default Monitor;
