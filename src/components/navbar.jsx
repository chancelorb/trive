import React, {Component} from "react";
import { Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    flexgrow: 1,
  },
  flex: {
    flexgrow: 1,
  },
  menuButton: {
    marginLeft: "auto",
    marginRight: 20,
  },
  paper: {
   marginRight: 20,
  },
};

class ButtonAppBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openMenu: false
    }
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.setState({
      openMenu: !this.state.openMenu
    })
  }

  render() {

    const { classes } = this.props;
    const { openMenu } = this.state;
    const dropdown = (<Paper className={classes.paper}><MenuList>
                        <MenuItem onClick={this.openMenu}><Link to="/whitepaper">Whitepaper</Link></MenuItem>
                        <MenuItem onClick={this.openMenu}><Link to="/Team">Team</Link></MenuItem>
                        <MenuItem onClick={this.openMenu}><Link to="/Presentation">Presentation</Link></MenuItem>
                        <MenuItem onClick={this.openMenu}><Link to="/how-it-works">How It Works</Link></MenuItem>
                        <MenuItem onClick={this.openMenu}><Link to="/contact">Contact</Link></MenuItem>
                      </MenuList></Paper>)
    return (
      <div className={classes.root}>
        <AppBar position='static' color="inherit">
          <Toolbar>

            <Typography variant="title" color="inherit" className={classes.flex}>
              <Link to='/'>Trive</Link>
            </Typography>


              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon onClick={this.openMenu}/>
              </IconButton>

          </Toolbar>
        </AppBar>
        {openMenu && dropdown}
      </div>
    );
  }

}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
