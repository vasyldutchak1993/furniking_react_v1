import React from 'react';
import {FeatureContainer} from "../containers/containers.styled";
import FeatureCard from "./FeatureCard";
import {featureConfig} from "./featureConfig";
function FeatureSection(props) {

    return (
        <FeatureContainer>
            {featureConfig.map(({img,title,text})=>(
                <FeatureCard key={title} img={img} title={title} text={text}/>
            ))}
        </FeatureContainer>
    );
}

export default FeatureSection;