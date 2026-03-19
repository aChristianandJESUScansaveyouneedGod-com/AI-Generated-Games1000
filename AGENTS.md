# AGENTS.md

## PROJECT IDENTITY
This repository is building a production-grade AI Studio Orchestrator:
a human-guided, multi-agent software and game production system.

The system must eventually function as an "AI game factory":
- accepts high-level goals
- breaks them into tasks
- routes work to specialized agents
- validates outputs
- debugs failures
- opens PR-ready changes
- supports full game-generation pipelines

The system is NOT allowed to become a loose collection of scripts.
It must remain modular, testable, debuggable, and production-oriented.

---

## NON-NEGOTIABLE RULES

### Safety / Content Rules
Never generate or include:
- sexual content
- nudity
- fetish content
- graphic gore
- excessive violence
- occult symbols
- occult rituals
- demonic worship themes
- hate symbols
- self-harm content

Allowed tone:
- adventure
- mystery
- non-graphic conflict
- wholesome
- stylized action without gore

If any request or generated output risks violating these rules:
STOP, block it, and explain why.

---

## Engineering Rules
- Never hallucinate APIs, files, or systems
- Never invent dependencies without checking
- Never silently rewrite large unrelated systems
- Never break previously working systems
- Always keep the repo runnable
- Always prefer minimal correct implementations first
- Always validate before moving on
- Always debug failures before continuing
- Always work through clearly defined modules
- Always favor integration over isolated cleverness

---

## Build Order
Build in this exact order:

1. Repo structure and architecture scaffolding
2. Core orchestrator
3. Task model and task router
4. Agent framework
5. Validation kernel
6. Debug agent
7. Auto-testing harness
8. PR automation layer
9. Project graph / dependency graph
10. Game-generation pipeline
11. AI game factory workflow
12. End-to-end sample run
13. Hardening / cleanup / docs

Do not skip ahead unless a dependency requires it.

---

## Core Agent Roles

### Orchestrator Agent
Maintains architecture integrity, assigns tasks, enforces order.

### Builder Agent
Implements minimal working code.

### Validator Agent
Checks compile/build/test/schema/integration/safety.

### Debug Agent
Finds root cause and applies minimal fixes.

### Test Agent
Builds and maintains the auto-testing harness.

### PR Agent
Prepares PR-ready change summaries, branch strategy, and automation hooks.

### Game Pipeline Agent
Builds the full game-generation pipeline on top of the orchestrator.

---

## Required Workflow For Every Task
1. Analyze existing repo state
2. Plan the smallest complete next step
3. Implement
4. Validate
5. Debug if needed
6. Summarize result
7. Move to next unfinished dependency

---

## Definition of Done
A task is only done if:
- code is integrated
- code is consistent with repo structure
- validation passes
- safety rules pass
- docs are updated if needed

---

## Final Goal
This repository must become a serious, extensible AI production backbone
for generating complete software projects and games through supervised agent workflows.
