import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = event => {
        onToggleShowContent(event.target.value)
      }

      const onChangeLeft = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRight = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="config-layout-container">
          <h1 className="header-main-heading">Layout</h1>
          <div className="header-checkbox-container">
            <input
              type="checkbox"
              id="Content"
              checked={showContent}
              onChange={onChangeContent}
            />
            <label htmlFor="Content" className="label">
              Content
            </label>
          </div>
          <div className="header-checkbox-container">
            <input
              type="checkbox"
              id="Left Navbar"
              checked={showLeftNavbar}
              onChange={onChangeLeft}
            />
            <label htmlFor="Left Navbar" className="label">
              Left Navbar
            </label>
          </div>
          <div className="header-checkbox-container">
            <input
              type="checkbox"
              id="Right Navbar"
              checked={showRightNavbar}
              onChange={onChangeRight}
            />
            <label htmlFor="Right Navbar" className="label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
