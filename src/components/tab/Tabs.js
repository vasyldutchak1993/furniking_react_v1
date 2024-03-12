import PropTypes from 'prop-types';
import {TabsContent, TabsHeader} from "./tabs.styled";
import {useState} from "react";

function Tabs({data}) {
    const [activeTab,setActiveTab]=useState(0)

    const handleClick = (idx) => {
      setActiveTab(idx)
    }

    return (

        <>
            <TabsHeader className="tabs_header">
                {data.map(({label},idx)=>(
                    <div key={label} className={activeTab===idx ? 'active_tab' : ''} onClick={()=>{
                        handleClick(idx)
                    }}>{label}</div>
                ))}
            </TabsHeader>
            <TabsContent className="tabs_content">
                {data[activeTab].component}
            </TabsContent>
        </>
    );
}

Tabs.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        component: PropTypes.element.isRequired
    })).isRequired
};

export default Tabs;