const Checkbox = ({ label, checked, onChange }) => {
    return (
        <label>
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                />
            {label}
        </label>
    );
};
export default Checkbox;