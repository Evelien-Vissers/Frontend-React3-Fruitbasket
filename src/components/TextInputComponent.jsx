const TextInput = ({ label, value, onChange, type = "text"}) => {
    return (
        <label>
            {label}
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                />
        </label>
    );
};
export default TextInput;