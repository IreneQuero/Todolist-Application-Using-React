import React, { useState } from 'react';

const ToDoList = () => {

    const [tarea, setTareaValue] = useState("");
    const [tareaList, setTareaListValue] = useState([]);

    const handleKeyDown = event => {
        if (event.key === 'Enter' && tarea !== "") {
            setTareaListValue([...tareaList, tarea]);
            setTareaValue("")
        }
      };

    const removeTarea = (index) => {
        setTareaListValue(current =>[
        ...current.slice(0, index),
        ...current.slice(index + 1, current.length)
        ]);
    }

	return (
            <div className="container d-flex justify-content-center flex-column">
                <h1>Tasks Todo</h1>
                <div className="input-group input-group-lg w-50">
                    <input type="text" id="inputTask" className="form-control rounded-0 " placeholder="¿Qué hacemos hoy?" name="inputTask" maxLength={"40"} value={tarea} onChange={(e) => setTareaValue(e.target.value)} onKeyDown={handleKeyDown} aria-label="inputTask" aria-describedby="basic-addon1"/>
                </div>
                    <ul className="list-group">
                        {tareaList.map((element, index) => {
                            return (
                                <li key={index} className="list-group-item rounded-0 border w-50 d-flex justify-content-between align-items-center task-none">
                                    {element}
                                    <i class="fas fa-trash-alt" onClick={() => removeTarea(index)}></i>
                                </li>
                            );
                        })}
                        <li className="list-group-item rounded-0 border w-50 text-muted"><small>{tareaList.length} {tareaList.length == 1 ? "tarea" : "tareas" }</small></li>
                    </ul>
                    <footer className="footer mt-auto py-3">
                        <div className="container">
                            <span>Diseñado por <a href="https://github.com/IreneQuero" target="blank" className="text-decoration-none text-warning" >Irene Quero</a> ❤</span>
                        </div>
                    </footer>
            </div>
	);
};

export default ToDoList;