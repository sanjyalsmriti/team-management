import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../store/usersSlice';
import { useToast } from '../context/ToastContext';
import '../styles/AddUserForm.css';

const AddUserForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (validateForm()) {
      const newUser = {
        id: Date.now(), // Temporary ID for added users
        tempId: Date.now(),
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: {
          name: formData.companyName.trim(),
        },
      };

      dispatch(addUser(newUser));
      success(`User "${newUser.name}" added successfully!`);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        companyName: '',
      });
      setErrors({});
      setIsSubmitted(false);
      
      // Optional: Navigate to users page after 1 second
      setTimeout(() => {
        navigate('/users');
      }, 1000);
    }
  };

  const isFormValid = formData.name.trim() && 
                      formData.email.trim() && 
                      validateEmail(formData.email) && 
                      formData.companyName.trim();

  return (
    <div className="add-user-form-container">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit} className="add-user-form">
        <div className="form-group">
          <label htmlFor="name">
            Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="companyName">
            Company Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={errors.companyName ? 'input-error' : ''}
          />
          {errors.companyName && (
            <span className="error-message">{errors.companyName}</span>
          )}
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={!isFormValid}
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;

