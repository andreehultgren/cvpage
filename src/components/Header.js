import React from 'react';
import metaInfo from '../metaInfo';
import Container from 'react-bootstrap/Container'
import { withStyles } from '@material-ui/core/styles';
import style from '../styles'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            dividerX: "50%",
            dividerMargin: 220
        };
       }

    componentDidMount = () => {
        window.addEventListener('resize', this.changeDividerMargin);
        this.changeDividerMargin()

        
    }

    changeDividerMargin = () => {
        const callback = this.dividerMarginState
        const {person} = metaInfo,
                {imageSrc} = person,
                {height} = this.props;
        
        var img = new Image();
        img.onload = function(){
            const scale = height / this.height;
            callback(this.width*scale)
        };
        img.src = imageSrc;
    }

    dividerMarginState = (imageWidth) => {
        this.setState({dividerMargin: (window.innerWidth - imageWidth)})

    }

    updateDivider = (event) => {
        const windowWidth = window.innerWidth,
            mousePosX = event.clientX,
            {dividerMargin} = this.state;
        const dividerX = Math.max( Math.min( mousePosX , windowWidth ), dividerMargin)
        this.setState({dividerX})
    }

    render() {
        const {classes, height} = this.props
        const {person} = metaInfo
        return(
            <>
                    <div onMouseMove={this.updateDivider} style={{height: height}} >
                        <div className={classes.headerInfo} style={{width:this.state.dividerX, height: height}}>
                            <Container style={{height: height}}>
                                <h1>{person.firstName} {person.lastName}</h1>
                                <hr/>
                                <h5>{person.title}</h5>
                            </Container>
                        </div>
                        <div className={classes.headerImage} style={{height: height}}>
                            <img src={person.imageSrc} height={height} alt={"Background"}/>
                        </div>
                    </div>
            </>
        )
    }
}

export default withStyles(style)(Header)