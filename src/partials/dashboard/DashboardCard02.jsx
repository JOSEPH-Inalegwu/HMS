import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import { chartAreaGradient } from '../../charts/ChartjsConfig';
import EditMenu from '../../components/DropdownEditMenu';

// Import utilities
import { adjustColorOpacity, getCssVariable } from '../../utils/Utils';

function DashboardCard02() {

  return (
    <div className='space-y-3 cursor-pointer'>
      <div className="flex space-x-6">
        {[
          {  text: "250 Beds" },
          {  text: "120 Doctors" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white dark:bg-gray-800 px-20 py-7 rounded-xl text-slate-900 dark:text-slate-200 hover:bg-gray-400 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            <img src={item.src} alt=""/>
            <h4 className="w-full text-center">{item.text}</h4>
          </div>
        ))}
      </div>
      <div className="flex space-x-6">
        {[
          { src: "/images/bill.svg", text: "4,254 Bills" },
          { src: "/ambulance.svg", text: "40 Ambulance" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center bg-white dark:bg-gray-800 px-19 py-8 rounded-xl text-slate-900 dark:text-slate-200 hover:bg-gray-400 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            {/* <img src={item.src} alt="" className='w-6'/> */}
            <h4 className="w-full text-center text-sm flex flex-col">{item.text}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardCard02;
