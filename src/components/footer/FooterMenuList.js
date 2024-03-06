import PropTypes from 'prop-types';
import FooterMenu from "./FooterMenu";

function FooterMenuList({items}) {
    return (
        <>
            {items.map(({menuTitle,menuItems},idx)=>(
                <FooterMenu key={idx} menuTitle={menuTitle} menuItems={menuItems}/>
            ))}
        </>
    );
}

FooterMenuList.propTypes = {
    items:PropTypes.arrayOf(PropTypes.shape({
        menuTitle:PropTypes.string.isRequired,
        menuItems:PropTypes.arrayOf(PropTypes.shape({
            href:PropTypes.string.isRequired,
            text:PropTypes.string.isRequired,
        }))
    })).isRequired
};

export default FooterMenuList;