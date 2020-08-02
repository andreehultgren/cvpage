import Info from './metaInfo'
export default {

    dateText: {
        color: "#333"
    },
    timeline: {
        "&::before": {
            backgroundColor: Info.theme.timelineCenterlineColor,
        }
    },
    timelineElement: {
        "& .vertical-timeline-element-icon": {
            boxShadow: `0 0 0 4px ${Info.theme.timelineCenterlineColor}, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)`
        }
    },
    filterContainer: {
        display: "flex",
        justifyContent: "space-between",
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 10,
        marginBottom: 10
    },
    filterButton: {
        textAlign: "center",

        "&:focus": {
            boxShadow: "none"
        }
    },
    header: {
        width: "100%",
        backgroundColor: Info.theme.headerColor,
        display: "flex",
        flexDirection: "column",
        paddingBottom: 50
    },
    linkSection: {
        marginRight: 10,
        width: "100%",
        textAlign: "right",
        padding: 5,
        paddingBottom: 50,
        "& > *": {
            margin: 10,
            "& > a": {
                color: "#333"
            }
        }
    }
}
