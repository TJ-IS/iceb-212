---
theme: scholarly
title: Not All GenAI Disclosures Are Alike
description: ICEB 2026 conference presentation slides
authors:
  - name: Fangzhan Lin
    institution: School of Economics and Management, Tongji University
  - name: Ke Xu
    institution: School of Economics and Management, Tongji University
  - name: Zhongyun Zhou
    institution: School of Economics and Management, Tongji University
footerLeft: F. Lin · K. Xu · Z. Zhou
footerMiddle: The 26th International Conference on Electronic Business · Beijing · July 16–20, 2026
class: text-left
transition: slide-left
mdc: true
aspectRatio: 16/9
themeConfig:
  colorTheme: oxford-burgundy
  sectionMode: light
---

# Not All GenAI Disclosures Are Alike

## How the Stage of GenAI Involvement Shapes Purchase Intention for Digital Games

**ICEB 2026 · Beijing, China**

---
layout: agenda
---

# Roadmap

1. Research context and motivation
2. Theoretical framework and hypotheses
3. Scenario-based experiment
4. Empirical findings
5. Contributions and implications

---
layout: section
---

# Research Context

---
layout: default
---

# Why GenAI Disclosure in Games Matters

<div class="contrast-block">
<div>

<h3>Evidence from AI product research</h3>

<ul>
<li>Disclosure of AI involvement can reduce valuation in creative contexts.</li>
<li>Users may infer weaker human authorship, effort, and authenticity.</li>
</ul>
</div>

<div>

<h3>What is unique in digital games</h3>

<ul>
<li>Games are interactive hedonic systems whose value unfolds during use.</li>
<li>Disclosure can signal not only production origin, but also experiential potential.</li>
</ul>
</div>
</div>

<div class="takeaway">
In games, GenAI disclosure can activate both source-based inferences and interaction-based expectations.
</div>

---
layout: default
---

# Stage of GenAI Involvement as a Critical Distinction

<p class="realm-intro">The same "GenAI disclosure" can be interpreted differently depending on when AI is framed as contributing.</p>

<div class="columns-2">
<div>
<h3>Pre-interaction involvement</h3>
<p>GenAI is described as helping generate dialogue, events, and world content before gameplay starts. AI is framed as a backstage production aid.</p>
</div>
<div>
<h3>During-interaction involvement</h3>
<p>GenAI is described as generating dialogue, events, and interactions in real time during gameplay. AI is framed as an in-play interaction capability.</p>
</div>
</div>

<div class="takeaway">
This stage distinction is expected to shape novelty inferences and downstream purchase-related responses.
</div>

---
layout: statement
---

# Research Question

**How does GenAI disclosure influence players' purchase intention for digital games, and through what mechanisms does this effect emerge?**

---
layout: section
---

# Theoretical Framework

---
layout: default
---

# Dual-Pathway Logic

<div class="realm-grid">
<div><strong>Negative pathway</strong><br/>GenAI disclosure lowers <em>perceived effort</em> by weakening inferences of human creative labor.</div>
<div><strong>Positive pathway</strong><br/>GenAI disclosure can increase <em>perceived novelty</em> by signaling technological distinctiveness.</div>
<div><strong>Moderation</strong><br/>The novelty pathway is stronger when GenAI is framed as contributing during gameplay.</div>
<div><strong>Outcome</strong><br/>Both pathways ultimately shape purchase intention, with willingness to pay as a supplementary outcome.</div>
</div>

---
layout: default
---

# Hypotheses

<div class="process-grid">
<div><strong>H1</strong><br/>GenAI disclosure decreases perceived effort.</div>
<div><strong>H2</strong><br/>Perceived effort positively influences purchase intention.</div>
<div><strong>H3</strong><br/>GenAI disclosure increases perceived novelty.</div>
<div><strong>H4</strong><br/>Stage of involvement moderates H3: stronger under during-interaction involvement.</div>
<div><strong>H5</strong><br/>Perceived novelty positively influences purchase intention.</div>
<div><strong>Supplement</strong><br/>Willingness to pay should show directionally similar but weaker patterns.</div>
</div>

<div class="takeaway">
The framework predicts opposite indirect effects: a negative route via effort and a stage-contingent positive route via novelty.
</div>

---
layout: section
---

# Method

---
layout: default
class: procedure-slide
---

# Research Design and Procedure

<div class="process-grid">
<div><strong>1. Design</strong><br/>Scenario-based online experiment in digital game context.</div>
<div><strong>2. Conditions</strong><br/>No disclosure vs. pre-interaction disclosure vs. during-interaction disclosure.</div>
<div><strong>3. Stimulus</strong><br/>Same product page (title, genre, price, screenshots, description); only disclosure statement varied.</div>
<div><strong>4. Platform</strong><br/>Participants recruited from Credamo; only respondents with prior game experience included.</div>
<div><strong>5. Measures</strong><br/>Perceived effort, perceived novelty, purchase intention, willingness to pay, checks and controls.</div>
<div><strong>6. Analysis</strong><br/>Mean comparisons, regression with controls, and bootstrap mediation (5,000 resamples).</div>
</div>

<div class="metric-row">
<span><strong>3</strong><br/>conditions</span>
<span><strong>399</strong><br/>valid responses</span>
<span><strong>133</strong><br/>per condition</span>
<span><strong>5,000</strong><br/>bootstrap resamples</span>
</div>

<div class="takeaway">
The experiment isolates disclosure framing while keeping product information constant.
</div>

---
layout: default
---

# Experimental Stimuli: What Participants Saw

<div class="columns-2">
<div>
<h3>Pre-interaction disclosure text</h3>
<p>GenAI is used to pre-generate parts of dialogue, story events, and world content during development; AI does not keep generating this content during gameplay.</p>
</div>
<div>
<h3>During-interaction disclosure text</h3>
<p>GenAI is used to generate parts of dialogue, in-game events, and world content in real time during gameplay.</p>
</div>
</div>

<div class="takeaway">
The manipulation changes the disclosed stage of contribution, not the timing of disclosure presentation.
</div>

---
layout: default
---

# Sample and Measurement Quality

<div class="columns-3">
<div>
<h3>Sample profile</h3>
<p>60.2% female; 72.7% aged 18-35; 85.5% bachelor degree or above.</p>
</div>
<div>
<h3>Scale reliability</h3>
<p>Cronbach's alpha: effort = .941, novelty = .816, purchase intention = .929.</p>
</div>
<div>
<h3>Control variables</h3>
<p>Openness to new technology, game genre preference, and AI familiarity were included in regressions.</p>
</div>
</div>

---
layout: section
---

# Findings

---
layout: default
class: framework-slide
---

# Conceptual Model

```mermaid
flowchart LR
    disclosure[GenAIDisclosure]
    stage[StageOfGenAIInvolvement]
    effort[PerceivedEffort]
    novelty[PerceivedNovelty]
    intention[PurchaseIntention]
    wtp[WillingnessToPaySupplement]

    disclosure -->|"H1 (-)"| effort
    effort -->|"H2 (+)"| intention
    disclosure -->|"H3 (+)"| novelty
    stage -->|"Moderates H3"| novelty
    novelty -->|"H5 (+)"| intention
    intention -->|"SupplementaryOutcome"| wtp
```

<div class="caption">
Dual-pathway model: source-related effort loss versus stage-contingent novelty gain.
</div>

---
layout: default
---

# Manipulation Checks

<div class="columns-2">
<div>
<h3>Disclosure salience</h3>
<p>Participants in disclosure conditions reported significantly higher perceived AI use than no-disclosure participants: F(2, 396) = 339.58, p &lt; .001.</p>
</div>
<div>
<h3>Stage differentiation</h3>
<p>Participants correctly distinguished pre-interaction versus during-interaction involvement, confirming successful stage manipulation.</p>
</div>
</div>

<div class="takeaway">
Respondents noticed both whether GenAI was disclosed and which stage of involvement was described.
</div>

---
layout: default
---

# Negative Pathway: Perceived Effort

<p class="realm-intro">Disclosure consistently reduced effort inferences, which are positively linked to purchase intention.</p>

<div class="finding-grid three realm-entertainment">
<div>
<h3>H1 supported</h3>
<p>Disclosure lowered perceived effort versus no disclosure (Welch's t = -6.18, p &lt; .001, d = -0.60; regression beta = -0.814, p &lt; .001).</p>
</div>
<div>
<h3>H2 supported</h3>
<p>Perceived effort positively predicted purchase intention (r = .216, p &lt; .001; regression beta = 0.081, p = .031).</p>
</div>
<div>
<h3>Indirect effect nuance</h3>
<p>Negative indirect effect via effort was marginal (indirect = -0.065, 95% CI [-0.146, 0.001], p = .053).</p>
</div>
</div>

---
layout: default
---

# Positive Pathway: Perceived Novelty

<p class="realm-intro">The novelty route was robust, and strongly tied to purchase intention.</p>

<div class="finding-grid three realm-education">
<div>
<h3>H3 supported</h3>
<p>Disclosure increased novelty versus no disclosure (Welch's t = 2.88, p = .004, d = 0.32; regression beta = 0.288, p = .001).</p>
</div>
<div>
<h3>H5 supported</h3>
<p>Perceived novelty strongly predicted purchase intention (r = .554, p &lt; .001; regression beta = 0.409, p &lt; .001).</p>
</div>
<div>
<h3>Mechanism strength</h3>
<p>Compared with effort, the novelty pathway showed a stronger and more stable link to purchase intention.</p>
</div>
</div>

---
layout: default
class: escapism-slide
---

# Moderation by Stage of Involvement

<p class="realm-intro">Stage framing determines whether the positive novelty mechanism is activated strongly enough.</p>

<div class="finding-grid four realm-escapism">
<div>
<h3>H4 supported</h3>
<p>Novelty was higher in during-interaction than pre-interaction disclosure (Welch's t = 2.68, p = .008, d = 0.33).</p>
</div>
<div>
<h3>Condition-level detail</h3>
<p>Relative to no disclosure, during-interaction framing significantly raised novelty; pre-interaction framing did not.</p>
</div>
<div>
<h3>Mediated effect (pre)</h3>
<p>Indirect effect through novelty was positive but not significant: 95% CI [-0.016, 0.189].</p>
</div>
<div>
<h3>Mediated effect (during)</h3>
<p>Indirect effect through novelty was significant: 95% CI [0.071, 0.303]; index of moderated mediation = 0.100, 95% CI [0.017, 0.197].</p>
</div>
</div>

---
layout: default
class: loop-slide
---

# Supplementary Outcome: Willingness to Pay

<p class="realm-intro">WTP patterns are directionally similar but weaker than purchase intention.</p>

<div class="interaction-map">
<div><span>1</span><strong>No direct differences</strong><p>No significant condition-level differences in WTP were observed.</p></div>
<div><span>2</span><strong>Price anchoring</strong><p>WTP was highly skewed, with median CNY 68 in all three conditions.</p></div>
<div><span>3</span><strong>Effort mechanism</strong><p>Negative indirect effect via perceived effort was significant: 95% CI [-13.38, -2.01].</p></div>
<div><span>4</span><strong>Novelty mechanism</strong><p>Positive indirect effect via perceived novelty was not significant: 95% CI [-1.08, 5.15].</p></div>
</div>

---
layout: section
---

# Contributions and Implications

---
layout: default
---

# Theoretical Contributions

<div class="contrib-grid">
<div>
<h3>Disclosure is not unitary</h3>
<p>The study separates disclosure presence from the stage of GenAI involvement described by disclosure.</p>
</div>
<div>
<h3>Dual-pathway mechanism</h3>
<p>GenAI disclosure simultaneously activates a negative effort pathway and a positive novelty pathway.</p>
</div>
<div>
<h3>Game-context extension</h3>
<p>Findings extend GenAI disclosure theory to interactive hedonic systems, not only static digital products.</p>
</div>
</div>

---
layout: default
---

# Practical Implications

<div class="implication-grid">
<div><strong>Design wording strategically</strong><br/>Disclosure phrasing should be treated as a design lever, not only a compliance requirement.</div>
<div><strong>Highlight in-play value</strong><br/>Framing GenAI as contributing during gameplay can better activate novelty perceptions.</div>
<div><strong>Avoid pure backstage framing</strong><br/>Pre-interaction-only narratives may overemphasize reduced human effort and weaken evaluation.</div>
<div><strong>Balance trust and excitement</strong><br/>Platform and developer communication should jointly manage effort concerns and novelty appeal.</div>
</div>

---
layout: default
---

# Limitations and Future Research

<div class="columns-2">
<div>
<h3>Limitations</h3>
<ul>
<li>Single game genre and single scenario limit generalizability.</li>
<li>Main outcomes focus on self-reported purchase intention.</li>
<li>Only stage framing is modeled; other beliefs (e.g., authenticity, realism) were not tested.</li>
</ul>
</div>
<div>
<h3>Future directions</h3>
<ul>
<li>Compare platforms, genres, and cultural contexts.</li>
<li>Incorporate interviews, behavioral logs, and field experiments.</li>
<li>Test additional moderators, including AI attitudes and innovation orientation.</li>
</ul>
</div>
</div>

---
layout: statement
---

# Takeaway

**GenAI disclosure in digital games triggers two opposite mechanisms: it can reduce perceived human effort while increasing perceived novelty, and the positive route is strongest when AI is framed as participating during gameplay.**

---
layout: acknowledgments
---

<div class="closing-note">
<p>This work was supported by the National Natural Science Foundation of China [grant number 72261160394].</p>
<p><strong>Thank you.</strong></p>
<p>Questions and comments are welcome.</p>
</div>

---
layout: references
---

[[bibliography]]
