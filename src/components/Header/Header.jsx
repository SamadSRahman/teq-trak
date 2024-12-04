import styles from './Header.module.css'
import logo from '../../assets/teq_trak_logo.svg'
import profile from '../../assets/account_circle.svg'
import search from '../../assets/search_check_2.svg'
import notification from '../../assets/notifications.svg'

export default function Header() {
  return (
    <div className={styles.container}>

        <img src={logo} alt="teq_trak_logo" />

        <div className={styles.actionSection}>
            <div>
                <img src={search} alt="" />
            </div>
            <div>
                <img src={notification} alt="" />
            </div>
            <div>
                <img src={profile} alt="" />
            </div>

        </div>
    </div>
  )
}
