import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

// Taken from https://material-ui.com/components/switches/ and modified
const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      transform: 'translateX(0px)',
      transition: "transform 0.5s",
      '&$checked': {
        transform: 'translateX(16px)',
        transition: "transform 0.5s",
        color: "#000000",             // Thumb color on dark
        '& + $track': {
          backgroundColor: '#FFFFFF', // Background color on dark
          opacity: 1,
          border: 'none',
        },
      }
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: "1px solid #000000",  // Border color on light
      backgroundColor: "#000000",   // Background color on light
      opacity: 1,
      transition: "transform 0.5s"
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

  export default IOSSwitch;
