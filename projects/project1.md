---
layout: project
title: "Fahrstuhl-Simulation mit Reinforcement Learning"
subtitle: "Mehrere Aufzüge lernen, Personen effizient zu transportieren – basierend auf einer SimPy-Simulation."
category: "Simulation & Reinforcement Learning"
project_url: "https://github.com/dein_repo/fahrstuhl-rl"
---

In diesem Projekt untersuche ich, wie ein Reinforcement-Learning-Agent mehrere Aufzüge in einem simulierten Gebäude effizient steuern kann.

## Ziel des Projekts

- Simulation eines Gebäudes mit mehreren Aufzügen
- Optimierung von Wartezeiten und Fahrwegen
- Vergleich mit regelbasierten Steuerungsstrategien
- Analyse von Auslastung und Energieverbrauch

![Auswertung der Fahrstuhl-Simulation](/assets/img/projects/p1.jpg)

## Technischer Stack

- Python
- SimPy
- NumPy
- Reinforcement Learning
- Jupyter Notebooks

## Funktionsweise

Die Simulation erzeugt Fahrgäste mit unterschiedlichen Start- und Zielstockwerken. Der Agent entscheidet, welcher Aufzug eine Anfrage übernimmt und welches Stockwerk als Nächstes angefahren wird.

Als Belohnung dienen unter anderem:

1. kurze Wartezeiten,
2. kurze Fahrtzeiten,
3. eine gleichmäßige Auslastung der Aufzüge,
4. möglichst wenige Leerfahrten.

## Aktueller Stand

Die grundlegende Simulation und erste regelbasierte Strategien sind implementiert. Als nächster Schritt wird der Reinforcement-Learning-Agent trainiert und mit den bestehenden Strategien verglichen.
