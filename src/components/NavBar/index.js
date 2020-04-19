import React from 'react';
import {AppBar, Toolbar, Typography, InputBase, Container} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    bar:{
        flexWrap:'wrap',
        paddingBottom:'1rem',
        [theme.breakpoints.up('sm')]: {
            paddingBottom:'0',
        },
    },
    title: {
      flexGrow: 1,
      textAlign:'center',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
        textAlign: 'left',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));



const NavBar = ({onChangeSearch}) => {
    const classes = useStyles();

    function handleOnChange(e){
        onChangeSearch(e.target.value);
    }
    
    return (
        <AppBar position="static">
            <Container fluid="true">
                <Toolbar className = {classes.bar}>
                    <Typography className={classes.title} variant="h6" noWrap>
                        MovieApp
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                        <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Buscar…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        onChange = {handleOnChange}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </Container>
            
        </AppBar>
    );


}

export default NavBar;