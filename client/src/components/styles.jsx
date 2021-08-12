import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    ico: {
        width: 31,
        height: 38,
        justifyContent: 'center',
        paddingRight: 'calc(100% - 630px)'
    },

    appbar: {
        height: 75,
        backgroundColor: '#fff',
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
      }
      
}));

