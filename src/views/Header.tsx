import  React       from    'react';
import  metaInfo    from    '../metaInfo';
import LightSwitch  from    "./components/LightSwitch";
import 'react-vertical-timeline-component/style.min.css';

interface IState{
    darkMode: boolean;
}
interface IProps{}

class Header extends React.Component<IProps|IState> {

    state = {
        darkMode: false
    }

    componentDidMount = () => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.setAttribute("data-theme", "light")
        this.setState({darkMode: false})
    }

    swapTheme = () => {
        const htmlTag = document.getElementsByTagName("html")[0]
        const isLightTheme = htmlTag.getAttribute("data-theme") === "light"
        htmlTag.setAttribute("data-theme", isLightTheme ? "dark" : "light")
        this.setState({darkMode: isLightTheme})
    }

    render = () => {
        const { person } = metaInfo
        return (
            <div className="header">
                <div className="leftRight">
                    <LightSwitch checked={this.state.darkMode} onChange={this.swapTheme}/>
                    
                    <div className="linkSection">
                        {person.links.map(link => <a href={link.url} target="_blank" rel="noopener noreferrer" style={{margin:10}}><link.icon /></a>)}
                    </div>
                </div>
                
                <div className="imgContainer">
                    <img src={person.imageSrc} alt={"Profile"} />
                </div>

                <h1>{person.firstName} {person.lastName}</h1>
                <h4>{person.title}</h4>
                <div className="skillContainer">
                    {person.skills.map(skill => <div>{skill}</div>)}
                </div>
            </div >
        )
    }
}

export default Header
