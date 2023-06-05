import {useState} from "react";


export const DropdownList = () => {
    const [active, setActive] = useState('active')
    const handleActive = () => {
        active === 'active' ? setActive('') : setActive('active')
    }
    return (
        <ul data-id="dropdown" className="dropdown">
            <li className={active} onClick={handleActive}><a href="#">Profile Information</a></li>
            <li className={active} onClick={handleActive}><a href="#">Change Password</a></li>
            <li className={active} onClick={handleActive}><a href="#">Become PRO</a></li>
            <li className={active} onClick={handleActive}><a href="#">Help</a></li>
            <li className={active} onClick={handleActive}><a href="#">Log Out</a></li>
        </ul>
    )
}