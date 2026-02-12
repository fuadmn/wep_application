import { useState } from "react";

const ToggleMessage = () => {
    
    const [isVisible,setIsVisible] = useState(false);

    const toggle = () => setIsVisible(!isVisible)
    return (
        <div>
            <button onClick={toggle}>
                {isVisible ? 'Hide Message' : 'show Message'}
            </button>
          {
            isVisible && <p>This is a Togglable massage.</p>
          }
        </div>
    )
}

export default ToggleMessage;