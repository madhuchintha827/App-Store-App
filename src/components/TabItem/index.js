// Write your code here

import './index.css'

const TabItem = props => {
  const {tabItemDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabItemDetails

  const onClickTabId = () => {
    updateActiveTabId(tabId)
  }

  const isActiveChangeBackground = isActive ? 'change-tab-item' : ' '

  return (
    <li className="tabItem-list">
      <button
        className={`button ${isActiveChangeBackground}`}
        type="button"
        onClick={onClickTabId}
      >
        {displayText}
      </button>
      <hr className={`${isActiveChangeBackground}`} />
    </li>
  )
}

export default TabItem
