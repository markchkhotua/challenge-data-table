'use strict'

export default (row, memo) => {
  memo.impressions = (memo.impressions || 0) + (row.type === 'impression' ? 1 : 0)
  memo.loads = (memo.loads || 0) + (row.type === 'load' ? 1 : 0)
  memo.displays = (memo.displays || 0) + (row.type === 'display' ? 1 : 0)
  memo.loadRate = memo.loads / memo.impressions
  memo.displayRate = memo.displays / memo.loads
  return memo
}
