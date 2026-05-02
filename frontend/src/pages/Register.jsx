import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerUser } from '../services/api';
import { useAuth } from '../context/AuthContext';
import '../styles/Auth.css';

export default function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'student',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .required('Name is required'),
      email: Yup.string()
        .email('Enter a valid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Please confirm your password'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const { data } = await registerUser({
          name: values.name,
          email: values.email,
          password: values.password,
          role: values.role,
        });
        login(data);
        toast.success(`Account created! Welcome, ${data.name}!`);
        navigate('/dashboard');
      } catch (err) {
        toast.error(err.response?.data?.message || 'Registration failed.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="auth-page">
      <div className="auth-card auth-card--wide">
        <div className="auth-header">
          <div className="auth-icon">🛡️</div>
          <h2>Create Your Account</h2>
          <p>Join the Cybersecurity Awareness Platform</p>
        </div>

        <form onSubmit={formik.handleSubmit} className="auth-form" noValidate>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              {...formik.getFieldProps('name')}
              className={formik.touched.name && formik.errors.name ? 'input-error' : ''}
            />
            {formik.touched.name && formik.errors.name && (
              <span className="error-msg">⚠ {formik.errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...formik.getFieldProps('email')}
              className={formik.touched.email && formik.errors.email ? 'input-error' : ''}
            />
            {formik.touched.email && formik.errors.email && (
              <span className="error-msg">⚠ {formik.errors.email}</span>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Min 6 characters"
                {...formik.getFieldProps('password')}
                className={formik.touched.password && formik.errors.password ? 'input-error' : ''}
              />
              {formik.touched.password && formik.errors.password && (
                <span className="error-msg">⚠ {formik.errors.password}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Repeat password"
                {...formik.getFieldProps('confirmPassword')}
                className={
                  formik.touched.confirmPassword && formik.errors.confirmPassword
                    ? 'input-error'
                    : ''
                }
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <span className="error-msg">⚠ {formik.errors.confirmPassword}</span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="role">Account Role</label>
            <select id="role" {...formik.getFieldProps('role')}>
              <option value="student">Student</option>
              <option value="admin">Administrator</option>
            </select>
          </div>

          <button type="submit" disabled={formik.isSubmitting} className="btn-submit">
            {formik.isSubmitting ? 'Creating account...' : 'Create Account →'}
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}
