import React from "react";
import { BsGearWideConnected } from "react-icons/bs";
import {
  GrAppsRounded,
  GrBarChart,
  GrConnect,
  GrDocumentPerformance,
} from "react-icons/gr";
import { Link } from "react-router-dom";
type sidebarProps = {};

const Sidebar: React.FC<sidebarProps> = () => {
  return (
    <div className="absolute lg:relative w-64  h-[calc(100vh_-_4rem)] shadow bg-gray-100 hidden lg:block">
      <ul className=" py-6">
        <li className="pl-6 cursor-pointer  text-sm leading-3 tracking-normal pb-4 pt-2 text-indigo-700 focus:text-indigo-700 focus:outline-none">
          <div className="flex items-center">
            <div>
              <BsGearWideConnected className="w-5 h-5" />
            </div>

            <Link to="/">
              <span className="ml-2">Connections</span>
            </Link>
          </div>
        </li>
        <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
          <div className="flex items-center">
            <GrBarChart className="w-6 h-6" />
            <Link to="/queries">
              <span className="ml-2">Queries</span>
            </Link>
          </div>
        </li>
        <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
          <div className="flex items-center">
            <GrDocumentPerformance className="w-6 h-6" />
            <Link to="forms">
              <span className="ml-2">Forms</span>
            </Link>
          </div>
        </li>
        <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal  mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
          <div className="flex items-center">
            <GrAppsRounded className="h-6 w-6" />
            <Link to="dashboard">
              <span className="ml-2">Dashboard</span>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
