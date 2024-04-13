import React, {useEffect, useState} from 'react';
import SectionTitle from "../components/section_title/SectionTitle";
import {GridArticlesContainer} from "../components/containers/containers.styled";
import ArticleCard from "../components/articles_section/ArticleCard";
import {items} from '../components/articles_section/articlesConfig'
import {generateMockArray} from "../utils/mockGenerator";
import ArticleSkeleton from "../components/articles_section/ArticleSkeleton";
import PageContentLoader from "../components/loaders/PageContentLoader";
const BASE_ELEMENTS_COUNT=6
function BlogPage(props) {
    const [articles, setArticles] = useState(null)
    // 377 382
    useEffect(() => {
        setArticles(items)
    }, []);

    return (
        <>
            <SectionTitle>OUR BLOG</SectionTitle>
            <GridArticlesContainer>
                {articles && items.map(el => (<ArticleCard key={el.id}
                                                           date={el.date}
                                                           img={el.img}
                                                           id={el.id}
                                                           href={el.href}
                                                           type={el.type}
                                                           title={el.title}/>))
                }
                {!articles && generateMockArray(BASE_ELEMENTS_COUNT).map((el, idx) => <ArticleSkeleton key={idx}/>)}
            </GridArticlesContainer>
        </>
    );
}

export default BlogPage;