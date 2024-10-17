import { navdata } from "./constant/data";
import NavbarItems from "./navbar-items";

export function Navbar() {
  return(
    <div className="flex justify-around gap-5 border-b-2 border-gray-300 dark:border-gray-700  py-2
            px-7 z-20">
      {
        navdata.map((data, index) => (
            <NavbarItems 
            key={index}
            name={data.name}
            link={data.link} isNav={true}/>
        ))
      }
    </div>
  )
}