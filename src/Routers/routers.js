import{Route,Routes}from "react-router-dom";

import MainPage from "../Components/Main";

export default function Routers(){
  return(
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  )
}