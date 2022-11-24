import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import { ARTICLES_CONSTANT } from '../../constants/articles/index';
import defaultBG from '../../static/act-bg.jpg';

import './index.less';

export default function ArticleContainer() {
    let ARTICLE_CONSTANT;
    const activity_key = window.location.pathname.split('/')[2];
    ARTICLES_CONSTANT.forEach((con, idx) => {
        if (con.key === activity_key) {
            ARTICLE_CONSTANT = ARTICLES_CONSTANT[idx];
        }
    });

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
      

    return (
        <div className='actdetail-main-container'>
            <div className='main-header'>
                <Header />
            </div>
            <div className='article-container'>
                <div className='article-img'>
                    <img src={ARTICLE_CONSTANT.article_bg || defaultBG} alt="BG" />
                </div>
                <div className='article-info'>
                    <p></p>
                    
                </div>
                <div className='article-content'>
                    <div dangerouslySetInnerHTML={{__html: ARTICLE_CONSTANT.index_html}}>
                    </div>
                </div>
            </div>
            <div className='main-footer'>
                <Footer />
            </div>
        </div>
    )
};