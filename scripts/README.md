# EPUB Generation Script

این اسکریپت برای تولید نسخه EPUB کتاب "لینوکس و زندگی" طراحی شده است.

## ویژگی‌های EPUB تولید شده

- **جهت محتوا**: راست به چپ (RTL) - مناسب برای متن فارسی
- **جهت صفحه‌گردانی**: چپ به راست (صفحات از چپ به راست ورق می‌خورند)
- **قالب‌بندی زیبا**: با CSS مخصوص فارسی
- **مرتب‌سازی خودکار فصل‌ها**: بر اساس شماره order در فایل‌های markdown

## نصب وابستگی‌ها

قبل از اجرای اسکریپت، باید کتابخانه‌های مورد نیاز را نصب کنید:

```bash
pip install -r requirements.txt
```

یا:

```bash
pip install ebooklib Markdown
```

## نحوه استفاده

### روش اول: اجرا از پوشه scripts

```bash
cd scripts
python generate_epub.py
```

فایل EPUB در پوشه ریشه پروژه با نام `linuxandlife.epub` ایجاد می‌شود.

### روش دوم: مشخص کردن مسیر پروژه

```bash
python generate_epub.py /path/to/linuxandlife
```

### روش سوم: مشخص کردن مسیر خروجی

```bash
python generate_epub.py /path/to/linuxandlife /path/to/output.epub
```

## ساختار فایل‌های ورودی

اسکریپت فایل‌های markdown را از پوشه `src/documents/chapters/` خوانده و فصل‌هایی که دارای frontmatter زیر باشند را پردازش می‌کند:

```yaml
---
layout: article
chapter: "نام فصل"
order: شماره ترتیب
title: "عنوان مقاله"
---
```

فقط فایل‌هایی که `layout: article` دارند در EPUB قرار می‌گیرند.

## خروجی

فایل EPUB تولید شده شامل موارد زیر است:

1. **صفحه عنوان**: با نام کتاب و نویسنده
2. **صفحه معرفی**: معرفی کتاب
3. **فصل‌ها**: تمام فصل‌ها به ترتیب order
4. **فهرست مطالب**: جهت دسترسی سریع به فصل‌ها
5. **CSS مخصوص فارسی**: قالب‌بندی زیبا و مناسب متن RTL

## ویژگی‌های تکنیکی

- تبدیل Markdown به HTML
- پشتیبانی از RTL برای متن فارسی
- Page progression direction صحیح برای کتاب‌های فارسی
- Metadata کامل شامل زبان، نویسنده و شناسه
- CSS سفارشی برای نمایش بهتر در eReader ها

## نکات مهم

- **جهت محتوا (dir="rtl")**: متن از راست به چپ نمایش داده می‌شود
- **جهت صفحه‌گردانی**: در کتاب‌های فارسی، صفحه بعدی در سمت چپ قرار دارد (برعکس کتاب‌های انگلیسی)
- **فونت‌ها**: از فونت‌های پیش‌فرض دستگاه که از فارسی پشتیبانی می‌کنند استفاده می‌شود

## مشکلات احتمالی و راه‌حل

### خطای import ebooklib

اگر با خطای `ModuleNotFoundError: No module named 'ebooklib'` مواجه شدید:

```bash
pip install ebooklib
```

### خطای import markdown

```bash
pip install Markdown
```

### مشکل در خواندن فایل‌ها

مطمئن شوید که:

- در پوشه صحیح هستید
- فایل‌های markdown در `src/documents/chapters/` وجود دارند
- فایل‌ها دارای frontmatter صحیح هستند

## تست EPUB

برای مشاهده فایل EPUB می‌توانید از نرم‌افزارهای زیر استفاده کنید:

- **Calibre** (Windows, macOS, Linux)
- **Apple Books** (macOS, iOS)
- **Adobe Digital Editions**
- **FBReader**
- **Moon+ Reader** (Android)

توجه: حتماً یک eReader که از RTL و فارسی پشتیبانی می‌کند انتخاب کنید.
