// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    console.log("Der will Dark Theme")
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
    console.log("Er will nicht das Dark Theme")
  }
  
  // Whenever the user explicitly chooses light mode
  // localStorage.theme = 'light'
  
  // Whenever the user explicitly chooses dark mode
  // localStorage.theme = 'dark'
  
  // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem('theme')
  localStorage.theme = 'dark'