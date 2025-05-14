import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { SideBarItem } from './SideBarItem';

export const SideBar = ({drawerWidth}) => {

    const { displayName } = useSelector( state => state.auth );
    const { notes } = useSelector( state => state.journal );

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
                    notes.map((note, index) => (
                        <SideBarItem key={note.id} note={note} index={index} />
                    ))
                }
            </List>

        </Drawer>
    </Box>
  )
}
