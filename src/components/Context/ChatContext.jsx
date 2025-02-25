import { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        const chatId =
          currentUser.uid > action.payload.uid
            ? currentUser.uid + action.payload.uid
            : action.payload.uid + currentUser.uid;
        console.log("ChatContext CHANGE_USER:", {
          chatId,
          user: action.payload,
        });
        return {
          user: action.payload,
          chatId,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
