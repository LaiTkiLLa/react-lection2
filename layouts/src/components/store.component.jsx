import {IconSwitch} from "./icon-switch.component";
import {CardsView} from "./cards-view.component";
import {ProductsProps} from "../props/products.props";
import {ListView} from "./list-view.component";
import {useState} from "react";

export const Store = () => {
    const [icon, setIcon] = useState('view_list')
    const onSwitch = (e) => {
        const icon = e.target.textContent
        icon === 'view_list' ? setIcon('view_module') : setIcon('view_list')
    }

    return (
        <div>
            <IconSwitch icon={icon} onSwitch={onSwitch}/>
            {icon === 'view_list' ? (<ListView items={ProductsProps}/>) : (<CardsView cards={ProductsProps}/>)}
        </div>
    )
}