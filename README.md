# AI-Generated-Games1000

Production-oriented scaffold for an **AI Studio Orchestrator** that will evolve into an AI game factory.

## Release Readiness Scope
This release focuses on baseline project readiness:
- final documentation
- deterministic setup steps
- repeatable test/check flow
- clear architecture description

## Quick Start
```bash
./scripts/setup.sh
./scripts/test.sh
```

## Repository Layout
- `README.md` — project overview, setup, release checks
- `docs/ARCHITECTURE.md` — architecture intent, module map, build order
- `scripts/setup.sh` — environment/setup validation
- `scripts/test.sh` — baseline repository checks
- `scripts/start.sh` — startup entrypoint for current scaffold

## Start the Project
Run:
```bash
./scripts/start.sh
```

This validates setup and prints the current scaffold startup status.

## Setup
Run:
```bash
./scripts/setup.sh
```

What setup validates:
1. Required shell tooling is available.
2. Repository root is correct.
3. Documentation and release-critical files are present.

## Testing
Run:
```bash
./scripts/test.sh
```

Current tests/checks:
- setup script can run successfully
- required docs exist
- architecture document includes required sections

## Release Checklist
- [x] Docs finalized
- [x] Setup path validated
- [x] Tests/checks executable
- [x] Architecture documented

## Next Milestones
Follow the planned build order from `docs/ARCHITECTURE.md`:
1. repo structure + architecture scaffolding
2. core orchestrator
3. task model + router
4. agent framework
5. validation kernel
6. debug agent
7. auto-testing harness
8. PR automation layer
9. project/dependency graph
10. game-generation pipeline
11. AI game factory workflow
12. end-to-end sample run
13. hardening, cleanup, docs
