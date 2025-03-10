import { Box } from '@mui/material'

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display:'flex'}}>
        {/* Navbar */}

        {/* Sidebar */}

        <Box sx={{ flexGrow: 1, p: 3 }}>
            <h1>JournalLayout</h1>

            {/* Toolbar */}

            { children }

        </Box>

    </Box>
  )
}
