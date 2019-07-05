import React from 'react'
import styles from './Header.scss'
import * as Routes from 'constants/Routes'
import { Link } from 'react-router'
import Content from 'common/components/Content'

const Header = () => (
  <div className={styles.component}>
    <Content className={styles.content}>
      <Link
        className={styles.logo}
        to={Routes.ARTICLES}>
        Overloop
      </Link>
      <div className={styles.navigation}>
        <Link
          className={styles.navigationItem}
          to={Routes.ARTICLES}>
          Articles
        </Link>
      </div>
      <div className={styles.navigation}>
        <Link
          className={styles.navigationItem}
          to={Routes.AUTHORS}>
          Authors
        </Link>
      </div>
    </Content>
  </div>
)

export default Header
