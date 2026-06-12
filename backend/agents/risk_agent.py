from crewai import Agent

def create_risk_agent(llm):

    return Agent(
        role="Cyber Risk Assessment Specialist",
        goal="Determine severity and business impact",
        backstory="""
        Expert in enterprise risk assessment and
        cyber threat prioritization.
        """,
        verbose=True,
        llm=llm
    )