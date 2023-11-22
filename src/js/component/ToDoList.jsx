import React, { useState } from "react";
import ReactDOM from "react-dom";


const ToDoList = () => {

    const [valorInput, setValorInput] = useState("");
    const [list, setList] = useState([]);

    return (
        <div>
            <ul>
                <li>
                    <input type="text" name="" placeholder="Holo" id="" value={valorInput} 
                    onKeyDown={e => (e.key == "Enter") ? (setList(list.concat(valorInput)), setValorInput("")): null } 
                    onChange={e => setValorInput(e.target.value)}/>
                </li>
                {list.map((listItem,listIndex) => (
                    <li className="elmentolista">{listItem}{" "}
                    <i 
                        className="fa-solid fa-x icono" 
                        onClick={() => 
                            setList(
                                list.filter(
                                    (relleno, currentIndex) => listIndex != currentIndex
                                )
                            )      
                            }>
                        </i> 
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
