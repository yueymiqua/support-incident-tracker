import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Menu, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Home() {

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.container}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <Link href="/new-incident"><ListItemText primary="Create New Incident" onClick={handleClose}/></Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link href="/incidents"><ListItemText primary="List of Incidents" onClick={handleClose}/></Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link href="/new-user"><ListItemText primary="Create Account" onClick={handleClose}/></Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link href="/login"><ListItemText primary="Login" onClick={handleClose}/></Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <a href="https://github.com/radian-digital/radian-challenge" target="_blank" onClick={handleClose}>
              <ListItemText primary="About Project Scope" />
            </a>
        </StyledMenuItem>
      </StyledMenu>
          <Typography variant="h6" className={classes.title}>
            <a
            href="https://github.com/radian-digital/radian-challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Radian Technology Challenge
          </a>
          </Typography>
          <Link href="/new-user"><Button color="inherit"><PersonAddIcon/>Create Account</Button></Link>
          <Link href="/login"><Button color="inherit"><AccountCircleIcon/>Login</Button></Link>
        </Toolbar>
      </AppBar>
      <Head>
        <title>Incident Support Tracker</title>
        <meta name="description" content="Online tracking system to create and update issues statuses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span style={{color: 'purple', fontWeight: 'bold'}}>Incident Support Tracker</span>
        </h1>

        <p className={styles.description}>
          Easily track all ongoing IT issues in the office!
        </p>

        <div className={styles.grid}>
          <Link href="/new-incident">
            <a className={styles.card}>
              <h2 style={{color: 'purple'}}>Create New Incident &rarr;</h2>
              <p>Submit new incident report to IT team</p>
            </a>
          </Link>
          <Link href="/incidents"className={styles.card}>
            <a className={styles.card}>
              <h2 style={{color: 'purple'}}>Go To All Incidents &rarr;</h2>
              <p>Show list of existing incidents</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
