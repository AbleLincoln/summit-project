export default function OptIn() {
    return (
        <div className="form-group">
            <div className="form-check">
                <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" value="optin" required />
                    
                    I agree to receive occasional communications from Summit Series. I understand I can withdraw my consent at any time. Please contact <a href="mailto:hello@summit.co" className="style_featured-link">hello@summit.co</a> for more information.
                    <div className="invalid-feedback">
                        You must opt-in to continue!
                    </div>
                </label>
            </div>
        </div>
    )
}