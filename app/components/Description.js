import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import {Button} from '@nextui-org/button';
import SellIcon from '@mui/icons-material/Sell';
import TimelineIcon from '@mui/icons-material/Timeline';
import Crop75Icon from '@mui/icons-material/Crop75';

export default function InsetDividers() {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SellIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="가격" secondary="18억" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Crop75Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="평형" secondary="38평형" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <TimelineIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="실거래" secondary="22억" />
      </ListItem>
      
    </List>
  );
}
