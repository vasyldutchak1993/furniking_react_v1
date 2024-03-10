import React from 'react';
import {ArticlesContainer} from "./articlesSection.styled";
import SectionTitle from "../section_title/SectionTitle";
import {items} from './articlesConfig'
import ArticleCard from "./ArticleCard";
function ArticlesSection(props) {
    return (
        <>
            <SectionTitle>Our Latest Articles</SectionTitle>
            <ArticlesContainer>
                {items.map(({id,date,title,type,href,img})=>(
                    <ArticleCard key={id} date={date} img={img} id={id} href={href} type={type} title={title}/>
                ))}
            </ArticlesContainer>
        </>

    );
}

export default ArticlesSection;