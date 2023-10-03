import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
    ZoomableGroup
} from "react-simple-maps";

const Map = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [81.7602544, -27.9944024, 0],
                scale: 1600
            }}
            style={{ width: "100%", height: "100%" }}
        >
            <Geographies
                geography="/features.json"
                fill="lightblue"
                stroke="#FFFFFF"
                strokeWidth={0.5}
            >
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
            <Annotation
                subject={[30.4382, -84.2806]}
                dx={-40}  // Adjusted for better positioning
                dy={-20}  // Adjusted for better positioning
                connectorProps={{
                    stroke: "#FFD700",  // Gold color for the connector line
                    strokeWidth: 1.5,
                    strokeLinecap: "round"
                }}
            >
                <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#FFD700" style={{ fontWeight: "bold", fontSize: "12px" }}>
                    {"Tallahassee"}
                </text>
            </Annotation>
        </ComposableMap>
    );
};

export default Map;
