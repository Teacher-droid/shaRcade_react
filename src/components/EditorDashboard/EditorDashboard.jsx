import React from 'react';
import NewGame from '../NewGame/NewGame';
import EditorGameIndex from './EditorGameIndex';
import './EditorDashboard.css';

const EditorDashboard = () => {
    return (
        <div>
            <NewGame/>
            <EditorGameIndex />
        </div>
    )
}

export default EditorDashboard;
