import React from 'react'
import ReactPivot from 'react-pivot'
import createReactClass from 'create-react-class'
import dimensions from './utils/dimensions'
import reduce from './utils/reduce'
import calculations from './utils/calculations'
import rows from './data.json'

module.exports = createReactClass({
  render () {
    return (
      <div>
        <h1>Report</h1>
        <ReactPivot rows={rows} dimensions={dimensions} reduce={reduce}
                    calculations={calculations}
                    activeDimensions={['Date', 'Host']} nPaginateRows={25} />
      </div>
    )
  }
})
