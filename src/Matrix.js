import React, { Component } from 'react';
import Cell from './Cell.js'
import { debug } from 'util';

export default class Matrix extends Component {
 
  
  genRow = (vals) => (
    vals.map(val => <div className="cell"><Cell value={val} /></div>) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}


Matrix.defaultProps = {
  values:(() => {
    const row = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(row))
  })()
}