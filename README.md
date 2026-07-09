# لینوکس و زندگی — mdBook

> **کتابی برای کشف دنیای پشت لینوکس و درک بهتر از زندگی**

This is a conversion of [jadijadi/linuxandlife](https://github.com/jadijadi/linuxandlife)
from its original DocPad site format into a clean [mdBook](https://rust-lang.github.io/mdBook/) project.

The book is written in **Persian (Farsi)** and covers Linux fundamentals, everyday usage,
command-line skills, the Linux community, and professional career advice for Linux practitioners.

---

## 📖 Reading the Book

You can read it locally after building (see below), or host the generated `book/` folder
on any static file server (GitHub Pages, Netlify, etc.).

---

## 🛠 Prerequisites

Install mdBook (requires Rust/Cargo, or grab the pre-built binary):

```bash
# Via Cargo
cargo install mdbook

# Or download a binary from GitHub releases:
# https://github.com/rust-lang/mdBook/releases
```

---

## 🚀 Quick Start

```bash
# Clone or extract this project
cd linuxandlife-mdbook

# Build the book (output goes to ./book/)
mdbook build

# OR serve locally with live-reload at http://localhost:3000
mdbook serve --open
```

---

## 📁 Project Structure

```
linuxandlife-mdbook/
├── book.toml              # mdBook configuration
├── README.md              # This file
├── theme/
│   └── custom.css         # RTL layout + Persian typography
└── src/
    ├── README.md          # Book introduction (landing page)
    ├── SUMMARY.md         # Table of contents — controls sidebar navigation
    ├── images/            # All images referenced by chapters
    │
    ├── linux_philosophy.md
    ├── gnulinuxhistory.md
    ├── whygnulinux.md
    ├── where_do_we_use_linux.md
    ├── linux_is_not_windows.md
    │
    ├── what_is_distribution.md
    ├── which_arch_32bits_vs_64bit.md
    ├── which_distro_is_best_for_you.md
    ├── trying_linux_with_a_live_distro.md
    ├── installing_linux.md
    ├── common_steps_after_desktop_install.md
    ├── how_to_install_software.md
    ├── everyday_life.md
    ├── migration_from_windows.md
    │
    ├── directory_structure.md
    ├── commandline_basics.md
    ├── common_shell_commands.md
    ├── proxy_on_command_line.md
    ├── commandline_advanced.md
    ├── how_to_connect_domain_and_host.md
    │
    ├── get_help.md
    │
    ├── linux_as_a_job.md
    ├── does_university_woth_it.md
    ├── resume.md
    ├── is_there_a_good_company.md
    ├── choosing_your_path.md
    ├── datacenter.md
    ├── how_to_learn_english.md
    ├── is_internet_a_place_to_earn_money.md
    ├── which_programming_language.md
    ├── hacker_manifesto.md
    ├── being_hacker.md
    ├── how_to_learn_x.md
    └── concentrate.md
```

---

## 📚 Book Sections

| # | Section (Persian) | Topic |
|---|---|---|
| 1 | اصول و مقدمات | Fundamentals — free software philosophy, GNU/Linux history, why Linux |
| 2 | لینوکس روزمره | Everyday Linux — distros, installation, software management, migration |
| 3 | مباحث پیشرفته | Advanced topics — filesystem, shell, CLI commands, proxy, domains |
| 4 | جامعه لینوکس | Community — getting help, open source culture |
| 5 | زندگی حرفه‌ای | Professional life — careers, university, resume, choosing a language, hacker mindset |

---

## 🔤 RTL Support

The book is in Persian (a right-to-left language). `theme/custom.css` handles:

- Full RTL layout for sidebar, content, and navigation arrows
- Persian-friendly line-height and typography
- Code blocks forced back to LTR (so shell commands stay readable)

---

## ✏️ Contributing / Editing

To add or edit a chapter:

1. Edit the relevant `.md` file in `src/`
2. If adding a new chapter, add an entry to `src/SUMMARY.md` in the correct position —
   mdBook's sidebar order is driven entirely by `SUMMARY.md`
3. Run `mdbook serve` to preview changes live

Chapter filenames map directly to the original DocPad source filenames for easy diffing
against the upstream repository.

---

## 🔗 Links

- **Original project:** https://github.com/jadijadi/linuxandlife
- **Live site:** http://www.linuxbook.ir
- **Author:** [jadi (Jadi Mirmirani)](https://github.com/jadijadi)
- **License:** CC0-1.0 (public domain) — see [LICENSE](../LICENSE)
- **mdBook docs:** https://rust-lang.github.io/mdBook/

---

## 🗒 Conversion Notes

This project was converted from DocPad (a Node.js static site generator) to mdBook. Changes made:

- Frontmatter (`layout`, `chapter`, `order`) stripped; chapter titles promoted to `# H1`
- `<pre>` blocks converted to fenced ` ``` ` code blocks
- `<blockquote>` HTML converted to Markdown `>` syntax
- `<img src=...>` tags converted to `![](...)` Markdown image syntax
- Internal links updated from `/chapters/foo.html` → `foo.md`
- Stub chapters (not yet written in the original) marked with a visible `> در حال تکمیل` notice
- RTL CSS added for correct Persian rendering
