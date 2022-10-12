import React from 'react';
import MyButton from "../UI/MyButton/MyButton";

const PostItem = ({post, number, remove}) => {

    return (
        <div className="post">
            <div className="post__content">
                <strong className="post__title">{number + '. ' + post.title}</strong>
                <div className="post__text">
                    {post.text}
                </div>
            </div>
            <div>
                <MyButton onClick={() => remove(post.id)}>Delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;