import React from 'react';
import { Avatar, IconButton, MenuItem, Select, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import userImage from '../../assets/userImage.png'; // This will be the fallback image if needed
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Typography variant="body1" component="label" htmlFor="sort">
          Sort:
        </Typography>
        <Select
          id="sort"
          defaultValue="last-week"
          variant="outlined"
          size="small"
          style={{ marginLeft: '10px' }}
        >
          <MenuItem value="last-week">Last week</MenuItem>
          <MenuItem value="last-month">Last month</MenuItem>
          <MenuItem value="last-year">Last year</MenuItem>
        </Select>
      </div>
      <div className="header-right">
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <div className="user-info">
          <Avatar alt="Kaylie Wambui" src={userImage} />
          <div className="user-details">
            <Typography variant="body1" className="user-name">Kaylie Wambui</Typography>
            <Typography variant="body2" className="user-email">kaylie.wambui@ireporter.com</Typography>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
