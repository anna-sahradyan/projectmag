import React from 'react';
import ContentLoader from "react-content-loader";
import s from './GoodsPart1.module.css';
const GoodsLoadingBlock = () => {
    return (
        <>
            <div className={s.card}>
                            <ContentLoader
                                speed={2}
                                width={200}
                                height={400}
                                viewBox="0 0 200 400"
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"

                            >
                                <rect x="50" y="10" rx="0" ry="0" width="100" height="100"/>
                                <rect x="70" y="117" rx="3" ry="3" width="60" height="20"/>
                                <rect x="30" y="151" rx="3" ry="3" width="140" height="70"/>
                                <rect x="50" y="300" rx="3" ry="3" width="101" height="40"/>
                            </ContentLoader>
                        </div>
        </>
    );
};

export default GoodsLoadingBlock;