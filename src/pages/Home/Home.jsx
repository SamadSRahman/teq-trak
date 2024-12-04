import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
        Home

        <button onClick={()=>navigate("/trackVehicles")}>Track Vehicles</button>
        </div>
  )
}
