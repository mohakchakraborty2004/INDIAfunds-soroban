

import { useRouter } from 'next/router';
import FreighterConnect from './FreighterConnect';

export default function Homepage() {
  

  return (
    <>
      <FreighterConnect />

      <div className="grid grid-cols-5 h-[100vh] w-[100vw]">
        <div className="bg-black p-7 col-span-3">
          <p className="font-bold text-[6.5rem] text-white">
            Fund with the <span className="text-green-400">blockchain</span>
          </p>
          <p className="italic text-xl text-white">
            Leveraging blockchain for secure and transparent fund transfers and providing peer-to-peer funding securely.
          </p>

          <button
            onClick={() => {
              
            }}
            className=" mt-5 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Dashboard
            </span>
          </button>
        </div>

        <div className="bg-black col-span-2 p-10">
          <img src="./imgbc.webp" alt="Blockchain illustration" />
        </div>
      </div>
    </>
  );
}

    