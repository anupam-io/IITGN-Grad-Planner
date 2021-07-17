import React from "react";
import "./PlanCard.css";

export default function PlanCard({ className, value }) {
  return <div className={className}>{value}</div>;
}
