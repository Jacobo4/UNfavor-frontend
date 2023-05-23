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
import {BsSearch} from 'react-icons/bs';
import {IoIosArrowDown} from 'react-icons/io';
//Chat
// import {PrettyChatWindow} from "react-chat-engine-pretty";
import { Socket } from 'react-chat-engine';
import { ChatEngine, getOrCreateChat } from 'react-chat-engine';
import { toast } from "react-toastify";

const allowedUsers = ["lina@gmail.com" ,"jaco@gmail.com","admin@unal.edu.co","ilombana@unal.edu.co","nquirogac@unal.edu.co"]

const Chat: React.FC = () => {
    const [isOpen, toggle] = useState<boolean>(false);
    const {token} = useAppSelector(state => state.auth);
    const [username, setUsername] = useState('')

	function createDirectChat(creds) {
        console.log(allowedUsers.includes(username));
        (allowedUsers.includes(username))? 
		(getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)): 
        (toast.error('No puedes chatear con este usuario', {position: 'top-center'}))
	}

	function renderChatForm(creds) {
		return (
			<div>
                <h3>Busca tus matches para chatear</h3>
				<div className={styles.container}>
                <input 
					placeholder='Correo' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					<BsSearch/>
				</button>
                </div>
			</div>
		)
	}
    useEffect(() => {
        console.log(token);
        console.log(import.meta.env.VITE_CHAT_PROJECT_ID)
    }, []);
    const toggleDetails = () => {
        toggle(!isOpen);
    }
    return (
        <div className={`overrideChat ${styles['Chat']}`}>
            <ChatEngine offset={-5}
                projectID={import.meta.env.VITE_CHAT_PROJECT_ID}
                userName={token.email}
                userSecret={token.id}
                renderNewChatForm={(creds) => renderChatForm(creds)}
		    />
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
    )
}

export default Chat
