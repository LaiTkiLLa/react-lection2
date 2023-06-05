export const
    Toolbar = ({handleSelectFilter, filters, selected}) => {
    return (
        <div className='toolbar'>
            {filters.map(filter => (
                <button className={'App-link'} onClick={() => handleSelectFilter(filter)}>{filter}</button>
            ))}
        </div>
    )
}