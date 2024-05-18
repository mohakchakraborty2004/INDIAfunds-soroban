import { useEffect, useState } from 'react';
import { isAllowed, setAllowed, getUserInfo } from '@stellar/freighter-api';

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
          <span >
            Signed in as {publicKey}
          </span>
        ) : (
          <>
            {error ? (
              <div dangerouslySetInnerHTML={{ __html: error }} />
            ) : (
              <button onClick={handleConnect} disabled={loading}>
                Connect
              </button>
            )}
          </>
        )}
      </div>
  );
};

export default FreighterConnect;
