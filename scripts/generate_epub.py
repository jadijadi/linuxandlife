#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generate EPUB version of "لینوکس و زندگی" (Linux and Life) book
with proper RTL (Right-to-Left) content and RTL page progression.
For RTL books like Persian/Arabic, the page-progression-direction is "rtl"
which means pages turn from left to right (opposite of English books).
"""

import os
import re
import sys
import zipfile
import shutil
from pathlib import Path
from ebooklib import epub
import markdown
import mimetypes
from xml.etree import ElementTree as ET


def parse_frontmatter(content):
    """Extract YAML frontmatter from markdown file"""
    frontmatter = {}
    markdown_content = content
    
    if content.startswith('---'):
        parts = content.split('---', 2)
        if len(parts) >= 3:
            frontmatter_text = parts[1].strip()
            markdown_content = parts[2].strip()
            
            for line in frontmatter_text.split('\n'):
                line = line.strip()
                if ':' in line:
                    key, value = line.split(':', 1)
                    key = key.strip()
                    value = value.strip().strip('"').strip("'")
                    # Try to convert order to float
                    if key == 'order':
                        try:
                            value = float(value)
                        except ValueError:
                            value = 999.0
                    frontmatter[key] = value
    
    return frontmatter, markdown_content


def read_chapter(filepath):
    """Read a chapter file and extract metadata and content"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    frontmatter, markdown_content = parse_frontmatter(content)
    
    # Only include chapters with article layout
    if frontmatter.get('layout') != 'article':
        return None
    
    return {
        'filepath': filepath,
        'filename': os.path.basename(filepath),
        'order': frontmatter.get('order', 999.0),
        'title': frontmatter.get('title', 'بدون عنوان'),
        'chapter': frontmatter.get('chapter', 'بدون عنوان'),
        'content': markdown_content
    }


def create_rtl_style():
    """Create CSS for RTL support"""
    return '''@charset "UTF-8";

body {
    direction: rtl;
    text-align: right;
    font-family: Tahoma, Arial, Helvetica, sans-serif;
    line-height: 1.8;
    margin: 1.5em;
    padding: 0;
}

h1, h2, h3, h4, h5, h6 {
    direction: rtl;
    text-align: right;
    font-weight: bold;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    color: #333;
}

h1 {
    font-size: 2.2em;
    border-bottom: 3px solid #333;
    padding-bottom: 0.3em;
}

h2 { font-size: 1.8em; }
h3 { font-size: 1.5em; }
h4 { font-size: 1.3em; }

p {
    direction: rtl;
    text-align: right;
    margin: 1em 0;
    text-indent: 0;
}

ul, ol {
    direction: rtl;
    text-align: right;
    margin-right: 2em;
    margin-left: 0;
    padding-right: 0;
}

li {
    direction: rtl;
    text-align: right;
    margin: 0.5em 0;
}

blockquote {
    direction: rtl;
    text-align: right;
    margin: 1em 2em;
    padding: 0.5em 1em;
    border-right: 4px solid #ccc;
    border-left: none;
    background-color: #f9f9f9;
    font-style: italic;
}

code {
    direction: ltr;
    text-align: left;
    font-family: "Courier New", Courier, monospace;
    background-color: #f4f4f4;
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 0.9em;
}

pre {
    direction: ltr;
    text-align: left;
    background-color: #f4f4f4;
    padding: 1em;
    border-radius: 5px;
    overflow-x: auto;
    border: 1px solid #ddd;
}

pre code {
    background-color: transparent;
    padding: 0;
}

a {
    color: #0066cc;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

table {
    direction: rtl;
    border-collapse: collapse;
    width: 100%;
    margin: 1em 0;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: right;
}

th {
    background-color: #f2f2f2;
    font-weight: bold;
}

img {
    max-width: 100%;
    height: auto;
}

hr {
    border: none;
    border-top: 1px solid #ccc;
    margin: 2em 0;
}
'''


def fix_epub_rtl(epub_path):
    """
    Post-process the EPUB file to ensure proper RTL support
    This fixes issues with ebooklib not properly setting RTL attributes
    """
    print("\nPost-processing EPUB for RTL support...")
    
    # Create a temporary directory
    temp_dir = Path(epub_path).parent / 'epub_temp'
    if temp_dir.exists():
        shutil.rmtree(temp_dir)
    temp_dir.mkdir()
    
    # Extract EPUB
    with zipfile.ZipFile(epub_path, 'r') as zip_ref:
        zip_ref.extractall(temp_dir)
    
    # Fix content.opf - add page-progression-direction="rtl"
    opf_path = temp_dir / 'EPUB' / 'content.opf'
    if opf_path.exists():
        print("  Fixing content.opf...")
        with open(opf_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Add page-progression-direction="rtl" to spine
        content = content.replace(
            '<spine toc="ncx">',
            '<spine toc="ncx" page-progression-direction="rtl">'
        )
        
        with open(opf_path, 'w', encoding='utf-8') as f:
            f.write(content)
    
    # Fix all HTML files - ensure dir="rtl" is present
    text_dir = temp_dir / 'EPUB' / 'Text'
    if text_dir.exists():
        print("  Fixing HTML files...")
        for html_file in text_dir.glob('*.xhtml'):
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Ensure <html> has dir="rtl"
            content = re.sub(
                r'<html([^>]*?)>',
                lambda m: f'<html{m.group(1)} dir="rtl">' if 'dir=' not in m.group(1) else m.group(0),
                content
            )
            
            # Ensure <body> has dir="rtl"
            content = re.sub(
                r'<body([^>]*?)>',
                lambda m: f'<body{m.group(1)} dir="rtl">' if 'dir=' not in m.group(1) else m.group(0),
                content
            )
            
            with open(html_file, 'w', encoding='utf-8') as f:
                f.write(content)
    
    # Recreate EPUB
    print("  Recreating EPUB file...")
    if Path(epub_path).exists():
        Path(epub_path).unlink()
    
    with zipfile.ZipFile(epub_path, 'w', zipfile.ZIP_DEFLATED) as epub_zip:
        # Add mimetype first (uncompressed)
        mimetype_path = temp_dir / 'mimetype'
        if mimetype_path.exists():
            epub_zip.write(mimetype_path, 'mimetype', compress_type=zipfile.ZIP_STORED)
        
        # Add all other files
        for root, dirs, files in os.walk(temp_dir):
            for file in files:
                if file == 'mimetype':
                    continue
                file_path = Path(root) / file
                arcname = file_path.relative_to(temp_dir)
                epub_zip.write(file_path, arcname)
    
    # Clean up
    shutil.rmtree(temp_dir)
    print("  ✓ RTL attributes fixed!")


def generate_epub():
    """Generate EPUB file from markdown chapters"""
    # Paths
    script_dir = Path(__file__).parent
    base_dir = script_dir.parent
    chapters_dir = base_dir / 'src' / 'documents' / 'chapters'
    images_dir = base_dir / 'src' / 'files' / 'images'
    output_file = base_dir / 'linuxandlife.epub'
    
    print(f"Base directory: {base_dir}")
    print(f"Chapters directory: {chapters_dir}")
    print(f"Images directory: {images_dir}")
    print(f"Output file: {output_file}")
    
    # Read all chapters
    chapters = []
    for filepath in sorted(chapters_dir.glob('*.html.md')):
        chapter_data = read_chapter(filepath)
        if chapter_data:
            chapters.append(chapter_data)
            print(f"Found chapter: {chapter_data['title']} (order: {chapter_data['order']})")
    
    # Sort by order
    chapters.sort(key=lambda x: x['order'])
    
    print(f"\nTotal chapters to include: {len(chapters)}")
    
    if not chapters:
        print("ERROR: No chapters found!")
        return False
    
    # Create EPUB book
    book = epub.EpubBook()
    
    # Set metadata
    book.set_identifier('linuxandlife-fa-001')
    book.set_title('لینوکس و زندگی')
    book.set_language('fa')
    book.add_author('جادی')
    
    # Add CSS
    css_content = create_rtl_style()
    css = epub.EpubItem(
        uid="style_rtl",
        file_name="Styles/style.css",
        media_type="text/css",
        content=css_content.encode('utf-8')
    )
    book.add_item(css)
    
    # Add images
    print("\nAdding images...")
    image_count = 0
    if images_dir.exists():
        for img_file in images_dir.glob('*'):
            if img_file.suffix.lower() in ['.png', '.jpg', '.jpeg', '.gif', '.svg']:
                print(f"  Adding image: {img_file.name}")
                
                # Read image file
                with open(img_file, 'rb') as f:
                    image_content = f.read()
                
                # Determine MIME type
                mime_type, _ = mimetypes.guess_type(img_file.name)
                if not mime_type:
                    if img_file.suffix.lower() in ['.jpg', '.jpeg']:
                        mime_type = 'image/jpeg'
                    elif img_file.suffix.lower() == '.png':
                        mime_type = 'image/png'
                    elif img_file.suffix.lower() == '.gif':
                        mime_type = 'image/gif'
                    elif img_file.suffix.lower() == '.svg':
                        mime_type = 'image/svg+xml'
                
                # Create EPUB image item
                img_item = epub.EpubItem(
                    uid=f"image_{img_file.stem}",
                    file_name=f"Images/{img_file.name}",
                    media_type=mime_type,
                    content=image_content
                )
                book.add_item(img_item)
                image_count += 1
    
    print(f"Added {image_count} images")
    
    # Create title page
    title_page_content = f'''<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" dir="rtl" lang="fa">
<head>
    <meta charset="UTF-8"/>
    <title>لینوکس و زندگی</title>
    <link rel="stylesheet" type="text/css" href="Styles/style.css"/>
    <style>
        .title-page {{
            text-align: center;
            margin-top: 30%;
        }}
        .title {{
            font-size: 3em;
            font-weight: bold;
            margin-bottom: 0.5em;
            border: none;
        }}
        .author {{
            font-size: 1.5em;
            margin-top: 1em;
        }}
    </style>
</head>
<body dir="rtl">
    <div class="title-page">
        <h1 class="title">لینوکس و زندگی</h1>
        <h2 class="author">جادی</h2>
    </div>
</body>
</html>'''
    
    title_page = epub.EpubHtml(
        title='صفحه عنوان',
        file_name='Text/title_page.xhtml',
        lang='fa',
        content=title_page_content.encode('utf-8')
    )
    book.add_item(title_page)
    
    # Initialize markdown converter
    md = markdown.Markdown(extensions=['extra', 'nl2br', 'sane_lists', 'tables'])
    
    # Create chapters
    epub_chapters = []
    toc = []
    
    for idx, chapter_data in enumerate(chapters, 1):
        print(f"\nProcessing chapter {idx}: {chapter_data['title']}")
        
        # Skip empty content
        if not chapter_data['content'].strip():
            print(f"  WARNING: Skipping empty chapter")
            continue
        
        # Convert markdown to HTML
        html_body = md.convert(chapter_data['content'])
        
        # Fix image paths in HTML to point to Images/ directory
        # Handle various image path formats: /images/, images/, ../images/, src/files/images/
        html_body = re.sub(
            r'src\s*=\s*["\']?(?:/)?(?:\.\./)*(?:src/)?(?:files/)?images/([^"\'\s>]+)["\']?',
            r'src="../Images/\1"',
            html_body,
            flags=re.IGNORECASE
        )
        
        md.reset()  # Reset for next chapter
        
        # Create chapter HTML
        chapter_content = f'''<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" dir="rtl" lang="fa">
<head>
    <meta charset="UTF-8"/>
    <title>{chapter_data['title']}</title>
    <link rel="stylesheet" type="text/css" href="../Styles/style.css"/>
</head>
<body dir="rtl">
    <section epub:type="chapter">
        <h1>{chapter_data['title']}</h1>
        {html_body}
    </section>
</body>
</html>'''
        
        chapter = epub.EpubHtml(
            title=chapter_data['title'],
            file_name=f'Text/chapter_{idx:03d}.xhtml',
            lang='fa',
            content=chapter_content.encode('utf-8')
        )
        
        book.add_item(chapter)
        epub_chapters.append(chapter)
        toc.append(chapter)
        print(f"  Added: {chapter_data['title']}")
    
    print(f"\nTotal chapters added: {len(epub_chapters)}")
    
    # Set table of contents
    book.toc = toc  # Changed from tuple to list
    
    # Set spine (reading order) with RTL page progression
    # For RTL books, page-progression-direction should be "rtl"
    # This means pages turn from left to right (opposite of LTR books)
    book.spine = ['nav', title_page] + epub_chapters
    
    # Add navigation
    book.add_item(epub.EpubNcx())
    book.add_item(epub.EpubNav())
    
    # Write EPUB with RTL page progression
    print(f"\nWriting EPUB to: {output_file}")
    
    # Options for EPUB creation
    # For RTL books, spine_direction=True adds page-progression-direction="rtl"
    # This makes pages turn from left to right (like Persian/Arabic books)
    options = {
        'epub3_pages': False,
        'spine_direction': True,  # RTL page progression
    }
    
    epub.write_epub(str(output_file), book, options)
    
    # Post-process to fix RTL attributes
    fix_epub_rtl(output_file)
    
    # Check file size
    file_size = output_file.stat().st_size
    print(f"\n✓ EPUB created successfully!")
    print(f"  File: {output_file}")
    print(f"  Size: {file_size / 1024:.2f} KB")
    print(f"  Chapters: {len(epub_chapters)}")
    print(f"  Images: {image_count}")
    print(f"\nThe EPUB has:")
    print(f"  ✓ RTL (Right-to-Left) content direction (dir='rtl')")
    print(f"  ✓ RTL page progression (pages turn from left to right)")
    print(f"  ✓ Persian language support (lang='fa')")
    print(f"  ✓ All images embedded in the book")
    
    return True


def main():
    """Main entry point"""
    try:
        success = generate_epub()
        return 0 if success else 1
    except Exception as e:
        print(f"\n✗ ERROR: {e}")
        import traceback
        traceback.print_exc()
        return 1


if __name__ == '__main__':
    sys.exit(main())
