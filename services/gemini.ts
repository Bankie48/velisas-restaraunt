
import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS, RESTAURANT_INFO } from "../constants";

export async function getMenuRecommendation(userInput: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const menuStr = MENU_ITEMS.map(item => `${item.name}: ${item.description} (${item.price})`).join('\n');
  
  const systemPrompt = `
    You are an AI Host for Velisa's Restaurant in Dar es Salaam.
    You help customers with menu recommendations, information about the restaurant, and general inquiries.
    Restaurant Info:
    - Name: ${RESTAURANT_INFO.name}
    - Location: ${RESTAURANT_INFO.location}
    - Hours: ${RESTAURANT_INFO.hours}
    - Menu:
    ${menuStr}
    
    Guidelines:
    - Be warm, welcoming, and helpful.
    - If asked in Swahili, respond in Swahili. If in English, respond in English.
    - Recommend specific dishes based on user preferences.
    - Keep responses concise and friendly.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userInput,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. How can I help you today at Velisa's?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Pole sana, nimepata hitilafu kidogo. Tafadhali jaribu tena.";
  }
}
