import React from 'react';

function DashboardCard12() {
  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Recent Patient Activities</h2>
      </header>
      <div className="p-3">

        {/* Card content */}
        {/* "Today" group */}
        <div>
          <header className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50 rounded-xs font-semibold p-2">Today</header>
          <ul className="my-1">
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-blue-500 my-2 mr-3">
                <svg className="w-9 h-9 fill-current text-white" viewBox="0 0 36 36">
                  <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
                </svg>
              </div>
              <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center"><a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Dr. Smith</a> updated <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Patient John Doe</a>'s treatment plan.</div>
                  <div className="shrink-0 self-end ml-2">
                    <a className="font-medium text-blue-500 hover:text-blue-600 dark:hover:text-blue-400" href="#0">View<span className="hidden sm:inline"> -&gt;</span></a>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-orange-500 my-2 mr-3">
                <svg className="w-9 h-9 fill-current text-white" viewBox="0 0 36 36">
                  <path d="M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z" />
                </svg>
              </div>
              <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">The appointment for <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Patient Jane Doe</a> was canceled by <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Dr. Brown</a></div>
                  <div className="shrink-0 self-end ml-2">
                    <a className="font-medium text-blue-500 hover:text-blue-600 dark:hover:text-blue-400" href="#0">View<span className="hidden sm:inline"> -&gt;</span></a>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">  
              <div className="w-9 h-9 rounded-full shrink-0 bg-green-500 my-2 mr-3">
                <svg className="w-9 h-9 fill-current text-white" viewBox="0 0 36 36">
                  <path d="M18 4C9.7 4 3 10.7 3 19s6.7 15 15 15 15-6.7 15-15S26.3 4 18 4zm0 26c-6.1 0-11-4.9-11-11S11.9 8 18 8s11 4.9 11 11-4.9 11-11 11zm-2-17h4v10h-4v-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2v-2z" />
                </svg>
              </div>
              <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center"><a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Patient John Doe</a> checked in for their appointment.</div>
                  <div className="shrink-0 self-end ml-2">
                    <a className="font-medium text-blue-500 hover:text-blue-600 dark:hover:text-blue-400" href="#0">View<span className="hidden sm:inline"> -&gt;</span></a>
                  </div>
                </div>
              </div>
            </li>

            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-red-500 my-2 mr-3">
                <svg className="w-9 h-9 fill-current text-white" viewBox="0 0 36 36">
                  <path d="M18 4C9.7 4 3 10.7 3 19s6.7 15 15 15 15-6.7 15-15S26.3 4 18 4zm-2 17h4v4h-4v-4zm0-6h4v6h-4v-6z" />
                </svg>
              </div>
              <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">The appointment for <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Patient Jane Doe</a> was rescheduled by <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Dr. Brown</a></div>
                  <div className="shrink-0 self-end ml-2">
                    <a className="font-medium text-blue-500 hover:text-blue-600 dark:hover:text-blue-400" href="#0">View<span className="hidden sm:inline"> -&gt;</span></a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard12;