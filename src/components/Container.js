import React, {useState} from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles'

function Container(props) {
    const { classes } = props;
    const [pageToShow, setPageToShow] = useState(props.children[0]);
    return (
    <div className={classes.wrap}>
        <div className={classes.sidebar}>
            {props.children.map((child, i)=>{
                return (
                <div className={classes.sidebarItem} style={{
                    backgroundColor:child.props.themeColor ? child.props.themeColor : null,
                    borderRight: (child === pageToShow) ? "0px solid black" : null}}
                    onClick={()=>{setPageToShow(child)}}>
                    <div className={classes.rotationItem}>
                        <h2>{child.props.title}</h2>
                    </div>
                </div>)
            })}
        </div>
        <div className={classes.content}>
            {pageToShow}
        </div>
    </div>)
  }

  export default withStyles(styles)(Container)