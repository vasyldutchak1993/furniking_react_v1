import React from 'react';
import ContentLoader from "react-content-loader";

function ArticleSkeleton(props) {
    return (
        <ContentLoader
            speed={.5}
            width={'100%'}
            height={'100%'}
            viewBox="0 0 275 303"
            backgroundColor="#d1d1d1"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%"/>
        </ContentLoader>
    );
}

export default ArticleSkeleton;