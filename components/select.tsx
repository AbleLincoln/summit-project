import React, { useCallback, useState } from 'react'

type SelectProps = {
    name: string
    label: string
    options: string[]
    defaultOpt?: string
    required?: boolean
}

export default function Select({
    name,
    label,
    options,
    defaultOpt = 'Please select',
    required,
}: SelectProps) {
    const [isPlaceholder, setIsPlaceholder] = useState(true)

    const updateStyles = useCallback(
        (event: React.ChangeEvent<HTMLSelectElement>) => {
            if (!event.target.value) setIsPlaceholder(true)
            else setIsPlaceholder(false)
        },
        []
    )

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select
                name={name}
                id={name}
                className={`form-control ${isPlaceholder ? 'placeholder' : ''}`}
                onChange={updateStyles}
                required={required}
            >
                <option value="">{defaultOpt}</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div className="invalid-feedback">Please select an option</div>
        </div>
    )
}
