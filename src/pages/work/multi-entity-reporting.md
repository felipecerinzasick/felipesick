---
layout: ../../layouts/Article.astro
title: Consolidated reporting across entities
date: November 2026
status: In progress
summary: A liquidity and asset view across a holding structure with intercompany balances and shareholder loans, built on fictional entities.
---

<!-- TODO: build the demo workbook and embed it. All entities fictional. -->

## The problem

Once a founder or a family has more than one company, nobody can answer "how much cash do we actually have, and where?" without a week of emails. Each entity's books are fine on their own; the picture across them is what's missing.

## The demo

Four fictional entities: a Swiss holding, an operating company, a real-estate company and a foreign subsidiary. Intercompany receivables and payables, a shareholder loan, two currencies.

The workbook produces:

- A consolidated liquidity view by entity, bank and currency, with intercompany eliminated
- An asset register with valuation basis and date
- Financing arrangements and covenants with next review dates
- A thirteen-week cash forecast at group level

## Design choices

Every number links back to a ledger export or a bank statement. Manual inputs are on one tab, coloured, and dated. The output is one page.

*Embedded workbook goes here.*
