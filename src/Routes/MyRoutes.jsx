import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProjectsPortfolio from "../pages/ProjectsPortfolio";

let MYROUTES = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  
      {
        path: "Projects", 
        element: <ProjectsPortfolio />,
      },
  

]);

export default MYROUTES;