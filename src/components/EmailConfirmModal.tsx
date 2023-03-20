import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type EmailConfirmModalTypes = {
  emailConfirm: boolean;
  setEmailConfirm: (_: boolean) => void;
}

export default function EmailConfirmModal(
  { emailConfirm, setEmailConfirm }: EmailConfirmModalTypes) {
  return (
    <div>
      <Dialog
        open={emailConfirm}
        onClose={() => setEmailConfirm(false)}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          Thanks for signing up!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Just one more step.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEmailConfirm(true)} autoFocus>
            Thanks!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}