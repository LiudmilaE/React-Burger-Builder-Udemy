import React from 'react';
import classes from './Layout.css';

const layout = ( props ) => (
    <React.Fragment>
        <div>
            Toolbar, SideDrawer, Backdrop
        </div>
        <main className = {classes.Content}>
            Text
            { props.children }
        </main>
    </React.Fragment>
);

export default layout;