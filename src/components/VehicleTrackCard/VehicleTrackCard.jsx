import styles from "./VehicleTrackCard.module.css";
import truck from "../../assets/truck.png";
import time from "../../assets/schedule.svg";
import marker from "../../assets/distance.svg";
import speed from '../../assets/speed.svg'
import distance from '../../assets/avg_pace.svg'
export default function VehicleTrackCard({data}) {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <img src={truck} alt="" />
        <div className={styles.detailsSection}>
          <span className={styles.vehicleNumber}>{data.vehicleNumber}</span>
          <span className={styles.runTime}>Running from {data.runningTime}</span>
        </div>
        <div className={styles.statusSection}>
          <span className={styles.status}
          style={{backgroundColor: `${data.status==="Moving"?"#008600": data.status==="Parked"?"#F5D100":data.status==="Idle"?"#F56600":"red"}`}}
          >{data.status}</span>
        </div>
      </div>
      <div className={styles.midSection}>
        <div className={styles.location}>
          <img src={marker} alt="" />
         {data.destination}
        </div>
        <div className={styles.date}>
          <img src={time} alt="" />
          6th Nov 2024
        </div>
      </div>
      <div className={styles.bottomSection}>

        <div className={styles.distance}>
            <img src={distance} alt="" />
            <div className={styles.details}>
                <span className={styles.title}>Distance</span>
                <span className={styles.value}>{data.distanceTravelled}</span>
            </div>
        </div>
        <div className={styles.distance}>
            <div className={styles.details}>
                <span className={styles.title}>Speed</span>
                <span className={styles.value}>{data.speed}</span>
            </div>
            <img src={speed} alt="" />
        </div>
      </div>
    </div>
  );
}
