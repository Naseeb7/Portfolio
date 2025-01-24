import React, { useCallback, useState } from 'react'
import contactAnimation from "assets/Contact.json"
import sentAnimation from "assets/MessageSent.json"
import errorAnimation from "assets/Error.json"
import loadinganimation from "assets/loadinganimation.json"
import emailjs from '@emailjs/browser';
import { AtSign } from 'lucide-react'
import Lottie from 'lottie-react'
import { initialContactDetails } from 'utils/defaultState'

const baseUrl = process.env.REACT_APP_BASE_URL;

const Contact = () => {
  const [details, setDetails]= useState(initialContactDetails)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (Object.values(details).every(detail=>detail!== "")) {
      try {
        setLoading(true)
        const response = await fetch(`${baseUrl}/contact`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(details),
        });
        const data = await response.json();
        setLoading(false)
        if (data.success) {
          setDetails(initialContactDetails)
          setSuccess(true)
          setTimeout(() => {
            setSuccess(false)
          }, 2300);
        } else {
          console.log("Not sent")
          setError(true)
          setTimeout(() => {
            setError(false)
          }, 6000);
        }

        emailjs.send('service_9yzklfw', 'template_h1kfglw', {
          from_name: details.name,
          from_email: details.email,
          message: details.message
        }, '1-nzeb9n4032veMKK')
      } catch (error) {
        console.log(error)
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 6000);
        setLoading(false)
      }
    } else if (details.name === "") {
      document.getElementById("name").placeholder = "Please fill this!"
      document.getElementById("name").style.outline = "1px solid red"
      setTimeout(() => {
        document.getElementById("name").placeholder = "Pradosh Chand"
        document.getElementById("name").style.outline = "none"
      }, 5000);
    } else if (details.email === "") {
      document.getElementById("email").placeholder = "Please fill this!"
      document.getElementById("email").style.outline = "1px solid red"
      setTimeout(() => {
        document.getElementById("email").placeholder = "xyz@mail.com"
        document.getElementById("email").style.outline = "none"
      }, 5000);
    }
  }

  const setter = useCallback((e)=>{
    const {name, value} = e.target
    setDetails((prev)=>{
      return {
        ...prev,
        [name] : value
      }
    })
  },[details])

  return (
    <div id='contact' className='flex flex-col m-y-2 p-2 justify-center items-center scroll-mt-12'>
      <div className='flex justify-center items-center gap-2 text-2xl relative font-semibold text-blue-300 p-2'>
        <AtSign />
        Leave me a message
      </div>
      <div className='text-sm text-center text-gray-500'>
        if i can be of any service.
      </div>
      <div className='flex flex-col sm:flex-row justify-center items-center p-2 m-2'>
        <Lottie
          animationData={contactAnimation}
          className='flex w-1/2 sm:w-1/4'
        />
        <form onSubmit={handleSubmit} className='flex flex-col w-full sm:w-1/4 p-2 gap-1'>
          <label htmlFor='name' className='text-gray-400'>Name</label>
          <input value={details.name} type='text' id='name' name='name' placeholder='Pradosh chand' className='rounded-lg p-2 bg-gray-900 text-blue-400 placeholder:text-gray-700' onChange={setter} />

          <label htmlFor='email' className='text-gray-400'>E-mail</label>
          <input value={details.email} type='text' id='email' name='email' placeholder='xyz@mail.com' className='rounded-lg p-2 bg-gray-900 text-blue-400 placeholder:text-gray-700' onChange={setter} />

          <label htmlFor='message' className='text-gray-400'>Message</label>
          <textarea value={details.message} type='text' name='message' rows={6} placeholder='Want to hire you.' className='rounded-lg p-2 bg-gray-900 text-blue-400 resize-none placeholder:text-gray-700' onChange={setter} />

          <button type="submit" value="Submit" className='flex justify-center items-center relative bg-blue-900 text-gray-400 p-2 rounded-xl hover:text-blue-200 hover:bg-gray-700 hover:cursor-pointer my-2 h-12 duration-100 group/submit' >
            {((!loading && !success) && !error) && <span className='text-lg'>Send</span>}
        {success && (
          <Lottie
            animationData={sentAnimation}
            className='flex absolute w-10 -right-50'
          />
        )}
        {error && (
          <Lottie
            animationData={errorAnimation}
            className='flex absolute w-1/12 -right-50'
          />
        )}
        {loading && (
          <Lottie
            animationData={loadinganimation}
            className='flex absolute w-1/4 -right-50'
          />
        )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
