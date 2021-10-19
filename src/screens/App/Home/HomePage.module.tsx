import { makeStyles } from '@material-ui/styles'
import theme from './../../../theme'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flex_direction: 'column',
    },
    centerText: {
        text_align: 'center',
    },
    bttn: {
        align_self: 'flex_end',
        padding: '8px 16px',
        outline: 'none',
        color: '#ffffff',
        background_color: '#4f6474',
        cursor: 'pointer',
        border: '0',
        border_radius: '4px',
        transition:' 0.3s',
        font_size: '24px',
    },
    bttnhover: {
        background: '#122f3d',
    }
    
}))

export default useStyles()