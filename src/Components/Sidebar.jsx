import React from 'react';
import Button from './Button';

const Sidebar = () => {
  return (
    <div className="w-full sm:w-48 h-screen border flex flex-col justify-between py-10 items-center">
      <div>
        <div>
          <h1 className="italic font-semibold">LODGN</h1>
        </div>
        <div className="mt-10">
          <ul className="flex flex-col justify-between h-36 text-sm">
            <li className="border-b-2 pb-2">
              <a href="#" className="text-[#72AA83]">
                Current Request
              </a>
            </li>
            <li className="border-b-2 pb-2">
              <a href="#">Ongoing Stays</a>
            </li>
            <li className="border-b-2 pb-2">
              <a href="#">Previous Stays</a>
            </li>
            <li className="border-b-2 pb-2">
              <a href="#">Reports</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Button btn={'Log-Out'} />
        <div className="mt-2 flex flex-col items-center">
          <p className="text-sm">Help Desk</p>
          <span className="text-xs">786-874-9988</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
