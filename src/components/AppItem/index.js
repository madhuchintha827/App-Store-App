// Write your code here
import './index.css'

const AppItem = props => {
  const {appItemDetails} = props
  const {appName, imageUrl} = appItemDetails

  return (
    <li className="appItem-list">
      <img src={imageUrl} alt={appName} className="app-item" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
