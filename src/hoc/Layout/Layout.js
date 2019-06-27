import React from 'react'
import Aux from '../Auxiliary'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import classes from './Layout.module.css'
class  Layout extends React.Component{
    state={
        showSideDrawer:true,
    }

    SideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false})
    }

    sideDrawerToggleHandler = ()=>{
        this.setState((prevState)=>{
            return{
                showSideDrawer:!prevState.showSideDrawer
            }
        })
    }
    render(){
        return(<Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler}/>
            <div> SideDrawer, BackDrop</div>
            <main className={classes.Content}> 
                {this.props.children}
            </main> 
        </Aux>);
    }
}
export default Layout;
