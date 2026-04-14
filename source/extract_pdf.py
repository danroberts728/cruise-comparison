import PyPDF2

def extract_text_from_pdf(pdf_path):
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ''
        for i, page in enumerate(reader.pages):
            page_text = page.extract_text()
            text += f"Page {i+1}:\n"
            text += page_text
            text += "\n" + "="*50 + "\n"
        return text

pdf_path = r'c:\Users\danro\repos\MedCruise\source\cruise-options.pdf'
extracted_text = extract_text_from_pdf(pdf_path)

# Write to file instead of printing
with open(r'c:\Users\danro\repos\MedCruise\source\pdf_output.txt', 'w', encoding='utf-8') as f:
    f.write(extracted_text)

print("PDF extraction complete. Saved to pdf_output.txt")