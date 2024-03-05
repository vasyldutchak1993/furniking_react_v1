import React from 'react';
import ContentContainer from "../containers/ContentContainer";
import {ActionContainer, FlexContainer} from "../containers/containers.styled";

function ActionsBar(props) {
    return (
        <ContentContainer>
            <ActionContainer>
                <div>logo</div>
                <div>search</div>
                <FlexContainer>
                    <div>shop</div>
                    <div>news</div>
                    <div>account</div>
                </FlexContainer>
            </ActionContainer>
        </ContentContainer>
    );
}

export default ActionsBar;