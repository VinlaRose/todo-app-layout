import React from "react";
import { useContext } from "react";
import { TodoContext } from "./contexts/Context";
import { TodoCard } from "./components/todoCard";

export const Home = () => {
const {items} = useContext(TodoContext);
const {btnHandler} = useContext(TodoContext);
    return(
        <div>
            <h1>Summary</h1>
            
             <ul>
                {items.map((item) => (
                    
                        <TodoCard {...item}/>
                    
                ) )}
            </ul>
            
           
            
        </div>
    )
}