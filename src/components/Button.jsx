import "./Button.css"

export default function Button(props) {
    const buttonText = props.text
    const buttonIcon = props.icon
    const buttonVariant = props.variant ?? "btn"
    const isDisabled = props.disabled ?? false
    const buttonId = props.id
    const buttonType = props.type
    

    return (
        <button
            className={buttonVariant}
            isDisabled={isDisabled}
            id={buttonId}
            type={buttonType}
        >
            {buttonIcon}
            {buttonText}
        </button>
        
    )
};
