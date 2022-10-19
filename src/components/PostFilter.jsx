import React from 'react';
import MyInput from '../UI/MyInput/MyInput';
import MySelect from '../UI/MySelect/MySelect';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder="search post..."
                value={filter.query}
                type="text"
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
                    {value: 'text', name: 'sort by text'},
                ]}/>
        </div>
    );
};

export default PostFilter;