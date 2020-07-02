import React from "react";
import TodoItem from "./TodoItem";

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: 24,
  };

  if (hours < 12) {
    timeOfDay = "Morning";
    styles.color = "#bada55";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon";
    styles.color = "#ba0056";
  } else {
    timeOfDay = "Night";
    styles.color = "#ff00ff";
  }

  return (
    <div className="container">
      <div className="row">
        <div className="offset-sm-3 col-sm-6">
          <h2 style={styles} className="text-center alert alert-info">
            Good {timeOfDay}, what you need todo today
          </h2>
          <TodoItem />
          {/* <input type="checkbox" name="" id="" />
          <p>Walk the dog</p>
          <hr />
          <input type="checkbox" name="" id="" />
          <p>Go run</p>
          <hr />
          <input type="checkbox" name="" id="" />
          <p>Prepare Food</p>
          <hr />
          <input type="checkbox" name="" id="" />
          <p>Build a Todo App</p> */}
        </div>
      </div>
    </div>
  );
}

export default App;
