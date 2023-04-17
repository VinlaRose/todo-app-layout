import React from "react";
import { useContext } from "react";
import { TodoContext } from "../contexts/Context";
import { TodoCard } from "../components/todoCard";

export const Done = () => {

    const {items} = useContext(TodoContext);
    const doneItems = items.filter((item) => item.isCompleted === true)




    return(
        <div>
            <h1>Done</h1>
            
             <ul>
                {doneItems.map((item) => (
                    
                        <li key = {item.id}><TodoCard {...item} noDetail/></li>
                    
                ) )}
            </ul>
            
           
            
        </div>
    )
}