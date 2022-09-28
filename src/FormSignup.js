import React from 'react'

const FormSignup = () => {
  return (
    <div className='form-content-right'>
        <form className='form'>
            <h1>Registrate hoy con nosotros! Crea tu
                cuenta llenando la información del formulario.
            </h1>
            <div className='form-inputs'>
                <label className='form-label'>Username</label>
                 <input
                        className='form-input'
                        type='text'
                        name='username'
                        placeholder='Enter your username'
                />
            </div>
            <div className='form-inputs'>
            <label className='form-label'>Password</label>
            <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            />
            </div>

            
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            
          />

          
        </div>

        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
            
            </form>
    </div>
  );
};

export default FormSignup;