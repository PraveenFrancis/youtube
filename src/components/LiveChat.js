import ChatMessage from "./ChatMessage";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, randomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");

  const messages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: randomMessage(20),
        })
      );
    }, 3000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full border h-[400px] border-gray-300 p-4  bg-slate-100 rounded-t-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {messages.map((item, index) => (
            <ChatMessage key={index} name={item.name} message={item.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full border  p-2  bg-slate-100 border-gray-300 rounded-b-lg"
        onSubmit={(e) => {
          e.preventDefault();
          setLiveMessage("")
          dispatch(
            addMessage({
              name: "praveen",
              message: liveMessage,
            })
          );
        }}
      >
        <input
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          className="p-1 mr-4 ml-3 w-1/2 rounded-xl bg-slate-200"
        />
        <button className="p-1 px-4 rounded-xl bg-slate-200"> send</button>
      </form>
    </>
  );
};

export default LiveChat;
