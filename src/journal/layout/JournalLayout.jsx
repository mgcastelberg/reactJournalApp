import { Box, Toolbar } from '@mui/material'
import { NavBar, SideBar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display:'flex'}}>
        {/* Navbar */}
        <NavBar drawerWidth={drawerWidth} />
        {/* Sidebar */}
        <SideBar drawerWidth={drawerWidth} />

        <Box sx={{ flexGrow: 1, p: 3 }}>

            {/* Toolbar */}
            <Toolbar />

            { children }

        </Box>

    </Box>
  )
}
