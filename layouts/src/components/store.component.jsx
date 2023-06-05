import {IconSwitch} from "./icon-switch.component";
import {CardsView} from "./cards-view.component";
import {ProductsProps} from "../props/products.props";
import {ListView} from "./list-view.component";

export const Store = () => {
    const state = {
        icon: 'view_list',
    }
    const onSwitch = (e) => {
        e.target.textContent === 'view_list' ? e.target.textContent = 'view_module' : e.target.textContent = "view_list"
        state.icon = e.target.textContent
    }

    return (
        <div>
            <IconSwitch icon={state.icon} onSwitch={onSwitch}/>
            {state.icon === 'view_list' ? (<ListView items={ProductsProps}/>) : (<CardsView cards={ProductsProps}/>)}
        </div>
    )
}