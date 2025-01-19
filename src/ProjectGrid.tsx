import React, { useState } from "react";
import wtp_u from "./WTP1920.png";
import wtp_h from "./WTP1920_h.png";
import wgsip_u from "./WGSIP1920.png";
import wgsip_h from "./WGSIP1920_h.png";
import wsil_u from "./WSIL1920.png";
import wsil_h from "./WSIL1920_h.png";
import etpi_u from "./ETPI1920.png";
import etpi_h from "./ETPI1920_h.png";
import "./Grid.css";

function ProjectGrid(props: { onProject: (string) => void }) {
  const [WTP, setWTP] = useState(wtp_u);
  const [WGSIP, setWGSIP] = useState(wgsip_u);
  const [WSIL, setWSIL] = useState(wsil_u);
  const [ETPI, setETPI] = useState(etpi_u);
  return (
    <>
      <div className="Grid-Container">
        <main className="Grid">
          <div className="Grid-Panel">
            <img
              src={WTP}
              onMouseEnter={() => setWTP(wtp_h)}
              onMouseLeave={() => setWTP(wtp_u)}
              onClick={() => props.onProject("WTP")}
            />
          </div>
          <div className="Grid-Panel">
            <img
              src={WGSIP}
              onMouseEnter={() => setWGSIP(wgsip_h)}
              onMouseLeave={() => setWGSIP(wgsip_u)}
              onClick={() => props.onProject("WGSIP")}
            />
          </div>
          <div className="Grid-Panel">
            <img
              src={WSIL}
              onMouseEnter={() => setWSIL(wsil_h)}
              onMouseLeave={() => setWSIL(wsil_u)}
              onClick={() => props.onProject("WSIL")}
            />
          </div>
          <div className="Grid-Panel">
            <img
              src={ETPI}
              onMouseEnter={() => setETPI(etpi_h)}
              onMouseLeave={() => setETPI(etpi_u)}
              onClick={() => props.onProject("ETPI")}
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default ProjectGrid;
