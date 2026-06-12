from groq import Groq
from config import GROQ_API_KEY

client = Groq(
    api_key=GROQ_API_KEY
)


def analyze_email(email_text):

    prompt = f"""
    Analyze this email for phishing indicators.

    Email:

    {email_text}

    Provide:

    Risk Score
    Indicators
    Verdict
    Recommendations
    """

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response.choices[0].message.content