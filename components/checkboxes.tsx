type CheckboxesProps = {
    name: string
    options: string[]
}

export default function Checkboxes({ name, options }: CheckboxesProps) {
    return (
        <div className="form-group">
            <label>I am interested in learning more about:</label>

            {options.map((option) => (
                <div className="form-check" key={option}>
                    <label className="form-check-label">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name={name}
                            value={option}
                        />
                        {option}
                    </label>
                </div>
            ))}
        </div>
    )
}
