import React, { useEffect, useState} from 'react'

function Contact(props) {
    console.log(props.test)
    const [status, setStatus] = useState('SUBMIT')
        
    const handleSubmit = async (e) => {
      e.preventDefault()
      setStatus('Sending...')
      const { name, email, message } = e.target.elements
      let details = JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      })
      let response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/jsoncharset=utf-8',
        },
        body: details,
      })
      setStatus('SUBMIT')
      let result = await response.json()
      alert(result.status)
    }
    return (
      <form onSubmit={handleSubmit}>
        <div className={'contactForm'}>
          <div className={'name'}>
            <label htmlFor='name'>NAME</label>
            <input type='text' id='name' required />
          </div>
          <div className={'email'}>
            <label htmlFor='email'>EMAIL</label>
            <input type='email' id='email' required />
          </div>
          <button type='submit'>{status}</button>
          <div className={'message'}>
            <label htmlFor='message'>MESSAGE</label>
            <textarea id='message' required />
          </div>
          <div className={'styleDivB'}></div>
        </div>
      </form>
    )

}

export default Contact