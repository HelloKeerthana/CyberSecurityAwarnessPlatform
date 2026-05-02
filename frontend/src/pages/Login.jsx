import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../services/api';
import { useAuth } from '../context/AuthContext';
import '../styles/Auth.css';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Enter a valid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const { data } = await loginUser(values);
        login(data);
        toast.success(`Welcome back, ${data.name}!`);
        navigate(from, { replace: true });
      } catch (err) {
        toast.error(err.response?.data?.message || 'Login failed. Please try again.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-icon">🔐</div>
          <h2>Welcome Back</h2>
          <p>Login to continue your cybersecurity training</p>
        </div>

        <form onSubmit={formik.handleSubmit} className="auth-form" noValidate>
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

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...formik.getFieldProps('password')}
              className={formik.touched.password && formik.errors.password ? 'input-error' : ''}
            />
            {formik.touched.password && formik.errors.password && (
              <span className="error-msg">⚠ {formik.errors.password}</span>
            )}
          </div>

          <button type="submit" disabled={formik.isSubmitting} className="btn-submit">
            {formik.isSubmitting ? (
              <span className="btn-loading">Logging in...</span>
            ) : (
              'Login →'
            )}
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account?{' '}
          <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}
