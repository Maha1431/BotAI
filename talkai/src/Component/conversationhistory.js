import React, { useState, useEffect } from "react";
// import "./ConversationHistory.css";
import Card from "@mui/material/Card";
import icon from "../assests/image 29.png";
import chaticon from "../assests/image 31.png";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";


function ConversationHistory() {
  const [conversation, setConversation] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);



useEffect(() => {
    const storedConversation = JSON.parse(localStorage.getItem("conversation")) || [];
    setConversation(storedConversation.conversation || []);
    setFeedback(storedConversation.feedback ||  "");
    setRating(storedConversation.rating || 0);
  }, []);



  return (
    <div className="container">
      <div className="sidebar">
        <div className="header">
          <img src={icon} alt="icon" className="icon" />
          <h2 className="heading">New Chat</h2>
          <img src={chaticon} alt="...." className="chat" />
        </div>
        <div className="history">
          <button className="btn">Past Conversation</button>
        </div>
      </div>
      <div className="conversation">
        <h2>Conversation History</h2>
        <div className="conversation-history">
          {conversation.map((item, index) => (
            <div key={index} className="message-container">
              {typeof item === "string" && item.startsWith("You") ? (
                <Card className="user-message">
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                    className="avatar"
                  />
                  <div className="data">
                    <p>
                      <span>{item}</span>
                    </p>
               
                  </div>
                </Card>
              ) : (
                <Card className="bot-message">
                  <img src={icon} alt="icon" className="icon1" />
                  <div className="data">
                    <p>
                      <span>{item}</span>
                    </p>
                    
                      <p>
                        <strong>Feedback:</strong> 
                        <span>{feedback}</span>
                        </p>

                    
                      <div className="rating-bar">
                        <p>Rate this Response: {rating}</p>
                        <Rating
                          name="conversation-rating"
                          value={rating}
                          readOnly
                        />
                      </div>
                    
                  </div>
                </Card>
              )}
            </div>
          ))}
        </div>
      
      </div>
    </div>
  );
 
}

export default ConversationHistory;
