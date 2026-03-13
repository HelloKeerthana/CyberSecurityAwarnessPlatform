import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddModule() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    moduleTitle: '',
    category: '',
    difficulty: 'easy',
    description: '',
    content: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDifficultyChange = (level) => {
    setFormData(prev => ({
      ...prev,
      difficulty: level
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Module created:', formData);
    navigate('/admin');
  };

  const helpItems = [
    {
      icon: 'info',
      title: 'Guidelines',
      description: 'Keep modules concise. Maximum recommended duration: 15 minutes.',
      bgColor: 'bg-primary/5 border-primary/10',
      iconColor: 'text-primary'
    },
    {
      icon: 'visibility',
      title: 'Preview Mode',
      description: 'Save as draft to see how it looks to the end users.',
      bgColor: 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700',
      iconColor: 'text-slate-500'
    },
    {
      icon: 'assignment_turned_in',
      title: 'Quizzes',
      description: 'You can add assessment quizzes after saving the module content.',
      bgColor: 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700',
      iconColor: 'text-slate-500'
    }
  ];

  return (
    <div className="flex h-full grow flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-6 lg:px-10 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-primary">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined">shield</span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">CyberShield Admin</h2>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => navigate('/admin')} className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors cursor-pointer">Dashboard</button>
            <button className="text-primary text-sm font-semibold border-b-2 border-primary py-1 cursor-pointer">Modules</button>
            <button className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors cursor-pointer">Users</button>
            <button className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors cursor-pointer">Reports</button>
          </nav>
        </div>
        <div className="flex flex-1 justify-end gap-4 items-center">
          <label className="hidden sm:flex flex-col min-w-40 h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-100 dark:bg-slate-800">
              <div className="text-slate-500 flex items-center justify-center pl-3">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input className="form-input w-full border-none bg-transparent focus:ring-0 text-sm placeholder:text-slate-500" placeholder="Search modules..." type="text" />
            </div>
          </label>
          <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full relative transition-colors">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
          </button>
          <div className="bg-primary/10 border-2 border-primary/20 aspect-square bg-cover rounded-full size-10 flex items-center justify-center overflow-hidden">
            <span className="material-symbols-outlined text-primary">person</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-5xl px-6 py-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-6">
            <button onClick={() => navigate('/admin')} className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary cursor-pointer transition-colors">Admin Panel</button>
            <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
            <button className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary cursor-pointer transition-colors">Modules</button>
            <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
            <span className="text-primary text-sm font-semibold">Add New Module</span>
          </div>

          {/* Page Header */}
          <div className="flex flex-col gap-2 mb-10">
            <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-extrabold tracking-tight">Create Training Module</h1>
            <p className="text-slate-500 dark:text-slate-400 text-base">Configure security parameters and educational content for the new training module.</p>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-8 bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
            {/* General Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                {/* Module Title */}
                <label className="flex flex-col gap-2">
                  <span className="text-slate-900 dark:text-slate-100 text-sm font-bold uppercase tracking-wider">Module Title</span>
                  <input
                    type="text"
                    name="moduleTitle"
                    value={formData.moduleTitle}
                    onChange={handleInputChange}
                    placeholder="e.g., Advanced Phishing Detection 101"
                    className="flex w-full rounded-lg text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-12 px-4 placeholder:text-slate-400 text-base transition-all"
                  />
                </label>

                {/* Category & Difficulty */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2 text-slate-900 dark:text-slate-100">
                    <span className="text-sm font-bold uppercase tracking-wider">Category</span>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="flex w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-12 px-4 text-base focus:ring-2 focus:ring-primary transition-all"
                    >
                      <option value="">Select Category</option>
                      <option value="phishing">Phishing</option>
                      <option value="malware">Malware Defense</option>
                      <option value="social-eng">Social Engineering</option>
                      <option value="network">Network Security</option>
                      <option value="password">Password Policy</option>
                    </select>
                  </label>

                  <label className="flex flex-col gap-2 text-slate-900 dark:text-slate-100">
                    <span className="text-sm font-bold uppercase tracking-wider">Difficulty Level</span>
                    <div className="flex items-center gap-2 h-12">
                      {['easy', 'medium', 'hard'].map((level) => (
                        <button
                          key={level}
                          type="button"
                          onClick={() => handleDifficultyChange(level)}
                          className={`flex-1 h-full rounded-lg border-2 font-bold text-xs transition-colors ${
                            formData.difficulty === level
                              ? level === 'easy'
                                ? 'border-green-500 text-green-500 bg-green-500/10'
                                : level === 'medium'
                                ? 'border-yellow-500 text-yellow-500 bg-yellow-500/10'
                                : 'border-red-500 text-red-500 bg-red-500/10'
                              : 'border-slate-200 dark:border-slate-700 text-slate-500 hover:border-primary hover:text-primary'
                          }`}
                        >
                          {level.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </label>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-6">
                <label className="flex flex-col gap-2">
                  <span className="text-slate-900 dark:text-slate-100 text-sm font-bold uppercase tracking-wider">Description</span>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Provide a brief overview of what the user will learn in this module..."
                    className="flex w-full rounded-lg text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-32 px-4 py-3 placeholder:text-slate-400 text-base resize-none transition-all"
                  />
                </label>
              </div>
            </div>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* Content Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold">Module Content</h3>
                <div className="flex gap-2">
                  <button type="button" className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-[18px]">attachment</span>
                    Attach Media
                  </button>
                  <button type="button" className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-[18px]">code</span>
                    Add Interactive
                  </button>
                </div>
              </div>

              {/* Rich Text Editor Toolbar */}
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-4 py-2 flex flex-wrap gap-4 items-center">
                  <div className="flex gap-1">
                    <button type="button" className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-400 transition-colors">
                      <span className="material-symbols-outlined">format_bold</span>
                    </button>
                    <button type="button" className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-400 transition-colors">
                      <span className="material-symbols-outlined">format_italic</span>
                    </button>
                    <button type="button" className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-400 transition-colors">
                      <span className="material-symbols-outlined">format_underlined</span>
                    </button>
                  </div>
                  <div className="w-px h-6 bg-slate-300 dark:bg-slate-600"></div>
                  <div className="flex gap-1">
                    <button type="button" className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-400 transition-colors">
                      <span className="material-symbols-outlined">format_list_bulleted</span>
                    </button>
                    <button type="button" className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-400 transition-colors">
                      <span className="material-symbols-outlined">format_list_numbered</span>
                    </button>
                  </div>
                  <div className="w-px h-6 bg-slate-300 dark:bg-slate-600"></div>
                  <div className="flex gap-1">
                    <button type="button" className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-400 transition-colors">
                      <span className="material-symbols-outlined">image</span>
                    </button>
                    <button type="button" className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-400 transition-colors">
                      <span className="material-symbols-outlined">link</span>
                    </button>
                    <button type="button" className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-400 transition-colors">
                      <span className="material-symbols-outlined">video_library</span>
                    </button>
                  </div>
                </div>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  placeholder="Start writing the module educational content here..."
                  className="w-full border-none focus:ring-0 min-h-[400px] p-6 text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 placeholder:text-slate-400 resize-none transition-all"
                />
              </div>

              {/* Upload Box */}
              <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-10 flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-800/30 group hover:border-primary transition-colors cursor-pointer">
                <div className="size-14 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all mb-4">
                  <span className="material-symbols-outlined text-3xl">cloud_upload</span>
                </div>
                <p className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">Click to upload or drag and drop</p>
                <p className="text-xs text-slate-500">Support for PDF, MP4, or SCORM packages (Max. 50MB)</p>
                <input className="hidden" type="file" />
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-800 mt-10">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-500">check_circle</span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">All changes auto-saved to drafts</span>
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => navigate('/admin')}
                  className="px-6 py-3 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 rounded-lg bg-primary text-white font-bold text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all cursor-pointer"
                >
                  Save Module
                </button>
              </div>
            </div>
          </form>

          {/* Help Sidebar */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {helpItems.map((item) => (
              <div key={item.title} className={`p-4 rounded-xl border flex items-start gap-3 ${item.bgColor}`}>
                <span className={`material-symbols-outlined ${item.iconColor}`}>{item.icon}</span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 py-6 text-center">
        <p className="text-slate-400 text-xs">© 2024 CyberShield Admin Panel. All systems operational.</p>
      </footer>
    </div>
  );
}
