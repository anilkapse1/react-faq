import React, { useState } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const Keepnote=({question,ans})=>{


    return(
        <React.Fragment>

    <List>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://secureservercdn.net/160.153.138.219/7xh.780.myftpupload.com/wp-content/uploads/2020/12/69381782.jpg?time=1626311519" />
        </ListItemAvatar>
        <ListItemText
          primary={`${question}?`}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                Ans:
              </Typography>
              {` — ${ans}`}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
          
        </React.Fragment>
    )
}

export default Keepnote;