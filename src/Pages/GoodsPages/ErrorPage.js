import React from 'react';
import s from './GoodsPages.module.css';

const ErrorPage = () => {
    return (
        <>
            <div className={s.contentPage}>
                <div className={s.containerPage}>
                    <img src="/images/error.png" alt="error"/>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;