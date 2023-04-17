import React from "react";
import { useContext } from "react";
import { TodoContext } from "../contexts/Context";
import { TodoCard } from "../components/todoCard";

export const NotDoneYet = () => {

    const {items} = useContext(TodoContext);
    const notDoneItems = items.filter((item) => item.isCompleted === false)




    return(
        <div>
            <h1>Not Done</h1>
            
             <ul>
                {notDoneItems.map((item) => (
                    
                        <li key = {item.id}><TodoCard {...item} noDetail/></li>
                    
                ) )}
            </ul>
            
           
            
        </div>
    )
}