import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    modalwrapper: {
        boxSizing: 'border-box',
        background: 'lightgrey',
        width: '90%',
        maxWidth: '1000px',
        margin: '4rem auto'
    },
    
    modalheader: {
        background:'black',
        color: 'white',
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    
    closemodalbtn: {
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: 'bold',
        border: 'none',
        outline: 'none',
        cursor: 'pointer'
    },
    
    modalcontent: {
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
    
}));