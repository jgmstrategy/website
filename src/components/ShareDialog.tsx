import { ReactElement } from 'react';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import EmailIcon from '@mui/icons-material/Email';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';

type SocialMediaTypes = {
  name: string;
  icon: ReactElement;
};

const socialMedia = [
  {
    name: 'Email',
    icon: <EmailIcon />
  },
  {
    name: 'Facebook',
    icon: <FacebookRoundedIcon />
  },
  {
    name: 'Twitter',
    icon: <TwitterIcon />
  }
];

interface ShareDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export default function ShareDialog(props: ShareDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Share link where?</DialogTitle>
      <List sx={{ pt: 0 }}>
        {
          socialMedia.map(({ name, icon }: SocialMediaTypes) => (
            <ListItem key={name}>
              <ListItemButton onClick={() => handleListItemClick(name)}>
                <ListItemAvatar>
                  {icon}
                </ListItemAvatar>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
    </Dialog>
  );
}