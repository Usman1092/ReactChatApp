// import React, { useContext, useRef, useEffect } from "react";
// import { AuthContext } from "./Context/AuthContext";
// import { ChatContext } from "./Context/ChatContext";

// export const Message = ({ message }) => {
//   const { currentUser } = useContext(AuthContext);
//   const ref = useRef();
//   useEffect(() => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//   }, [message]);
//   const { data } = useContext(ChatContext);
//   console.log(message);
//   return (
//     <div
//       ref={ref}
//       className={`message ${
//         message.senderId === currentUser.uid && "owner"
//       }  flex  space-y-4 gap-2 mb-0 `}
//     >
//       <div className="messageInfo  mt-6 ml-2">
//         <img
//           className="w-[40px] h-[40px] object-cover ml-2 rounded-[50%] "
//           src={
//             message.senderId === currentUser.uid
//               ? currentUser.photoURL
//               : data.user.photoURL
//           }
//           alt=""
//         />
//         <span>
//           <small>
//             {message.date
//               ? new Date(message.date.toDate()).toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                   hour12: true,
//                 })
//               : "Sending..."}
//           </small>
//         </span>
//       </div>
//       <div className="messageContent  flex flex-col ">
//         <p className="bg-bg2 w-auto flex flex-wrap p-2 rounded-md">
//           {" "}
//           {message.text}{" "}
//         </p>
//         {message.img && <img src={message.img} alt="" className="" />}
//       </div>
//     </div>
//   );
// };









import React, { useContext, useRef, useEffect } from "react";
import { AuthContext } from "./Context/AuthContext";
import { ChatContext } from "./Context/ChatContext";

export const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  const { data } = useContext(ChatContext);

  return (
    <div
      ref={ref}
      className={`message flex space-y-4 gap-2 mb-4 ${message.senderId === currentUser.uid ? "justify-end" : "justify-start"}`}
    >
      <div className={`messageInfo mt-6 ml-2 ${message.senderId === currentUser.uid ? "order-2" : "order-1"}`}>
        <img
          className="w-[40px] h-[40px] object-cover ml-2 rounded-[50%]"
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>
          <small>
            {message.date
              ? new Date(message.date.toDate()).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })
              : "Sending..."}
          </small>
        </span>
      </div>
      <div className={`messageContent flex flex-col ${message.senderId === currentUser.uid ? "items-end" : "items-start"}`}>
        <p className={`bg-bg2 w-auto flex flex-wrap p-2 rounded-md ${message.senderId === currentUser.uid ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}>
          {message.text}
        </p>
        {message.img && <img src={message.img} alt="" className="mt-2 max-w-xs rounded-md" />}
      </div>
    </div>
  );
};

