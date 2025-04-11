# BioNLP @ACL 2025 Shared Task on grounded question answering (QA) from electronic health records (EHRs)

---

## News

* **April 11, 2025**: The test set is now available on [PhysioNet](https://doi.org/10.13026/zzax-sy62). Please check the release notes for more details.
* **March 11, 2025**: The <a href="#task-details" onclick="event.preventDefault(); document.querySelector('#task-details').scrollIntoView({ behavior: 'smooth' });">Task Details</a> and <a href="#evaluation" onclick="event.preventDefault(); document.querySelector('#evaluation').scrollIntoView({ behavior: 'smooth' });">Evaluation</a> sections are updated with more information.
* **February 28, 2025**: An updated version (1.1) of the dataset, with some extraneous information removed, has been published on PhysioNet at [https://doi.org/10.13026/zzax-sy62](https://doi.org/10.13026/zzax-sy62). Please ensure you use the latest version of the dataset.
* **February 26, 2025**: The development set is now available on [PhysioNet](https://doi.org/10.13026/zzax-sy62).

## Introduction

Responding to patients' inbox messages through patient portals is one of the main contributors to increasing clinician burden.
To this end, automatically generating answers to questions from patients considering their medical records is important.
The objective of this shared task is to automatically answer patients' questions given important clinical evidence from their electronic health records (EHRs).


## Important Dates
<p style="margin-top: -1.2em;">(Tentative)</p>

* First call for participation: January 24 (Friday), 2025
* Release of the development dataset: February 26 (Wednesday), 2025
* Release of the test dataset: April 11 (Friday), 2025
* Submission of system responses: April 25 (Friday), 2025
* Submission of shared task papers (optional): May 2 (Friday), 2025
* Notification of acceptance: May 10 (Saturday), 2025
* Camera-ready system papers due: May 20 (Tuesday), 2025 \
**↳ No extensions due to the ACL publication deadline**
* BioNLP Workshop Date: July 31 (Thursday) OR August 1 (Friday), 2025

All deadlines are 11:59 PM (“Anywhere on Earth”).

Join our Google Group at [https://groups.google.com/g/archehr-qa](https://groups.google.com/g/archehr-qa) to get the important updates! For any questions related to the shared task, please reach out using the [Google Group](https://groups.google.com/g/archehr-qa) or email at [sarvesh.soni@nih.gov](mailto:sarvesh.soni@nih.gov).

**Note:**
The Google Group e-mails may end up in your spam folder.
Please add [archehr-qa@googlegroups.com](mailto:archehr-qa@googlegroups.com) and [noreply@groups.google.com](mailto:noreply@groups.google.com) to your address book to ensure delivery of these emails.

## Task Overview

We propose the task of automatically generating answers to patients' health-related questions that are grounded in the evidence from patients' clinical notes.
The dataset will consist of hand-curated realistic patient questions (submitted through a patient portal) and their corresponding clinician-rewritten versions (crafted to assist in formulating their responses).
The task is to construct coherent answers or responses to input questions that must use and be grounded in the provided clinical note excerpts.


<p style="margin-bottom: 1em;"><strong><em>Example #1</em></strong></p>
> <div style="margin-bottom:0.5em;"><strong><em>Patient Question</em></strong> (underlined is the main question)</div>
> Took my 59 yo father to ER ultrasound discovered he had an aortic aneurysm.
> He had a salvage repair (tube graft).
> Long surgery / recovery for couple hours then removed packs.
> <u>why did they do this surgery?????</u>
> After this time he spent 1 month in hospital now sent home.

> <div style="margin-bottom:0.5em;"><strong><em>Clinician Question</em></strong></div>
> Why did they perform the emergency salvage repair on him?

> <div style="margin-bottom:0.5em;"><strong><em>Clinical Note</em></strong> (sentences numbered for grounding)</div>
> <span id="evidence-1.1">**1:** He was transferred to the hospital on 2025-1-20 for emergent repair of his ruptured thoracoabdominal aortic aneurysm.</span>
> <span id="evidence-1.2">**2:** He was immediately taken to the operating room where he underwent an emergent salvage repair of ruptured thoracoabdominal aortic aneurysm with a 34-mm Dacron tube graft using deep hypothermic circulatory arrest.</span>
> **3:** Please see operative note for details which included cardiac arrest x2.
> **4:** Postoperatively he was taken to the intensive care unit for monitoring with an open chest.
> **5:** He remained intubated and sedated on pressors and inotropes.
> **6:** On 2025-1-22, he returned to the operating room where he underwent exploration and chest closure.
> **7:** On 1-25 he returned to the OR for abd closure JP/ drain placement/ feeding jejunostomy placed at that time for nutritional support.
> <p style="margin-top: -0.5em;"></p>
> <span id="evidence-1.8">**8:** Thoracoabdominal wound healing well with exception of very small open area mid wound that is @1cm around and 1/2cm deep, no surrounding erythema.</span>
> **9:** Packed with dry gauze and covered w/DSD.

> <div style="margin-bottom:0.5em;"><strong><em>Answer</em></strong> (hover over a citation to highlight relevant sentences)</div>
> <span class="answer-sentence">His aortic aneurysm was caused by the rupture of a thoracoabdominal aortic aneurysm, which required emergent surgical intervention <span class="citation" data-evidence="evidence-1.1">(1)</span>.</span>
<span class="answer-sentence">He underwent a complex salvage repair using a 34-mm Dacron tube graft and deep hypothermic circulatory arrest to address the rupture <span class="citation" data-evidence="evidence-1.2">(2)</span>.</span>
<span class="answer-sentence">The extended recovery time and hospital stay were necessary due to the severity of the rupture and the complexity of the surgery, though his wound is now healing well with only a small open area noted <span class="citation" data-evidence="evidence-1.8">(8)</span>.</span>

<p style="margin-bottom: 1em;"><strong><em>Example #2</em></strong></p>
> <div style="margin-bottom:0.5em;"><strong><em>Patient Question</em></strong> (underlined is the main question)</div>
> I had severe abdomen pain and was hospitalised for 15 days in ICU, diagnoised with CBD sludge.
> Doctor advised for ERCP.
> <u>My question is if the sludge was there does not any medication help in flushing it out?</u>
> <u>Whether ERCP was the only cure?</u>

> <div style="margin-bottom:0.5em;"><strong><em>Clinician Question</em></strong></div>
> Why was ERCP recommended over a medication-based treatment for CBD sludge?

> <div style="margin-bottom:0.5em;"><strong><em>Clinical Note</em></strong> (sentences numbered for grounding)</div>
> <span id="evidence-2.1">**1:** During the ERCP a pancreatic stent was required to facilitate access to the biliary system (removed at the end of the procedure), and a common bile duct stent was placed to allow drainage of the biliary obstruction caused by stones and sludge.</span>
> **2:** However, due to the patient's elevated INR, no sphincterotomy or stone removal was performed.
> **3:** Frank pus was noted to be draining from the common bile duct, and post-ERCP it was recommended that the patient remain on IV Zosyn for at least a week.
> **4:** The Vancomycin was discontinued.
> <p style="margin-top: -0.5em;"></p>
> <span id="evidence-2.5">**5:** On hospital day 4 (post-procedure day 3) the patient returned to ERCP for re-evaluation of her biliary stent as her LFTs and bilirubin continued an upward trend.</span>
> <span id="evidence-2.6">**6:** On ERCP the previous biliary stent was noted to be acutely obstructed by biliary sludge and stones.</span>
> <span id="evidence-2.7">**7:** As the patient's INR was normalized to 1.2, a sphincterotomy was safely performed, with removal of several biliary stones in addition to the common bile duct stent.</span>
> **8:** At the conclusion of the procedure, retrograde cholangiogram was negative for filling defects.

> <div style="margin-bottom:0.5em;"><strong><em>Answer</em></strong> (hover over a citation to highlight relevant sentences)</div>
> <span class="answer-sentence">Medications can sometimes help in managing bile duct sludge, but in this case, ERCP was necessary due to the severity of the obstruction and its complications.</span>
> <span class="answer-sentence">The initial ERCP revealed significant biliary obstruction caused by sludge and stones, requiring the placement of a stent to restore bile drainage <span class="citation" data-evidence="evidence-2.1">(1)</span>.</span>
> <span class="answer-sentence">However, even after this intervention, the liver function tests and bilirubin levels continued to rise, indicating that the obstruction was not fully resolved <span class="citation" data-evidence="evidence-2.5">(5)</span>.</span>
> <span class="answer-sentence">A follow-up ERCP confirmed that the stent itself had become acutely obstructed by sludge and stones, necessitating further intervention <span class="citation" data-evidence="evidence-2.6">(6)</span>.</span>
> <span class="answer-sentence">During this procedure, a sphincterotomy was performed, and several stones were physically removed, which medications alone could not have achieved <span class="citation" data-evidence="evidence-2.7">(7)</span>.</span>
> <span class="answer-sentence">These findings confirm that ERCP was essential in addressing his condition and preventing further complications.</span>


### Task Details

_Inputs_:
We do not enforce the use of any specific version of questions (patient or clinician) to generate answers; the participants can use one or both.
Note that the entire clinical note excerpt provided in the dataset may not be required in order to generate an answer to the question.
Thus, using all sentences from the clinical notes for grounding is not mandatory.
Further, the questions may not be answered in full by the clinical notes.
This is a natural scenario and a step toward answering questions using the whole EHR.
The model must only make use of the provided inputs (questions and note excerpts) to generate an answer.
The questions may also require additional world knowledge to answer.
However, no external knowledge should be explicitly given to the model (see the note below).

**Note**:
Participants must submit at least one run (out of a maximum of three) following the guidelines prohibiting external knowledge.
Additionally, they may use extra data, but we ask that they specify their approach, including any use of public or non-public datasets, in preparing the submission.

_Outputs_:
The sentences in the generated answer may be supported using one, multiple, or none (unsupported) of the sentences from the clinical note.
The unsupported sentences in the answer may be ignored during the quantitative evaluation.
The answers should be in the professional register to better match the contents of the clinical notes.
Simplification of answers to lay language is assumed to be performed later and is not the focus of this task.
The generated answer should be limited to 75 words, which roughly correspond to 5 sentences.
This is based on our observations from the baseline experiments and existing literature supporting that a paragraph-long answer is preferred by users [^linetal2003]<sup>,</sup>[^jeonetal2006].
There are no limitations to the number of note sentences cited.


## Data

The dataset consists of questions (inspired by real patient questions) and associated EHR data (derived from the MIMIC database[^mimic]) containing important clinical evidence to answer these questions. Each instance of the question-note pairs is referred to as a "case". Clinical note excerpts come pre-annotated with sentence numbers which must be used to cite the clinical evidence sentences in system responses. Each sentence is manually annotated with a "relevance" label to mark its importance in answering the given question as `"essential"`, `"supplementary"`, or `"not-relevant"`.

The development set comes with the relevance keys. For the test set cases, the submissions should return a natural language answer with citations to the clinical note sentence numbers. The dataset is available on [PhysioNet](https://doi.org/10.13026/zzax-sy62).

### Access

The development and test datasets will be made available in February and March (tentatively) through PhysioNet[^physionet].
To ensure timely access to the datasets upon release, please sign up for PhysioNet and complete the required training to access the [MIMIC-III Clinical Database](https://physionet.org/content/mimiciii/1.4/).


## Evaluation
<p style="margin-top: -1.2em;">(Tentative)</p>

Submissions will be evaluated based on their use of clinical evidence for grounding _("Factuality")_ and the relevance of the generated answers _("Relevance")_.

_Factuality_ will be assessed by calculating Precision, Recall, and F1 Scores between the cited evidence sentences in the generated answers and the manually annotated ground truth set of evidence sentences.
Each note sentence is manually annotated with a `'relevance'` label to mark its importance in answering the given question as `'essential'`, `'supplementary'`, or `'not-relevant'`.
Two variations of Citation F1 Scores will be calculated.
In the _"strict"_ variation, only `'essential'` labels will be considered as answers.
In the _"lenient"_ variation, both `'essential'` and `'supplementary'` labels will be considered as answers.

_Relevance_ will be evaluated by comparing the generated answer text with the ground truth `'essential'` note sentences and the question using the following evaluation metrics:

* BLEU[^bleu]
* ROUGE[^rouge]
* SARI[^sari]
* BERTScore[^bertscore]
* AlignScore[^alignscore]
* MEDCON[^medcon]

The _Overall_ scores for the leaderboard will be the mean of _Factuality_ (Strict Citation F1 Scores) and _Relevance_ (combination of all the normalized scores) scores.
The evaluation script will be released soon.


## System Submission

Submissions of system responses will be made through Codabench[^codabench].
Each team may make up to three successful submissions to Codabench in total.
The registrations on Codabench and the instructions to submit responses will be available soon.


## Paper Submission
All shared task participants are invited to submit a paper describing their systems to the Proceedings of the 24th Workshop on Biomedical Natural Language Processing (BioNLP) at ACL 2025.
Only short papers will be accepted for shared task participants.
The shared task papers will go through a faster review process.
All submissions will go through START at [https://softconf.com/acl2025/BioNLP2025-ST](https://softconf.com/acl2025/BioNLP2025-ST).
Regardless of participants' decision to submit a paper, they must submit a short one-paragraph summary of their best system to [**sarvesh.soni@nih.gov**](mailto:sarvesh.soni@nih.gov) to be included in the shared task overview paper.


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
