import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import classes from './Zen.scss';

const styles = {
  paper: {
    padding: '1rem',
  },
};

export const Zen = (props) => (
  <Paper style={styles.paper} zDepth={1}>
    <div>
      <h2 className={classes.zenHeader}>
        {props.zen ? props.zen.value : ''}
      </h2>
      <RaisedButton label="Fetch a wisdom" onClick={props.requestZen} />
      {' '}
      <RaisedButton label="Save" onClick={props.saveCurrentZen} />
    </div>
    {props.saved.length
      ? <div className={classes.savedWisdoms}>
        <h3>
          Saved wisdoms
        </h3>
        <ul>
          {props.saved.map(zen =>
            <li key={zen.id}>
              {zen.value}
            </li>
          )}
        </ul>
      </div>
      : null
    }
  </Paper>);

Zen.propTypes = {
  zen: React.PropTypes.object,
  saved: React.PropTypes.array.isRequired,
  requestZen: React.PropTypes.func.isRequired,
  saveCurrentZen: React.PropTypes.func.isRequired,
};

export default Zen;
