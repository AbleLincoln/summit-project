import React, { useCallback, useRef, useState } from "react"

type InputProps = {
    type: 'text' | 'tel' | 'email',
    name: string,
    label: string,
    placeholder: string,
    required?: boolean
}

export default function Input({ type, name, label, placeholder, required }: InputProps) {
    const [errorMessage, setErrorMessage] = useState('')

    const showErrorMessage = useCallback((event: React.FormEvent<HTMLInputElement>) => {
        const { validity } = event.target as HTMLInputElement;
        const { typeMismatch, valueMissing } = validity
        
        if (valueMissing) return setErrorMessage(`The ${name} field is required.`)
        if (typeMismatch && type ==='email') return setErrorMessage('The email must be a valid email address.')
    }, [name, type])
    

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}{required ? '*' : ''}</label>
            <input type={type} className="form-control" name={name} id={name} placeholder={placeholder} required={required} onInvalid={showErrorMessage} />
            <div className="invalid-feedback">
               {errorMessage}
            </div>
        </div>
    )
}