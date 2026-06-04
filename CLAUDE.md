# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

## What this project is

An online geomorphology textbook (in Czech) at [ucebnice.geomorfo.cz](https://ucebnice.geomorfo.cz/), built with Jekyll using the [jekyll-chapterbook](https://github.com/jasongrimes/jekyll-chapterbook) remote theme. Content is written in Markdown with kramdown (GFM input), MathJax for equations, and jekyll-scholar for academic citations.

## Development commands

**Local server (requires Ruby + Bundler):**
```bash
bundle install
bundle exec jekyll serve --livereload
```
Site builds to `./_site/`, served at `http://localhost:4000`.

**Docker / devcontainer:**
The devcontainer auto-runs `./bin/entry_point.sh`, which starts Jekyll on port 8080 with live-reload and watches `_config.yml` for restarts.

**Build only:**
```bash
bundle exec jekyll build
```

**Drafts visible in dev:** Set `show_drafts_in_dev: true` in `_config.yml` to show draft chapters during development.

## Content structure

Chapters live in `_chapters/` in numbered subdirectories (e.g. `010-Úvod/`, `030-Exogenní procesy a formy/`). Each chapter `.md` file needs front matter:

```yaml
---
title: Chapter Title
slug: url-slug
abstract: Short description shown in navigation.
---
```

Files named with `.draft` in the filename (e.g., `010.draft-chapter.md`) are excluded from navigation in production. Each subdirectory has a `000-index.md` acting as the section index.

## Key conventions

**Citations** use jekyll-scholar with the BibTeX database at `_bibliography/zaklady_geomorfologie.bib`. Cite with `{% cite citationKey %}`. Generate a bibliography with `{% bibliography --cited %}`.

**Figures** use inline HTML `<figure>` tags with an `id` for cross-referencing:
```html
<figure id="fig:name">
<img src="/assets/obrazky/<topic>/<file>.png"/>
<figcaption>Caption text (upraveno podle {% cite key %}.)</figcaption>
</figure>
```
Images go in `assets/obrazky/<topic>/`.

**Admonitions** (callout boxes) use the `_includes/admonition.html` include. Valid types: `note`, `abstract`, `info`, `tip`, `success`, `question`, `warning`, `failure`, `danger`, `bug`, `example`, `quote`.
```liquid
{% include admonition.html type="note" title="Title" body="Body text." %}
```

**Questions and key terms** for each chapter are stored as separate `.md` files in `_includes/otazky_a_pojmy/` and included into chapters with `{% include otazky_a_pojmy/filename.md %}`.

**Cross-references** within a chapter use Markdown anchor links: `[text](#fig:name)` or `[text](#tab:name)`. Cross-chapter links use the relative path to the `.md` file.

## Plugins and rendering

- **kramdown** with `parse_block_html: true` — raw HTML blocks inside Markdown are parsed. Use this for tables and figures.
- **MathJax** — use `$$...$$` for display math, `$...$` for inline math.
- **jekyll-scholar** — APA citation style, locale `en`, bibliography source in `./_bibliography/`.
- **jekyll-youtube** — embed YouTube videos with `{% youtube VIDEO_ID %}`.