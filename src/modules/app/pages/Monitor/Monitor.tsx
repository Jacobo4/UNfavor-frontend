// Core
import React, { useEffect } from "react";
// Router
import { Link } from "react-router-dom";
//Styles
import styles from "./Monitor.module.css";
//Redux
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { getMatchesHistory } from "../../../../store/match/matchAsyncAction";
// Icons
import { BsChatDots } from "react-icons/bs";
// Components
import FavorCard from "./components/FavorCard";
import NoItemsLeft from "@root/components/NoItemsLeft/NoItemsLeft";
import {MdHeartBroken} from "react-icons/md";

const Monitor: React.FC = () => {
  const dispatch = useAppDispatch();
  const { matches } = useAppSelector((state) => state.match);
  useEffect(() => {
    dispatch(getMatchesHistory({ option: "ANYTHING" }));
    console.log(matches);
  }, []);
  return (
    <main className={styles["Monitor"]}>
      {matches && (
        <>
          {/*<div className={styles["actions"]}>*/}
          {/*  <div className={styles["action-wrapper"]}>*/}
          {/*    <Link to="/chat" type={"button"}>*/}
          {/*      Chat <BsChatDots />*/}
          {/*    </Link>*/}
          {/*  </div>*/}
          {/*  <hr />*/}
          {/*</div>*/}
          <div className={styles["favorsWrapper"]}>
            {matches.length === 0 &&
                <NoItemsLeft
                  icon={<MdHeartBroken/>}
                  title={"Aún no tienes matches"}
                  subtitle={"¡Sigue buscando!"}
                  goTo={"/match"}
                  goToMessage={"¡Encuentra tu match!"}
                />}
            {matches.length !== 0 &&
              matches.map((info, index) => <FavorCard key={index} {...info} />)}
          </div>
        </>
      )}
    </main>
  );
};

export default Monitor;
