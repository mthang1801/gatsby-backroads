import React, {useEffect, useState} from 'react'
import styles from "../../scss/tours.module.scss"
import Tour from "./tour"
import Title from "../title"

const ToursList = (props) => {
  const [tours, setTours] = useState([])
  // later when needing to sort
  const [sortedTours, setSortedTours] = useState([])
  useEffect(() => {
    if(props.tours.length){
      setTours(props.tours)
      setSortedTours(props.tours)
    }
  },[props.tours])
  return (
    <section className={styles.tours}>
      <Title  title="Our" subtitle="tours"/>
      <div className={styles.center}>
        {tours.length ? tours.map(tour => (
          <Tour tour={tour.node} key={tour.node.contentful_id}/>
        )): null}
      </div>
    </section>
  )
}

export default ToursList
