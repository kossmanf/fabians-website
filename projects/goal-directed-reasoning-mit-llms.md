---
layout: project
title: "Goal-Directed Reasoning mit Large Language Models"
subtitle: "LLMs steuern als gelernte Heuristik die Beweissuche eines automatischen Theorembeweisers."
description: "Bachelorarbeitsprojekt zur Kombination von Large Language Models und Eprover für eine effizientere Beweissuche in der Prädikatenlogik."
project_url: "https://github.com/kossmanf/bachelorThesis"
project_label: "Projekt auf GitHub ansehen ↗"
tags:
  - Large Language Models
  - Theorembeweisen
  - Prädikatenlogik
  - Eprover
date: 2024-01-01
lang: "de"
permalink: "/projects/goal-directed-reasoning-mit-llms.html"
---

In meiner Bachelorarbeit habe ich untersucht, wie **Large Language Models (LLMs) mit automatischen Theorembeweisern kombiniert werden können**, um die Suche nach Beweisen in der Prädikatenlogik gezielter zu steuern.

Automatische Theorembeweiser können aus einer Menge von Axiomen selbstständig formale Beweise ableiten. Eine zentrale Herausforderung dabei ist jedoch der enorme Suchraum: Während der Beweissuche entstehen viele mögliche Klauseln und Schlussfolgerungen, von denen nur ein kleiner Teil tatsächlich für den gesuchten Beweis relevant ist. Die Auswahl geeigneter Klauseln hat deshalb einen großen Einfluss auf die Effizienz der Suche.

## Die Idee

Meine Idee war, bereits erfolgreich gefundene Beweise als Trainingsdaten zu verwenden. Ein vortrainiertes Sprachmodell besitzt bereits Wissen über sprachliche Zusammenhänge und Ähnlichkeiten zwischen Wörtern. Durch Fine-Tuning sollte das Modell zusätzlich lernen, **welche Symbole einer Wissensbasis für bestimmte Beweisaufgaben relevant sind**.

Das Sprachmodell übernimmt dabei nicht selbst das eigentliche logische Beweisen. Stattdessen dient es als **Heuristik für den Theorembeweiser**: Es bewertet die Relevanz von Symbolen und gibt dem Beweiser damit Hinweise, welche Bereiche des Suchraums besonders interessant sein könnten.

## Umsetzung

Für das Projekt verwendete ich den automatischen Theorembeweiser **Eprover**. Zunächst wurden damit Beweise erzeugt, aus denen anschließend Trainingsdaten für das Sprachmodell abgeleitet wurden. Das Modell wurde darauf trainiert, die Relevanz von Symbolen für neue Beweisaufgaben einzuschätzen.

Anschließend wurde Eprover sowohl **mit als auch ohne Unterstützung des Sprachmodells** ausgeführt. Dadurch konnte untersucht werden, welchen Einfluss die gelernte Heuristik auf die Beweissuche hat.

## Ergebnisse

Die Experimente zeigten, dass der Ansatz den Suchprozess tatsächlich beeinflussen und effizienter machen kann. Mit Unterstützung des Sprachmodells konnte die **Anzahl der vom Theorembeweiser verarbeiteten Klauseln deutlich reduziert werden**.

Dabei zeigte sich allerdings auch ein Trade-off: Insgesamt wurden weniger Beweise gefunden. Interessanterweise konnte die LLM-basierte Heuristik gleichzeitig **neue Beweise finden, die ohne diese Unterstützung zuvor nicht gefunden wurden**.

Das Projekt zeigt damit eine interessante Verbindung zwischen zwei unterschiedlichen Ansätzen der künstlichen Intelligenz: **statistischem Lernen mit neuronalen Sprachmodellen und symbolischem, formal nachvollziehbarem Reasoning**. Während das Sprachmodell hilft, vielversprechende Bereiche des Suchraums zu erkennen, bleibt die eigentliche Beweisführung beim formalen Theorembeweiser.

## Bachelorarbeit

Wer sich genauer für das Projekt, die Methodik und die Ergebnisse interessiert, kann hier meine vollständige Bachelorarbeit lesen:

**[Bachelorarbeit als PDF herunterladen](/assets/documents/de/Bachelorarbeit.pdf)**

*„Zielgerichtetes Reasoning in der Prädikatenlogik durch Lernen aus Beweisen mit Hilfe großer Sprachmodelle“*  
Bachelorarbeit, Hochschule Trier, 2024
