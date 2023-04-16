import React from "react";
import { TodoContext } from "../contexts/Context";

import { useContext } from "react";

export const TodoCard = ({title, description, isCompleted, id}) => {
const {btnHandler} = useContext(TodoContext)
    return(
        <div key={id} style={{
            width: "250px",
            
            borderRadius: "5px",
            border: "1px dotted black",
            backgroundColor: "lightblue",
            
            justifyContent: "center",
            
            margin: "30px"
          }}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Status: {isCompleted ? "Done" : "Not Done"}</p>
            <button onClick = {() => btnHandler(id)} style= {{marginBottom: "20px"}}>Mark as Done</button>
            
            
            
        </div>
    )
}

