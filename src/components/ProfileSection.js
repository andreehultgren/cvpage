import React from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

function ProfileSection(props) {
    const { classes } = props;
    return (

            <div className={classes.sidebarContent}>
                <img src={"https://pbs.twimg.com/profile_images/989177936858308609/y-eyoLOY.jpg"} alt="Profile of Andree Hultgren"/>
                <h1>Andree Hultgren</h1>
                <h3>Machine Learning Engineer</h3>
                
                <p className={classes.socialMedia}>
                    <a title={"andreehultgren@github"} href="https://github.com/andreehultgren"><GitHubIcon/></a>
                    <a title={"andree-hultgren-7b7045128@LinkedIn"} href={"https://www.linkedin.com/in/andree-hultgren-7b7045128/"}><LinkedInIcon/></a>
                    <a title={"hultaan@facebook"} href="https://www.facebook.com/Hultaan"><FacebookIcon/></a>
                    <a title={"andree_hultgren@twitter"} href="https://twitter.com/andree_hultgren"><TwitterIcon/></a>
                </p>
                <a href={"mailto:andree_hultgren@hotmail.com"}>andree_hultgren@hotmail.com</a> <a href={"tel:+46736544491"}>+46736544491</a>
                
            </div>
    )}

export default withStyles(styles)(ProfileSection)