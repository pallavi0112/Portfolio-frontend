import React, { useState } from 'react';
import { api } from '../../api';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
   
  const validation = () =>{
    const { name: newName, email, message } = formData;
    if(!(newName.trim() !== '' && email.trim() !== '' && message.trim() !== '')){
      setIsButtonDisabled(true)
      toast.error("All fields are required.." ,
      {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        progress: undefined,
      }
      )
      return false ;
    }
    return true;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(validation()){
      try {
        setIsLoading(true);
        const response = await api.post('/sendmail', formData, {
          headers: { 'Content-Type': 'application/json' },
        });
        console.log(response)
        if (response.status === 200) {
          setIsLoading(false);
          setIsButtonDisabled(true);
          toast.success(response.data.message, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            progress: undefined,
          });
          setFormData({    
              name: '',
              email: '',
              message: '',         
          })
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setIsButtonDisabled(false);
        toast.error(error.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          progress: undefined,
        });
      }

    }
  };

  return (
    <div className={`contactform-container${isLoading ? ' active' : ''}`}>
      {isLoading && <div className='loader'></div>}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='name'
            required
          />
        </div>
        <div>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='email'
            required
          />
        </div>
        <div>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='message'
            required
          ></textarea>
        </div>
        <div>
          <button type='submit' className='portfolio-btn' disabled={isButtonDisabled}>
            {isLoading ? 'Sending...' : 'Hire Me'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
