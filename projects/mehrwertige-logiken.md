---
layout: project
title: "Mehrwertige Logiken"
subtitle: "Logische Systeme mit zusätzlichen Wahrheitswerten – von der dreiwertigen Łukasiewicz-Logik bis zur Anwendung in VDM-SL."
description: "Seminararbeitsprojekt über mehrwertige Logiken, die dreiwertige Łukasiewicz-Logik L3 und ihre praktische Anwendung in VDM-SL."
tags:
  - Mehrwertige Logiken
  - Łukasiewicz-Logik
  - Prädikatenlogik
  - VDM-SL
date: 2024-01-01
lang: "de"
permalink: "/projects/mehrwertige-logiken.html"
---

In meiner Seminararbeit habe ich mich mit **mehrwertigen Logiken** beschäftigt. Anders als die klassische Aussagenlogik, die lediglich zwischen *wahr* und *falsch* unterscheidet, können mehrwertige Logiken zusätzliche Wahrheitswerte verwenden.

Die Motivation dafür ist, dass sich nicht jede Aussage sinnvoll eindeutig als wahr oder falsch einordnen lässt. Ein einfaches Beispiel ist die Aussage *„Morgen wird es regnen“*. Zum gegenwärtigen Zeitpunkt kann ihr Wahrheitswert noch nicht eindeutig bestimmt werden. Durch einen zusätzlichen Wahrheitswert für *unbekannt* oder *unbestimmt* können solche Situationen innerhalb einer Logik modelliert werden.

## Die Idee

Im ersten Teil meiner Seminararbeit habe ich untersucht, wie eine allgemeine **n-wertige Logik** definiert werden kann. Dafür müssen unter anderem die möglichen Wahrheitswerte, logischen Operatoren, Variablen sowie deren Semantik festgelegt werden.

Ein wichtiger Unterschied zur klassischen Logik besteht darin, dass nicht nur zwei Wahrheitswerte existieren müssen. Stattdessen kann grundsätzlich eine beliebige endliche Menge von Wahrheitswerten definiert werden. Zusätzlich wird festgelegt, welche dieser Werte als *wahr* beziehungsweise als **designierte Wahrheitswerte** betrachtet werden.

## Dreiwertige Łukasiewicz-Logik

Als konkretes Beispiel habe ich die **dreiwertige Łukasiewicz-Logik L3** betrachtet. Sie erweitert die klassischen Wahrheitswerte `0` und `1` um einen dritten Wert `u`:

- `0` – falsch
- `u` – unbekannt bzw. nicht bestimmbar
- `1` – wahr

Damit lassen sich Aussagen modellieren, deren Wahrheitswert zum aktuellen Zeitpunkt nicht eindeutig feststeht. Die Wahrheitswerte werden dabei durch die Ordnung

`0 < u < 1`

nach ihrem Wahrheitsgehalt angeordnet.

Die Einführung eines zusätzlichen Wahrheitswertes wirkt sich auch auf bekannte logische Operatoren wie **Negation, Und, Oder, Implikation und Äquivalenz** aus. In der Arbeit habe ich deshalb deren Verhalten innerhalb der L3-Logik anhand entsprechender Wahrheitstabellen betrachtet.

Anschließend habe ich die zunächst aussagenlogisch definierte L3-Logik um **prädikatenlogische Elemente** erweitert. Dadurch können unter anderem Variablen, Konstanten, Funktionen, Prädikate sowie All- und Existenzquantoren verwendet werden.

## Praktische Anwendung

Mehrwertige Logiken sind nicht nur von theoretischem Interesse. Als praktisches Beispiel habe ich die **Vienna Development Method Specification Language (VDM-SL)** betrachtet.

VDM ist eine Methode zur formalen Spezifikation und Entwicklung von Computerprogrammen. In der betrachteten VDM-Logik wird eine dreiwertige Logik verwendet, bei der neben `true` und `false` ein zusätzlicher Wert zur Repräsentation eines Fehlers existiert. Dieser lässt sich mit dem unbekannten Wahrheitswert `u` der L3-Logik in Verbindung bringen.

Damit lässt sich beispielsweise unterscheiden, ob ein Ausdruck tatsächlich **falsch** ist oder ob seine Auswertung aufgrund eines **Fehlers beziehungsweise eines undefinierten Ergebnisses** gar keinen klassischen Wahrheitswert liefern kann.

Mehrwertige Logiken zeigen damit, dass die klassische Unterscheidung zwischen *wahr* und *falsch* nicht für jede Problemstellung ausreichend sein muss. Zusätzliche Wahrheitswerte ermöglichen es, Unsicherheit, unbekannte Werte oder Fehler explizit innerhalb eines logischen Systems abzubilden. Neben Spezifikationssprachen finden sich Anwendungen unter anderem bei der Testmustergenerierung, der Analyse von Schaltkreisen und der Programmverifikation.

## Seminararbeit & Präsentation

Wer sich genauer für die Definition mehrwertiger Logiken, die dreiwertige Łukasiewicz-Logik und das Anwendungsbeispiel mit VDM-SL interessiert, findet hier die vollständige Seminararbeit sowie die dazugehörige Präsentation:

**[Seminararbeit als PDF herunterladen](/assets/documents/de/Seminararbeit_mehrwertige_logiken.pdf)**

**[Präsentation als PDF ansehen](/assets/documents/de/Seminararbeit_mehrwertige_logiken_presentation%20%281%29.pdf)**

*„Mehrwertige Logiken“*  
Seminararbeit, Hochschule Trier, 2024
