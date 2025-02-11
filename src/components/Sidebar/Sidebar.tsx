import { appConstants } from '@/utils/constants/app';
import React from 'react'
import NavItem from './components/NavItem';
import SupportBox from './components/SupportBox';
import UserProfile from './components/UserProfile';

const Sidebar = () => {
  return (
    <div className="w-[272px] border-r-[1px] border-borderLight">
      <div className="text-xl font-normal tracking-normal border-b-[1px] border-borderLight text-white uppercase p-1 h-[80px] flex items-center justify-center">
        {appConstants?.appName}
      </div>

      {/* Main Navigation */}
      <nav className="space-y-2">
        <h2 className="text-gray-400 text-xs font-semibold uppercase">Main</h2>
        <ul className="space-y-1">
          <NavItem icon="🏠" label="Homepage" active />
          <NavItem icon="👥" label="Team Management" />
          <NavItem icon="📂" label="Player Database" />
          <NavItem icon="👁️" label="Watchlist" />
          <NavItem icon="🔔" label="Notifications" />
          <NavItem icon="📰" label="News" />
        </ul>
      </nav>

      {/* Support Box */}
      <SupportBox />

      {/* Settings & Support */}
      <div className="space-y-1">
        <NavItem icon="⚙️" label="Settings" />
        <NavItem icon="🎧" label="Support" />
      </div>

      {/* User Profile */}
      <UserProfile name="Wei Chen" email="wei@gmail.com" />
    </div>
  );
}

export default Sidebar