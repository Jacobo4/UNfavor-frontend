/**
 * Represents the monitor component.
 */
import React, { useEffect } from "react";

//Styles
import styles from "./Monitor.module.css";
//Redux
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { getMatchesHistory } from "@store/match/matchAsyncAction";
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
  const { myMatches } = useAppSelector((state) => state.match);

  useEffect(() => {
    // Fetch matches history
    dispatch(getMatchesHistory({ option: "ANYTHING" }));
    console.log(myMatches);
  }, []);

  return (
    <main className={styles["Monitor"]}>
      {myMatches && (
        <>
          <div className={styles["favorsWrapper"]}>
            {myMatches.length === 0 && (
              <NoItemsLeft
                icon={<MdHeartBroken/>}
                title={"Aún no tienes matches"}
                subtitle={"¡Sigue buscando!"}
                goTo={"/match"}
                goToMessage={"¡Encuentra tu match!"}
              />
            )}
            {myMatches.length !== 0 &&
              myMatches.map((info, index) => <FavorCard key={index} {...info} />)}
          </div>
        </>
      )}
    </main>
  );
};

export default Monitor;
