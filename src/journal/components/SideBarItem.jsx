import { InboxOutlined, MailOutlined } from '@mui/icons-material'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useMemo } from 'react'

export const SideBarItem = ({note, index}) => {

  // const newTitle = note.title.length > 17
  //   ? note.title.substring(0, 17) + '...'
  //   : note.title ;

  const newTitle = useMemo(() => {
    return note.title.length > 17
    ? note.title.substring(0, 17).trim() + '...'
    : note.title ;
  });

  return (
    <ListItem disablePadding>
        <ListItemButton>
            <ListItemIcon>
                {index % 2 === 0 ? <InboxOutlined /> : <MailOutlined />}
            </ListItemIcon>
            <ListItemText primary={newTitle} />
        </ListItemButton>
    </ListItem>
  )
}
