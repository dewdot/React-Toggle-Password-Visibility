import './css/style.css';
import eye from './images/eye.svg'
import eyeOff from './images/eye-off.svg'
import { useState } from 'react';
function App() {
  const [icon, setIcon] = useState(eye);
  const [inputType, setInputType] = useState('password');
  const togglePassword = () => {
    if(inputType === 'password') {
      setInputType('text')
      setIcon(eyeOff)
    } else {
      setInputType('password')
      setIcon(eye)
    }
  }
  return (
    <>
      <div className='container'>
        <div className='content'>
          <h2>Create your password</h2>
          <div className='form-item'>
            <input type={inputType} placeholder='enter your password' />
            <span className='password-icon' onClick={togglePassword}><img src={icon} alt="icon" /></span>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
