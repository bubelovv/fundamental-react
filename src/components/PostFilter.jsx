import React from 'react';
import MyInput from '../UI/MyInput/MyInput';
import MySelect from '../UI/MySelect/MySelect';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder="search post..."
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}/>
            <MySelect
                value={filter.sort}
                onChange={sort => {
                    setFilter({...filter, sort: sort});
                }}
                defaultValue="sort by..."
                options={[
                    {value: 'id', name: 'sort by id'},
                    {value: 'title', name: 'sort by title'},
                    {value: 'body', name: 'sort by body'},
                ]}/>
        </div>
    );
};

export default PostFilter;