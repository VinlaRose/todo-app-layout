import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { TodoContext } from "../contexts/Context";
import { TodoCard } from "../components/todoCard";


export const Details = () => {
    const {todosID} = useParams();
    const {items} = useContext(TodoContext);
    
    const filteredItems = items.filter(item => item.id === parseInt(todosID));
    
    return(
    <div>
        <h3>Details here</h3>
        <ul>
                {filteredItems.map((item) => (
                    
                        <li key = {item.id}><TodoCard {...item}/></li>
                    
                ) )}
            </ul>
    </div>
    )
    
}