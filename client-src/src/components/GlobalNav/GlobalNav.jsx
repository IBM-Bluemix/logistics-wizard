import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import { Toolbar, ToolbarGroup, ToolbarTitle, ToolbarSeparator } from 'material-ui/Toolbar';
import classNames from 'classnames';
import RoleSwitcher from './RoleSwitcher';
import classes from './GlobalNav.scss';

const styles = {
  toolbar: {
    backgroundColor: 'rgb(15, 147, 166)',
  },
  separator: {
    backgroundColor: 'rgb(184, 222, 228)',
  },
  github: {
    color: 'rgb(184, 222, 228)',
    fontSize: 34,
  },
  hover: {
    color: 'rgb(255, 255, 255)',
  },
  paragraph: {
    paddingLeft: '2rem',
    fontSize: '0.9rem',
  },
  title: {
    color: 'rgb(255, 255, 255)',
    fontSize: '1rem',
  },
};

export const GlobalNav = () => (
  <div className={classes.globalNav}>
    <Toolbar style={styles.toolbar}>
      <ToolbarGroup firstChild>
        <ToolbarTitle text="Logistics Wizard" className={classes.title} style={styles.title} />
      </ToolbarGroup>

      <ToolbarGroup>
        <RoleSwitcher />
        <ToolbarSeparator style={styles.separator} />
        <FontIcon
          className={classNames({
            fa: true,
            'fa-github': true,
            [classes.github]: true,
          })}
          style={styles.github}
          hoverColor="rgb(255, 255, 255)"
        />
        <p className="flow-text" style={styles.paragraph}>Demo Settings</p>
      </ToolbarGroup>
    </Toolbar>
  </div>
);

GlobalNav.propTypes = {};

export default GlobalNav;
