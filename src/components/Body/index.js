import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar-container">
              <h1 className="left-navbar-heading">Left Navbar Menu</h1>
              <ul className="left-navbar-contents">
                <li className="left-list-item">item 1</li>
                <li className="left-list-item">item 2</li>
                <li className="left-list-item">item 3</li>
                <li className="left-list-item">item 4</li>
              </ul>
            </div>
          ) : null}

          {showContent ? (
            <div className="content-container">
              <h1 className="content-heading">Content</h1>
              <p className="content">
                Lorem ipsum something something to be written in the
                content.just some content. enjoy learning.train your brain.
              </p>
            </div>
          ) : null}

          {showRightNavbar ? (
            <div className="right-container">
              <h1 className="right-heading">Right Navbar</h1>
              <div className="right-ad-container">
                <p>Ad 1</p>
              </div>
              <div className="right-ad-container">
                <p>Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
