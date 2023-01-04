type CheckboxesProps = {
    options: string[]
}

export default function Checkboxes({ options }: CheckboxesProps) {
    return (
        <div className="form-group">
            <label>I am interested in learning more about:</label>

            {options.map((option) => (
                <div className="form-check" key={option}>
                    <label className="form-check-label">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={option}
                        />
                        {option}
                    </label>
                </div>
            ))}
        </div>
    )
}
