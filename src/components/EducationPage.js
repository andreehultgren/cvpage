import React from 'react';
import { withStyles } from '@material-ui/core';
import ProfileSection from "./ProfileSection"

import styles from './styles'
import strings from '../strings'

function ProfilePage(props) {
    const { classes } = props;
    return (
        <div style={{height:"100%", width:"100%", backgroundColor:props.themeColor}} className={classes.wrap}>
            <div className={classes.content}>
                <div className={classes.pageContent}>
                    {
                    strings.EducationPage.map(child=>
                            <>
                                <h1>{child.title}</h1>
                                <p>{child.content}</p>
                            </>
                    )}
                </div>
            </div>
            <ProfileSection/>            
        </div>
    )}

export default withStyles(styles)(ProfilePage)