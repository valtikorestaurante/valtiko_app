import * as React from "react";
import { useState } from "react";
  
const Contact = props => {
    const { contactContent } = props

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
        checkboxApproved: false, // New state for the checkbox approval

      })
    
      const [inputs, setInputs] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        subject: `A NEW client has requested information - VALTIKO`
      })

      const handleResponse = (status, msg) => {
        if (status === 200) {
          console.log(msg)
          setStatus({
            submitted: true,
            submitting: false,
            info: { error: false, msg: msg },
            checkboxApproved: false, // Reset the checkbox approval after successful submission

          })
          setInputs({
            name: '',
            lastname: '',
            email: '',
            phone: '',
            subject: 'A NEW client has requested information - VALTIKO'
          })
        } else {
          console.log("ERROR")
          console.log(msg)
          setStatus({
            info: { error: true, msg: msg },
            checkboxApproved: false, // Reset the checkbox approval after unsuccessful submission

          })
        }
      }
    
      const handleOnChange = e => {
        e.persist()
        setInputs(prev => ({
          ...prev,
          [e.target.id]: e.target.value
        }))
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null }
        })
      }

      const handleCheckboxChange = (e) => {
        const checkboxValue = e.target.checked;
        setStatus((prevStatus) => ({
          ...prevStatus,
          checkboxApproved: checkboxValue,
        }));
      };
    
      const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (!status.checkboxApproved) {
          // If the checkbox is not approved, do not proceed with submission
          return;
        }
    
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        const res = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        });
        const awaitedStatus = res.status;
        const text = await res.text();
        handleResponse(awaitedStatus, text);
      };

    return <div className="">
              <div className="">
                <form className="pt-6 pb-8 mb-4 ">

                  {/* Name Field */}
                  <div className="mb-1">
                    <label className="text-left text-[#e56608ff] block sm:text-2xl" htmlFor="name">
                      {contactContent.first_name_text}
                    </label>
                    <input onChange={handleOnChange} className="shadow appearance-none border border-[#e56608ff] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text"  placeholder={contactContent.name_placeholder}></input>
                  </div>

                  {/* Lastname Field */}
                  <div className="mb-1">
                    <label className="text-left text-[#e56608ff] block sm:text-2xl" htmlFor="lastname">
                      {contactContent.last_name_text}
                    </label>
                    <input onChange={handleOnChange} className="shadow appearance-none border border-[#e56608ff] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder={contactContent.lastname_placeholder}></input>
                  </div>

                  {/* Email Field */}
                  <div className="mb-1">
                    <label className="text-left text-[#e56608ff] block sm:text-2xl" htmlFor="email">
                      {contactContent.email_text}
                    </label>
                    <input onChange={handleOnChange} className="shadow appearance-none border border-[#e56608ff] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder={contactContent.email_placeholder}></input>
                  </div>

                  {/* Phone Field */}
                  <div className="mb-5">
                    <label className="text-left text-[#e56608ff] block sm:text-2xl" htmlFor="phone">
                      {contactContent.phone_text}
                    </label>
                    <input onChange={handleOnChange} className="shadow appearance-none border border-[#e56608ff] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder={contactContent.phone_placeholder}></input>
                  </div>

                  {/* Checkbox Field */}
                  <div className="mb-4 text-left hidden">
                    <label className="block text-black text-sm mb-2">
                      <div className="flex flex-row">
                        <div>
                          <input
                            type="checkbox"
                            checked={status.checkboxApproved}
                            onChange={handleCheckboxChange}
                            className="custom-checkbox"
                          />
                        </div>
                        <div className="text-[#e56608ff] ml-2 text-justify">
                          TEXTO PARA APROBAR
                        </div>
                      </div>
                    </label>
                  </div>

                  {/* Button Field */}
                  <div className="flex items-center justify-between">
                    <button
                      aria-label="Submit"
                      id="submitButton"
                      onClick={handleOnSubmit}
                      disabled={status.submitting || !status.checkboxApproved}
                      style={{
                        cursor: !status.checkboxApproved ? "not-allowed" : "pointer",
                      }}
                      className="bg-[#e56608ff] hover:bg-orange-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline text-xs md:text-sm"
                      type="button"
                    >
                      {contactContent.send_button_text}
                    </button>
                    <div className={` text-black  ${!status.submitted && "hidden"}`}>
                      <p>{contactContent.sent_message_text}</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
}

export default Contact;
