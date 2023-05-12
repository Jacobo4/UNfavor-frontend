// Core
import React, {useEffect, useState} from "react";
// Redux
import {useAppSelector} from "@store/hooks";
//Styles
import styles from './Chat.module.css';
import './ChatOverrides.css';
// Images
import avatar from '@assets/images/avatar2.png';
import dommieFavor from '@assets/images/dommieFavor.png';
// Icons
import {IoIosArrowDown} from 'react-icons/io';
//Chat
// import {PrettyChatWindow} from "react-chat-engine-pretty";
import {getAccessToken} from "axios-jwt";
// import { ChatEngine } from 'react-chat-engine';

const Chat: React.FC = () => {
    const [isOpen, toggle] = useState<boolean>(false);
    const {token} = useAppSelector(state => state.auth);

    useEffect(() => {
        console.log(token);
    }, []);
    const toggleDetails = () => {
        toggle(!isOpen);
    }
    return (
        <main className={styles['Chat']}>
            <ChatEngine
            projectID={import.meta.env.VITE_CHAT_PROJECT_ID}
			userName={token.email}
			userSecret={token.id}
            renderChatSettings={(chatAppState) => {}}
            renderNewChatForm={(creds) => {}}
		/>
        </main>
        // <main className={styles['Chat']}>
        //     <PrettyChatWindow
        //         projectId={import.meta.env.VITE_CHAT_PROJECT_ID}
        //         username={token.email}
        //         secret={token.id}
        //         style={{ height: '100vh' }}
        //     />
        // </main>
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
    )
}

export default Chat
