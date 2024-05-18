import { useEffect, useState } from 'react';
import { isAllowed, setAllowed, getUserInfo } from '@stellar/freighter-api';
import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';


const FreighterConnect = () => {
  const [publicKey, setPublicKey] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  

  useEffect(() => {
    const checkPermission = async () => {
      try {
        if (await isAllowed()) {
          const { publicKey } = await getUserInfo();
          setPublicKey(publicKey);

        } else {
          setLoading(false);
        }
      } catch (error) {
        setError('Freighter is locked. Sign in & refresh the page.');
        setLoading(false);
      }
    };

    checkPermission();
  }, []);

  const handleConnect = async () => {
    try {
      setLoading(true);
      await setAllowed();
      const { publicKey } = await getUserInfo();
      setPublicKey(publicKey);
      setLoading(false);
      
    } catch (error) {
      setError('Failed to connect. Please try again.');
      setLoading(false);
    }
  };

  return (
      <div>
        {publicKey ? (
<>
<div className='bg-black w-[100vw] p-1 flex flex-row-reverse items-center justify-between '>


<div>
<div class="mr-2 relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <span class="font-medium text-gray-600 dark:text-gray-300">{publicKey[0]}</span>
         </div>

<span className='text-white' >
            {publicKey.slice(0,7)}...
          </span>


</div>
        

       <p className='text-white text-xl pl-5 pt-5 font-bold'>
       INDIA<span className='text-green-400 font-medium'>funds</span> 
        </p>  

       
</div>
        
</>
          


        ) : (
          <>
            {error ? (
              <div dangerouslySetInnerHTML={{ __html: error }} />
            ) : (


              <div className='bg-black w-[100vw] p-2 pt-5 flex flex-row-reverse overflow-hidden '>
                <button onClick={handleConnect} disabled={loading} className='text-white mt-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                Connect
              </button>
              </div>


              
            )}
          </>
        )}
      </div>
  );
};

 export function PublicKey({publicKey}){
    return <>
      {publicKey}
    </>
}

export default FreighterConnect;

