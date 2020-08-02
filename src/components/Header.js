import React from 'react';
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
                    {person.links.map(link => <a href={link.url} target={"_blank"} rel={"noopener noreferrer"}><link.icon /></a>)}
                </div>
                <div className={classes.imgContainer}>
                    <img src={person.imageSrc} alt={"Profile"} />
                </div>

                <h1 style={{ margin: "auto" }}>{person.firstName} {person.lastName}</h1>
                <h4 style={{ margin: "auto", textAlign: "center" }}>{person.title}</h4>
                <div className={classes.skillContainer}>
                    {person.skills.map(skill => <div>{skill}</div>)}
                </div>
            </div >
        )
    }
}

export default withStyles(style)(Header)
