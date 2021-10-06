import Counter from "./counter";
const Counters = ({ onReset, counters, ...rest }) => {
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn sm btn m2">
        Сброс
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          // onIncrement={props.onIncrement}
          // onDecrement={props.onDecrement}
          // onDelete={props.onDelete}
          {...counter}
          {...rest}
        />
      ))}
    </div>
  );
};

export default Counters;
