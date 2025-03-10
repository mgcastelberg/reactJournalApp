import { Box } from '@mui/material'
import { NavBar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display:'flex'}}>
        {/* Navbar */}
        <NavBar drawerWidth={drawerWidth} />
        {/* Sidebar */}

        <Box sx={{ flexGrow: 1, p: 3, mt: 5 }}>
            {/* <h1>JournalLayout</h1> */}

            {/* Toolbar */}

            { children }

        </Box>

    </Box>
  )
}
