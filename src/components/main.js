import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import Timeline from './Timeline';

function Main() {
    return (
        <div>

            <div style={{ width: "100%", backgroundColor: "#1261A0", height: 100 }}></div>
            <div style={{ width: "100%", backgroundColor: "#3895D3", height: 100 }}></div>
            <div style={{ width: "100%", backgroundColor: "#58CCED", height: 100 }}>
            </div>

            <Timeline />
        </div>
    )
}

export default Main
