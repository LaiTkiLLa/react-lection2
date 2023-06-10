import {useState} from "react";
import {v4 as uuid} from "uuid";

export const DropdownList = () => {
    const buttonList = ['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out']
    const [activeButton, setActiveButton] = useState('Profile Information')
    const handleActive = (button) => {
        setActiveButton(button)
    }
    return (
        <ul data-id="dropdown" className="dropdown">
            {buttonList.map(button => (
            <li
                key={uuid()}
                onClick={() => {handleActive(button)}}
                className={activeButton === button ? 'active' : ''}>
                <a href="#">{button}</a>
            </li>
            ))}
        </ul>
    )
}