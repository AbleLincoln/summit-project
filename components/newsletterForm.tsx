import Input from "./input"
import Checkboxes from "./checkboxes"
import Select from "./select"
import OptIn from "./optin"
import { useState } from "react"

export default function NewsletterForm() {
    const [validationStatus, setValidationStatus] = useState('needs-validation') // initially set to needs so that validation doesn't show

    return (
        <>
            <form className={validationStatus} noValidate onSubmit={(event) => {
                setValidationStatus('needs')
                event.preventDefault()

                // const formData
                // console.log(event.)
                // const { } = event.target

                const form = event.currentTarget
                form.checkValidity()

                setValidationStatus('was-validated')

                return false;
            }}>
                <Input type="text" name="first name" label="First Name" placeholder="John" required />

                <Input type="text" name="last name" label="Last Name" placeholder="Johnson" required />

                <Input type="email" name="email" label="Email" placeholder="johnjohnson@example.com" required />

                <Input type="tel" name="telephone" label="Phone Number" placeholder="8005551234" required />

                <Input type="text" name="company" label="Company" placeholder="Summit" required />

                <Input type="text" name="title" label="Title" placeholder="CEO" required />

                <Input type="text" name="link us" label="Link us to something that tells us about you (Linkedin, personal website, company project, etc.)" placeholder="example.com" />

                <Checkboxes options={['Summit Junto', 'Summit Series Events']} />

                <Select name="heard_of" label="How did you hear about Summit?*" options={[
                    'Summit Community Member',
                    'Friend outside of Summit',
                    'Summit team member',
                    'LinkedIn',
                    'Google',
                    'Instagram',
                    'Facebook',
                    'Blog',
                    'Third party website',
                    'Other'
                ]} required />

                <OptIn />

                <button type="submit" className="btn btn-primary btn-block">SUBMIT</button>
            </form>
        </>
    )
}
