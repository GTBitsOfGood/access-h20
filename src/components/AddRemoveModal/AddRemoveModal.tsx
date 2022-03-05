import * as React from 'react'
import Button from '@material-ui/core/Button'
import classes from './AddRemoveModal.module.css'
import Modal from '@mui/material/Modal'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'

interface PropTypes {
  isAdd: boolean
  shouldShowModal: boolean
  onClose: () => void
}

export const AddRemoveModal = ({ isAdd, shouldShowModal, onClose }: PropTypes): JSX.Element => {
  return (
  <div>
    <Modal open={shouldShowModal} onClose={onClose}>
      <div className={classes.modalwrapper}>
          {!isAdd && (
            <DeleteForeverOutlinedIcon color="error" fontSize="large" />
          )}
          {isAdd && (
            <CheckCircleOutlineIcon color="primary" fontSize="large" />
          )}
          <h2>Utility Partner has been successfully added!</h2>
          <Button
              onClick={onClose}
              variant="contained"
              style={{
                backgroundColor: '#3F78B5',
                color: '#FFFFFF',
                borderRadius: '8px'
              }}
              >
              Continue
          </Button>
      </div>
    </Modal>
  </div>
  )
}
