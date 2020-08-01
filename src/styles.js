import info from "./metaInfo"
const {colors} = info;
export default {
    headerInfo: {
        padding:0, 
        backgroundColor:colors.header, 
        position:"absolute", 
        marginLeft:0, 
        float:"left", 
        overflow: "hidden",
        "& > .container": {
            padding: 30, 
            verticalAlign:"middle", 
            display: "table-cell", 
        }
    },
    headerImage: {
        width:"100%", 
        marginLeft:0, 
        textAlign:"right", 
        backgroundColor: colors.header, 
        overflow:"hidden"
    }
}