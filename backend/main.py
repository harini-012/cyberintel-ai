from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
import os

from services.groq_service import analyze_vulnerabilities
from services.phishing_service import analyze_email
from services.report_service import generate_report
from services.nvd_service import (
    get_cves,
    search_software
)
app = FastAPI(
    title="Cyber Security Intelligence Agent"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():

    return {
        "message":
        "Cyber Security Intelligence Agent"
    }
@app.get("/software-search/{query}")
def software_search(query: str):

    return search_software(query)
@app.post("/analyze")
def analyze(data: dict):

    software = data["software"].strip()

    if len(software) < 3:
        return {
            "status": "invalid",
            "message": "Please enter a valid software name."
        }

    vulnerabilities = get_cves(software)

    if len(vulnerabilities) == 0:
        return {
            "status": "invalid",
            "message": f"No vulnerability intelligence found for '{software}'."
        }

    analysis = analyze_vulnerabilities(
        vulnerabilities
    )

    pdf_file = generate_report(
        software,
        analysis
    )

    return {
        "software": software,
        "vulnerabilities": vulnerabilities,
        "analysis": analysis,
        "pdf": pdf_file
    }

@app.post("/phishing")
def phishing(data: dict):

    result = analyze_email(
        data["email"]
    )

    return {
        "analysis": result
    }
@app.get("/reports")
def get_reports():

    folder = "reports/generated"

    return os.listdir(folder)

@app.get("/reports/{filename}")
def download_report(filename: str):

    return FileResponse(
        f"reports/generated/{filename}",
        media_type="application/pdf",
        filename=filename
    )
@app.get("/analytics")
def analytics():

    folder = "reports/generated"

    reports = os.listdir(folder)

    total_reports = len(reports)

    software_count = {}

    for report in reports:

        software = report.replace(".pdf", "")

        software_count[software] = (
            software_count.get(software, 0) + 1
        )

    recent_reports = sorted(
        reports,
        reverse=True
    )[:5]

    return {
        "total_reports": total_reports,
        "recent_reports": recent_reports,
        "software_stats": software_count
    }
@app.get("/threat-intelligence")
def threat_intelligence():

    folder = "reports/generated"

    reports = sorted(
        os.listdir(folder),
        reverse=True
    )

    return reports[:10]