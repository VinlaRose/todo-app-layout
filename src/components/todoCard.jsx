import React from "react";
import { TodoContext } from "../contexts/Context";

import { useContext } from "react";
import { Link } from "react-router-dom";

export const TodoCard = ({title, description, isCompleted, id, noDetail, noStriking}) => {
const {btnHandler} = useContext(TodoContext);
const strikingStyle = { textDecoration: noStriking && isCompleted ? "line-through" : ""}
    return(
        <div key = {id} style={{
            width: "250px",
            
            borderRadius: "5px",
            border: "1px dotted black",
            backgroundColor: isCompleted ? "#90EE90" : "#FFB6C1",
            
            justifyContent: "center",
            
            margin: "30px"
          }}>
            <h3 style={strikingStyle}>{title}</h3>
            <p style={strikingStyle}>{description}</p>
            <p>Status: {isCompleted ? "Done" : "Not Done"}</p>
            {noDetail && <Link to={`/todos/${id}`}>Expand Details</Link>}
            
            <button onClick = {() => btnHandler(id)} style= {{marginBottom: "20px"}}>{isCompleted ? "Mark as Not Done" : "Mark as Done"}</button>
            
            
            
        </div>
    )
}

