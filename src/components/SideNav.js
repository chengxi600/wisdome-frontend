import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function SideNav({
  anchor = "left"
}) {
  return (
    <Drawer
      container
      spacing={0}
      direction="column"
      alignItems="center"
      style={{ minHeight: '100vh' }}
      variant="permanent"
      anchor={anchor}
      PaperProps={{
        sx: {
          backgroundColor: "#f6f8f8",
        }
      }}
    >
      <Toolbar>
        <img
          srcset='https://brainbox.wisdome.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_color.cd480370.webp&w=32&q=75 1x, https://brainbox.wisdome.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_color.cd480370.webp&w=64&q=75 2x'
          src='https://brainbox.wisdome.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_color.cd480370.webp&w=64&q=75'
          width={32}
          height={32}
          alt='logo icon'
          loading="lazy"
        />
      </Toolbar>
      <Divider />
      <List>
        {['Test', 'Test', 'Test', 'Test'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ justifyContent: "center" }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon >
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Test', 'Test', 'Test'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ justifyContent: "center" }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
