import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured.",
      }
    });
    return;
  }

  console.log(req.query);
//   res.status(200).json({yo: 'YO'});
//   return;
  const topic = req.query.topic || '';
  if (topic.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid topic.",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
    //   model: "gpt-3.5-turbo",
      model: "text-davinci-003",
      prompt: generatePrompt(topic),
      temperature: 0.6,
      max_tokens: 96,
    });
    console.log(completion.data);
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(topic) {

    return `Create three questions with four possible answers in JSON format, where one answer must be correct. 
    [
        { 
            "topic": "Lost (TV Show)",
            "question": "What was the name of the fictional air plane manufacturer in the TV Show Lost?", 
            "answers": [
                {"answer": "Pacific Airways" },
                {"answer": "Oceanic Airlines", "correct": true },
                {"answer": "Atlantic Aviation" },
                {"answer": "Continental Airlines" }
            ]
        },
        {
            "topic": "Star Trek",
            "question": "What is the name of the android character played by Brent Spiner in Star Trek: The Next Generation?",
            "answers": [
                {"answer": "Data", "correct": true },
                {"answer": "Geordi" },
                {"answer": "Worf" },
                {"answer": "Picard" }
            ]
        },
        {
            "topic": "${topic}",`;
/*
  return `Create three questions with one correct answer and three false ones.

    Topic: Lost
    Question: What was the name of the fictional air plane manufacturer in the TV Show Lost?
    Answer 1: Pacific Airways
    Answer 2: Oceanic Airlines (correct)
    Answer 3: Atlantic Aviation
    Answer 4: Continental Airlines
        
    Topic: Star Trek
    Question: What is the name of the android character played by Brent Spiner in Star Trek: The Next Generation?
    Answer 1: Data (correct)
    Answer 2: Geordi
    Answer 3: Worf
    Answer 4: Picard
    
    Topic: ${topic}`;
    */
}

/*
          
    Topic: Zelda (Videogame Series),
    Question: In the video game 'The Legend of Zelda: Ocarina of Time', what is the name of the fairy companion that accompanies Link on his journey?
    Answer 1: Navi (correct)
    Answer 2: Tatl
    Answer 3: Midna
    Answer 4: Fi
*/