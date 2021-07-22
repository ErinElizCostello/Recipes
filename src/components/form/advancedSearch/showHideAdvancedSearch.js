import React, { useState } from 'react';

import AdvancedSearch from './advancedSearch';

import { useStylesForm } from '../../styles/homePage/form'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';


const ShowHideAdvancedSearch = () => {
  const classes = useStylesForm()

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Grid container
        display="flex"
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <FormControlLabel
          control={
            <Checkbox
              icon={<AddIcon className={classes.addIcon} />}
              checkedIcon={<AddIcon />}
              checked={checked}
              onChange={handleChange}
              name="checked"
            />
          }
          label="Advanced Search"
        />
      </Grid>

      {
        checked &&

        <Grid container
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="center"
          alignContent='center'
        >
          <AdvancedSearch />
        </Grid>
      }

    </div>
  )
}

export default ShowHideAdvancedSearch