from crewai import Agent

def create_report_agent(llm):

    return Agent(
        role="Cyber Security Consultant",
        goal="Generate professional security reports",
        backstory="""
        Experienced security consultant responsible
        for delivering actionable recommendations.
        """,
        verbose=True,
        llm=llm
    )