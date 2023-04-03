# Contract Freak Nexus

This application aims to provide means of storing and distributing API contracts
to test your consumption against said needed contracts.

## Architecture

Models of the architecture (graphviz) can be found here:

- [C1](./docs/architecture/c1.dot)
- [C2](./docs/architecture/c2.dot)

## Nexus

The Nexus is a REST API where we manage contracts.

It uses a mongo database to store the contracts.
