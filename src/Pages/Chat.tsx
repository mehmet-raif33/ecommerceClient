import { useState } from 'react';
import closed from '../Assets/images/closed.png'
import opened from '../Assets/images/opened.png'
import {motion , AnimatePresence} from 'framer-motion'

const Chat = () => {

  const [isContactsVisible, setIsContactsVisible] = useState(true);

  return (

    <motion.div className="flex h-screen bg-gray-100 ">
      <AnimatePresence>
        
        {
          isContactsVisible ? (
            <motion.div 
            initial={{ width: '50px' }}
            animate={{ width: '50px' }}
            exit={{ width: '50px' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='w-10 p-2 pt-7 bg-sky-200'
            >
              <img src={closed} alt="Closed" onClick={() => setIsContactsVisible(!isContactsVisible)} className="toggle-image"/>
            </motion.div>
          ) : (
            <motion.div 
            initial={{ width: '50px' }}
            animate={{ width: '250px' }}
            exit={{ width: '50px' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={` bg-sky-200 text-slate-800`}
            >
                
                <div className='OurDiv  flex justify-between p-8 '>
                  <h2 className="text-xl font-bold mb-4">Contacts</h2> {/* Toggle Button for Contacts List */}
                  <button
                    className="p-2 w-10 relative bottom-1 left-2"
                    onClick={() => setIsContactsVisible(!isContactsVisible)}
                  >
                    <img src={opened} alt="Opened"className="toggle-image"/> 
                  </button>
                </div>
                
                <ul>
                  <li className="p-5 flex items-center">
                    <img src='https://via.placeholder.com/40' alt='User 1' className='w-10 h-10 rounded-full mr-3' />
                    <p>User 1</p>
                  </li>
                  <li className="p-5 border-b flex items-center">
                    <img src='https://via.placeholder.com/40' alt='User 1' className='w-10 h-10 rounded-full mr-3' />
                    <p>User 1</p>
                  </li>
                  <li className="p-5 border-b flex items-center">
                    <img src='https://via.placeholder.com/40' alt='User 1' className='w-10 h-10 rounded-full mr-3' />
                    <p>User 1</p>
                  </li>
                </ul>

            </motion.div>
          )
        }
    
      </AnimatePresence>

      <div className="flex-1 flex flex-col h-full">

        <div className="flex-1 p-4 overflow-y-auto">
          {/* Message from User 1 */}
          <div className="flex items-start mb-4">
            <img
              src="https://via.placeholder.com/40"
              alt="User 1"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <div className="bg-gray-200 p-4 rounded">
                <p className="font-semibold text-sm">User 1</p>
                <p>Hello!</p>
              </div>
              <span className="text-xs text-gray-500">10:00 AM</span>
            </div>
          </div>

          {/* Message from You */}
          <div className="flex items-end justify-end mb-4">
            <div>
              <div className="bg-blue-200 p-4 rounded">
                <p className="font-semibold">You</p>
                <p>Hi there!</p>
              </div>
              <span className="text-xs text-gray-500">10:01 AM</span>
            </div>
            <img
              src="https://via.placeholder.com/40"
              alt="You"
              className="w-10 h-10 rounded-full ml-3"
            />
          </div>

          {/* Add more messages as needed */}
        </div>

        <div className="p-4 border-t flex  sticky bottom-0 border-gray-300 bg-white">
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full p-2 border border-gray-300 rounded mr-5 outline-none"
          />
          <input type='submit' value='Send' className='py-3 px-5 rounded-md bg-sky-200 transition-all hover:scale-105' />
        </div>

      </div>

    </motion.div>
  )

}

export default Chat