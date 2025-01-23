document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.citation').forEach(citation => {
        citation.addEventListener('mouseenter', () => {
            const evidenceId = citation.dataset.evidence;
            document.getElementById(evidenceId)?.classList.add('evidence-highlight');
            citation.closest('.answer-sentence')?.classList.add('highlight');
        });

        citation.addEventListener('mouseleave', () => {
            const evidenceId = citation.dataset.evidence;
            document.getElementById(evidenceId)?.classList.remove('evidence-highlight');
            citation.closest('.answer-sentence')?.classList.remove('highlight');
        });
    });
});