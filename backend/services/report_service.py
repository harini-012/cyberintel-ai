from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer
)

from reportlab.lib.styles import getSampleStyleSheet

import os


def generate_report(
        software_name,
        analysis):

    os.makedirs(
        "reports/generated",
        exist_ok=True
    )

    filename = (
        f"reports/generated/"
        f"{software_name}.pdf"
    )

    doc = SimpleDocTemplate(filename)

    styles = getSampleStyleSheet()

    content = [

        Paragraph(
            "Cyber Security Intelligence Report",
            styles["Title"]
        ),

        Spacer(1, 20),

        Paragraph(
            f"Software: {software_name}",
            styles["Heading2"]
        ),

        Spacer(1, 20),

        Paragraph(
            analysis,
            styles["BodyText"]
        )
    ]

    doc.build(content)

    return f"{software_name}.pdf"