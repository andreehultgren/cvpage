import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import Download from '@material-ui/icons/GetApp';
import { withStyles } from '@material-ui/core/styles';
import 'react-vertical-timeline-component/style.min.css';

import metaInfo from '../metaInfo'
import style from '../styles'

class Header extends React.Component {
    render = () => {
        const { classes } = this.props
        const { person } = metaInfo
        return (
            <div className={classes.header}>
                <div className={classes.linkSection}>
                    {person.links.map(link => <a href={link.url} target={"_blank"}><link.icon /></a>)}
                </div>
                <img height={200} width={200} src={person.imageSrc} style={{ borderRadius: 1000, margin: "auto", marginBottom: 30 }} />
                <h1 style={{ margin: "auto" }}>{person.firstName} {person.lastName}</h1>
                <h4 style={{ margin: "auto", textAlign: "center" }}>{person.title}</h4>
            </div>
        )
    }
}

export default withStyles(style)(Header)
