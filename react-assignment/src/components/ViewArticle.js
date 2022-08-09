import React from 'react';

const ViewArticle = (props) =>{
    return (
        <div className={props.className}> 
            <p> Title: {props.title} </p>
            <p> Text: {props.text} </p>
            <p> Author: {props.author} </p>
        </div>
    )
}
export default ViewArticle