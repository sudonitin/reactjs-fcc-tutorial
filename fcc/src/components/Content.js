import React from 'react'
import List from './List'

function Content(){
    return (
        <ul>
            <List />
            <li><input type='checkbox' />There are so many projects I have to do</li>
            <List />
        </ul>
    )
}

export default Content