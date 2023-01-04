import Input from './input'
import Checkboxes from './checkboxes'
import Select from './select'
import OptIn from './optin'
import React, { useCallback, useState } from 'react'

export default function NewsletterForm() {
    const [validationStatus, setValidationStatus] = useState('needs-validation') // initially set to needs so that validation doesn't show
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = useCallback(
        async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()

            const form = event.target as HTMLFormElement
            if (form.checkValidity()) {
                // send it
                const formData = new FormData(event.currentTarget)

                // create our json object
                const obj = Object.fromEntries(formData)

                // interest can have multiple values so we join them
                const interest = formData.getAll('interest').join(',')
                obj.interest = interest

                const body = JSON.stringify(obj)
                const endpoint = '/api/form'
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body,
                }
                const response = await fetch(endpoint, options)

                // show success message
                setSubmitted(true)
            } else {
                // try again
                setValidationStatus('was-validated')
                return false
            }
        },
        []
    )

    return (
        <>
            <div className={`${submitted ? '' : 'd-none'} text-center`}>
                <p>
                    <strong>APPLICATION RECEIVED</strong>
                </p>
                <p>
                    Thank you for your interest in participating in the Summit
                    community. We are looking forward to learning more about
                    you. We appreciate your patience. A member of our team will
                    reach out in the coming weeks with next steps.
                </p>
                <p>This could be the start of something special...</p>
            </div>

            <form
                className={`${validationStatus} ${submitted ? 'd-none' : ''}`}
                noValidate
                onSubmit={handleSubmit}
            >
                <Input
                    type="text"
                    name="first_name"
                    label="First Name"
                    placeholder="John"
                    required
                />

                <Input
                    type="text"
                    name="last_name"
                    label="Last Name"
                    placeholder="Johnson"
                    required
                />

                <Input
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="johnjohnson@example.com"
                    required
                />

                <Input
                    type="tel"
                    name="phone"
                    label="Phone Number"
                    placeholder="8005551234"
                    required
                />

                <Input
                    type="text"
                    name="company"
                    label="Company"
                    placeholder="Summit"
                    required
                />

                <Input
                    type="text"
                    name="title"
                    label="Title"
                    placeholder="CEO"
                    required
                />

                <Input
                    type="text"
                    name="link"
                    label="Link us to something that tells us about you (Linkedin, personal website, company project, etc.)"
                    placeholder="example.com"
                />

                <Checkboxes
                    name="interest"
                    options={['Summit Junto', 'Summit Series Events']}
                />

                <Select
                    name="referral"
                    label="How did you hear about Summit?*"
                    options={[
                        'Summit Community Member',
                        'Friend outside of Summit',
                        'Summit team member',
                        'LinkedIn',
                        'Google',
                        'Instagram',
                        'Facebook',
                        'Blog',
                        'Third party website',
                        'Other',
                    ]}
                    required
                />

                <OptIn />

                <button type="submit" className="btn btn-primary btn-block">
                    SUBMIT
                </button>
            </form>
        </>
    )
}
