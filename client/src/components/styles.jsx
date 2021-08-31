import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    ico: {
        width: 31,
        height: 38,
        justifyContent: 'center',
        paddingRight: 'calc(100% - 700px)'
    },

    appbar: {
        height: 75,
        backgroundColor: '#fff !important',
    },

    tbBtnStyles:{
        marginRight: '10px'
    },


    appbarfix: {
        height: 80,
        width: '100%'
    },

    //Delivery form

    delform: {
        display: "none",
    },

    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },

    rootForm: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
      },

    formPaper: {
        padding: theme.spacing(2),
        width:'50%'
      },

    buttonSubmit: {
        marginBottom: 10,
        marginLeft:5,
        marginRight:5
      },
    
    a:{
      fontWeight: 'bold',
      fontSize: 20,
      height: '56px',
      textAlign: 'center',
      display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
    },

    b:{
      width: 1232 / 3,
      textAlign: 'center',
      display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

    }
      
}));

