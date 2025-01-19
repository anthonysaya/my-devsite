import React, { useState } from "react";
import ProjectMain from "./ProjectMain.tsx";
import ProjectGrid from "./ProjectGrid.tsx";
import ProjectWTP from "./ProjectWTP.tsx";
import ProjectWGSIP from "./ProjectWGSIP.tsx";
import ProjectWSIL from "./ProjectWSIL.tsx";
import ProjectETPI from "./ProjectETPI.tsx";

function Project() {
  const [project, setProject] = useState<String>("Main");

  function handleProject(inp): void {
    setProject(inp);
  }

  return (
    <>
      ({project == "Main" && <ProjectGrid onProject={handleProject} />}
      {project == "WTP" && <ProjectWTP onProject={handleProject} />}
      {project == "WGSIP" && <ProjectWGSIP onProject={handleProject} />}
      {project == "WSIL" && <ProjectWSIL onProject={handleProject} />}
      {project == "ETPI" && <ProjectETPI onProject={handleProject} />})
    </>
  );
}

export default Project;
