import { useState } from "react";
import "./style/style.css";

function App() {
  return (
    <div class="App">
      <div class="task-manager">
        <div class="task-input">
          <input type="text" placeholder="Create your task here..." />
          <button>Add</button>
        </div>
        <div class="tasks">
          <div class="task">
            <label>
              <input type="checkbox" />
              <span class="task-text">Assign task to john wright</span>
            </label>
            <button class="delete-btn">🗑</button>
          </div>
          <div class="task">
            <label>
              <input type="checkbox" />
              <span class="task-text">Complete Social media posts</span>
            </label>
            <button class="delete-btn">🗑</button>
          </div>
          <div class="task">
            <label>
              <input type="checkbox" />
              <span class="task-text">Upload documents</span>
            </label>
            <button class="delete-btn">🗑</button>
          </div>
          <div class="task">
            <label>
              <input type="checkbox" value="" />
              <span class="task-text">Recharge broadband bill</span>
            </label>
            <button class="delete-btn">🗑</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
