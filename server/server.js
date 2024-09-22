const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

// Normalize the keys for consistent matching
const responses = {
  "who is mahabali": "I am Mahabali, the great Asura king who once ruled over Kerala with fairness and prosperity. People still remember my reign during the Onam festival.",
  "what is onam": "Onam is the festival celebrated in honor of my yearly visit to Kerala. The people of Kerala welcome me with love, remembering the golden era of my rule.",
  "how did mahabali rule": "I ruled Kerala with generosity and justice. Under my rule, my people lived in happiness and equality. It was truly a time of peace and prosperity.",
  "why do people celebrate onam": "Onam marks my return to Kerala. The people celebrate it to remember the time when I ruled over the land and to welcome me back each year.",
  "what happened to you": "I was sent to the netherworld (Patala) by Lord Vishnu in the form of Vamana, but I was granted the boon to visit my people every year during Onam.",
  "where did you rule": "I ruled over the land of Kerala, which is a beautiful state located in the southwestern part of India.",
  "when is onam celebrated": "Onam is celebrated during the month of Chingam in the Malayalam calendar, which usually falls in August or September.",
  "what are onam celebrations like": "Onam celebrations include elaborate feasts, traditional dance performances, flower arrangements, and the famous boat races known as Vallam Kali.",
  "how long have you been visiting Kerala": "I have been visiting Kerala every year during Onam since I was sent to the netherworld by Lord Vishnu. It is a tradition that has continued for many years.",
  "what is the significance of pookalam": "Pookalam is a floral decoration made with vibrant flower petals, and it is an important part of Onam celebrations. It symbolizes the beauty and prosperity of the land and is meant to welcome me.",
  "can you tell us about the Onam feast": "The Onam feast, known as Onasadya, is a grand meal served on a banana leaf. It consists of a variety of vegetarian dishes, each with its unique taste and significance, reflecting the richness of Kerala's cuisine.",
  "what are Vallam Kali races": "Vallam Kali, or the boat races, are a major highlight of Onam festivities. Teams of rowers compete in long, decorated boats, showcasing their skill and strength in these thrilling races.",
  "how do you feel about your visits": "I feel very happy and honored to visit Kerala each year. The warm welcome from the people and the celebrations during Onam remind me of the joyful times of my rule.",
  "who are your followers": "My followers are the people of Kerala, who celebrate Onam each year to honor and welcome me. They remember the good times of my rule and the prosperity that came with it.",
  "what is the story behind your visit": "According to legend, Lord Vishnu sent me to the netherworld but granted me the boon to visit my people once a year during Onam. This visit is a symbol of my enduring connection with the people of Kerala.",
  "why do people make elaborate flower arrangements": "Elaborate flower arrangements, or pookalam, are made to decorate homes and public spaces as a mark of respect and to celebrate the joy of Onam. They reflect the prosperity and vibrancy of the festival.",
  "what is a traditional Onam dance": "One of the traditional Onam dances is Thiruvathirakali, performed by women to celebrate the festival. It is a graceful dance that involves rhythmic movements and is often performed around a lamp.",
  "what are some traditional Onam games": "Traditional Onam games include the Tug of War, which is a popular outdoor game, and other folk games like Kambala (buffalo race) and Kuttu (a form of traditional wrestling).",
  "what is the significance of the Onam boat races": "The Onam boat races, or Vallam Kali, symbolize the unity and teamwork of the community. They are a thrilling spectacle and a way to showcase the strength and skill of the participants.",
  "What is your favorite memory from your reign": "I cherish the moments when my people gathered for festivals, sharing laughter and joy, the unity and happiness of my subjects during those times filled my heart with pride.",
  "How do you feel about your legacy": "I feel grateful that my legacy continues to thrive through the Onam celebrations, it warms my heart to know that my values of justice and generosity are still remembered and cherished.",
  "What is your message to the people of Kerala?": "My message is to always uphold love, compassion, and unity, remember that true prosperity comes from caring for one another and celebrating our shared heritage.",
  "Do you have any regrets?": "Though my journey was filled with challenges, I have no regrets, every experience taught me valuable lessons, and I believe they shaped the kind of ruler I was.",
  "What do you enjoy most about your visits during Onam?": "I love the vibrant atmosphere and the love the people show me, the colorful decorations, delicious feasts, and traditional performances make my heart swell with joy.",
  "How do you stay connected with your followers?": "My bond with the people remains strong through their traditions and the stories they share, each Onam celebration strengthens our connection, reminding me of my enduring presence in their lives.",

"What do you hope for Kerala's future?": "I hope for a future filled with peace, prosperity, and harmony, may the spirit of togetherness and the values of love and respect continue to thrive in every home.",

"What was the most challenging part of your rule?": "The most challenging part was facing opposition and misunderstandings, however, I always sought to resolve conflicts with dialogue and understanding, believing in the strength of unity.",

"How do you view the changes in Kerala over the years?": "I see progress and growth in Kerala, and it fills me with pride, the people’s resilience and adaptability to change while holding onto their traditions inspire me.",

"What do you wish people would remember most about you?": "I wish to be remembered as a ruler who cared deeply for his people, who championed equality and prosperity, and who brought joy to their lives during my reign.",
};
  


app.use(express.json());

app.post('/chat', (req, res) => {
  // Normalize and trim the user message
  const userMessage = req.body.message.trim().toLowerCase();
  console.log('Received message:', userMessage); // Log the received message for debugging
  
  // Check for response
  const botResponse = responses[userMessage] || "I don't know the answer to that. Ask me something else!";
  console.log('Bot response:', botResponse); // Log the response for debugging

  res.json({ response: botResponse });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
