export const getCurrentUser = () => {
    // read the user details from local storage
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };
  
  export const getToken = () => JSON.parse(window.localStorage.getItem('token'));

  export const getSlug = () => {
    const slug = localStorage.getItem('slug');
    return slug ? JSON.parse(slug) : slug;
  };