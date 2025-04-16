import { InboxOutlined, MailOutlined } from '@mui/icons-material'
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Toolbar, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

export const SideBar = ({drawerWidth}) => {

    const { displayName } = useSelector( state => state.auth );

return (
    <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant="permanent" // permanent / temporary
            open
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component="div">JournalApp</Typography>
            </Toolbar>
            <Divider/>

            <Box
                sx={{
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography variant="subtitle" noWrap component="div">{ displayName }</Typography>
                
            </Box>
            
            <List>
                {
                    ['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxOutlined /> : <MailOutlined />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>
    </Box>
  )
}
