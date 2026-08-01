---
layout: blog
title: "What Does Explainable AI Actually Mean?"
subtitle: "Why accurate predictions alone are not always enough."
description: "An accessible introduction to explainable AI, global and local explanations, and the limitations of XAI methods."
date: 2026-07-29
category: "AI & Explainability"
lang: "en"
translation_url: "/posts/beispiel-blogpost.html"
permalink: "/en/posts/what-does-explainable-ai-mean.html"
---

Artificial intelligence can make remarkably accurate predictions today. For important decisions, however, knowing only a model's output is not enough. We also want to understand **how** that output was produced.

## From prediction to explanation

Imagine a model classifies a loan application as risky. The prediction alone does not answer the most important questions:

- Which information had the greatest influence?
- Would a small change have produced a different result?
- Is the model relying on potentially problematic relationships?

Explainable AI—often shortened to *XAI*—is concerned with methods designed to answer questions like these.

![Abstract representation of an AI system](/assets/assets/img/blog/en/blog/b1.jpg)

## Global and local explanations

A **global explanation** describes how a model behaves in general. For example, it can show which features are especially influential across many predictions.

A **local explanation**, by contrast, examines one specific decision. It attempts to explain why the model produced this particular result for this particular case.

Both perspectives are useful:

1. Global explanations support the general evaluation of a model.
2. Local explanations help us understand individual decisions.
3. Together, they can reveal errors, unwanted dependencies and bias.

## An explanation is not automatically the truth

Even an explanation that appears intuitive must be examined critically. Some methods provide only an approximation of a complex model's behaviour. A plausible presentation is therefore not necessarily a complete or causal explanation.

![Visualisation of decisions and uncertainty](/assets/assets/img/blog/en/blog/b2.jpg)

## Conclusion

Explainable AI does not automatically create fair or error-free systems. It can, however, help us evaluate models, question decisions and communicate technical results more clearly.

The crucial question is therefore not only: **How accurate is the model?** It is equally important to ask: **Do we have good reasons to trust its behaviour in this application?**
