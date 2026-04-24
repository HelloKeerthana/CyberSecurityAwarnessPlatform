import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { icon: 'group', label: 'Total Users', value: '1,284', trend: '+12%', trendColor: 'emerald', bgColor: 'bg-blue-100 dark:bg-blue-900/30', iconColor: 'text-blue-600 dark:text-blue-400' },
    { icon: 'person_play', label: 'Active Learners', value: '856', trend: '+5%', trendColor: 'emerald', bgColor: 'bg-primary/10', iconColor: 'text-primary' },
    { icon: 'grade', label: 'Avg. Quiz Score', value: '78%', trend: '-2%', trendColor: 'rose', bgColor: 'bg-orange-100 dark:bg-orange-900/30', iconColor: 'text-orange-600 dark:text-orange-400' },
    { icon: 'task_alt', label: 'Completion Rate', value: '92%', trend: '+3%', trendColor: 'emerald', bgColor: 'bg-purple-100 dark:bg-purple-900/30', iconColor: 'text-purple-600 dark:text-purple-400' }
  ];

  const userProgress = [
    { id: 1, name: 'John Doe', initials: 'JD', module: 'Phishing Basics', progress: 85, score: '92%', status: 'Active', statusColor: 'emerald', bgColor: 'bg-blue-500/10', textColor: 'text-blue-600' },
    { id: 2, name: 'Alice Smith', initials: 'AS', module: 'Social Engineering', progress: 45, score: '76%', status: 'Active', statusColor: 'primary', bgColor: 'bg-purple-500/10', textColor: 'text-purple-600' },
    { id: 3, name: 'Mark Wilson', initials: 'MW', module: 'Password Policy', progress: 100, score: '100%', status: 'Completed', statusColor: 'slate', bgColor: 'bg-orange-500/10', textColor: 'text-orange-600' },
    { id: 4, name: 'Emma Young', initials: 'EY', module: 'Remote Security', progress: 25, score: '--', status: 'Pending', statusColor: 'amber', bgColor: 'bg-emerald-500/10', textColor: 'text-emerald-600' }
  ];

  const activities = [
    { id: 1, icon: 'verified', message: 'Alex Rivera completed Phishing Basics', time: '2 mins ago', bgColor: 'bg-blue-100 dark:bg-blue-900/30', iconColor: 'text-blue-600 dark:text-blue-400' },
    { id: 2, icon: 'add_task', message: 'New Module: Zero Trust Architecture was published.', time: '45 mins ago', bgColor: 'bg-emerald-100 dark:bg-emerald-900/30', iconColor: 'text-emerald-600 dark:text-emerald-400' },
    { id: 3, icon: 'report', message: 'System Alert: High failure rate detected in "Advanced Malware" quiz.', time: '2 hours ago', bgColor: 'bg-amber-100 dark:bg-amber-900/30', iconColor: 'text-amber-600 dark:text-amber-400' },
    { id: 4, icon: 'person_add', message: 'Sarah Chen joined the platform.', time: '5 hours ago', bgColor: 'bg-primary/10', iconColor: 'text-primary' }
  ];

  const chartData = [
    { week: 'Week 1', value: 420, opacity: 'opacity-30' },
    { week: 'Week 2', value: 580, opacity: 'opacity-20' },
    { week: 'Week 3', value: 710, opacity: 'opacity-30' },
    { week: 'Week 4', value: 640, opacity: 'opacity-50' },
    { week: 'Week 5', value: 920, opacity: 'opacity-70' },
    { week: 'Week 6', value: 1120, opacity: 'opacity-full' },
    { week: 'Current', value: 1024, opacity: 'opacity-80' }
  ];

  const getProgressBarWidth = (value) => {
    return `${value}%`;
  };

  const getStatusBgColor = (status) => {
    switch(status) {
      case 'emerald': return 'bg-emerald-50 dark:bg-emerald-500/10';
      case 'primary': return 'bg-primary/10';
      case 'slate': return 'bg-slate-100 dark:bg-slate-800';
      case 'amber': return 'bg-amber-50 dark:bg-amber-500/10';
      default: return 'bg-slate-50';
    }
  };

  const getStatusTextColor = (status) => {
    switch(status) {
      case 'emerald': return 'text-emerald-600 dark:text-emerald-400';
      case 'primary': return 'text-primary';
      case 'slate': return 'text-slate-500 dark:text-slate-400';
      case 'amber': return 'text-amber-600 dark:text-amber-400';
      default: return 'text-slate-600';
    }
  };

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col fixed h-full z-50">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-primary p-1.5 rounded-lg">
            <span className="material-symbols-outlined text-white">shield</span>
          </div>
          <div>
            <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-none">CyberShield</h1>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Admin Management</p>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              activeTab === 'dashboard'
                ? 'bg-primary/10 text-primary font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm">Dashboard</span>
          </button>

          <div className="pt-4 pb-2">
            <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Content</p>
          </div>

          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">library_books</span>
            <span className="text-sm">Modules</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">quiz</span>
            <span className="text-sm">Quizzes</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">psychology</span>
            <span className="text-sm">Scenarios</span>
          </button>

          <div className="pt-4 pb-2">
            <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Users</p>
          </div>

          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">trending_up</span>
            <span className="text-sm">Progress</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">analytics</span>
            <span className="text-sm">Analytics</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm">User Management</span>
          </button>
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm">Settings</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 min-h-screen">
        {/* Top Header */}
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 sticky top-0 z-40">
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
              <input
                type="text"
                placeholder="Search analytics, users, or content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-11 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary transition-all placeholder:text-slate-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>

            <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800"></div>

            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Admin User</p>
                <p className="text-xs text-slate-500">Security Lead</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary/10 overflow-hidden">
                <img
                  alt="Admin Profile"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMhZ_XrzWmxMhO2U7r59sqHtFWhZhNYGC2dtVB7F85eU9M_N1gWLfereQAdRW9WqqpXKMGq-gHu6bA4lt9bBbMlf0yFuF_SFmlexfwKRZYb7y9WZOLgRFcA3bE-mhM3am9cXe05zDywqdsIe9s7kN98kUXmEZRCa8ZLzL_bVbYYHTOiIrSAk5x_tfx6mUBds3l23AYPOjfrCvHaxbh5JVYpVQDRAW1zvj3fl8TE5N-90iOEkB3lASvS1-2pLdkC17z4KyN2pjjcl8"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="p-8 space-y-8">
          {/* Page Header & Quick Actions */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard Overview</h2>
              <p className="text-slate-500">Welcome back. Here's what's happening today.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined text-lg">add_circle</span>
                Create Quiz
              </button>
              <button className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined text-lg">psychology</span>
                New Scenario
              </button>
              <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-lg">library_add</span>
                Add New Module
              </button>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg ${stat.bgColor} ${stat.iconColor} flex items-center justify-center`}>
                    <span className="material-symbols-outlined">{stat.icon}</span>
                  </div>
                  <span className={`text-xs font-bold ${stat.trendColor === 'emerald' ? 'text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10' : 'text-rose-500 bg-rose-50 dark:bg-rose-500/10'} px-2 py-1 rounded-full`}>
                    {stat.trend}
                  </span>
                </div>
                <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</h3>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* User Progress Table */}
            <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">User Progress</h3>
                <button className="text-sm font-semibold text-primary hover:underline">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 uppercase text-[10px] font-bold tracking-wider">
                    <tr>
                      <th className="px-6 py-4">Learner</th>
                      <th className="px-6 py-4">Active Module</th>
                      <th className="px-6 py-4">Progress</th>
                      <th className="px-6 py-4">Last Score</th>
                      <th className="px-6 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {userProgress.map((user) => (
                      <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full ${user.bgColor} flex items-center justify-center ${user.textColor} text-xs font-bold`}>
                              {user.initials}
                            </div>
                            <div className="text-sm font-medium text-slate-900 dark:text-white">{user.name}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{user.module}</td>
                        <td className="px-6 py-4">
                          <div className="w-24 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${user.statusColor === 'emerald' ? 'bg-emerald-500' : user.statusColor === 'primary' ? 'bg-primary' : 'bg-emerald-500'}`}
                              style={{ width: `${user.progress}%` }}
                            ></div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">{user.score}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusBgColor(user.statusColor)} ${getStatusTextColor(user.statusColor)}`}>
                            {user.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Activity Feed */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
              <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Recent Activity</h3>
              </div>
              <div className="p-6 flex-1 space-y-6 overflow-y-auto max-h-96">
                {activities.map((activity, idx) => (
                  <div key={activity.id} className="flex gap-4">
                    <div className="relative">
                      <div className={`w-10 h-10 rounded-full ${activity.bgColor} flex items-center justify-center ${activity.iconColor} z-10 relative`}>
                        <span className="material-symbols-outlined text-xl">{activity.icon}</span>
                      </div>
                      {idx < activities.length - 1 && (
                        <div className="absolute top-10 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-slate-200 dark:bg-slate-800 h-10"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {activity.message}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full py-4 text-sm font-semibold text-slate-500 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all border-t border-slate-200 dark:border-slate-800">
                See All Activity
              </button>
            </div>
          </div>

          {/* User Engagement Trends Chart */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">User Engagement Trends</h3>
                <p className="text-slate-500 text-sm">Active users over the last 30 days</p>
              </div>
              <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 py-1.5 pl-3 pr-8 focus:ring-1 focus:ring-primary">
                <option>Last 30 Days</option>
                <option>Last 6 Months</option>
                <option>Year to Date</option>
              </select>
            </div>

            <div className="w-full h-48 flex items-end justify-between gap-2 px-2">
              {chartData.map((data, idx) => (
                <div
                  key={idx}
                  className={`flex-1 rounded-t-sm relative group transition-opacity hover:opacity-100`}
                  style={{
                    height: `${(data.value / 1120) * 100}%`,
                    backgroundColor: `rgb(19, 109, 236 / ${0.3 + (idx * 0.1)})`,
                    opacity: 1
                  }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {data.week}: {data.value.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-4 px-2 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
              <span>Day 1</span>
              <span>Day 5</span>
              <span>Day 10</span>
              <span>Day 15</span>
              <span>Day 20</span>
              <span>Day 25</span>
              <span>Today</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
