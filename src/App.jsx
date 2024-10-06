import { useEffect, useState } from 'react';
import Navbar from './components/navbar';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [storedData, setStoredData] = useState([]); // State to store data from localStorage

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = { url, username, password };

    // Retrieve existing data from localStorage
    const existingData = JSON.parse(localStorage.getItem('formData')) || [];
    const updatedData = [...existingData, formData];

    // Store updated data in localStorage
    localStorage.setItem('formData', JSON.stringify(updatedData));

    // Update state with the new data
    setStoredData(updatedData);

    // Reset the form fields
    setUsername('');
    setPassword('');
    setUrl('');
  };

  const handleDelete = (indexToDelete) => {
    const updatedData = storedData.filter((_, index) => index !== indexToDelete);
    setStoredData(updatedData);
    localStorage.setItem('formData', JSON.stringify(updatedData));
  }

  useEffect(() => {
    // Fetch data from localStorage on component mount
    const data = JSON.parse(localStorage.getItem('formData')) || [];
    setStoredData(data);
  }, []);

  return (
    <>
      <Navbar />
      <div className='w-full max-w-md px-4 flex flex-col gap-6 my-8 justify-center items-center mx-auto'>

        {/* Title */}
        <div className='tracking-wide text-2xl md:text-3xl text-green-600 text-center mb-4'>
          &lt;Pass<span className='text-red-600'>OP/&gt;</span>
        </div>

        {/* URL Input */}
        <div className='w-full'>
          <input
            placeholder='Enter URL'
            className='w-full outline-none border border-green-500 rounded-full px-4 py-2 mt-4 text-sm md:text-base focus:border-green-600 transition-all'
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            aria-label="Enter URL"
          />
        </div>

        {/* Username and Password Inputs */}
        <div className='w-full flex flex-col sm:flex-row justify-center gap-4'>
          <input
            placeholder='Enter Username'
            className='outline-none border border-green-500 rounded-full px-4 py-2 text-sm md:text-base focus:border-green-600 transition-all w-full'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-label="Enter Username"
          />
          <input
            placeholder='Enter Password'
            className='outline-none border border-green-500 rounded-full px-4 py-2 text-sm md:text-base focus:border-green-600 transition-all w-full'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Enter Password"
          />
        </div>

        {/* Submit Button */}
        <button onClick={handleSubmit} className='w-full sm:w-auto border size-fit px-6 py-2 rounded-full bg-green-500 text-white font-bold hover:bg-green-600 hover:border-green-800 transition-all flex justify-center items-center gap-2'>
          <lord-icon
            src="https://cdn.lordicon.com/fjvfsqea.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#ffffff"
            style={{ width: '24px', height: '24px' }}
          />
          Submit
        </button>
        {/* Table to display stored data */}
        <div className='ml-4 mr-4  mt-8  md:w-[720px] lg:w-[1024px] '>
          {storedData.length > 0 ? (
            <table className="table-auto mb-5 w-full border-collapse border border-green-600">
              <thead>
                <tr>
                  <th className="border border-green-600 lg:px-4 px-3 py-2">URL</th>
                  <th className="border border-green-600 lg:px-4 px-3 py-2">Username</th>
                  <th className="border border-green-600 lg:px-4 px-3 py-2">Password</th>
                </tr>
              </thead>
              <tbody>
                {storedData.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-green-600 lg:px-4  px-3 py-2">{item.url}</td>
                    <td className="border border-green-600 lg:px-4 px-3 py-2">{item.username}</td>
                    <td className="border border-green-600 lg:px-4  px-3 py-2">
                      <div className='flex justify-center items-center'>
                        <div>
                          {item.password}
                        </div>
                        <button
                          onClick={() => handleDelete(index)}
                        >
                          <div className='flex justify-center items-center'>
                            <lord-icon
                              src="https://cdn.lordicon.com/xekbkxul.json"
                              trigger="hover"
                              style={{ width: '24px', height: '24px' }}
                            >
                            </lord-icon>
                          </div>
                        </button>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-red-600">No data available yet.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
