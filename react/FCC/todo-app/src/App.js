import React from "react";
import TodoItem from "./TodoItem";

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: 35,
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
    <div>
      <h2 style={styles} className="text-center todoHeader">
        Good {timeOfDay}, what you need todo today
      </h2>
      <div className="container">
        <div className="row">
          <div className="offset-sm-3 col-sm-6">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
