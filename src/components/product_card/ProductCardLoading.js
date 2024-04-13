import ContentLoader from "react-content-loader"
function ProductCardLoading(props) {
    return (
        <ContentLoader
            speed={.5}
            width={'100%'}
            height={'100%'}
            viewBox="0 0 267 315"
            backgroundColor="#d1d1d1"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="9" y="231" rx="0" ry="0" width="68" height="16" />
            <rect x="9" y="254" rx="0" ry="0" width="159" height="16" />
            <rect x="9" y="278" rx="0" ry="0" width="51" height="16" />
            <rect x="68" y="278" rx="0" ry="0" width="50" height="16" />
            <rect x="181" y="278" rx="0" ry="0" width="83" height="16" />
            <rect x="8" y="0" rx="0" ry="0" width="267" height="222" />
        </ContentLoader>
    );
}

export default ProductCardLoading;