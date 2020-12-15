import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import info from '../metaInfo';
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel';

class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usedIDs: info.timelineTypes.map(item => item.id)
        };
    }

    handleIDUpdate = (typeID) => {
        const { usedIDs } = this.state

        // If ID exists, remove it
        usedIDs.includes(typeID) ?
            this.setState({ usedIDs: usedIDs.filter(id => id !== typeID) }) :
            this.setState({ usedIDs: usedIDs.concat([typeID]) })
        // If ID doesn't exist, add it

    }

    render = () => {
        const { timeline, timelineTypes } = info;
        const filteredTimeline = timeline.filter(item => this.state.usedIDs.includes(item.type))
        return (
            <div>
                <div className="filterContainer">
                    {timelineTypes.map(type => {
                        return (
                            <FormControlLabel
                                control={<Checkbox checked={this.state.usedIDs.includes(type.id)} style={{ color: type.backgroundColor }} onChange={() => { this.handleIDUpdate(type.id) }} />}
                                label={type.title}
                                className="filterButtons"
                            />)
                    })}
                </div >
                <VerticalTimeline className="timeline">
                    {filteredTimeline.map(item => {
                        const type = timelineTypes.find(type => type.id === item.type)
                        return (<VerticalTimelineElement
                            className="timelineElement"
                            contentStyle={{ background: type.backgroundColor, color: type.textColor }}
                            contentArrowStyle={{ borderRight: `7px solid  ${type.backgroundColor}` }}
                            date={item.time}
                            dateClassName="dateText"
                            iconStyle={{ background: type.backgroundColor, color: type.textColor }}
                            icon={< type.icon />}
                        >
                            <h3>{item.title}</h3>
                            <h4>{item.company}</h4>
                            <p>{item.description}</p>
                        </VerticalTimelineElement>)
                    })}
                </VerticalTimeline>
            </div >


        )
    }
}

export default Timeline
