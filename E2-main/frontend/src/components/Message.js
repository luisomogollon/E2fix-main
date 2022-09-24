import React from "react"


//ANTERIOR
//<Alert variant={variant}>{children}</Alert>

const Message = ({ variant, children }) => {
    return (<div>Alert</div>)
}

Message.defaultProps = {
    variant: "info",
}

export default Message