import React from "react";

export const SampleView = ({
    bitcoinNews,
    reduxSample,
    onSampleChange,
    children,
    ...props
}) => {
    const renderNews = () => {
        if(!bitcoinNews.articles) return;

        return bitcoinNews.articles.map((article, i) => (
            <article key={i}>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <hr/>
            </article>
        ));
    };

    return (
        <div {...props}>
            <button onClick={onSampleChange}>{reduxSample}</button>
            {renderNews()}
            {children}
        </div>
    );
};