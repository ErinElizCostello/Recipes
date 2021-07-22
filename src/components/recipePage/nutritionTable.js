import React from 'react';

import { useStylesNutritionTable } from '../styles/recipePage/nutritionTable'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const NutritionTable = (props) => {
  const classes = useStylesNutritionTable();

  const recipe = props.nutritionInformation

  const createRow = (item, amount, unit, percentOfDailyNeeds) => {
    return { item, amount, unit, percentOfDailyNeeds }
  }

  const rows = recipe && recipe.nutrients.map(item =>
    createRow(item.name, item.amount, item.unit, item.percentOfDailyNeeds)
  )

  return (
    <div className={classes.nutrition}>
          <TableContainer component={Paper}>
            <Table className={classes.nutrition} size="small" aria-label="a dense table">
              
              <TableHead>
                <TableRow>
                  <TableCell>Nutrition</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Percent of Daily Needs</TableCell>
                </TableRow>
              </TableHead>
              
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.item}>
                    <TableCell component="th" scope="row">
                      {row.item}
                    </TableCell>
                    <TableCell align="right">{`${row.amount} ${row.unit}`}</TableCell>
                    <TableCell align="right">{`${row.percentOfDailyNeeds}%`}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              
            </Table>
          </TableContainer>
    </div>
  )
}

export default NutritionTable