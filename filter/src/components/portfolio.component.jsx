import {Toolbar} from "./toolbar.component";
import {ProjectList} from "./project-list.component";
import {portfolioProps} from "../props/portfolio.props";
import {useState} from "react";


export const Portfolio= () =>{
    const filters = ["All", "Websites", "Flayers", "Business Cards"]
    const [selected, setSelected] = useState("All");
    const handleSelectFilter = (filter) => setSelected(filter);
    const showProjects =
        selected === 'All'
            ? portfolioProps
            : portfolioProps.filter(({ category }) => category === selected);
    return (
        <div className='container'>
            <Toolbar
                selected={selected}
                filters={filters}
                handleSelectFilter={handleSelectFilter}
            />
            <ProjectList projects={showProjects} />
        </div>
    )
}