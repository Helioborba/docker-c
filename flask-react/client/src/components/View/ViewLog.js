import React from 'react';
// import style from './ViewLog.module.css';

const ViewLog = (props) => {
    return(
        <React.Fragment>
            <h1>{props.id}</h1>
            <p>{props.usuario}</p>
        </React.Fragment>
    );
}

export default ViewLog;