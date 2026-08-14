---
layout: project
title: "Bootstrapping"
subtitle: "Statistische Unsicherheit durch wiederholtes Ziehen aus der empirischen Verteilung untersuchen."
description: "Statistik-Hausarbeit über die Bootstrap-Methode, Bootstrap-Verteilungen, Monte-Carlo-Approximation und die mathematische Idee hinter dem Verfahren."
tags:
  - Bootstrapping
  - Statistik
  - Monte-Carlo-Simulation
  - Machine Learning
date: 2026-01-01
lang: "de"
permalink: "/projects/bootstrapping.html"
---

In meiner Statistik-Hausarbeit habe ich mich mit **Bootstrapping** beschäftigt einem statistischen Verfahren, mit dem sich die Verteilung eines Parameters auf Grundlage einer vorhandenen Stichprobe approximieren lässt.

Die Methode wurde von **Bradley Efron** entwickelt und stellt eine Weiterentwicklung der Jackknife-Methode dar. Besonders interessant ist Bootstrapping, weil sich damit statistische Eigenschaften untersuchen lassen, ohne starke Annahmen über die zugrunde liegende Verteilung der Daten treffen zu müssen.

## Die Grundidee

In der Statistik kennen wir häufig nur eine Stichprobe aus einer unbekannten Verteilung. Trotzdem möchten wir Aussagen darüber treffen, wie sich eine bestimmte statistische Größe beispielsweise der Mittelwert bei wiederholten Stichproben verhalten würde.

Genau hier setzt Bootstrapping an.

Anstatt immer wieder neue Daten aus der unbekannten tatsächlichen Verteilung zu ziehen, wird die vorhandene Stichprobe selbst verwendet, um diese Verteilung näherungsweise zu ersetzen.

Aus den vorhandenen Daten werden anschließend wiederholt neue **Bootstrap-Stichproben** gezogen. Dabei wird **mit Zurücklegen** gezogen. Ein Wert aus der ursprünglichen Stichprobe kann innerhalb einer Bootstrap-Stichprobe deshalb mehrfach vorkommen, während ein anderer möglicherweise überhaupt nicht enthalten ist.

Aus jeder dieser Stichproben wird anschließend die interessierende statistische Größe berechnet. Die dadurch entstehenden Werte bilden die sogenannte **Bootstrap-Verteilung**.

## Ein einfaches Beispiel

In meiner Arbeit habe ich das Verfahren anhand der kleinen Stichprobe

`(2, 4, 7)`

veranschaulicht.

Jeder der drei beobachteten Werte erhält zunächst die Wahrscheinlichkeit `1/3`. Anschließend werden neue Stichproben der Größe drei mit Zurücklegen gezogen.

Mögliche Bootstrap-Stichproben sind beispielsweise:

`(2, 2, 4)`

`(2, 7, 4)`

`(7, 7, 2)`

Für jede dieser Stichproben wird anschließend der Mittelwert berechnet.

Da bei drei möglichen Werten und einer Stichprobengröße von drei insgesamt **27 mögliche Bootstrap-Stichproben** existieren, können in diesem kleinen Beispiel alle Möglichkeiten betrachtet werden. Aus den resultierenden Mittelwerten entsteht schließlich die Bootstrap-Verteilung des Mittelwerts.

## Wofür wird Bootstrapping verwendet?

Bootstrapping besitzt zahlreiche Anwendungen in Statistik und Machine Learning. Dazu gehören unter anderem:

- die Schätzung von **Konfidenzintervallen**,
- die Durchführung von **Hypothesentests**,
- die Schätzung von **Standardfehlern**,
- die Untersuchung des **Bias statistischer Schätzer** und
- die Bewertung von **Modellperformance**.

Der große Vorteil besteht darin, dass Informationen über die Verteilung eines Schätzers direkt aus den vorhandenen Daten gewonnen werden können, auch wenn die zugrunde liegende Verteilung nicht vollständig bekannt ist.

## Monte-Carlo-Approximation

Bei kleinen Beispielen können alle möglichen Bootstrap-Stichproben noch vollständig betrachtet werden. Bei realistischen Datensätzen wird das allerdings sehr schnell unpraktikabel.

Für eine Stichprobe der Größe `n` existieren bereits

`n^n`

mögliche Bootstrap-Stichproben.

Deshalb wird die Bootstrap-Verteilung in der Praxis häufig mithilfe einer **Monte-Carlo-Simulation** approximiert. Anstatt sämtliche möglichen Stichproben zu erzeugen, wird eine große Anzahl zufälliger Bootstrap-Stichproben gezogen.

Für jede Stichprobe wird die gewünschte statistische Größe berechnet. Die daraus entstehende empirische Verteilung liefert anschließend eine Approximation der vollständigen Bootstrap-Verteilung. Dadurch lässt sich der Rechenaufwand erheblich reduzieren.

## Warum funktioniert Bootstrapping?

Ein weiterer Teil meiner Arbeit beschäftigt sich mit der mathematischen Idee hinter dem Verfahren.

Vereinfacht gesagt ersetzt Bootstrapping die unbekannte tatsächliche Verteilung durch die aus der beobachteten Stichprobe konstruierte empirische Verteilung.

Die zentrale Idee besteht anschließend darin zu zeigen, dass die daraus erzeugte **Bootstrap-Stichprobenverteilung** die tatsächliche Stichprobenverteilung der interessierenden statistischen Größe approximiert.

Für bestimmte statistische Größen wie **Mittelwert, Varianz und Kovarianz** lässt sich diese Beziehung über die Betrachtung der entsprechenden Grenzverteilungen untersuchen. Die in meiner Arbeit dargestellte Beweisidee betrachtet dabei insbesondere die Annäherung dieser Verteilungen über uniforme Konvergenz.

Bootstrapping zeigt damit eine spannende Grundidee der Statistik: **Wenn die zugrunde liegende Verteilung unbekannt ist, können die vorhandenen Daten selbst genutzt werden, um wiederholte Stichproben zu simulieren und dadurch Aussagen über die Unsicherheit statistischer Schätzungen zu gewinnen.**

## Hausarbeit & Präsentation

Wer sich genauer für die Bootstrap-Methode, das Beispiel, die Monte-Carlo-Approximation und die mathematische Beweisidee interessiert, findet hier meine vollständige Hausarbeit sowie die dazugehörige Präsentation:

**[Hausarbeit als PDF herunterladen](/assets/documents/de/Hausarbeit_bootstrapping.pdf)**

**[Präsentation als PDF ansehen](/assets/documents/de/Hausarbeit_bootstrapping_presentation.pdf)**

*„Bootstrapping“*  
Statistik-Hausarbeit, Hochschule Trier, 2026
