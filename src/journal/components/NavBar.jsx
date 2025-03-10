import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"

export const NavBar = ({ drawerWidth = 240}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                flexGrow: 1 
            }}
        >
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuOutlined />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    JournalApp
                </Typography>
                <IconButton color="inherit">
                    <LogoutOutlined />
                </IconButton>
                {/* <Button color="inherit">Login</Button> */}
            </Toolbar>
        </AppBar>
    </Box>
  )
}
