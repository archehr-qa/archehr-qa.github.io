# CL4Health @LREC 2026 Shared Task on grounded question answering (QA) from electronic health records (EHRs)

---

## News

* **February 11, 2026:** Subtasks 2–3 Codabench links are now live for submissions. Subtask 2: [codabench.org/competitions/13526/](https://www.codabench.org/competitions/13526/); Subtask 3: [codabench.org/competitions/13527/](https://www.codabench.org/competitions/13527/).
* **January 30, 2026:** Subtasks 2–3 test dataset released to registered participants. Evaluation (scoring) scripts for all subtasks are now available on [GitHub](https://github.com/soni-sarvesh/archehr-qa-2026).
* **January 27, 2026:** Due to a Codabench outage, the Subtask 1 submission deadline has been extended by 24 hours (now due **Jan 27, 11:59 PM AoE**). Subtasks 2–3 test data will be released after the Subtask 1 deadline.
* **January 22, 2026:** Subtask 1 Codabench link is now live for submissions (please complete the required submission form for each run): [https://www.codabench.org/competitions/12865/](https://www.codabench.org/competitions/12865/).
* **January 20, 2026**: Subtask 1 test set and scoring script are now available on GitHub: [https://github.com/soni-sarvesh/archehr-qa-2026](https://github.com/soni-sarvesh/archehr-qa-2026).
* **January 20, 2026**: Registration is now open. Please fill out the participant registration form: [https://forms.gle/JkkE2g3rvyXMsTp99](https://forms.gle/JkkE2g3rvyXMsTp99).

## Introduction

The ArchEHR-QA (“Archer”) shared task focuses on **answering patients' health-related questions using their own electronic health records (EHRs)**.
While prior work has explored general health question answering, far less attention has been paid to leveraging patient-specific records and to **grounding model outputs in explicit clinical evidence**, i.e., linking answers to specific supporting content in the clinical notes.
ArchEHR-QA addresses this gap by targeting the problem of producing answers to patient questions that are supported by and explicitly linked to the underlying clinical notes.

## Important Dates
<p style="margin-top: -1.2em;">(Tentative)</p>

* First call for participation: January 2 (Friday), 2026
* **Release of the development dataset:** January 2 (Friday), 2026
* **Release of the test dataset:**
  * Subtask 1: January 20 (Tuesday), 2026
  * Subtasks 2–3: January 30 (Friday), 2026
  * Subtask 4: February 16 (Monday), 2026
* **Submission of system responses:**
  * Subtask 1: January 27 (Tuesday), 2026
  * Subtasks 2–3: February 16 (Monday), 2026
  * Subtask 4: March 2 (Monday), 2026
* **Submission of shared task papers (optional):** March 13 (Friday), 2026
* Notification of acceptance: March 24 (Tuesday), 2026
* Camera-ready system papers due: March 31 (Tuesday), 2026
* **CL4Health Workshop Date:** May 12 (Tuesday), 2026

All deadlines are **11:59 PM ("Anywhere on Earth")**.

**Join our Google Group** at [https://groups.google.com/g/archehr-qa](https://groups.google.com/g/archehr-qa) to get the important updates! For any questions related to the shared task, please reach out using the [Google Group](https://groups.google.com/g/archehr-qa) or email at **[sarvesh.soni@nih.gov](mailto:sarvesh.soni@nih.gov)**.

**Note:**
The Google Group e-mails may end up in your spam folder.
Please add [archehr-qa@googlegroups.com](mailto:archehr-qa@googlegroups.com) and [noreply@groups.google.com](mailto:noreply@groups.google.com) to your address book to ensure delivery of these emails.

## Task Overview

This second iteration builds on the 2025 challenge (which was collocated with the ACL 2025 BioNLP Workshop) by expanding the dataset and introducing **four complementary subtasks** spanning patient question interpretation, clinical evidence identification, answer generation, and answer–evidence alignment.
This year's shared task will follow a **staged data release schedule**, with separate deadlines for Subtask 1, Subtasks 2–3, and Subtask 4.
Teams may **participate in any subset of subtasks** and will be invited to submit system description papers detailing their approaches and results.


### Example Cases from Dataset

The dataset consists of patient-authored questions, corresponding clinician-interpreted counterparts, clinical note excerpts with sentence-level relevance annotations, and reference clinician-authored answers grounded in the notes.

<p style="margin-bottom: 1em;"><strong><em>Example Case #1</em></strong></p>
> <div style="margin-bottom:0.5em;"><strong><em>Patient Question</em></strong></div>
> I had severe abdomen pain and was hospitalised for 15 days in ICU, diagnoised with CBD sludge.
> Doctor advised for ERCP.
> My question is if the sludge was there does not any medication help in flushing it out?
> Whether ERCP was the only cure?

> <div style="margin-bottom:0.5em;"><strong><em>Clinician-Interpreted Question</em></strong></div>
> Why was ERCP recommended over a medication-based treatment for CBD sludge?

> <div style="margin-bottom:0.5em;"><strong><em>Clinical Note Excerpt</em></strong> (sentences numbered for grounding)</div>
> <span id="evidence-1.1">**1:** During the ERCP a pancreatic stent was required to facilitate access to the biliary system (removed at the end of the procedure), and a common bile duct stent was placed to allow drainage of the biliary obstruction caused by stones and sludge.</span>
> **2:** However, due to the patient's elevated INR, no sphincterotomy or stone removal was performed.
> **3:** Frank pus was noted to be draining from the common bile duct, and post-ERCP it was recommended that the patient remain on IV Zosyn for at least a week.
> **4:** The Vancomycin was discontinued.
> <p style="margin-top: 0.5em;"></p>
> <span id="evidence-1.5">**5:** On hospital day 4 (post-procedure day 3) the patient returned to ERCP for re-evaluation of her biliary stent as her LFTs and bilirubin continued an upward trend.</span>
> <span id="evidence-1.6">**6:** On ERCP the previous biliary stent was noted to be acutely obstructed by biliary sludge and stones.</span>
> <span id="evidence-1.7">**7:** As the patient's INR was normalized to 1.2, a sphincterotomy was safely performed, with removal of several biliary stones in addition to the common bile duct stent.</span>
> **8:** At the conclusion of the procedure, retrograde cholangiogram was negative for filling defects.

> <div style="margin-bottom:0.5em;"><strong><em>Clinical Specialty</em></strong></div>
> Gastroenterology

> <div style="margin-bottom:0.5em;"><strong><em>Answer</em></strong> (hover over a citation to highlight relevant sentences)</div>
> <span class="answer-sentence">An endoscopic retrograde cholangiopancreatography, ERCP, was recommended to place a common bile duct stent <span class="citation" data-evidence="evidence-1.1">[1]</span>.</span>
> <span class="answer-sentence">This stent was placed to allow drainage of the biliary obstruction which was caused by stones and sludge <span class="citation" data-evidence="evidence-1.1">[1]</span>.</span>
> <span class="answer-sentence">Due to no improvement in liver function, the patient needed a repeat ERCP <span class="citation" data-evidence="evidence-1.5">[5]</span>.</span>
> <span class="answer-sentence">The repeat ERCP showed that the biliary stent placed in the first ERCP was obstructed by stones and sludge <span class="citation" data-evidence="evidence-1.6">[6]</span>.</span>
> <span class="answer-sentence">The stones and stent were successfully removed during this procedure by performing a sphincterotomy <span class="citation" data-evidence="evidence-1.7">[7]</span>.</span>


<p style="margin-bottom: 1em;"><strong><em>Example Case #2</em></strong></p>
> <div style="margin-bottom:0.5em;"><strong><em>Patient Question</em></strong></div>
> I just wrote about my dad given multiple shots of lasciks after he was already so swelled his shin looked like it would burst open.
> Why would they give him so much.
> He was on oxygen and they took him off of the higher flow rate.

> <div style="margin-bottom:0.5em;"><strong><em>Clinician-Interpreted Question</em></strong></div>
> Why was he given lasix and his oxygen flow rate was reduced?

> <div style="margin-bottom:0.5em;"><strong><em>Clinical Note Excerpt</em></strong> (sentences numbered for grounding)</div>
> <span id="evidence-2.1">**1:** Acute diastolic heart failure: Pt developed signs and symptoms of volume overload with shortness of breath, increased oxygen requirement and lower extremity edema.</span>
> **2:** Echo showed preserved EF, no WMA and worsening AI.
> **3:** CHF most likely secondary to worsening valvular disease.
> <span id="evidence-2.4">**4:** He was diuresed with lasix IV, intermittently on lasix gtt then transitioned to PO torsemide with improvement in symptoms, although remained on a small amount of supplemental oxygen for comfort.</span>
> <p style="margin-top: 0.5em;"></p>
> <span id="evidence-2.5">**5:** Respiratory failure: The patient was intubated for lethargy and acidosis initially and was given 8 L on his presentation to help maintain his BP's.</span>
> <span id="evidence-2.6">**6:** This undoubtedly contributed to his continued hypoxemic respiratory failure.</span>
> **7:** He was advanced to pressure support with stable ventilation and oxygenation.
> **8:** On transfer to the CCU patient was still intubated but off pressors.
> **9:** Patient was extubated successfully.
> **10:** He was reintubated transiently for 48 hours for urgent TEE and subsequently extubated without adverse effect or complication.

> <div style="margin-bottom:0.5em;"><strong><em>Clinical Specialty</em></strong></div>
> Cardiology

> <div style="margin-bottom:0.5em;"><strong><em>Answer</em></strong> (hover over a citation to highlight relevant sentences)</div>
> <span class="answer-sentence">The patient was given Lasix for acute diastolic heart failure with symptoms including shortness of breath and lower extremity edema <span class="citation" data-evidence="evidence-2.1">[1,</span><span class="citation" data-evidence="evidence-2.4">4]</span>.</span>
> <span class="answer-sentence">The patient was given 8 liters of fluid to help maintain his blood pressure which contributed to his respiratory failure <span class="citation" data-evidence="evidence-2.5">[5,</span><span class="citation" data-evidence="evidence-2.6">6]</span>.</span>
> <span class="answer-sentence">After the patient's heart failure was treated with Lasix, he showed improvement in shortness of breath and his oxygen requirement, and he only needed to remain on a small amount of oxygen for comfort <span class="citation" data-evidence="evidence-2.4">[4]</span>.</span>


## Subtask 1: Question Interpretation

Patient questions are often long and verbose, making it important to quickly identify the underlying information need.
This subtask evaluates a system's ability to **transform a free-text, patient-authored question** into a clear and concise **clinician-interpreted question** that reflects how a clinician would query a smart electronic health record (EHR) system when preparing a response to the patient.

* **Goal:**
  * Generate a single, well-formed clinician question that captures the core clinical information need implied by the patient’s narrative, phrased as a query to an intelligent EHR system.
* **Input:**
  * Patient‑authored question (_Patient Question_)
* **Expected output:**
  * Clinician‑interpreted question that captures the main medical concern(s).

<p style="margin-bottom: 1em;"><strong><em>Example #1</em></strong></p>

> <div style="margin-bottom:0.5em;"><strong><em>Input – Patient Question</em></strong></div>
> Took my 59 yo father to ER ultrasound discovered he had an aortic aneurysm.
> He had a salvage repair (tube graft).
> Long surgery / recovery for couple hours then removed packs.
> why did they do this surgery?????
> After this time he spent 1 month in hospital now sent home.

> <div style="margin-bottom:0.5em;"><strong><em>Target output – Clinician-Interpreted Question</em></strong></div>
> Why did they perform the emergency salvage repair on him?

> <div style="margin-bottom:0.5em;"><strong><em>Sample System Response</em></strong> (Good)</div>
> What was the indication for emergent surgical repair for his aortic aneurysm?
> <div style="margin-bottom:0.5em;margin-top:1em;"><strong><em>Sample System Response</em></strong> (Bad – generic)</div>
> What is the purpose of salvage repair for aortic aneurysm treatment?

<p style="margin-bottom: 1em;"><strong><em>Example #2</em></strong></p>
> <div style="margin-bottom:0.5em;"><strong><em>Patient Question</em></strong></div>
> I just wrote about my dad given multiple shots of lasciks after he was already so swelled his shin looked like it would burst open.
> Why would they give him so much.
> He was on oxygen and they took him off of the higher flow rate.

> <div style="margin-bottom:0.5em;"><strong><em>Target output – Clinician-Interpreted Question</em></strong></div>
> Why was he given lasix and his oxygen flow rate was reduced?

> <div style="margin-bottom:0.5em;"><strong><em>Sample System Response</em></strong> (Good)</div>
> Why were multiple doses of lasix administered despite decreased oxygen requirements and swelling?
> <div style="margin-bottom:0.5em;margin-top:1em;"><strong><em>Sample System Response</em></strong> (Ok – generic/malformed)</div>
> Lasix dosage protocol for severe edema with oxygen therapy?

### More details

* The generated question should be concise (restricted to **15 words**).
* The question should focus on what information or rationale the clinician needs from the record to answer the patient question.
* The clinician-interpreted question should preserve the patient's core information need and **avoid introducing new clinical facts** not present in the patient narrative.

## Subtask 2: Evidence Identification

Clinical notes are lengthy and provide rich context across multiple problems and events.
This subtask evaluates a system's ability to identify the **minimal set of note sentences** that provide the clinical evidence needed to answer a patient's question.

* **Goal:**
  * Identify the clinically relevant sentence(s) in the note excerpt that support answering the question.

* **Input:**
  * Patient‑authored question (_Patient Question_)
  * Clinician‑interpreted question (_Clinician‑Interpreted Question_)
  * Clinical note excerpt with sentences numbered (_Clinical Note Excerpt_)

* **Expected output:**
  * Set of sentence IDs from the note excerpt that constitute the relevant clinical evidence.

<p style="margin-bottom: 1em;"><strong><em>Example #1</em></strong></p>
> <div style="margin-bottom:0.5em;"><strong><em>Input – Patient Question</em></strong></div>
> I had severe abdomen pain and was hospitalised for 15 days in ICU, diagnoised with CBD sludge.
> Doctor advised for ERCP.
> My question is if the sludge was there does not any medication help in flushing it out?
> Whether ERCP was the only cure?
> <div style="margin-bottom:0.5em;margin-top:1em;"><strong><em>Input – Clinician-Interpreted Question</em></strong></div>
> Why was ERCP recommended over a medication-based treatment for CBD sludge?
> <div style="margin-bottom:0.5em;margin-top:1em;"><strong><em>Input – Clinical Note Excerpt</em></strong> (with sentences numbered)</div>
> <span id="st2-evidence-1.1">**1:** During the ERCP a pancreatic stent was required to facilitate access to the biliary system (removed at the end of the procedure), and a common bile duct stent was placed to allow drainage of the biliary obstruction caused by stones and sludge.</span>
> <span id="st2-evidence-1.2">**2:** However, due to the patient's elevated INR, no sphincterotomy or stone removal was performed.</span>
> <span id="st2-evidence-1.3">**3:** Frank pus was noted to be draining from the common bile duct, and post-ERCP it was recommended that the patient remain on IV Zosyn for at least a week.</span>
> <span id="st2-evidence-1.4">**4:** The Vancomycin was discontinued.</span>
> <p style="margin-top: 0.5em;"></p>
> <span id="st2-evidence-1.5">**5:** On hospital day 4 (post-procedure day 3) the patient returned to ERCP for re-evaluation of her biliary stent as her LFTs and bilirubin continued an upward trend.</span>
> <span id="st2-evidence-1.6">**6:** On ERCP the previous biliary stent was noted to be acutely obstructed by biliary sludge and stones.</span>
> <span id="st2-evidence-1.7">**7:** As the patient's INR was normalized to 1.2, a sphincterotomy was safely performed, with removal of several biliary stones in addition to the common bile duct stent.</span>
> <span id="st2-evidence-1.8">**8:** At the conclusion of the procedure, retrograde cholangiogram was negative for filling defects.</span>

> <div style="margin-bottom:0.5em;"><strong><em>Target output – Relevant Evidence Sentences</em></strong></div>
> <span class="citation" data-evidence="st2-evidence-1.1">[1,</span>
<span class="citation" data-evidence="st2-evidence-1.5">5,</span>
<span class="citation" data-evidence="st2-evidence-1.6">6,</span>
<span class="citation" data-evidence="st2-evidence-1.7">7]</span>

> <div style="margin-bottom:0.5em;"><strong><em>Sample System Response</em></strong> (missing key evidence – Precision 1.00, Recall 0.50, F1 0.67)</div>
> <span class="citation" data-evidence="st2-evidence-1.5">[5,</span>
<span class="citation" data-evidence="st2-evidence-1.6">6]</span>
> <div style="margin-bottom:0.5em;margin-top:1em;"><strong><em>Sample System Response</em></strong> (over-inclusive – Precision 0.50, Recall 1.00, F1 0.67)</div>
> <span class="citation" data-evidence="st2-evidence-1.1">[1,</span>
<span class="citation" data-evidence="st2-evidence-1.2">2,</span>
<span class="citation" data-evidence="st2-evidence-1.3">3,</span>
<span class="citation" data-evidence="st2-evidence-1.4">4,</span>
<span class="citation" data-evidence="st2-evidence-1.5">5,</span>
<span class="citation" data-evidence="st2-evidence-1.6">6,</span>
<span class="citation" data-evidence="st2-evidence-1.7">7,</span>
<span class="citation" data-evidence="st2-evidence-1.8">8]</span>

### More details

* Evidence is labeled at the sentence level within the clinical note excerpt.
* Participants may use one or both question variants (patient question and/or clinician-interpreted question) to identify evidence.
  * Participants may also use their own system-generated clinician-interpreted question from Subtask 1 as the query for this subtask.
* The entire clinical note excerpt may not be required to answer the patient question. Thus, selecting all sentences is not mandatory.
* The selected evidence should be **minimal and sufficient** for answering the question.
* Some questions may not be fully answerable from the provided excerpt. This is a natural scenario and a step toward answering questions using the whole EHR. Systems should still select the best-supported sentences when partial evidence exists.

## Subtask 3: Answer Generation

This subtask evaluates a system's ability to **generate an answer** grounded in the provided clinical note excerpt.

* **Goal:**
  * Generate a text answer to the patient's question using only information supported by the clinical note.

* **Input:**
  * Patient‑authored question (_Patient Question_)
  * Clinician‑interpreted question (_Clinician‑Interpreted Question_)
  * Clinical note excerpt (_Clinical Note Excerpt_)

* **Expected output:**
  * A natural-language answer that addresses the patient's question and remains grounded in the note.

<p style="margin-bottom: 1em;"><strong><em>Example #1</em></strong></p>
> <div style="margin-bottom:0.5em;"><strong><em>Input – Patient Question</em></strong></div>
> I had severe abdomen pain and was hospitalised for 15 days in ICU, diagnoised with CBD sludge.
> Doctor advised for ERCP.
> My question is if the sludge was there does not any medication help in flushing it out?
> Whether ERCP was the only cure?
> <div style="margin-bottom:0.5em;margin-top:1em;"><strong><em>Input – Clinician-Interpreted Question</em></strong></div>
> Why was ERCP recommended over a medication-based treatment for CBD sludge?
> <div style="margin-bottom:0.5em;margin-top:1em;"><strong><em>Input – Clinical Note Excerpt</em></strong> (with sentences numbered)</div>
> (See Example Case #1 above.)

> <div style="margin-bottom:0.5em;"><strong><em>Target output – Answer</em></strong> (without citations)</div>
> <span class="answer-sentence">An endoscopic retrograde cholangiopancreatography, ERCP, was recommended to place a common bile duct stent.</span>
> <span class="answer-sentence">This stent was placed to allow drainage of the biliary obstruction which was caused by stones and sludge.</span>
> <span class="answer-sentence">Due to no improvement in liver function, the patient needed a repeat ERCP.</span>
> <span class="answer-sentence">The repeat ERCP showed that the biliary stent placed in the first ERCP was obstructed by stones and sludge.</span>
> <span class="answer-sentence">The stones and stent were successfully removed during this procedure by performing a sphincterotomy.</span>

> <div style="margin-bottom:0.5em;"><strong><em>Sample System Response</em></strong> (bad – generic/not grounded)</div>
> Sometimes bile duct sludge is treated with observation or medications, but procedures like ERCP are commonly recommended when symptoms are severe or there is concern for blockage. ERCP lets clinicians look at the ducts and place a stent to help bile flow, and they may repeat the procedure if tests do not improve. Decisions depend on overall risk, lab trends, and how the patient responds to initial treatment.
> <div style="margin-bottom:0.5em;margin-top:1em;"><strong><em>Sample System Response</em></strong> (ok – some grounding but mostly generic)</div>
> ERCP is often used when sludge or stones are blocking the common bile duct, because it can relieve obstruction and improve drainage. In the note, a bile duct stent was placed to help drainage, and a repeat ERCP was performed when labs continued to worsen. If medications are unlikely to clear a mechanical blockage, endoscopic treatment can allow direct removal of stones/sludge once it is safe to do so.


### More details
  * The generated answer should be limited to **75 words**, which roughly correspond to 5 sentences. This is based on our observations from the baseline experiments and existing literature supporting that a paragraph-long answer is preferred by users [^linetal2003]<sup>,</sup>[^jeonetal2006].
  * Participants may use one or both question variants (patient question and/or clinician-interpreted question) to generate an answer.
    * Participants may also use their own system-generated clinician-interpreted question from Subtask 1 as the query for this subtask.
  * The model must only make use of the provided inputs (questions and note excerpts) to generate an answer.
  * The clinical note excerpt provided may not fully answer the question. In such cases, systems should **avoid speculation** and provide a faithful response consistent with the clinical evidence.
  * The answers should be in the professional register to better match the contents of the clinical notes. Simplification of answers to lay language is assumed to be performed later and is not the focus of this task.
  * Questions may require additional world knowledge to answer, but no external knowledge should be explicitly given to the model (e.g., no external retrieval or injected reference text), at least for the required “no-external-knowledge” run.
  * Participants must submit at least one run (out of up to three) that follows the guidelines prohibiting **external knowledge**.
  * Participants may use extra data (public or non-public), but should clearly describe any additional data and methodology in their system description.


## Subtask 4: Evidence Alignment

Grounded EHR QA requires not only producing an answer, but also **explicitly showing where in the EHR the answer comes from**.
This subtask evaluates a system's ability to **align each answer sentence** to the specific supporting sentence(s) in the clinical note excerpt.

* **Goal:**
  * For each answer sentence, identify the clinical note sentence(s) that support it.

* **Input:**
  * Patient‑authored question (_Patient Question_)
  * Clinician‑interpreted question (_Clinician‑Interpreted Question_)
  * Clinical note excerpt with numbered sentences (_Clinical Note Excerpt_)
  * Answer text to be grounded (Reference _Answer_)

* **Expected output:**
  * For each answer sentence, a set of supporting evidence sentence numbers from the clinical note excerpt.

<p style="margin-bottom: 1em;"><strong><em>Example #1</em></strong></p>
> <div style="margin-bottom:0.5em;"><strong><em>Input – Patient Question</em></strong></div>
> I had severe abdomen pain and was hospitalised for 15 days in ICU, diagnoised with CBD sludge.
> Doctor advised for ERCP.
> My question is if the sludge was there does not any medication help in flushing it out?
> Whether ERCP was the only cure?
> <div style="margin-bottom:0.5em;"><strong><em>Input – Clinician-Interpreted Question</em></strong></div>
> Why was ERCP recommended over a medication-based treatment for CBD sludge?
> <div style="margin-bottom:0.5em;"><strong><em>Input – Clinical Note Excerpt</em></strong> (with sentences numbered)</div>
> <span id="st4-evidence-1.1">**1:** During the ERCP a pancreatic stent was required to facilitate access to the biliary system (removed at the end of the procedure), and a common bile duct stent was placed to allow drainage of the biliary obstruction caused by stones and sludge.</span>
> <span id="st4-evidence-1.2">**2:** However, due to the patient's elevated INR, no sphincterotomy or stone removal was performed.</span>
> <span id="st4-evidence-1.3">**3:** Frank pus was noted to be draining from the common bile duct, and post-ERCP it was recommended that the patient remain on IV Zosyn for at least a week.</span>
> <span id="st4-evidence-1.4">**4:** The Vancomycin was discontinued.</span>
> <p style="margin-top: 0.5em;"></p>
> <span id="st4-evidence-1.5">**5:** On hospital day 4 (post-procedure day 3) the patient returned to ERCP for re-evaluation of her biliary stent as her LFTs and bilirubin continued an upward trend.</span>
> <span id="st4-evidence-1.6">**6:** On ERCP the previous biliary stent was noted to be acutely obstructed by biliary sludge and stones.</span>
> <span id="st4-evidence-1.7">**7:** As the patient's INR was normalized to 1.2, a sphincterotomy was safely performed, with removal of several biliary stones in addition to the common bile duct stent.</span>
> <span id="st4-evidence-1.8">**8:** At the conclusion of the procedure, retrograde cholangiogram was negative for filling defects.</span>

> <div style="margin-bottom:0.5em;margin-top:1em;"><strong><em>Input – Answer</em></strong> (with sentences numbered and no citations)</div>
> <span class="answer-sentence">**1:** An endoscopic retrograde cholangiopancreatography, ERCP, was recommended to place a common bile duct stent.</span>
> <span class="answer-sentence">**2:** This stent was placed to allow drainage of the biliary obstruction which was caused by stones and sludge.</span>
> <span class="answer-sentence">**3:** Due to no improvement in liver function, the patient needed a repeat ERCP.</span>
> <span class="answer-sentence">**4:** The repeat ERCP showed that the biliary stent placed in the first ERCP was obstructed by stones and sludge.</span>
> <span class="answer-sentence">**5:** The stones and stent were successfully removed during this procedure by performing a sphincterotomy.</span>

> <div style="margin-bottom:0.5em;margin-top:1em;"><strong><em>Target Output – Answer</em></strong> (with citations)</div>
> <span class="answer-sentence">**1:** An endoscopic retrograde cholangiopancreatography, ERCP, was recommended to place a common bile duct stent <span class="citation" data-evidence="st4-evidence-1.1">[1]</span>.</span>
> <span class="answer-sentence">**2:** This stent was placed to allow drainage of the biliary obstruction which was caused by stones and sludge <span class="citation" data-evidence="st4-evidence-1.1">[1]</span>.</span>
> <span class="answer-sentence">**3:** Due to no improvement in liver function, the patient needed a repeat ERCP <span class="citation" data-evidence="st4-evidence-1.5">[5]</span>.</span>
> <span class="answer-sentence">**4:** The repeat ERCP showed that the biliary stent placed in the first ERCP was obstructed by stones and sludge <span class="citation" data-evidence="st4-evidence-1.6">[6]</span>.</span>
> <span class="answer-sentence">**5:** The stones and stent were successfully removed during this procedure by performing a sphincterotomy <span class="citation" data-evidence="st4-evidence-1.7">[7]</span>.</span>

> <div style="margin-bottom:0.5em;margin-top:1em;"><strong><em>Sample System Response</em></strong> (under-citing – Precision 0.75, Recall 0.6, F1 0.67)</div>
> <span class="answer-sentence">**1:** An endoscopic [...] bile duct stent <span class="citation" data-evidence="st4-evidence-1.1">[1]</span>.</span>
> <span class="answer-sentence">**2:** This stent was placed [...] caused by stones and sludge.</span>
> <span class="answer-sentence">**3:** Due to no improvement [...] repeat ERCP <span class="citation" data-evidence="st4-evidence-1.5">[5,</span><span class="citation" data-evidence="st4-evidence-1.6">6]</span>.</span>
> <span class="answer-sentence">**4:** The repeat ERCP [...] obstructed by stones and sludge <span class="citation" data-evidence="st4-evidence-1.6">[6]</span>.</span>
> <span class="answer-sentence">**5:** The stones and stent [...] sphincterotomy.</span>
> <div style="margin-bottom:0.5em;margin-top:1em;"><strong><em>Sample System Response</em></strong> (over-citing – Precision 0.50, Recall 1.00, F1 0.67)</div>
> <span class="answer-sentence">**1:** An endoscopic [...] bile duct stent <span class="citation" data-evidence="st4-evidence-1.1">[1]</span>.</span>
> <span class="answer-sentence">**2:** This stent was placed [...] caused by stones and sludge <span class="citation" data-evidence="st4-evidence-1.1">[1,</span><span class="citation" data-evidence="st4-evidence-1.6">6]</span>.</span>
> <span class="answer-sentence">**3:** Due to no improvement [...] repeat ERCP <span class="citation" data-evidence="st4-evidence-1.5">[5]</span>.</span>
> <span class="answer-sentence">**4:** The repeat ERCP [...] obstructed by stones and sludge <span class="citation" data-evidence="st4-evidence-1.1">[1,</span><span class="citation" data-evidence="st4-evidence-1.5">5,</span><span class="citation" data-evidence="st4-evidence-1.6">6]</span>.</span>
> <span class="answer-sentence">**5:** The stones and stent [...] sphincterotomy <span class="citation" data-evidence="st4-evidence-1.6">[6,</span><span class="citation" data-evidence="st4-evidence-1.7">7,</span><span class="citation" data-evidence="st4-evidence-1.8">8]</span>.</span>


### More details
* Participants may use one or both question variants (patient question and/or clinician-interpreted question) to support alignment decisions.
  * Participants may also use their own system-generated clinician-interpreted question from Subtask 1 as additional question context for this subtask.
* Alignment is performed at the **answer-sentence level**: each answer sentence links to zero, one, or multiple note sentences.
* It is not mandatory to cite/align to all note sentences. Only align sentences that provide direct support.
* Some answer sentences may be unsupported by the provided note excerpt.
* There are no limitations on the number of note sentences that may be linked to a given answer sentence.
* Alignments are **many-to-many**: one evidence sentence may support multiple answer sentences, and vice versa.
* As with Subtask 3, at least one submitted run must follow the guideline prohibiting external knowledge; additional data is allowed but must be disclosed.


## Data

The dataset consists of patient-authored questions (inspired by real patient questions) and associated clinical note excerpts (derived from the MIMIC database[^mimic]).
Each data instance is referred to as a case and contains:
* A free-text **_Patient Question_**
* A concise and focused **_Clinician-Interpreted Question_** (used as the reference for Subtask 1)
* A **_Clinical Note Excerpt_** segmented into numbered sentences (sentence IDs are used for grounding).
  * Each note sentence is manually annotated with a relevance label to mark its importance in answering the patient question as `"essential"` / `"supplementary"` / `"not-relevant"` (used as the reference for Subtask 2).
* A reference clinician-authored **_Answer_** (used as the reference for Subtask 3).
  * Each answer sentence is supported by zero or more sentences from the clinical note excerpt (used as the reference for Subtask 4).
* **_Clinical Specialty_** of the case.

**ID format.** Case IDs and sentence IDs are integers stored as strings (e.g., `"1"`, `"5"`).

### Development set
The development set includes the gold outputs needed to develop and/or validate systems for the subtasks (e.g., clinician-interpreted questions, sentence-level evidence labels, reference answers, and answer–evidence alignments).
These are case IDs 1–20 under the "dev" directory at the PhysioNet repository.

### Test set
The test set provides the inputs (questions, note excerpts, and any required auxiliary fields) while withholding gold outputs.
Participants submit predictions for any subset of subtasks they choose to attempt, following the formats defined in <a href="#system-submission" onclick="event.preventDefault(); document.querySelector('#system-submission').scrollIntoView({ behavior: 'smooth' });">System Submission</a>.

#### Case usage by subtask (official evaluation)

* Subtasks 1–3: case IDs **121–167**
* Subtask 4: case IDs **21–167**


#### Staged release plan for the test data

To support the sequential schedule of the shared task, test inputs will be released in stages:

* **January 20, 2026:** Subtask 1 test data release (patient questions only) for cases **121–167**
* **January 30, 2026:** Subtasks 2–3 test data release (clinician-interpreted questions + clinical note excerpts) for cases **121–167**
* **February 16, 2026:** Subtask 4 test data release for cases **21–167**, including the **reference answer text** (with sentences numbered) to be aligned to the clinical note excerpt.
  * Sentence relevance labels are **not included** in the test data releases.


### Access

The dataset is available on **PhysioNet** at **[https://doi.org/10.13026/zzax-sy62](https://doi.org/10.13026/zzax-sy62)**. Please sign up for PhysioNet[^physionet] and complete the required training to access the dataset.


## Evaluation

Each subtask is evaluated independently using automatic metrics. Teams may participate in any subset of subtasks. There will be separate leaderboards for each of the subtasks.

### Subtask 1: Question Interpretation

Subtask 1 is evaluated by comparing the system-generated clinician-interpreted question to the reference clinician-interpreted question.
Outputs that violate the length constraint (15 words) will be truncated to the first 15 words before scoring.
We report the following automatic **text generation metrics**:

* ROUGE[^rouge]
* BERTScore[^bertscore]
* AlignScore[^alignscore]
* MEDCON[^medcon]


### Subtask 2: Evidence Identification

Subtask 2 is evaluated by comparing the set of evidence sentence IDs predicted by the system to the ground truth evidence set.
We report **Precision**, **Recall**, and **F1** over the predicted versus gold evidence sentences.

Two variants are reported:
* **Strict:** only sentences labeled `"essential"` are treated as gold evidence.
* **Lenient:** systems predicting sentences labeled `"supplementary"` will not be penalized.


### Subtask 3: Answer Generation

Subtask 3 evaluates the quality of the generated answer text relative to the reference answer.
We report the following automatic **text generation metrics**:

* BLEU[^bleu]
* ROUGE[^rouge]
* SARI[^sari]
* BERTScore[^bertscore]
* AlignScore[^alignscore]
* MEDCON[^medcon]


### Subtask 4: Answer–Evidence Alignment

Subtask 4 is evaluated by comparing the system's predicted alignments between answer sentences and note sentences to the ground truth alignments.
We report **Precision**, **Recall**, and **F1** over predicted alignment links.

* A predicted link is a pair *(answer sentence k → note sentence i)*.
* Over-citing is penalized: extra links increase false positives and reduce Precision (and thus F1).


### Scoring scripts

Subtask 1 scoring script is available on GitHub at [https://github.com/soni-sarvesh/archehr-qa-2026/tree/main/evaluation](https://github.com/soni-sarvesh/archehr-qa-2026/tree/main/evaluation).


## System Submission

Please visit the respective **Codabench competitions (one per subtask)** to submit system outputs.
Teams may participate in any subset of subtasks (1–4).

Before submitting, please register your team using our participant registration form: [https://forms.gle/JkkE2g3rvyXMsTp99](https://forms.gle/JkkE2g3rvyXMsTp99).
We will use this information to help match team registrations to Codabench submissions and for participation-related shared task communications.

* Each team may make **up to three successful submissions per subtask** to Codabench in total.
* Please nominate your best submission on each Codabench competition by pushing it to the leaderboard.
* We ask teams with multiple members to nominate a single member to make all submissions (to avoid duplicate accounts/submissions and confusion).

**Links:** Subtask 1 (Question Interpretation) CodaBench link: [https://www.codabench.org/competitions/12865/](https://www.codabench.org/competitions/12865/).
Links for the remaining subtasks will be released soon.

The required submission formats for each subtask are as follows.

### Submission package

All subtasks use results submissions only (no code execution).
You will upload a **single `.zip` archive** containing your predictions.

Your zip file must be structured as:

```pgsql
submission.zip
└── submission.json
```

`submission.json` must be a valid JSON file containing a single array of objects, with one object per case in the evaluation split for that subtask:

```json
[
  {
    "case_id": "1",
    "prediction": "..."
  }
]
```

Each object must include:

* `case_id` (string): the case identifier from the dataset.
* `prediction`: the subtask-specific output (format depends on the subtask; see below).

Because each Codabench competition is subtask-specific, the validator will expect the prediction field to match the format for that subtask.

### Required formats by subtask

#### Subtask 1: Question Interpretation

For Subtask 1, `prediction` must be a string containing the clinician-interpreted question (≤ 15 words).

Example `submission.json`

```json
[
  {
    "case_id": "1",
    "prediction": "Why was ERCP recommended over medication-based treatment for CBD sludge?"
  }
]
```

#### Subtask 2: Evidence Identification

For Subtask 2, `prediction` must be an array of strings, where each string is a sentence ID from the provided clinical note excerpt (e.g., `"1"`, `"5"`).

Example `submission.json`

```json
[
  {
    "case_id": "1",
    "prediction": ["1", "5", "6", "7"]
  }
]
```

#### Subtask 3: Answer Generation

For Subtask 3, `prediction` must be a string containing the generated answer (≤ 75 words).

Example `submission.json`

```json
[
  {
    "case_id": "1",
    "prediction": "ERCP was used to relieve a bile duct obstruction caused by stones and sludge by placing a common bile duct stent. Because liver tests and bilirubin continued to worsen, the patient required a repeat ERCP, which found the stent obstructed by sludge and stones. Once the INR normalized, a sphincterotomy was performed and stones were removed, improving drainage."
  }
]
```

#### Subtask 4: Answer–Evidence Alignment

For Subtask 4, `prediction` must be an array of objects representing sentence-level alignments between the input answer sentences and the note excerpt sentences.

Example `submission.json`

```json
[
  {
    "case_id": "1",
    "prediction": [
      {
        "answer_id": "1",
        "evidence_id": ["1"]
      },
      {
        "answer_id": "2",
        "evidence_id": ["5", "6"]
      }
    ]
  }
]
```

Each element in `prediction` must contain:

* answer_id (string): the answer sentence ID from the input answer text.
* evidence_id (array of strings): the list of note sentence IDs that support that answer sentence.
  * Use an empty list (`[` `]`) for unsupported answer sentences


## Paper Submission
All shared task participants are invited to submit a paper describing their systems to the Proceedings of the Third Workshop on Patient-Oriented Language Processing (CL4Health) at LREC 2026.
Shared task papers will go through a faster review process.

### Paper length (based on participation)
* If you participate in **exactly one** subtask, we encourage a **short paper**.
* If you participate in **more than one** subtask, you may submit either a short paper or a **long paper**.

### Format
Unless otherwise specified below, please follow the official LREC 2026 paper guidelines. For details, refer to the LREC [Author's Kit](https://lrec2026.info/authors-kit/).

* **Length:** Papers may be submitted as either a **short paper (4 pages)** or a **long paper (8 pages)** (content pages). Unlimited space is allowed after the conclusion for limitations (encouraged), ethical considerations (encouraged), and references.
* **Anonymity:** Submissions must be **non-anonymized** (i.e., include author names and affiliations).
* **Title format:** Paper titles must follow: “{TEAM_NAME} at ArchEHR-QA 2026: {DESCRIPTIVE_TITLE}”, where the descriptive title reflects your approach.
* **Template:** The Overleaf LaTeX template is available [here](https://www.overleaf.com/project/6887c0280bfaab6e3e8bd0bc).


### Submissions
All submissions will go through the Softconf/START Conference Manager at [https://softconf.com/lrec2026/CL4Health/](https://softconf.com/lrec2026/CL4Health/).
Regardless of participants' decision to submit a paper, they must submit a **short one-paragraph summary (about 75 words)** of their best system for each subtask they participated in to [**sarvesh.soni@nih.gov**](mailto:sarvesh.soni@nih.gov) to be included in the shared task overview paper.

### References
We ask participants to ensure that their paper includes proper citations to both the shared task overview paper and the dataset paper.


**Overview _(tentative)_:**
```bibtex
@inproceedings{soni-etal-2026-archehr-qa,
  title = "Overview of the ArchEHR-QA 2026 Shared Task on Grounded Question Answering from Electronic Health Records",
  author = "Soni, Sarvesh and Demner-Fushman, Dina",
  booktitle = "Proceedings of the Third Workshop on Patient-Oriented Language Processing (CL4Health)",
  year = "2026",
  address = "Palma, Mallorca (Spain)",
  publisher = "ELRA",
}
```

**Dataset:**
```bibtex
@article{soni-demner-fushman-2025-dataset,
  title={A Dataset for Addressing Patient's Information Needs related to Clinical Course of Hospitalization},
  author = {Soni, Sarvesh and Demner-Fushman, Dina},
  year = "2025",
  journal={arXiv preprint arXiv:2506.04156},
  doi = {10.48550/arXiv.2506.04156},
  publisher = {arXiv},
}
```


## Organizers

<table style="border-collapse: collapse; border: none;">
  <tr>
    <td style="border: none; text-align: center;">
      <!-- <img src="/assets/img/Sarvesh_Soni.jpg" alt="Sarvesh Soni"
            style="border-radius: 60%; height: 190px; object-fit: cover;"><br> -->
      <img src="/assets/img/Sarvesh_Soni.jpg" alt="Sarvesh Soni"
            style="width: 190px; height: 190px; border-radius: 50%; object-fit: cover;"><br>
      <h2 style="margin-bottom: 0;"><a href="https://soni-sarvesh.github.io/">Sarvesh Soni</a></h2>
      <h3 style="margin-top: 5px;"><a href="https://soni-sarvesh.github.io/">NLM, NIH</a></h3>
    </td>
    <td style="border: none; text-align: center;">
      <!-- <img src="/assets/img/Dina_Demner-Fushman.jpg" alt="Dina Demner-Fushman" style="border-radius: 60%; height: 190px; object-fit: cover;"><br> -->
      <img src="/assets/img/Dina_Demner-Fushman.jpg" alt="Dina Demner-Fushman" style="width: 190px; height: 190px; border-radius: 50%; object-fit: cover;"><br>
      <h2 style="margin-bottom: 0;"><a href="https://www.nlm.nih.gov/research/researchstaff/DemnerFushmanDina.html">Dina Demner-Fushman</a></h2>
      <h3 style="margin-top: 5px;"><a href="https://www.nlm.nih.gov/research/researchstaff/DemnerFushmanDina.html">NLM, NIH</a></h3>
    </td>
  </tr>
</table>

## Program Committee

We are looking for people to join the program committee, where the responsibilities will include reviewing papers.
If you are interested, please send an email to [**sarvesh.soni@nih.gov**](mailto:sarvesh.soni@nih.gov).

## References

[^linetal2003]: Lin, J., Quan, D., Sinha, V., Bakshi, K., Huynh, D., Katz, B., & Karger, D. R. (2003, September). What Makes a Good Answer? The Role of Context in Question Answering. In INTERACT. [link](https://groups.csail.mit.edu/infolab/publications/Lin-etal-INTERACT03.pdf)
[^jeonetal2006]: Jeon, J., Croft, W. B., Lee, J. H., & Park, S. (2006, August). A framework to predict the quality of answers with non-textual features. In Proceedings of the 29th annual international ACM SIGIR conference on Research and development in information retrieval (pp. 228-235). [https://doi.org/10.1145/1148170.1148212](https://doi.org/10.1145/1148170.1148212)
[^mimic]: Alistair E. W. Johnson, Tom J. Pollard, Lu Shen, Li-wei H. Lehman, Mengling Feng, Mohammad Ghassemi, Benjamin Moody, Peter Szolovits, Leo Anthony Celi, and Roger G. Mark. 2016. MIMIC-III, a freely accessible critical care database. Scientific Data, 3(1):160035. [https://doi.org/10.1038/sdata.2016.35](https://doi.org/10.1038/sdata.2016.35)
[^physionet]: PhysioNet. [https://physionet.org/](https://physionet.org/) Accessed Dec 26, 2024
[^bleu]: Papineni, K., Roukos, S., Ward, T., & Zhu, W. J. (2002, July). Bleu: a method for automatic evaluation of machine translation. In Proceedings of the 40th annual meeting of the Association for Computational Linguistics (pp. 311-318). [https://doi.org/10.3115/1073083.1073135](https://doi.org/10.3115/1073083.1073135)
[^rouge]: Chin-Yew Lin. 2004. ROUGE: A Package for Automatic Evaluation of Summaries. In Text Summarization Branches Out, pages 74–81, Barcelona, Spain. Association for Computational Linguistics. [https://aclanthology.org/W04-1013/](https://aclanthology.org/W04-1013/)
[^sari]: Xu, W., Napoles, C., Pavlick, E., Chen, Q., & Callison-Burch, C. (2016). Optimizing statistical machine translation for text simplification. Transactions of the Association for Computational Linguistics, 4, 401-415. [https://aclanthology.org/Q16-1029/](https://aclanthology.org/Q16-1029/)
[^bertscore]: Tianyi Zhang, Varsha Kishore, Felix Wu, Kilian Q. Weinberger, and Yoav Artzi. 2019. BERTScore: Evaluating Text Generation with BERT. In International Conference on Learning Representations. [https://openreview.net/forum?id=SkeHuCVFDr](https://openreview.net/forum?id=SkeHuCVFDr)
[^alignscore]: Yuheng Zha, Yichi Yang, Ruichen Li, and Zhiting Hu. 2023. AlignScore: Evaluating Factual Consistency with A Unified Alignment Function. In Anna Rogers, Jordan Boyd-Graber, and Naoaki Okazaki, editors, Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 11328–11348, Toronto, Canada. Association for Computational Linguistics. [https://doi.org/10.18653/v1/2023.acl-long.634](https://doi.org/10.18653/v1/2023.acl-long.634)
[^medcon]: Wen-wai Yim, Yujuan Fu, Asma Ben Abacha, Neal Snider, Thomas Lin, and Meliha Yetisgen. 2023. Aci-bench: a Novel Ambient Clinical Intelligence Dataset for Benchmarking Automatic Visit Note Generation. Scientific Data, 10(1):586. [https://doi.org/10.1038/s41597-023-02487-3](https://doi.org/10.1038/s41597-023-02487-3)
[^codabench]: Zhen Xu, Sergio Escalera, Adrien Pavão, Magali Richard, Wei-Wei Tu, Quanming Yao, Huan Zhao, and Isabelle Guyon. 2022. Codabench: Flexible, easy-to-use, and reproducible meta-benchmark platform. Patterns, 3(7):100543. [https://doi.org/10.1016/j.patter.2022.100543](https://doi.org/10.1016/j.patter.2022.100543)
