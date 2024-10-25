export const getBookFromLocalStorge = () => {
    const books = localStorage.getItem('books');
    return books ? JSON.parse(books) : [];
  };
  


  export const getThemeFromLocalStorge = ()=>{
    const theme = localStorage.getItem('theme');
    return theme || 'dark';
}