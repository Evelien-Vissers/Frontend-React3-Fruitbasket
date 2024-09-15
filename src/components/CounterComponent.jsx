const Counter = ({ label, value, onIncrease, onDecrease }) => {
    return (
        <div className="fruit-box">
            <h3>{label}: {value}</h3>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    );
};
export default Counter;