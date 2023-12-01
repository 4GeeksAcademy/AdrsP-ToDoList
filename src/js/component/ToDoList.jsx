import React, { useState } from "react";
import ReactDOM from "react-dom";


const ToDoList = () => {

    const [valorInput, setValorInput] = useState("");
    const [list, setList] = useState([]);
    const [nroTareas, setNroTareas] = useState(0);
    return (
        <div className="mx-5 mt-5">
            <ul class="lista list-group">
                <h1 className="text-center">
                    Todo List
                </h1>
                <li className="list-group-item px-5">
                    <input className="casillaInput" type="text" name="" placeholder={(nroTareas === 0) ? "No hay tareas agregue alguna" : "Agregue otra tarea" } 
                    id="" value={valorInput} 
                    onKeyDown={e => (e.key == "Enter") ? (setList(list.concat(valorInput)), setValorInput(""), setNroTareas(nroTareas+1)): null } 
                    onChange={e => setValorInput(e.target.value)}/>
                </li>
                {list.map((listItem,listIndex) => (
                    <li className="elmentolista list-group-item d-flex justify-content-between px-5">{listItem}
                    <i 
                        className="fa-solid fa-x icono" 
                        onClick={() => (
                            setList(
                                list.filter(
                                    (relleno, currentIndex) => (listIndex != currentIndex)
                                )
                            ),
                            setNroTareas(nroTareas-1)
                            )      
                            }>
                        </i> 
                    </li>
                ))}
                <li className="list-group-item px-5">
                    Usted tiene {nroTareas} tareas pendientes
                </li>
            </ul>
        </div>
    );
};

export default ToDoList;
