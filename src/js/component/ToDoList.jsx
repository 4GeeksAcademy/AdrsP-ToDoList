import React, { useState } from "react";
import ReactDOM from "react-dom";


const list = ["mono","mesa"];

const ToDoList = () => {

    const [valorInput, setValorInput] = useState("");


    function cambiandoList (event) {
        if (event.key == "Enter"){
        list.push(valorInput);
        console.log(list);
        };
    };

    return (
        <div>
            <input type="text" name="" id="" value={valorInput} onKeyDown={e => cambiandoList(e)} onChange={e => setValorInput(e.target.value)}/>
            <ul>
                <li>{valorInput}</li>
            </ul>
        </div>
    );
};

export default ToDoList;

//
const animals = ["Horse", "Turtle", "Elephant", "Monkey", "jose"];

/**
 * change the content inside the map function
 **/
const animalsInHTML = animals.map((singleAnimal, i) => {
	return <li key={i}>{singleAnimal}</li>;
});