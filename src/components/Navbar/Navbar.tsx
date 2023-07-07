import {Link} from 'react-router-dom';
import {Github} from "lucide-react";
import ReactLogo from './../../assets/react.svg'


   
const Navbar  = () => {
    return (
        
 <div className="px-10 py-3 flex items-center  top-0  w-full justify-between bg-gray-700 text-slate-100 fixed">

    <nav className="flex flex-grow basis-0 text-slate-200  text-xs lg:text-base font-medium "> 
    <ul className="flex text-xs  lg:text-base   [&>li>a]:text-current [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:font-medium ">
            
            
      <li><a className="hover:text-teal-600" href="https://github.com/dcattaneo"><img src={ReactLogo} alt="React Logo" className="h-[16px] lg:h-[24px]"/></a></li>
        
    </ul>
       
    </nav>

    <nav className="">
        <ul className="flex text-xs lg:text-base   [&>li]:text-current [&>li]:transition-colors [&>li]:duration-500 [&>li]:inline-block [&>li]:px-4 [&>li]:py-2 [&>li]:font-medium">
            <li className="hover:text-teal-600"><Link to="/"> Video History </Link></li>
            <li className="hover:text-teal-600"><Link to="/new-video">New video</Link></li>
            
           
            
        </ul>
    </nav>
    

    <nav className="flex flex-grow justify-end basis-0">
        <ul className="flex text-xs  lg:text-base   [&>li>a]:text-current [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:font-medium ">
            <li><a className="hover:text-teal-600" href="#">Developed By DC</a></li>
            <li><a className="hover:text-teal-600" href="https://github.com/dcattaneo"><Github className="h-[16px] lg:h-[24px]" /></a></li>
            
        </ul>
    </nav>
 </div>
      
     );
}
 
export default Navbar ;