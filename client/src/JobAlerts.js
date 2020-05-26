import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import App from './App';


export default function JobAlerts({job, open, handleClose}) {

    if (!job.title){
        return <div />
    }
  
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{job.title} -
          <img className={'info-logo'} src={job.company_logo}/>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" dangerouslySetInnerHTML={{__html: job.description}}>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
            <a href={job.url} target="_blank">
              <Button color="primary">Apply</Button>
            </a>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  
