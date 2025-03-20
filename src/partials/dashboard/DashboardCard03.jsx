import React from 'react';

import Image01 from '/enginakyurt.jpg';
import Image02 from '/justin.jpg';
import Image03 from '/simon.jpg';

function DashboardCard03() {

  const patients = [
    {
      id: '0',
      image: Image01,
      name: 'Hannah Luiz',
      patientId: 'fs5b-Xh68-1ht62-18yt2tr-u0XM1-00918',
      status: 'Discharged',
      buttonClass: 'bg-red-500',
    },
    {
      id: '1',
      image: Image02,
      name: 'Immanuel Enzo',
      patientId: 'fs5b-Xh68-1ht62-18yt2tr-u0XM1-00919',
      status: 'Admitted',
      buttonClass: 'bg-green-500',
    },
    {
      id: '2',
      image: Image03,
      name: 'Simon Justin',
      patientId: 'fs5b-Xh68-1ht62-18yt2tr-u0XM1-00920',
      status: 'Admitted',
      buttonClass: 'bg-green-500',
    },
  ];

  return (
    <div className="flex flex-col sm:col-span-full xl:col-span-4 px-2 space-y-4 py-3 text-slate-900 dark:text-slate-200">
      <h2 className="font-semibold text-lg mt-4">Recent Patient Updates</h2>
      {patients.map(patient => (
        <div key={patient.id} className='flex items-center justify-between border border-t-0 border-x-0 border-b-slate-500 pb-2'>
          <div className='flex items-center space-x-2'>
            <img src={patient.image} alt={patient.name} className='rounded-full w-10' />
            <p>{patient.name}</p>
          </div>

          <div>
            <h5 className='text-bold'>Patient ID</h5>
            <p className='text-sm'>{patient.patientId}</p>
          </div>

          <div>
            <button className={`${patient.buttonClass} text-white py-2 px-10 rounded-full`}>
              {patient.status}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCard03;