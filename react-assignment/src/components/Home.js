import React from 'react';
import NavBar from './NavBar';
import ViewArticle from './ViewArticle';
import './Home.css'

const Home = () => {
    return (
        <div className="home-page">
            <NavBar> </NavBar>
            <div className="articles">
                <ViewArticle className="article" title="Article 1" text="this is article no. 1" author="author 1"></ViewArticle>
                <ViewArticle className="article" title="Article 2" text="this is article no. 2" author="author 2"></ViewArticle>
                <ViewArticle className="article" title="Article 3" text="this is article no. 3" author="author 3"></ViewArticle>
                <ViewArticle className="article" title="Article 4" text="this is article no. 4" author="author 4"></ViewArticle>
                <ViewArticle className="article" title="Article 5" text="this is article no. 5" author="author 5"></ViewArticle>
                <ViewArticle className="article" title="Article 6" text="this is article no. 6" author="author 6"></ViewArticle>
                <ViewArticle className="article" title="Article 7" text="this is article no. 7" author="author 7"></ViewArticle>
                <ViewArticle className="article" title="Article 8" text="this is article no. 8" author="author 8"></ViewArticle>
                <ViewArticle className="article" title="Article 9" text="this is article no. 9" author="author 9"></ViewArticle>
                <ViewArticle className="article" title="Article 10" text="this is article no. 10" author="author 10"></ViewArticle>
                <ViewArticle className="article" title="Article 11" text="this is article no. 11" author="author 11"></ViewArticle>
                <ViewArticle className="article" title="Article 12" text="this is article no. 12" author="author 12"></ViewArticle>
            </div>
        </div>

    );
}
export default Home