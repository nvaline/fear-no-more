import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ListingCard from './ListingCard';

const useStyles = makeStyles(() => ({
  filter: {
    marginBottom: '3rem'
  }
}));

const options = ['All', 'Bills', 'Food', 'Homegoods', 'Housing'];

// ^^^ COMPONENT DECLARATION ^^^ //
export default function FilterComponent () {
  const classes = useStyles();

  // ~~~~~~~ STATE VARIABLES ~~~~~~~ //
  // SETS A VALUE FOR SLICING DATA AND
  // ONLY DISPLAYING 4 PROJECTS/PAGE
  const [nextPage, setPage] = useState(0);

  // SET TO TRUE ONCE THE END OF THE LIST
  // IS REACHED
  const [listEnd, setListEnd] = useState(false);

  // SET TO FALSE AFTER THE FIRST CLICK TO
  // GO TO NEXT PAGE OF PROJECTS
  const [listBegin, setListBegin] = useState(true);

  // DISPLAYS PAGE NUMBER BETWEEN BUTTONS
  // ALSO USED FOR CONDITIONAL TO CHECK IF
  // AT END OF LIST OR BEGINNING
  const [pageNumber, setPageNumber] = useState(1);

  const [listData, setListData] = useState([]);
  // SETS THE TOTAL NUMBER OF PAGES
  // USED TO TEST IF PAGE NUMBER
  // REACHES END OF LIST
  const [limit] = useState(parseInt(listData.length / 6));


  // THIS IS A CHUNK OF THE DATA THAT CHANGES ON
  // EACH CLICK OF EITHER INC OR DEC
  let projectList = listData.slice(nextPage, nextPage + 6);

  // THE INITIAL API CALL FOR DATA
  useEffect(() => {
    async function fetchData() {
      const noQuery = await axios.get(`http://18.222.198.9/api/listings/requests`)
        .then(({data}) => {
          setListData(data);
        })
        .catch((error) => {
          console.error(`ERROR :!:!:! ${error}`);
        });
    }
    fetchData();
  }, []);


  // SETS CATEGORY TO FILTER LIST BY
  const [listFiltered, setListFiltered] = useState(false);
  // SETS NEW DATA TO DISPLAY BASED ON FILTER SELECTION
  const [filteredList, setFilteredList] = useState([]);
  // FILTER FUNCTIONALITY
  function filterList (option) {
    let results = listData.slice();
    let optionNormalize = option.charAt(0).toLowerCase() + option.slice(1);
    if (optionNormalize === 'all') {
      setListFiltered(false);
    } else {
      setListFiltered(true);
    }
    setFilteredList(results.filter((item) => item.category === option.toLowerCase()));
  }

  // OPTIONS RELATED FUNCTIONALITY
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleMenuItemClick = (event, option, index) => {
    setSelectedIndex(index);
    setOpen(false);
    filterList(option);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function incrementPage() {
    // SET PAGE NUMBER
    setPageNumber(pageNumber + 1);

    // SLICE NEW LIST FOR PAGE
    setPage(nextPage + 6);

    // WHEN FIRST CLICKING NEXT
    // SET listBegin TO FALSE
    setListBegin(false);

    // I ADDED A CONSTANT NUMBER (3)
    // BECAUSE limit STAYS AT 0
    // THIS HAS TO DO WITH useEffect AND
    // I AM NOT SURE HOW TO FIX IT
    if (pageNumber >= 3) {
      // SET LIST END TO true
      // THIS WILL DISABLE THE NEXT
      // PAGE BUTTON
      setListEnd(true);
    }
  }
  function decrementPage() {
    // SET nextPage SO PREVIOUS SLICE
    // IS DISPLAYED
    setPage(nextPage - 6);

    // INCREMENT pageNumber
    setPageNumber(pageNumber - 1);

    // WHENEVER pageNumber IS DECREMENTED
    // SET listEnd TO false
    // THIS WILL RE-ENABLE THE INCREMENT BTN
    setListEnd(false);

    // IF pageNumber lt || eq to 2
    // WE ARE AT THE BEGINNING OF THE LIST
    if (pageNumber <= 2) {
      // THIS DISABLES THE DECREMENT BTN
      setListBegin(true);
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className={classes.root} style={{ width: '800px'}} >
        {/* <Grid container direction="column" alignItems="center">
          <Grid item xs={12}> */}
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '40px 40px 0 40px' }} >
            <ButtonGroup className={classes.filter} variant="contained" color="primary" ref={anchorRef} aria-label="split button">
              <Button>{options[selectedIndex]}</Button>
              <Button
                color="primary"
                size="small"
                aria-controls={open ? 'split-button-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={handleToggle}>
                <ArrowDropDownIcon />
              </Button>
            </ButtonGroup>

            <ButtonGroup className={classes.filter} variant="contained" color="primary" aria-label="split button">
            <Button href="/listings/create">Create Listing</Button>
          </ButtonGroup>

            </div>
            <div style={{ display: 'flex', justifyContent: 'center',  }} >

            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                  }}>
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList id="split-button-menu">
                        {options.map((option, index) => (
                          <MenuItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, option, index)}>
                            {option}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          {/* </Grid> */}
          </div>

          <Grid
            container
            alignItems='center'
            justifyContent='center'
            spacing={0}>
            {!listFiltered
              ? projectList.map((item, idx) => {
                let slicedWords = item.body.slice(0, 150);
                return (
                  <ListingCard
                    key={idx}
                    id={item.id}
                    body={`${slicedWords}...`}
                    category={item.category.toUpperCase()}
                    photo={item.photo}
                    title={item.title} />
                )
              }) : filteredList.map((item, idx) => {
                let slicedWords = item.body.slice(0, 150);
                return (
                  <ListingCard
                    key={idx}
                    id={item.id}
                    body={`${slicedWords}...`}
                    category={item.category.toUpperCase()}
                    photo={item.photo}
                    title={item.title} />
                )
              })}
          </Grid>
          <Grid
            container
            justifyContent='center'>
            <ButtonGroup
              className={classes.fixed}
              variant="contained"
              style={{margin: '10px 10px 30px 10px'}}
              color="primary">
              <Button
                disabled={listBegin}
                onClick={() => decrementPage()}>Back</Button>
            </ButtonGroup>

            <ButtonGroup
              className={classes.fixed}
              variant="contained"
              style={{margin: '10px 10px 30px 10px'}}
              color="primary">
              <Button
                backgroundColor='primary'
                disableRipple={true}>Page : {pageNumber}</Button>
            </ButtonGroup>

            <ButtonGroup
              className={classes.fixed}
              variant="contained"
              style={{margin: '10px 10px 30px 10px'}}
              color="primary">
              <Button
                disabled={listEnd}
                onClick={() => incrementPage()}>Next</Button>
            </ButtonGroup>
          </Grid>
        {/* </Grid> */}
        </div>
      </div>
  );
}