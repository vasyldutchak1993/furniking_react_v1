import {PageContainer} from "./carousel.styled";
import {useContext} from "react";
import {CarouselContext} from "../../contexts/carouselContext";

export const Page=({children})=> {
    const {width} = useContext(CarouselContext)
    return (
        <PageContainer style={{
            minWidth:`${width}px`,
            maxWidth:`${width}px`
        }}>
            {children}
        </PageContainer>
    );
}

