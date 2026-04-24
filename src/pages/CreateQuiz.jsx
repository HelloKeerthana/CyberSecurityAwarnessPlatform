import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateQuiz() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    quizTitle: '',
    module: '',
    passingScore: 80,
    timeLimit: 15,
    questions: [
      {
        id: 1,
        text: '',
        options: [
          { id: 'a', text: '', isCorrect: false },
          { id: 'b', text: '', isCorrect: true },
          { id: 'c', text: '', isCorrect: false },
          { id: 'd', text: '', isCorrect: false }
        ]
      }
    ]
  });

  const handleBasicChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'passingScore' || name === 'timeLimit' ? parseInt(value) : value
    }));
  };

  const handleQuestionChange = (questionId, text) => {
    setFormData(prev => ({
      ...prev,
      questions: prev.questions.map(q =>
        q.id === questionId ? { ...q, text } : q
      )
    }));
  };

  const handleOptionChange = (questionId, optionId, text) => {
    setFormData(prev => ({
      ...prev,
      questions: prev.questions.map(q =>
        q.id === questionId
          ? {
              ...q,
              options: q.options.map(opt =>
                opt.id === optionId ? { ...opt, text } : opt
              )
            }
          : q
      )
    }));
  };

  const handleCorrectAnswer = (questionId, optionId) => {
    setFormData(prev => ({
      ...prev,
      questions: prev.questions.map(q =>
        q.id === questionId
          ? {
              ...q,
              options: q.options.map(opt => ({
                ...opt,
                isCorrect: opt.id === optionId
              }))
            }
          : q
      )
    }));
  };

  const addQuestion = () => {
    const newQuestionId = Math.max(...formData.questions.map(q => q.id), 0) + 1;
    setFormData(prev => ({
      ...prev,
      questions: [
        ...prev.questions,
        {
          id: newQuestionId,
          text: '',
          options: [
            { id: 'a', text: '', isCorrect: false },
            { id: 'b', text: '', isCorrect: false },
            { id: 'c', text: '', isCorrect: false },
            { id: 'd', text: '', isCorrect: false }
          ]
        }
      ]
    }));
  };

  const deleteQuestion = (questionId) => {
    setFormData(prev => ({
      ...prev,
      questions: prev.questions.filter(q => q.id !== questionId)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Quiz created:', formData);
    navigate('/admin');
  };

  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="flex h-full min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-6 py-3 lg:px-10 sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-primary">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined">shield</span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">CyberShield</h2>
          </div>
          <label className="hidden md:flex flex-col min-w-64 h-10">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-slate-500 flex border-none bg-slate-100 dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg">
                <span className="material-symbols-outlined text-xl">search</span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 border-none bg-slate-100 dark:bg-slate-800 focus:ring-0 h-full placeholder:text-slate-500 px-4 rounded-r-lg text-sm"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
              />
            </div>
          </label>
        </div>
        <div className="flex flex-1 justify-end gap-4 items-center">
          <div className="flex gap-2">
            <button className="flex size-10 cursor-pointer items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="flex size-10 cursor-pointer items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Admin User</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider">Super Admin</p>
            </div>
            <div className="bg-slate-200 dark:bg-slate-700 rounded-full size-10 flex items-center justify-center overflow-hidden border-2 border-primary/20">
              <img alt="User avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTRHbP20neTnN53LDJR6SWtBxxYiOeBvg5F74deUsR60e-XKewdm3NHgKI562ErhkJPYgmChDUJBd_1Gt6L35lTE_rtI5O8AMKXyhwfnQbwvSo4mt_wRSEPd_0smZNWs_RenlLMwLGs_Sub85bfHHeSd1shl39VrDAyHzjghLbO1ayj73Y_MSi8Yip0hVlf6GZ-OiCC-wtXtPhhsdMEmzBIsSG3JvyeuVk9GTM7HPebsRDjINnUwqG0W9Cesq9f0xRG-owAMAbmAo" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden lg:flex w-64 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark p-4 gap-6">
          <div className="flex flex-col gap-1">
            <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Main Menu</p>
            <button onClick={() => navigate('/admin')} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-left">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm font-medium">Dashboard</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-left">
              <span className="material-symbols-outlined">menu_book</span>
              <span className="text-sm font-medium">Modules</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-bold cursor-pointer text-left">
              <span className="material-symbols-outlined">quiz</span>
              <span className="text-sm font-medium">Quizzes</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-left">
              <span className="material-symbols-outlined">group</span>
              <span className="text-sm font-medium">Users</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-left">
              <span className="material-symbols-outlined">analytics</span>
              <span className="text-sm font-medium">Reports</span>
            </button>
          </div>
          <div className="mt-auto p-4 bg-primary/5 rounded-xl border border-primary/10">
            <p className="text-xs font-bold text-primary mb-1">System Health</p>
            <div className="flex items-center gap-2">
              <div className="h-1.5 flex-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-4/5"></div>
              </div>
              <span className="text-[10px] font-bold text-slate-500">80%</span>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-6">
              <button onClick={() => navigate('/admin')} className="hover:text-primary transition-colors cursor-pointer">Admin Panel</button>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <button className="hover:text-primary transition-colors cursor-pointer">Quizzes</button>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-slate-900 dark:text-slate-100">Create New Quiz</span>
            </nav>

            <div className="flex flex-col gap-2 mb-8">
              <h1 className="text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">Create New Quiz</h1>
              <p className="text-slate-500 max-w-2xl">Configure your cybersecurity assessment questions and delivery settings for enrolled team members.</p>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 pb-20">
              {/* Basic Configuration Card */}
              <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <span className="material-symbols-outlined text-primary">tune</span>
                  <h2 className="text-lg font-bold">Quiz Configuration</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Quiz Title</label>
                    <input
                      type="text"
                      name="quizTitle"
                      value={formData.quizTitle}
                      onChange={handleBasicChange}
                      placeholder="e.g., Phishing Awareness Level 1"
                      className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-2 focus:ring-primary/20 px-4 py-2 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Associated Module</label>
                    <select
                      name="module"
                      value={formData.module}
                      onChange={handleBasicChange}
                      className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-2 focus:ring-primary/20 px-4 py-2 transition-all"
                    >
                      <option value="">Select a module</option>
                      <option value="social-eng">Social Engineering Basics</option>
                      <option value="network">Network Security Fundamentals</option>
                      <option value="password">Password Hygiene</option>
                      <option value="incident">Incident Response</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Passing Score (%)</label>
                      <div className="relative">
                        <input
                          type="number"
                          name="passingScore"
                          min="0"
                          max="100"
                          value={formData.passingScore}
                          onChange={handleBasicChange}
                          className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-2 focus:ring-primary/20 px-4 py-2 pr-8 transition-all"
                        />
                        <span className="absolute right-3 top-2.5 text-slate-400 text-sm">%</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Time Limit (Min)</label>
                      <input
                        type="number"
                        name="timeLimit"
                        min="1"
                        value={formData.timeLimit}
                        onChange={handleBasicChange}
                        className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-2 focus:ring-primary/20 px-4 py-2 transition-all"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Question Builder Section */}
              <section className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">format_list_bulleted</span>
                    <h2 className="text-lg font-bold">Questions</h2>
                  </div>
                  <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {formData.questions.length} Question{formData.questions.length !== 1 ? 's' : ''} Added
                  </span>
                </div>

                {/* Question Cards */}
                {formData.questions.map((question, index) => (
                  <div key={question.id} className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 lg:p-8 flex flex-col gap-6">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-500">
                          {index + 1}
                        </div>
                        <h3 className="font-bold text-slate-900 dark:text-slate-100">Multiple Choice Question</h3>
                      </div>
                      {formData.questions.length > 1 && (
                        <button
                          type="button"
                          onClick={() => deleteQuestion(question.id)}
                          className="text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                        >
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Question Text</label>
                      <textarea
                        value={question.text}
                        onChange={(e) => handleQuestionChange(question.id, e.target.value)}
                        placeholder="Enter the cybersecurity question here..."
                        rows="3"
                        className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-2 focus:ring-primary/20 px-4 py-2 resize-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {question.options.map((option, optIdx) => (
                        <div
                          key={option.id}
                          className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                            option.isCorrect
                              ? 'border-primary/30 bg-primary/5'
                              : 'border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30'
                          }`}
                        >
                          <input
                            type="radio"
                            name={`correct_answer_${question.id}`}
                            checked={option.isCorrect}
                            onChange={() => handleCorrectAnswer(question.id, option.id)}
                            className="text-primary focus:ring-primary border-slate-300 size-4 cursor-pointer"
                          />
                          <input
                            type="text"
                            value={option.text}
                            onChange={(e) => handleOptionChange(question.id, option.id, e.target.value)}
                            placeholder={`Option ${optionLabels[optIdx]}`}
                            className={`flex-1 bg-transparent border-none focus:ring-0 text-sm p-0 cursor-pointer ${
                              option.isCorrect ? 'font-medium text-slate-900 dark:text-slate-100' : ''
                            }`}
                          />
                          {option.isCorrect && (
                            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Add Button */}
                <button
                  type="button"
                  onClick={addQuestion}
                  className="flex items-center justify-center gap-2 py-4 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl text-slate-500 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined">add_circle</span>
                  <span className="font-bold">Add Another Question</span>
                </button>
              </section>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => navigate('/admin')}
                  className="px-6 py-2.5 text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-2.5 text-sm font-bold text-white bg-primary hover:bg-primary/90 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">save</span>
                  Save Quiz
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
