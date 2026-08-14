---
layout: project
title: "Recommender-Systeme"
subtitle: "Personalisierte Empfehlungen mit Content-Based Filtering, Collaborative Filtering und erweiterten Machine-Learning-Verfahren."
description: "Seminararbeitsprojekt über Recommender-Systeme, User-Item-Matrizen, Content-Based und Collaborative Filtering sowie die Bewertung personalisierter Empfehlungen."
tags:
  - Recommender-Systeme
  - Collaborative Filtering
  - Content-Based Filtering
  - Machine Learning
date: 2026-01-01
lang: "de"
permalink: "/projects/recommender-systeme.html"
---

In meiner Seminararbeit habe ich mich mit **Recommender-Systemen** und den grundlegenden Verfahren beschäftigt, mit denen digitale Plattformen personalisierte Empfehlungen erzeugen.

Recommender-Systeme begegnen uns heute auf zahlreichen Plattformen: Sie empfehlen Produkte, Videos, Musik, Filme oder andere Inhalte. Ihre Aufgabe besteht darin, aus einer großen Menge verfügbarer Items diejenigen auszuwählen, die für einen bestimmten Nutzer möglichst relevant sind. Grundlage dafür bilden beispielsweise frühere Interaktionen, Bewertungen oder andere Informationen über die Präferenzen eines Nutzers.

## Die Grundidee

Ein zentrales Modell vieler Recommender-Systeme ist die sogenannte **User-Item-Matrix**. Dabei repräsentieren die Zeilen einzelne Nutzer und die Spalten die verfügbaren Items. Die Einträge beschreiben beispielsweise, wie ein Nutzer ein bestimmtes Item bewertet hat.

In der Praxis ist diese Matrix meistens sehr dünn besetzt, da jeder Nutzer nur mit einem kleinen Teil aller verfügbaren Items interagiert hat. Eine zentrale Aufgabe eines Recommender-Systems besteht deshalb darin, aus den vorhandenen Informationen abzuleiten, **welche bisher unbekannten Items für einen Nutzer interessant sein könnten**.

Dabei habe ich in der Arbeit insbesondere zwei klassische Ansätze betrachtet: **Content-Based Filtering** und **Collaborative Filtering**.

## Content-Based Filtering

Bei **content-basierten Empfehlungen** werden die Eigenschaften eines Items mit den Präferenzen eines Nutzers verglichen.

Ein Buch kann beispielsweise durch Merkmale wie

- Autor,
- Genre,
- Themen oder
- Seitenanzahl

beschrieben werden. Aus solchen Merkmalen entsteht ein **Item-Profil**.

Aus den Items, mit denen ein Nutzer bereits interagiert hat, lässt sich wiederum ein **User-Profil** erstellen. Dieses beschreibt, welche Eigenschaften von Items der jeweilige Nutzer bevorzugt.

Anschließend kann beispielsweise mithilfe der **Kosinusähnlichkeit** bestimmt werden, wie gut ein neues Item zum Profil des Nutzers passt. Items mit einer hohen Ähnlichkeit können entsprechend weiter oben in der Liste der Empfehlungen erscheinen.

Bei komplexeren Inhalten müssen geeignete Features zunächst aus den Daten extrahiert werden. Für Texte können dafür beispielsweise **TF-IDF** oder Tags eingesetzt werden.

## Collaborative Filtering

Beim **Collaborative Filtering** werden dagegen nicht primär die Eigenschaften der Inhalte betrachtet. Stattdessen werden Muster in den Interaktionen verschiedener Nutzer analysiert.

Die Grundidee ist dabei relativ intuitiv:

**Nutzer mit ähnlichen bisherigen Präferenzen könnten sich auch für ähnliche neue Inhalte interessieren.**

Dafür können Nutzer anhand ihrer Einträge in der User-Item-Matrix miteinander verglichen werden. Soll beispielsweise vorhergesagt werden, wie ein Nutzer ein bisher unbekanntes Item bewerten würde, können die Bewertungen besonders ähnlicher Nutzer verwendet werden.

Das gleiche Prinzip funktioniert auch umgekehrt auf Item-Ebene: Items können anhand ihrer Bewertungsmuster miteinander verglichen werden, um einem Nutzer ähnliche Inhalte zu bereits positiv bewerteten Items vorzuschlagen.

## Herausforderungen und Erweiterungen

Eine wichtige Herausforderung ist das sogenannte **Kaltstartproblem**. Bei neuen Nutzern oder neuen Items liegen zunächst kaum Interaktionsdaten vor. Dadurch kann das System noch kein zuverlässiges Präferenzmodell erstellen.

Darüber hinaus habe ich verschiedene Möglichkeiten betrachtet, klassische Recommender-Systeme zu erweitern.

Durch **Clustering** können beispielsweise ähnliche Nutzer oder Items zunächst zu Gruppen zusammengefasst werden. Dadurch lässt sich die typischerweise sehr dünn besetzte User-Item-Matrix verdichten.

Eine weitere Möglichkeit sind **graphbasierte Recommender-Systeme**. Nutzer und Items werden dabei als Knoten eines Graphen dargestellt, während Interaktionen oder Ähnlichkeiten durch Kanten repräsentiert werden. Dadurch können auch indirekte Beziehungen zwischen Nutzern und Items berücksichtigt werden.

Außerdem können Empfehlungen als **Machine-Learning-Problem** betrachtet werden. Beispielsweise kann ein Klassifikationsmodell lernen vorherzusagen, ob ein Nutzer ein bestimmtes Item wahrscheinlich positiv oder negativ bewerten wird.

## Wie bewertet man Empfehlungen?

Ein gutes Recommender-System muss nicht nur Empfehlungen erzeugen – die Qualität dieser Empfehlungen muss auch messbar sein.

In meiner Arbeit habe ich dafür unter anderem die beiden Metriken **Precision@k** und **Recall@k** betrachtet.

**Precision@k** beschreibt, welcher Anteil der ersten `k` Empfehlungen tatsächlich relevant ist.

**Recall@k** betrachtet dagegen, welcher Anteil aller für einen Nutzer relevanten Items innerhalb dieser `k` Empfehlungen gefunden wurde.

Damit entsteht ein grundlegender Zielkonflikt: Ein System soll möglichst relevante Empfehlungen erzeugen, gleichzeitig aber auch möglichst viele der tatsächlich interessanten Inhalte entdecken.

## Bedeutung von Recommender-Systemen

Recommender-Systeme sind inzwischen ein wesentlicher Bestandteil digitaler Plattformen. Mit zunehmender Menge verfügbarer Inhalte wird es immer wichtiger, Informationen individuell zu filtern und relevante Inhalte aus einer großen Menge möglicher Optionen auszuwählen.

Dabei besitzen Recommender-Systeme nicht nur eine technische und wirtschaftliche Bedeutung. Sie beeinflussen auch, **welche Informationen und Inhalte Menschen überhaupt zu sehen bekommen** und können dadurch den Informationszugang und die Wahrnehmung der digitalen Welt mitgestalten.

Spannende weiterführende Fragestellungen entstehen deshalb nicht nur bei neuen Machine-Learning- und Deep-Learning-Verfahren, sondern auch hinsichtlich **Transparenz, Robustheit, Fairness und gesellschaftlicher Auswirkungen** von Empfehlungssystemen.

## Seminararbeit & Präsentation

Wer sich genauer für Recommender-Systeme, Content-Based Filtering, Collaborative Filtering und die weiteren betrachteten Verfahren interessiert, findet hier meine vollständige Seminararbeit sowie die dazugehörige Präsentation:

**[Seminararbeit als PDF herunterladen](/assets/documents/de/Seminararbeit_recommender_systems.pdf)**

**[Präsentation als PDF ansehen](/assets/documents/de/Seminararbeit_recommender_systems_presentation.pdf)**

*„Recommender-Systeme“*  
Seminararbeit, Hochschule Trier, 2026
