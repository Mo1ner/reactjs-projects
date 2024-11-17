import { useState } from "react";
import "./style/style.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [checked, setChecked] = useState([]);
  const [inputValue, setInputValue] = useState([]);

  const addTodo = () => {
    if (inputValue.trim !== "") {
      setTodo([...todo, inputValue]);
      setChecked([...checked, false]);
      setInputValue("");
    }
  };

  const removeTodo = (index) => {
    const newTodo = todo.filter((_, i) => i !== index);
    setTodo(newTodo);
    const newCheck = checked.filter((_, i) => i !== index);
    setChecked(newCheck);
  };

  const checkChange = (index) => {
    const updateCheck = checked.map((state, i) =>
      i === index ? !state : state
    );
    setChecked(updateCheck);
  };

  return (
    <div className="App">
      <div className="task-manager">
        <div className="task-input">
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            placeholder="Create your task here..."
          />
          <button onClick={addTodo}>Add</button>
        </div>
        <div className="tasks">
          {todo.map((text, index) => (
            <div
              key={index}
              className={`task ${checked[index] ? "completed" : ""}`}
            >
              <label>
                <input
                  type="checkbox"
                  onClick={() => checkChange(index)}
                  checked={checked[index]}
                />
                <span className="task-text">{text}</span>
              </label>
              <button onClick={() => removeTodo(index)} className="delete-btn">
                🗑
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
