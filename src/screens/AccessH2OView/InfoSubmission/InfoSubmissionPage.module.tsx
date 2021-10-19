import { makeStyles } from '@material-ui/styles'
import theme from './../../../theme'

const useStyles = makeStyles(theme => ({
  root: {
    margin_left: '50px',
  },
  applicant: {
    display: 'flex',
    flex_direction: 'column',
    margin_right: '50%',
  },
  applicantInfoh4: {
    display: 'inline',
    padding_right: '10px',
  },
  applicantInfop: {
    display: 'inline',
    text_align: 'right',
  },
  applicantStatush4: {
    display: 'inline',
  },
  statusButton: {
    width: '126px;',
  },
  comments: {
    display: 'flex',
    flex_direction: 'column',
  },
  commentBox: {
    padding: '10px',
    margin_bottom: '15px',
  },
  commentSubmit: {
    width: '126px',
  },
}))