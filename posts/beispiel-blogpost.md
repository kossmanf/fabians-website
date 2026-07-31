---
layout: blog
title: "Was bedeutet eigentlich erklärbare KI?"
subtitle: "Warum gute Vorhersagen allein nicht immer ausreichen."
description: "Eine verständliche Einführung in erklärbare KI, globale und lokale Erklärungen sowie die Grenzen von Explainable AI."
date: 2026-07-29
category: "KI & Erklärbarkeit"
lang: "de"
translation_url: "/en/posts/what-does-explainable-ai-mean.html"
---

Künstliche Intelligenz kann heute erstaunlich gute Vorhersagen treffen. Doch gerade bei wichtigen Entscheidungen reicht es nicht, nur das Ergebnis eines Modells zu kennen. Wir möchten auch verstehen, **wie** dieses Ergebnis entstanden ist.

## Von der Vorhersage zur Erklärung

Stell dir vor, ein Modell bewertet einen Kreditantrag als riskant. Die Vorhersage allein beantwortet noch keine der entscheidenden Fragen:

- Welche Angaben waren besonders wichtig?
- Hätte eine kleine Änderung zu einem anderen Ergebnis geführt?
- Verwendet das Modell möglicherweise problematische Zusammenhänge?

Erklärbare KI – häufig auch *Explainable AI* oder kurz *XAI* genannt – beschäftigt sich mit Methoden, die solche Fragen beantworten sollen.

![Abstrakte Darstellung eines KI-Systems](/assets/img/blog/b1.jpg)

## Globale und lokale Erklärungen

Eine **globale Erklärung** beschreibt, wie sich ein Modell grundsätzlich verhält. Sie kann beispielsweise zeigen, welche Merkmale über viele Vorhersagen hinweg besonders wichtig sind.

Eine **lokale Erklärung** betrachtet dagegen eine einzelne Entscheidung. Sie versucht zu erklären, warum das Modell gerade für diesen konkreten Fall zu seinem Ergebnis gekommen ist.

Beide Perspektiven sind nützlich:

1. Globale Erklärungen helfen bei der allgemeinen Prüfung eines Modells.
2. Lokale Erklärungen helfen dabei, einzelne Entscheidungen nachzuvollziehen.
3. Gemeinsam können sie Fehler, unerwünschte Abhängigkeiten und Verzerrungen sichtbar machen.

## Eine Erklärung ist nicht automatisch die Wahrheit

Auch eine verständlich wirkende Erklärung muss kritisch betrachtet werden. Manche Verfahren liefern lediglich eine Annäherung an das Verhalten eines komplexen Modells. Eine plausible Darstellung ist daher nicht automatisch eine vollständige oder kausale Erklärung.

![Visualisierung zu Entscheidungen und Unsicherheit](/assets/img/blog/b2.jpg)

## Fazit

Erklärbare KI schafft nicht automatisch faire oder fehlerfreie Systeme. Sie kann aber dabei helfen, Modelle besser zu prüfen, Entscheidungen zu hinterfragen und technische Ergebnisse verständlicher zu kommunizieren.

Die entscheidende Frage lautet deshalb nicht nur: **Wie genau ist das Modell?** Ebenso wichtig ist: **Können wir seinem Verhalten in diesem Anwendungsfall begründet vertrauen?**
