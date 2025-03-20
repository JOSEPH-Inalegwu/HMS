import React from 'react';

import Image01 from '/user-36-05.jpg';
import Image02 from '/user-36-06.jpg';
import Image03 from '/user-36-07.jpg';
import Image04 from '/user-36-08.jpg';
import Image05 from '/user-36-09.jpg';

function DashboardCard10() {

  const healthcareProviders = [
    {
      id: '0',
      image: Image01,
      name: 'Dr. Alex Shatov',
      email: 'alex.shatov@hospital.com',
      specialty: 'Cardiology',
      patientsTreated: '150',
    },
    {
      id: '1',
      image: Image02,
      name: 'Dr. Philip Harbach',
      email: 'philip.h@hospital.com',
      specialty: 'Neurology',
      patientsTreated: '120',
    },
    {
      id: '2',
      image: Image03,
      name: 'Dr. Mirko Fisuk',
      email: 'mirko.f@hospital.com',
      specialty: 'Orthopedics',
      patientsTreated: '200',
    },
    {
      id: '3',
      image: Image04,
      name: 'Dr. Olga Semklo',
      email: 'olga.s@hospital.com',
      specialty: 'Pediatrics',
      patientsTreated: '80',
    },
    {
      id: '4',
      image: Image05,
      name: 'Dr. Burak Long',
      email: 'burak.l@hospital.com',
      specialty: 'Oncology',
      patientsTreated: '95',
    },
  ];

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Healthcare Providers</h2>
      </header>      
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Specialty</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Patients Treated</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
              {
                healthcareProviders.map(provider => {
                  return (
                    <tr key={provider.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            <img className="rounded-full" src={provider.image} width="40" height="40" alt={provider.name} />
                          </div>
                          <div className="font-medium text-gray-800 dark:text-gray-100">{provider.name}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{provider.email}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-blue-500">{provider.specialty}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">{provider.patientsTreated}</div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}

export default DashboardCard10;
