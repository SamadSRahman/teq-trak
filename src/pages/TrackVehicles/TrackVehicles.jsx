import styles from "./TrackVehicles.module.css";
import arrow_back from "../../assets/arrow_back.svg";
import { useEffect, useState } from "react";
import { vehicles } from "./data";
import VehicleTrackCard from "../../components/VehicleTrackCard/VehicleTrackCard";
import { useNavigate } from "react-router-dom";
import Map from "../../components/Map/Map";

export default function TrackVehicles() {
  const [filter, setFilter] = useState("All");
  // const [locations, setLocations] = useState([])
  const navigate = useNavigate()
  const getStatusCounts = () => {
    const counts = { All: vehicles.length };
    vehicles.forEach(({ status }) => {
      counts[status] = (counts[status] || 0) + 1;
    });
    return counts;
  };
  const filteredVehicles = filter === "All" ? vehicles : vehicles.filter((vehicle) => vehicle.status === filter);

  const statusCounts = getStatusCounts();

  const getVehiclePositions=()=>{
    const vehicleLocations= filteredVehicles.map((vehicle)=>vehicle.location)
    return vehicleLocations
  }
  const locations = getVehiclePositions()

  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <div className={styles.sideBarHeader}>
          <button className={styles.backBtn}
          onClick={()=>navigate('/')}
          >
            <img src={arrow_back} alt="" />
            Back
          </button>
          <span>Vehicles</span>
        </div>
        <div className={styles.filterContainer}>
          <div>
            {Object.entries(statusCounts).map(([status, count]) => (
              <button
                className={styles.filterStatus}
                key={status}
                onClick={() => setFilter(status)}
                style={{
                  backgroundColor: filter === status ? "#008FF4" : "#f0f0f0",
                  color: filter === status ? "white" : "black",
                }}
              >
                {status}{" "}
                <span
                  style={{
                    backgroundColor: filter === status ? "white" : "black",
                    color: filter === status ? "#008FF4" : "white",
                  }}
                >
                  {count}
                </span>
              </button>
            ))}
          </div>
       
        </div>
        <div className={styles.vehicleList}>
          <span className={styles.listHead}>{filter} Vehicles</span>
          <div className={styles.list}>
              {filteredVehicles.map((vehicle, i)=>(
                <div key={i}>
                        <VehicleTrackCard data={vehicle} />
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className={styles.mapContainer}>
              <Map markers={filteredVehicles}/>
      </div>
    </div>
  );
}
