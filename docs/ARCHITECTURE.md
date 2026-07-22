# Architecture

## Repository

Portfolio

├── frontend

└── backend

---

## Frontend

src/

app/

components/

modules/

hooks/

services/

providers/

types/

constants/

utils/

assets/

---

## Backend

controller

service

repository

entity

dto

config

security

ai

rag

exception

mapper

---

## Communication

Frontend

↓

REST API

↓

Spring Boot

↓

Database / AI

---

## AI

Spring AI

↓

Qdrant

↓

Ollama

↓

RAG

---

## Rule

Every feature must be independent.

Every component should have a single responsibility.

No duplicated logic.