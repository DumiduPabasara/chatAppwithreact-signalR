import React, { useState } from "react";

const ChatInput = (props) => {
  const [user, setUser] = useState("");
  const [msg, setMessage] = useState("");

  const onSubmit = (e) => {
    e.PreventDefault();

    const isUserProvided = user && user !== "";
    const isMsgProvided = msg && msg !== "";

    isUserProvided && isMsgProvided
      ? props.sendMessage(user, msg)
      : alert("Please enter both username and message !");
  };

  const onUserUpdate = (e) => {
    setUser(e.target.value);
  };

  const onMessageUpdate = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="user">User :</label>
      <br />
      <input id="user" name="user" value={user} onChange={onUserUpdate} />
      <br />
      <label htmlFor="msg">Message :</label>
      <br />
      <input id="msg" name="msg" value={msg} onChange={onMessageUpdate} />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ChatInput;
