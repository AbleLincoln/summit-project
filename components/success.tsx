type SuccessProps = {
    className?: string
}

export default function Success({ className }: SuccessProps) {
    return (
        <div className={`${className} text-center`}>
            <p>
                <strong>APPLICATION RECEIVED</strong>
            </p>
            <p>
                Thank you for your interest in participating in the Summit
                community. We are looking forward to learning more about you. We
                appreciate your patience. A member of our team will reach out in
                the coming weeks with next steps.
            </p>
            <p>This could be the start of something special...</p>
        </div>
    )
}
