// import React, { useContext, useEffect, useState } from "react";
// import user from "../img/user.jpeg";
// import { db } from "../firebase";
// import { doc, onSnapshot } from "firebase/firestore";
// import { AuthContext } from "./Context/AuthContext";
// import { ChatContext } from "./Context/ChatContext";

// const Chats = () => {
//   const [chats, setChats] = useState([]);
//   const { currentUser } = useContext(AuthContext);
//   const { dispatch } = useContext(ChatContext);
//   useEffect(() => {
//     const getChats = () => {
//       const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
//         console.log("Current data: ", doc.data());
//         setChats(doc.data());
//       });
//       return () => {
//         unsub();
//       };
//     };
//     currentUser.uid && getChats();
//   }, [currentUser.uid]);
//   console.log(Object.entries(chats));
//   // console.log(chats);
//   const handleSelect = (u) => {
//     dispatch({ type: "CHANGE_USER", payload: u });
//   };
//   return (
//     <>
//       <div className="chats">
//         {Object.entries(chats)?.sort((a,b)=>b[1].date-a[1].date).map((chat) => (
//           <div
//             key={chat[0]}
//             onClick={() => chat[1].userInfo && handleSelect(chat[1].userInfo)}
//             className="userChat mt-4 flex flex-row items-center pb-2 gap-2 cursor-pointer hover:bg-[#2f2d52]"
//           >
//             <img
//               src={chat[1].userInfo.photoURL}
//               alt="User"
//               className="rounded-[50%] w-[30px] h-[30px] "
//             />
//             <div className="userChatInfo ">
//               <span className="font-bold text-[#fff] ">
//                 {chat[1].userInfo.displayName}
//               </span>
//               <p className="fontsize-sm text-[#fff]">
//                 {chat[1].lastMessage?.text}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* <div className="userChat mt-4 flex flex-row items-center pb-2 gap-2 cursor-pointer hover:bg-[#2f2d52]">
//         <img
//           src={user}
//           alt="User"
//           className="rounded-[50%] w-[30px] h-[30px] "
//         />
//         <div className="userChatInfo ">
//           <span className="font-bold text-[#fff] ">Name</span>
//           <p className="fontsize-sm text-[#fff]">Hello!</p>
//         </div>
//       </div>

//       <div className="userChat mt-4 flex flex-row items-center pb-2 gap-2 cursor-pointer hover:bg-[#2f2d52]">
//         <img
//           src={user}
//           alt="User"
//           className="rounded-[50%] w-[30px] h-[30px] "
//         />
//         <div className="userChatInfo ">
//           <span className="font-bold text-[#fff] ">Name</span>
//           <p className="fontsize-sm text-[#fff]">Hello!</p>
//         </div>
//       </div> */}
//     </>
//   );
// };
// export default Chats;














import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Context/AuthContext";
import { ChatContext } from "./Context/ChatContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="chats">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className="userChat mt-4 flex flex-row items-center pb-2 gap-2 cursor-pointer hover:bg-[#2f2d52]"
            key={chat[0]}
            onClick={() => chat[1].userInfo && handleSelect(chat[1].userInfo)}
          >
            {chat[1].userInfo && (
              <>
                <img src={chat[1].userInfo.photoURL} alt="" className="rounded-[50%] w-[30px] h-[30px]" />
                <div className="userChatInfo ">
                  <span className="font-bold text-[#fff]">{chat[1].userInfo.displayName}</span>
                  <p className="fontsize-sm text-[#fff]">{chat[1].lastMessage?.text}</p>
                </div>
              </>
            )}
          </div>
        ))}
    </div>
  );
};

export default Chats;
