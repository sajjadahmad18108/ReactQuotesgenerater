import { useState } from 'react'

import './App.css'

function App() {
  const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more. - Oprah Winfrey",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
    "When you reach the end of your rope, tie a knot in it and hang on. - Franklin D. Roosevelt",
    "Always remember that you are absolutely unique. Just like everyone else. - Margaret Mead",
    "Don't judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn. - Benjamin Franklin",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "Whoever is happy will make others happy too. - Anne Frank",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "You will face many defeats in life, but never let yourself be defeated. - Maya Angelou",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Never let the fear of striking out keep you from playing the game. - Babe Ruth",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Get busy living or get busy dying. - Stephen King",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
    "If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein",
    "Never let the fear of striking out keep you from playing the game. - Babe Ruth",
    "Money and success don't change people; they merely amplify what is already there. - Will Smith",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. - Steve Jobs",
    "Not how long, but how well you have lived is the main thing. - Seneca",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "The whole secret of a successful life is to find out what is one's destiny to do, and then do it. - Henry Ford",
    "In order to write about life first you must live it. - Ernest Hemingway",
    "The big lesson in life, baby, is never be scared of anyone or anything. - Frank Sinatra",
    "Sing like no one's listening, love like you've never been hurt, dance like nobody's watching, and live like it's heaven on earth. - (Attributed to various sources)",
    "Curiosity about life in all of its aspects, I think, is still the secret of great creative people. - Leo Burnett",
    "Life is not a problem to be solved, but a reality to be experienced. - Soren Kierkegaard",
    "The unexamined life is not worth living. - Socrates",
    "Turn your wounds into wisdom. - Oprah Winfrey",
    "The way I see it, if you want the rainbow, you gotta put up with the rain. - Dolly Parton",
    "Do all the good you can, for all the people you can, in all the ways you can, as long as you can. - Hillary Clinton",
    "Don't settle for what life gives you; make life better and build something. - Ashton Kutcher",
    "Everything negative – pressure, challenges – is all an opportunity for me to rise. - Kobe Bryant",
    "I like criticism. It makes you strong. - LeBron James"
  ];


  const [quote,setQuote] = useState(quotes[0])

  let styles ={
    backgroundColor: "#282c34",
    color:"white",
    borderRadius: 20,
    padding: 30,
  }

let buttonStyle = {
  backgroundColor: "#61dafb",
  color: "white",
  border:  'none',
  padding: ' 10 20'
}


  let handleQuotes=()=>{
    let randomIndex = Math.floor(Math.random() * quotes.length)
    console.log(randomIndex)

    setQuote(quotes[randomIndex])


  }

  


  return (
  
    <div style={styles} >
     <h3>Random Quote Generator</h3>
     <p > {quote} </p>

     <button style={buttonStyle} onClick={handleQuotes}> Get new Quotes </button>
     </div>
    

  )
}

export default App
