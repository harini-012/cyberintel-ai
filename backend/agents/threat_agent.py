from crewai import Agent

def create_threat_agent(llm):

    return Agent(
        role="Cyber Threat Intelligence Analyst",
        goal="Analyze CVEs and identify cyber threats",
        backstory="""
        Senior cybersecurity threat researcher specializing
        in vulnerability analysis and attack intelligence.
        """,
        verbose=True,
        llm=llm
    )