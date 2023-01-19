import React from "react";

function Message(msg) {
  return(
    <div>
      <p>
        {msg.content}
      </p>
    </div>
  );
}

export default Message;