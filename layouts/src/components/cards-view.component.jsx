import {v4 as uuid} from 'uuid'

export const CardsView = ({cards}) => {
    const btnStyle = {
        color: 'red',
        border: '.1rem solid red',
        height: '2em',
        lineHeight: '1.9em',
        width: '7.5em',
        textAlign: 'center',
        borderRadius: '1em',
    }
    const styles = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    }
    const cardStyle = {
        flexBasis: '30',
        maxHeight: '25rem',
        maxWidth: '25rem',
        backgroundColor: 'whitesmoke',
        boxShadow: '.3rem .6rem .8rem lightgrey',
        margin: '1rem',
        padding: '1rem',
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
    }
    const priceStyles = {
        alignSelf: 'stretch',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
    return (
        <div style={styles}>
            {cards.map(card => (
                <div style={cardStyle} key={uuid()}>
                    <img src={card.img} alt=""/>
                    <span>{card.name}</span>
                    <span>{card.color}</span>
                    <span style={priceStyles}>${card.price}</span>
                    <button style={btnStyle}>Add to cart</button>
                </div>
            ))}
        </div>
    )
}