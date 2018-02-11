import React from 'react';
import classes from './Layout.css';
console.log(classes)

const layout = ( props ) => (
    <React.Fragment>
        <div>
            Toolbar, SideDrawer, Backdrop
        </div>
        <main className = {classes.Content}>
            { props.children }
        </main>
    </React.Fragment>
);

export default layout;