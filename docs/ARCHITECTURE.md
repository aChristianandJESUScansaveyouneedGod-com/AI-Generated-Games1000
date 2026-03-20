# Architecture

## Mission
Build a production-grade AI Studio Orchestrator that can supervise multi-agent software/game generation workflows.

## System Principles
- Modular components with clear boundaries.
- Small, testable integrations over one-off scripts.
- Deterministic validation before promotion.
- Human-guided orchestration with auditability.

## Planned Module Topology
1. **Orchestrator Core**
   - workflow state machine
   - step scheduling and dependency management
2. **Task Model + Router**
   - task schema
   - capability-based routing
3. **Agent Framework**
   - agent contracts
   - execution adapters
4. **Validation Kernel**
   - compile/build/test/schema gates
5. **Debug Agent**
   - failure triage and minimal repair loops
6. **Auto-Testing Harness**
   - integration and regression pipelines
7. **PR Automation Layer**
   - change packaging and review metadata
8. **Project Graph**
   - dependency graph and impact tracing
9. **Game Pipeline Layer**
   - game-generation stages atop orchestrator

## Build Order
This repository advances in strict dependency order:
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

## Current State (This Release)
- Architecture and build order are documented.
- Setup and test scripts establish a repeatable baseline.
- No orchestrator runtime modules implemented yet (scaffold phase).
