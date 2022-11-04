import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from '../hooks/useFetching';
import styles from '../styles/PostPage.module.css';
import PostService from '../API/PostService';
import Loader from '../UI/Loader/Loader';

const PostPage = () => {
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const params = useParams();
    const [fetchPostById, isPostLoading, postError] = useFetching(async (id) => {
        const response = await PostService.getPostById(id);
        setPost(response.data);
    });
    const [fetchCommentsById, isCommentsLoading, commentsError] = useFetching(async (id) => {
        const response = await PostService.getCommentsById(id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
        fetchCommentsById(params.id);
    }, []);

    return (
        isPostLoading || isCommentsLoading
            ? <Loader/>
            : <div className={styles.postPage}>
                {/*<h1 className={styles.postTitle}>This is page of post with ID = {params.id}</h1>*/}
                <strong className={styles.postTitle}>
                    {post.id}. {post.title}
                </strong>
                <p className={styles.postBody}>{post.body} {post.body} {post.body} {post.body} {post.body}</p>
                <div>
                    {comments.map(com =>
                        <div className={styles.commentWrap}>
                            <strong className={styles.commentTitle}>
                                {com.id}. {com.email} | <span>{com.name}</span>
                            </strong>
                            <p className={styles.commentBody}>{com.body}</p>
                        </div>
                    )}
                </div>
            </div>
    );
};

export default PostPage;