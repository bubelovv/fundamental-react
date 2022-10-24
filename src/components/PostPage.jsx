import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../UI/Loader/Loader';

const PostPage = () => {
    const [post, setPost] = useState({});
    const params = useParams();
    const [fetchPostById, isPostLoading, postError] = useFetching(async (id) => {
        const response = await PostService.getPostById(id);
        setPost(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
    }, []);

    return (
        isPostLoading
            ? <Loader/>
            : <div style={{textAlign: 'left', margin: 30}}>
                <h1>This is page of post with ID = {params.id}</h1>
                <strong>
                    {post.id}. {post.title}
                </strong>
                <div>{post.body}</div>
            </div>
    );
};

export default PostPage;