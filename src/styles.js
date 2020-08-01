export default {

    dateText: {
        color: "#333"
    },
    timeline: {
        "&::before": {
            backgroundColor: "#333",
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
    }
}
