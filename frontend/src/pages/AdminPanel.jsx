import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  getAdminStudents,
  getAdminPerformance,
  getAdminAssignments,
  assignQuiz,
  deleteAssignment,
} from '../services/api';
import '../styles/AdminPanel.css';

const MODULES = [
  { slug: 'phishing', label: 'Phishing Awareness', icon: '🎣' },
  { slug: 'malware',  label: 'Malware Defense',    icon: '🦠' },
  { slug: 'password', label: 'Password Hygiene',   icon: '🔑' },
];

const MODULE_MAP = Object.fromEntries(MODULES.map((m) => [m.slug, m]));

export default function AdminPanel() {
  const [tab, setTab] = useState('students');

  const [students, setStudents]         = useState([]);
  const [performance, setPerformance]   = useState([]);
  const [assignments, setAssignments]   = useState([]);
  const [loading, setLoading]           = useState(true);

  // Assign form state
  const [selStudent, setSelStudent]     = useState('');
  const [selModule, setSelModule]       = useState('phishing');
  const [dueDate, setDueDate]           = useState('');
  const [note, setNote]                 = useState('');
  const [assigning, setAssigning]       = useState(false);

  useEffect(() => {
    Promise.all([
      getAdminStudents(),
      getAdminPerformance(),
      getAdminAssignments(),
    ])
      .then(([s, p, a]) => {
        setStudents(s.data);
        setPerformance(p.data);
        setAssignments(a.data);
      })
      .catch((err) => {
        const msg = err?.response?.data?.message || err?.message || 'Failed to load admin data.';
        toast.error(msg);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleAssign = async (e) => {
    e.preventDefault();
    if (!selStudent) return toast.error('Select a student first.');
    setAssigning(true);
    try {
      const { data } = await assignQuiz({
        studentId: selStudent,
        moduleSlug: selModule,
        dueDate: dueDate || undefined,
        note,
      });
      setAssignments((prev) => [data, ...prev]);
      toast.success(`Quiz assigned to ${data.assignedTo.name}.`);
      setSelStudent('');
      setDueDate('');
      setNote('');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Assignment failed.');
    } finally {
      setAssigning(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteAssignment(id);
      setAssignments((prev) => prev.filter((a) => a._id !== id));
      toast.success('Assignment removed.');
    } catch {
      toast.error('Could not remove assignment.');
    }
  };

  if (loading) return <div className="admin-page"><div className="loading">Loading admin data...</div></div>;

  const totalStudents  = students.length;
  const certified      = students.filter((s) => s.certified).length;
  const openAssign     = assignments.filter((a) => !a.completed).length;
  const avgOverall     = students.length
    ? Math.round(students.filter((s) => s.avgScore !== null).reduce((a, s) => a + (s.avgScore ?? 0), 0) / (students.filter((s) => s.avgScore !== null).length || 1))
    : 0;

  return (
    <div className="admin-page">
      <div className="admin-hero">
        <div>
          <h1>Admin Panel</h1>
          <p>Manage students, track performance, and assign quizzes.</p>
        </div>
        <div className="admin-role-badge">👑 Administrator</div>
      </div>

      {/* Overview cards */}
      <div className="admin-stats-row">
        <div className="admin-stat-card">
          <div className="ast-icon">👥</div>
          <div className="ast-num">{totalStudents}</div>
          <div className="ast-label">Total Students</div>
        </div>
        <div className="admin-stat-card">
          <div className="ast-icon">📝</div>
          <div className="ast-num">{performance.length}</div>
          <div className="ast-label">Quizzes Taken</div>
        </div>
        <div className="admin-stat-card">
          <div className="ast-icon">📋</div>
          <div className="ast-num">{openAssign}</div>
          <div className="ast-label">Open Assignments</div>
        </div>
        <div className="admin-stat-card">
          <div className="ast-icon">🎓</div>
          <div className="ast-num">{certified}</div>
          <div className="ast-label">Certified Students</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="admin-tabs">
        {[
          { key: 'students',    label: 'Students' },
          { key: 'performance', label: 'Performance' },
          { key: 'assign',      label: 'Assign Quiz' },
          { key: 'assignments', label: 'Assignments' },
        ].map((t) => (
          <button
            key={t.key}
            className={`admin-tab-btn ${tab === t.key ? 'active' : ''}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Students Tab ── */}
      {tab === 'students' && (
        <div className="admin-section">
          <h2 className="admin-section-title">All Students</h2>
          {students.length === 0 ? (
            <div className="admin-empty">No students registered yet.</div>
          ) : (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Modules Done</th>
                    <th>Quizzes Taken</th>
                    <th>Avg Score</th>
                    <th>Best per Module</th>
                    <th>Certified</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((s) => (
                    <tr key={s._id}>
                      <td>
                        <div className="student-name">{s.name}</div>
                        <div className="student-email">{s.email}</div>
                      </td>
                      <td>
                        <span className="admin-pill">{s.completedModules.length}/3</span>
                      </td>
                      <td>{s.quizzesTaken}</td>
                      <td>
                        {s.avgScore !== null ? (
                          <span className={s.avgScore >= 70 ? 'score-good' : 'score-low'}>
                            {s.avgScore}%
                          </span>
                        ) : '—'}
                      </td>
                      <td>
                        <div className="module-best-row">
                          {MODULES.map((m) => (
                            <span key={m.slug} className={`module-best-chip ${s.moduleBest[m.slug] != null ? (s.moduleBest[m.slug] >= 70 ? 'chip-pass' : 'chip-fail') : 'chip-none'}`}>
                              {m.icon} {s.moduleBest[m.slug] != null ? `${s.moduleBest[m.slug]}%` : '—'}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td>
                        {s.certified
                          ? <span className="badge-cert">✅ Yes</span>
                          : <span className="badge-no">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ── Performance Tab ── */}
      {tab === 'performance' && (
        <div className="admin-section">
          <h2 className="admin-section-title">All Quiz Results</h2>
          {performance.length === 0 ? (
            <div className="admin-empty">No quiz results yet.</div>
          ) : (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Module</th>
                    <th>Score</th>
                    <th>Result</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {performance.map((r) => (
                    <tr key={r._id}>
                      <td>
                        <div className="student-name">{r.user?.name || 'Unknown'}</div>
                        <div className="student-email">{r.user?.email}</div>
                      </td>
                      <td>
                        <span className="module-label-chip">
                          {MODULE_MAP[r.moduleSlug]?.icon} {r.moduleLabel}
                        </span>
                      </td>
                      <td>
                        <strong>{r.percentage}%</strong>
                        <span className="score-frac"> ({r.score}/{r.totalQuestions})</span>
                      </td>
                      <td>
                        <span className={r.percentage >= 70 ? 'tag-pass' : 'tag-fail'}>
                          {r.percentage >= 70 ? 'PASS' : 'FAIL'}
                        </span>
                      </td>
                      <td className="date-cell">
                        {new Date(r.completedAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ── Assign Quiz Tab ── */}
      {tab === 'assign' && (
        <div className="admin-section">
          <h2 className="admin-section-title">Assign a Quiz</h2>
          <div className="assign-layout">
            <form className="assign-form" onSubmit={handleAssign}>
              <div className="assign-field">
                <label>Select Student</label>
                <select value={selStudent} onChange={(e) => setSelStudent(e.target.value)} required>
                  <option value="">— Choose a student —</option>
                  {students.map((s) => (
                    <option key={s._id} value={s._id}>{s.name} ({s.email})</option>
                  ))}
                </select>
              </div>

              <div className="assign-field">
                <label>Quiz Module</label>
                <div className="module-choice-row">
                  {MODULES.map((m) => (
                    <button
                      type="button"
                      key={m.slug}
                      className={`module-choice-btn ${selModule === m.slug ? 'chosen' : ''}`}
                      onClick={() => setSelModule(m.slug)}
                    >
                      <span>{m.icon}</span>
                      <span>{m.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="assign-field">
                <label>Due Date <span className="optional">(optional)</span></label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="assign-field">
                <label>Note to Student <span className="optional">(optional)</span></label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="e.g. Focus on URL spoofing techniques."
                  rows={3}
                />
              </div>

              <button type="submit" className="btn-primary btn-large" disabled={assigning}>
                {assigning ? 'Assigning...' : 'Assign Quiz →'}
              </button>
            </form>

            <div className="assign-hint-card">
              <div className="hint-icon">💡</div>
              <h3>How Assignments Work</h3>
              <ul>
                <li>The student will see the assigned quiz highlighted on their dashboard.</li>
                <li>When they complete the quiz, the assignment is automatically marked done.</li>
                <li>You can remove an assignment at any time from the Assignments tab.</li>
                <li>A student can only have one active assignment per module at a time.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ── Assignments Tab ── */}
      {tab === 'assignments' && (
        <div className="admin-section">
          <h2 className="admin-section-title">All Assignments</h2>
          {assignments.length === 0 ? (
            <div className="admin-empty">No assignments created yet. Go to <button className="link-btn" onClick={() => setTab('assign')}>Assign Quiz</button> to create one.</div>
          ) : (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Module</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Note</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {assignments.map((a) => (
                    <tr key={a._id}>
                      <td>
                        <div className="student-name">{a.assignedTo?.name}</div>
                        <div className="student-email">{a.assignedTo?.email}</div>
                      </td>
                      <td>
                        <span className="module-label-chip">
                          {MODULE_MAP[a.moduleSlug]?.icon} {a.moduleLabel}
                        </span>
                      </td>
                      <td className="date-cell">
                        {a.dueDate ? new Date(a.dueDate).toLocaleDateString() : '—'}
                      </td>
                      <td>
                        {a.completed
                          ? <span className="badge-cert">✅ Done</span>
                          : <span className="badge-pending-a">⏳ Pending</span>}
                      </td>
                      <td className="note-cell">{a.note || '—'}</td>
                      <td>
                        <button
                          className="btn-remove"
                          onClick={() => handleDelete(a._id)}
                          title="Remove assignment"
                        >
                          ✕
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
