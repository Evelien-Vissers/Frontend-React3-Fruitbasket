const RadioGroup = ({ label, options, selectedValue, onChange }) => {
    return (
        <fieldset>
            <legend>{label}</legend>
            {options.map(option => (
                <label key={option.value}>
                    <input
                        type="radio"
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={(e) => onChange(option.value)}
                    />
                </label>
            ))}
        </fieldset>
    )
}
export default RadioGroup;