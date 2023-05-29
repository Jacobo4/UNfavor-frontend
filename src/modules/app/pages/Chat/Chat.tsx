// Core
import React, { useEffect, useState } from "react";
// Redux
import { useAppSelector } from "@store/hooks";
// Styles
import styles from "./Chat.module.css";
import "./ChatOverrides.css";
// Icons
import { BsSearch } from "react-icons/bs";
import { TbReload } from "react-icons/tb";
// Chat
import { ChatEngine, getOrCreateChat } from "react-chat-engine";
import { toast } from "react-toastify";

// Redux
import { useAppDispatch } from "@store/hooks";
import { getMatchesHistory } from "../../../../store/user/userAsyncAction";

const allowedUsers = ["admin@unal.edu.co"];

/**
 * Component for rendering the chat functionality.
 */
const Chat: React.FC = () => {
  const [isOpen, toggle] = useState<boolean>(false);
  const { token } = useAppSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const dispatch = useAppDispatch();
  const { matches } = useAppSelector((state) => state.user);

  /**
   * Function to add matches' emails to the allowed users list.
   */
  function allowingChats() {
    if (matches) {
      console.log("matches");
      matches.forEach((match) => {
        if (!allowedUsers.includes(match.email)) {
          allowedUsers.push(match.email);
        }
      });
    }
    console.log(allowedUsers);
  }

  /**
   * Function to create a direct chat with the allowed users.
   * @param creds - Chat credentials.
   */
  function createDirectChat(creds) {
    console.log(allowedUsers.includes(username));
    allowedUsers.forEach((user) =>
      getOrCreateChat(
        creds,
        { is_direct_chat: true, usernames: [user] },
        () => setUsername("")
      )
    );
  }

  /**
   * Function to find and create a direct chat with the specified username.
   * @param creds - Chat credentials.
   */
  function findChat(creds) {
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

  /**
   * Function to render the chat form.
   * @param creds - Chat credentials.
   */
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
        <button className={styles.refresh} onClick={() => createDirectChat(creds)}>
          Actualizar chat
          <TbReload />
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

  /**
   * Function to toggle the chat details.
   */
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
  );
};

export default Chat;

function allowingChats() {
    throw new Error("Function not implemented.");
}

