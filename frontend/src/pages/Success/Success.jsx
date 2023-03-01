import React, {useEffect} from 'react'
import { useSelector } from "react-redux";
import "./Success.css";

const Success = () => {
  const purchaserData = useSelector((state) => state.update_purchaser_data.purchaserData);
  useEffect(() => {
    console.log(purchaserData);    
  }, [purchaserData])
  return (
    <div className="container">
      <h2 className="title">Thank you for your purchase, {purchaserData.first_name}!</h2>
      <p className="subtitle">We have received your purchase and are preparing it for shipment. We will ship your order to:</p>
      <p className="address">{purchaserData.address}</p>
    </div>
  )
}

export default Success