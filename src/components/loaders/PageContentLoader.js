import React from 'react';
import {PageContentMainContainer} from "./loaders.styled";

function PageContentLoader(props) {
    return (
        <PageContentMainContainer>
            <span className='loader'></span>
        </PageContentMainContainer>
    );
}

export default PageContentLoader;