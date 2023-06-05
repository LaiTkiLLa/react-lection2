export const ListView = ({items}) => {
    const BtnStyles = {
        color: 'red',
        border: '.1rem solid red',
        height: '2em',
        lineHeight: '1.9em',
        width: '7.5em',
        textAlign: 'center',
        borderRadius: '1em',
    }

    const styles = {
        flex: '1 1 auto',
        backgroundColor: 'whitesmoke',
        boxShadow: '.2rem .4rem .8rem lightgrey',
        margin: '.3rem 0',
        padding: '.5rem 2rem',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
    return(
        <div >
            {items.map(item => (
                <div style={styles}>
                    <img src={item.img} alt=""/>
                    <span className='item_span'>{item.name}</span>
                    <span className='item_span'>{item.color}</span>
                    <span className='item_span'>${item.price}</span>
                    <button style={BtnStyles}>ADD TO CART</button>
                </div>
            ))}
        </div>
    )
}