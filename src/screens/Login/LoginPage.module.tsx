import { makeStyles } from '@material-ui/styles'
import { fontWeight } from '@mui/system';
import theme from './../../theme'

const useStyles = makeStyles(theme => ({
    root: {
        width: 'calc(100% + 32px)',
        height: 'calc(100% + 32px)',
        display: 'flex',
        flexDirection: 'column',
        margin: '-16px'
    },
    welcomeText: {
        fontSize: '32px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '0'
    },
    infoText: {
        fontSize: '15px',
        fontWeight: 'bolder',
        alignSelf: 'center'
    },
    form: {
        flex: '5 0',
        display: 'flex',
        flexDirection: 'column',
        padding: '32px',
        background: '#ffffff',
        marginTop:'-35px'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px 10px 8px',
        borderRadius: '4px',
        marginBottom: '20px',
        transition: '0.3s',
        alignSelf:'center',
        width:'70%',
        maxWidth: '700px'
    },
    input: {
        outline: '0px',
        border: '0px',
        padding: '4px 0px 0px',
        fontSize: '14px'
    },
    inputLabel: {
        fontSize: '11px',
        textTransform: 'uppercase',
        letterSpacing:'0.7px',
        color: 'black',
        transition: '0.3s',
        fontWeight: 'bolder'
    },
    bttn: {
        padding: '8px 16px',
        outline: 'none',
        color: '#ffffff',
        backgroundColor: '#4DBAEA',
        border: '0',
        cursor: 'pointer',
        borderRadius: '8px',
        transition: '0.3s',
        fontSize: '24px',
        maxWidth: '100px',
        alignSelf: 'center',
        marginBottom: '20px',
    },
    bttnhover: {
        background: '#239edb'
    },
    logo: {
        flex: '2 0',
        background: 'url("../../assets/images/access-h20-logo.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'bottom',
        paddingTop:'32%',
        maxWidth:'100%',
        marginTop:'-35px',
        marginBottom:'-35x',
        height:'auto',
    },
    image: {
        flex: '2 0',
        backgroundImage: 'url("https://source.unsplash.com/collection/4695781")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'top',
        paddingLeft: '100px',
        width:'auto',
    },
    centerText: {
        textAlign: 'center'
    },
    buttonText: {
        marginLeft: '8px',
        textDecoration: 'underline',
        cursor: 'pointer'
    },
    switchText: {
        marginTop: 'auto',
        textAlign: 'center'
    }
}))

export default useStyles
