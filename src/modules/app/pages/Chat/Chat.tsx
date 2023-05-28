// Core
import React, { useEffect, useState } from "react";
// Redux
import { useAppSelector } from "@store/hooks";
//Styles
import styles from "./Chat.module.css";
import "./ChatOverrides.css";
// Images
import avatar from "@assets/images/avatar2.png";
import dommieFavor from "@assets/images/dommieFavor.png";
// Icons
import { BsSearch } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import {  TbReload } from "react-icons/tb";
//Chat
// import {PrettyChatWindow} from "react-chat-engine-pretty";
import { Socket } from "react-chat-engine";
import { ChatEngine, getOrCreateChat } from "react-chat-engine";
import { toast } from "react-toastify";

//Redux
import { useAppDispatch } from "@store/hooks";
import { getMatchesHistory } from "../../../../store/user/userAsyncAction";

const allowedUsers =  ["admin@unal.edu.co"];

const Chat: React.FC = () => {
  const [isOpen, toggle] = useState<boolean>(false);
  const { token } = useAppSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const dispatch = useAppDispatch();
  const { matches } = useAppSelector((state) => state.user);
 
  
  function allowingChats(){  
    if(matches){
        console.log("matches");
        matches.forEach((match) => {
            if(!allowedUsers.includes(match.email)){
                allowedUsers.push(match.email);
                console.log("sfg")
                
            }
            }
        )
    }
    console.log(allowedUsers);
  }
  function createDirectChat(creds) {
    
    console.log(allowedUsers.includes(username));
    allowedUsers.forEach(user =>
      getOrCreateChat(
          creds,
          { is_direct_chat: true, usernames: [user] },
          () => setUsername("")
        )
      
    );
  }
  function findChat(creds){
    
        console.log(allowedUsers.includes(username));
        allowedUsers.includes(username)
          ? getOrCreateChat(
              creds,
              { is_direct_chat: true, usernames: [username] },
              () => setUsername("")
            )
          : toast.error("No puedes chatear con este usuario", {
              position: "top-center",
            });
         
  }

  function renderChatForm(creds) {
    return (
      <div className={styles.BigContainer}>
        
        <h3>Busca tus matches para chatear</h3>
        <div className={styles.container}>
          <input
            placeholder="Correo"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => findChat(creds)}>
            <BsSearch />
          </button>
          
        </div>
        <button
            className={styles.refresh}
            onClick={() => createDirectChat(creds)}
            >Actualizar chat
            <TbReload/>
        </button>
      </div>
    );
  }
  useEffect(() => {
    console.log(token);
    console.log(import.meta.env.VITE_CHAT_PROJECT_ID);
    dispatch(getMatchesHistory({ option: "ANYTHING" }));
    console.log(matches);
    allowingChats();
  }, []);
  const toggleDetails = () => {
    toggle(!isOpen);
  };
  return (
    <div className={`overrideChat ${styles["Chat"]}`}>
        {matches && (
            <ChatEngine
                offset={-5}
                projectID={import.meta.env.VITE_CHAT_PROJECT_ID}
                userName={token.email}
                userSecret={token.id}
                renderNewChatForm={(creds) => renderChatForm(creds)}
                
            />
            
      )}
    </div>
    // <div >
    //     <PrettyChatWindow
    //         projectId={import.meta..env.VITE_CHAT_PROJECT_ID}
    //         username={token.email}
    //         secret={token.id}
    //          style={{ height: '100vh' }}
    //     />
    // </div>
    // <div className={styles['Chat']}>
    //
    //     <div onClick={toggleDetails} className={styles['details']}>
    //         <div className={styles['details__header']}>
    //             <img src={avatar} alt=""/>
    //
    //             <h4>Mafe 🥰 - <span>Favor en progreso... <IoIosArrowDown/></span></h4>
    //         </div>
    //         <div className={`${styles['details__info']} ${!isOpen ? styles['details__info--close'] : ''}`}>
    //             <h2>Limpiar el piso</h2>
    //             <span>En progreso</span>
    //             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa deserunt fugiat laborum neque
    //                 praesentium quae voluptas? Dicta dolore fuga laudantium minus nihil numquam tempore? Natus
    //                 nesciunt obcaecati quod recusandae!</p>
    //             <img src={dommieFavor} alt=""/>
    //
    //         </div>
    //     </div>
    //
    //
    //     <div className={styles['body']}>
    //         <h2>Acá va el chat, pero depende de la librería que usemos</h2>
    //     </div>
    // </div>
  );
};

export default Chat;
function allowingChats() {
    throw new Error("Function not implemented.");
}

