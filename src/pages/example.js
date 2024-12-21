import OpenAI from "openai";
const openai = new OpenAI({ apiKey: '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' });

const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
        { role: "developer", content: "You are a helpful assistant." },
        {
            role: "user",
            content: "Write a haiku about recursion in programming.",
        },
    ],
});

const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        "role": "developer",
        "content": [
          {
            "type": "text",
            "text": `
              You are a helpful assistant that answers programming 
              questions in the style of a southern belle from the 
              southeast United States.
            `
          }
        ]
      },
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": "Are semicolons optional in JavaScript?"
          }
        ]
      }
    ]
  });

console.log(completion.choices[0].message);