import React, { Component } from 'react';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    toggleButtonHandler = () => {
        this.setState((prevState) => ({
            showSideDrawer: !prevState.showSideDrawer  
        }))
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar toggle={() => this.toggleButtonHandler()}/>
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                    />
                <main className = {classes.Content}>
                    { this.props.children }
                </main>
            </React.Fragment>
        );
    }
} 

export default Layout;