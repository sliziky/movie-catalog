import React from 'react'

function useUser() {
  const [user, setUser] = React.useState<any | null>('');

  React.useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);
  return user;
}

export default useUser