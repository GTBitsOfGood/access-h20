import clsx from 'clsx'
import PropTypes from 'prop-types'
import NavLink from '../NavLink' // eslint-disable-line
import Link from 'next/link'
import routes from './routes'
import styles from './Header.module.css'

const Header = ({ loggedIn, currentRoute }) => (
  <div className={styles.root}>
    {routes
      .filter((route) => (loggedIn && route.auth) || (!loggedIn && !route.auth))
      .map(({ name, link, atEnd }) => (
        <NavLink
          href={link}
          // key={name}
        >
          <div
            className={clsx(
              atEnd ? styles.endRoute : styles.route,
              currentRoute === link && styles.selected
            )}
          >
            {name}
          </div>
        </NavLink>
        // <span>
        //   <Link href={link}>{name}</Link>
        // </span>
      ))}
  </div>
)

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  currentRoute: PropTypes.string.isRequired
}

export default Header
