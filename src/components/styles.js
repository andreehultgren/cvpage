
const styles = theme => ({
    body:{
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
        minHeight: '100vh'
      },
    wrap:{
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        minHeight:"100vh"
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,        
    },
    sidebar: {
        backgroundColor:'#F1F3F5',
        height:"100%",
    },
    sidebarItem:{ 
        border:"1.5px solid #666666", 
        marginLeft:10,
        marginBottom:-10,
        paddingBottom:30,
        paddingTop:30,
        paddingLeft:5,
        paddingRight:0, 
        marginRight:0, 
        borderTopLeftRadius: 30, 
        borderBottomLeftRadius:30, 
        "&:hover":{
            backgroundColor:"#FFF",
            cursor: "pointer"},
    },
    rotationItem:{
        writingMode: "vertical-rl"
    },
    sidebarContent: {
        height:"100%",
        textAlign: "center"
    },
    socialMedia:{
        "& > *":{
            margin:5,
            cursor: "pointer",
        }
    },
    pageContent:{
        margin:20,
        marginLeft:50
    },
  });
export default styles
