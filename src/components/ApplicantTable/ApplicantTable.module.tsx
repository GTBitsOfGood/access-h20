import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        margin: '0px 50px 0px 50px',
        background: 'rgba(196, 196, 196, 0.2)',
        borderRadius: '8px'
    },
    
    header: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    
    searchBar: {
        margin: '25px 0px 14px 20px'
    },
    
    searchBox: {
        width: '296px',
        height: '42px',
        color: '#9A9A9A',
        fontSize: '18px'
    },
    
    searchFilter: {
        margin: '-14px 0px 0px 20px'
    },
    
    searchFilterText: {
        width: '126px',
        height: '42px',
        background: '#C4C4C4',
        borderRadius: '8px',
        borderBottom: 'none',
        textAlign: 'center',
        fontSize: '18px',
    },
    
    dateInput: {
        margin: '0px 0px 14px 20px'
    },
    
    dateInputText: {
        width: '270px',
        height: '42px',
        fontSize: '18px'
    },
    
    addCustomerButton: {
        background: '#C4C4C4',
        borderColor: 'transparent',
        borderRadius: '8px',
        fontSize: '18px',
        width: '162px',
        height: '42px',
        margin: '21px 22px 14px 0px'
    },
    
    tableHeader: {
        background: '#C4C4C4'
    },
    
    tableHeaderText: {
        fontWeight: 'bold',
        fontSize: '18px'
    },
    
    cell: {
        fontSize: '16px'
    },
    
    status: {
        padding: '6px',
        borderRadius: '8px'
    }

}));