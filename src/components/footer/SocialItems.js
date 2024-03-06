import PropTypes from 'prop-types';
import {SocialItemsContainer, SocialLink} from "./footer.styled";

function SocialItems({items}) {
    return (
        <SocialItemsContainer>
            {items.map(({href, icon:Icon}) => (
                <SocialLink key={href} to={href} target='_blank'>
                    <Icon/>
                </SocialLink>
            ))}
        </SocialItemsContainer>
    );
}

SocialItems.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        href: PropTypes.string.isRequired,
        icon: PropTypes.elementType.isRequired,
    })).isRequired
};

export default SocialItems;