export const IconSwitch = ({icon, onSwitch}) => {
    return (
        <div>
            <span className="material-icons" onClick={onSwitch}>{icon}</span>
        </div>
    )
}