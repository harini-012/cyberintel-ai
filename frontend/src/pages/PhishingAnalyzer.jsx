import { useState } from "react";
import api from "../services/api";

function PhishingAnalyzer() {

  const [email, setEmail] = useState("");

  const [result, setResult] = useState("");

  const analyzeEmail = async () => {

    const res = await api.post(
      "https://cyberintel-ai.onrender.com/phishing",
      {
        email
      }
    );

    setResult(
      res.data.analysis
    );
  };

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold">
        AI Phishing Detector
      </h1>

      <textarea
        rows="10"
        className="border w-full mt-6 p-4"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <button
        onClick={analyzeEmail}
        className="bg-blue-600 text-white px-6 py-3 mt-4 rounded"
      >
        Analyze Email
      </button>

      <pre className="mt-6 whitespace-pre-wrap">
        {result}
      </pre>

    </div>
  );
}

export default PhishingAnalyzer;
