import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        padding: '8px 4px',
        backgroundColor: '#004b4b',
        alignItems: 'center'
    },
    
    route: {
        color: 'white',
        padding: '12px 24px',
        margin: '0 16px',
        fontSize: '20px',
        cursor: 'pointer',
        borderRadius: '8px',
        transition: '0.25s backgroundColor'
    },

    endRoute: {
        color: 'white',
        padding: '12px 24px',
        margin: '0 16px',
        fontSize: '20px',
        cursor: 'pointer',
        borderRadius: '8px',
        transition: '0.25s backgroundColor',
        marginLeft: 'auto'
    },
    
    hover: {
        backgroundColor: '#002d2d'
    },

    selected: {
        backgroundColor: '#002d2d'
    }
    
}));