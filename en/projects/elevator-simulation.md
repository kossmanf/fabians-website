---
layout: project
title: "Elevator Simulation with Reinforcement Learning"
subtitle: "Multiple elevators learn to transport passengers efficiently using a SimPy-based simulation."
category: "Simulation & Reinforcement Learning"
project_url: "https://github.com/dein_repo/fahrstuhl-rl"
lang: "en"
translation_url: "/projects/project1.html"
permalink: "/en/projects/elevator-simulation.html"
---

In this project, I explore how a reinforcement learning agent can efficiently control multiple elevators in a simulated building.

## Project goals

- Simulate a building with multiple elevators
- Optimise waiting times and travel routes
- Compare the agent with rule-based control strategies
- Analyse utilisation and energy consumption

![Evaluation of the elevator simulation](/assets/img/projects/p1.jpg)

## Technology stack

- Python
- SimPy
- NumPy
- Reinforcement Learning
- Jupyter Notebooks

## How it works

The simulation creates passengers with different starting floors and destinations. The agent decides which elevator should handle a request and which floor it should visit next.

The reward function considers factors including:

1. short waiting times,
2. short journey times,
3. balanced elevator utilisation,
4. as few empty trips as possible.

## Current status

The basic simulation and initial rule-based strategies have been implemented. The next step is to train the reinforcement learning agent and compare it with the existing strategies.
