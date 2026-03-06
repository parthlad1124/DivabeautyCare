import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");
    // Here later, you can connect to backend API to save/send data
    setFormData({ name: '', email: '', message: '' });
  }

  return (
    <div className="contact-container" style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '8px', margin: '8px 0' }}
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '8px', margin: '8px 0' }}
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '8px', margin: '8px 0', minHeight: '100px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', background: '#4facfe', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact;
