from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph
)

from reportlab.lib.styles import getSampleStyleSheet


def generate_pdf(text, filename):

    pdf = SimpleDocTemplate(filename)

    styles = getSampleStyleSheet()

    content = [
        Paragraph(
            text,
            styles["BodyText"]
        )
    ]

    pdf.build(content)