import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from '../hooks/useFetching';
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
            : <div style={{textAlign: 'left', margin: 30}}>
                <h1>This is page of post with ID = {params.id}</h1>
                <strong>
                    {post.id}. {post.title}
                </strong>
                <div style={{margin: '0 0 30px'}}>{post.body}</div>
                <div>
                    {comments.map(com =>
                        <div  style={{margin: '0 0 10px'}}>
                            <strong>{com.id}. {com.email} | </strong><span>{com.name}</span>
                            <p>{com.body}</p>
                        </div>
                    )}
                </div>
            </div>
    );
};

export default PostPage;