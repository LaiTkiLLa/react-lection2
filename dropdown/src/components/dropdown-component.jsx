import {DropdownList} from "./dropdown-list.component";

export const DropdownComponent = ({handleActive, active}) => {
    return (
        <div className="container">
            <div data-id="wrapper" className={active}>
                <button data-id="toggle" className='btn' onClick={() => {handleActive(active)}}>
                    <span>Account Settings</span>
                    <i className="material-icons">public</i>
                </button>
                <DropdownList />
            </div>
        </div>

    )
}