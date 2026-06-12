from groq import Groq
from config import GROQ_API_KEY

client = Groq(
    api_key=GROQ_API_KEY
)


def analyze_vulnerabilities(vulnerabilities):

    prompt = f"""
    You are a cybersecurity expert.

    Analyze the following vulnerabilities:

    {vulnerabilities}

    Provide:

    1. Threat Summary
    2. Severity Analysis
    3. Possible Attack Methods
    4. Business Impact
    5. Mitigation Recommendations

    Format professionally.
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