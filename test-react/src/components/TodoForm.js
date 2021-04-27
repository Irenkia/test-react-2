import React, { useState } from "react";

function TodoForm(props) {
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            complete: false
        });
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="написать задачу..."
                value={input}
                onChange={handleChange}
                name="text"
            />
            <button onClick={handleSubmit}>Добавить</button>
        </form>
    );
}

export default TodoForm;
