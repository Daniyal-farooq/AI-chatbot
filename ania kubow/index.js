const PORT = 5000
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())


app.post('/completion', async (req, res) => {
console.log("request from front end");
  const options = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo", // Add the model parameter here
      messages: [{ role: "user", content: req.query.asked }],
      // max_tokens: 100,
    }),
  };
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', options);
  
    const data = await response.json();
    // console.log(data);
    console.log(data.choices[0].message.content);
    res.send(data.choices[0].message.content);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});
app.post('/getter' , (req , res)=>{
    
})


app.listen(PORT, ()=> console.log(`Your server is running on PORT${PORT}`))