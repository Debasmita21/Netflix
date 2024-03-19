## In the project directory, you can run:

npm start

## Netflisx-gpt

--Create react app
--Configured Tailwind CSS
--Header
--Routing
--Login Page
--Sign In/ Sign Up form
--Form Validation
  -useRef hook
- used firebase as backend
-Deploying app to production
- User Authentication 
  -Create sign up user account
  -Implement Sign In user api
- Create Redux store with userSlice
- Add user details to Redux store using onAuthStateChanged api
-Implemented sign out
-Registered TMDB API and create an app and get an access token
-Got Data from TMDB 'now playing movies' list api
- Used custom hook to call 'Now playing movies' api
- Create Browse page
   - Create Main conatiner
     - Updated Redux store and added movie slice
     - Added background movie trailer from TMDB movie video api
       - Used custom hook to call Movie trailer API 
       - Used youtube's <iframe> for video
       - Added autoplay feature in background movie trailer
     - Added Movie title and description from TMDB nowPlaying movie api

# Features

-Login/Signup
  -Sign In/Sign Up form
  -Redirect to Browse Page

-Browse(After authentication)
   -Header
   -Routing
   -Main Movie
     -Tailer in background
     -Title & Description
     -Movie suggestions

-Netflix gpt
  -Search bar
  -Movie suggestions     

