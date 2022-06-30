import React from 'react';
import "../css/Dashboard.css";
import SideNav from './SideNav';
import MainBody from './MainBody';
import BottomVeiw from './BottomVeiw';

const Dashboard = ({ spotify }) => {
  return (
    <div className='Dashboard'>
      <div className='DashBody'>
        <SideNav spotify={spotify}/>
        <MainBody spotify={spotify}/>
      </div>
      <BottomVeiw spotify={spotify}/>
    </div>
  )
}

export default Dashboard