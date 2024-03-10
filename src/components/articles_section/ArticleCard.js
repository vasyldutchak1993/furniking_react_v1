import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {ArticleCardContainer} from "./articlesSection.styled";
import {RxDrawingPinFilled} from "react-icons/rx";

function ArticleCard({id,type,date,title,href,img}) {
    return (
        <ArticleCardContainer className='article_card'>
            <div className="article_card_header">
                <div className="article_card_type">
                    <RxDrawingPinFilled />
                    {type}
                </div>
                <div className="article_card_date">{date}</div>
            </div>
            <div className="article_title">{title}</div>
            <Link to={`${href}/${id}`} className='article_link'>Read more</Link>
            <div className="image_container">
                <img src={img} alt={title}/>
            </div>
        </ArticleCardContainer>
    );
}

ArticleCard.propTypes = {
    id:PropTypes.number.isRequired,
    type:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    href:PropTypes.string.isRequired,
    img:PropTypes.string.isRequired
};

export default ArticleCard;