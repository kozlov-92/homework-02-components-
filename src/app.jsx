import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
  const initialState = [
    { value: 0, id: 1, name: "ложка" },
    { value: 4, id: 2, name: "вилка" },
    { value: 0, id: 3, name: "тарелка" },
    { value: 0, id: 4, name: "стартовый набор минималиста" },
    { value: 0, id: 5, name: "ненужные вещи" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (counterId) => {
    const newCounters = counters.filter((counter) => counter.id !== counterId);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
  };
  const handleIncrement = (counterId) => {
    const newCounters = [...counters];
    const elementIndex = newCounters.findIndex(
      (counter) => counter.id === counterId
    );
    newCounters[elementIndex].value++;
    setCounters(newCounters);
  };
  const handleDecrement = (counterId) => {
    const newCounters = [...counters];
    const elementIndex = newCounters.findIndex(
      (counter) => counter.id === counterId
    );
    newCounters[elementIndex].value--;
    setCounters(newCounters);
  };
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          onDelete={handleDelete}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
