import "./Button.css"

export default function Button(props) {
    const buttonText = props.text
    const buttonIcon = props.icon
    const buttonVariant = props.variant ?? "btn"
    const buttonId = props.id
    const buttonType = props.type
    const buttonStyle = props.style
    

    return (
        <button
            className={buttonVariant}
            id={buttonId}
            type={buttonType}
            style={buttonStyle}
        >
            {buttonIcon}
            {buttonText}
        </button>
        
    )
};
