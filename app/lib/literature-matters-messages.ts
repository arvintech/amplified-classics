/**
 * WHY LITERATURE MATTERS
 * 
 * Rotating one-liners about the importance of literature in the age of STEM
 * Each chapter randomly selects one message to display
 * 
 * These messages speak to students who live in a STEM-dominated educational landscape
 * and remind them why studying literature remains essential
 */

export const whyLiteratureMatters = [
  "STEM builds technology; literature teaches us what to build and why it matters.",
  
  "AI can write code, but only humans who read literature can ask the right questions.",
  
  "Engineers design systems; literature students understand the humans who use them.",
  
  "Data tells you what happened; literature tells you what it means.",
  
  "STEM gives us tools; literature gives us wisdom about when and how to use them.",
  
  "You can automate processes, but you can't automate meaning, empathy, or purpose.",
  
  "The scientists who changed the world were also readers—Darwin, Einstein, and Sagan all understood narrative.",
  
  "Technology scales solutions; literature scales understanding across time and culture.",
  
  "STEM careers need critical thinking, communication, and ethics—all taught through literature.",
  
  "Algorithms optimize for efficiency; literature optimizes for humanity.",
  
  "Code runs on logic; civilization runs on stories, metaphors, and shared meaning.",
  
  "Medical students read literature to understand patients as people, not just diagnoses.",
  
  "Every startup pitch, every research grant, every technical report requires storytelling—that's literature.",
  
  "STEM discovers how the world works; literature discovers how humans work.",
  
  "You can't disrupt an industry without understanding the humans whose lives you're changing.",
  
  "Literature trains the pattern recognition that makes great scientists and engineers.",
  
  "The most dangerous technology comes from brilliant minds without ethical imagination—literature builds that.",
  
  "STEM gives us unprecedented power; literature teaches us what it means to be human with that power.",
  
  "Read Jane Austen to understand social dynamics that no psychology textbook can teach.",
  
  "Read Orwell to see what technologists without humanities education can unleash.",
  
  "Every ethical dilemma in tech today was already explored in literature centuries ago.",
  
  "Literature is the original virtual reality—training empathy by letting you live other lives.",
  
  "STEM builds the future; literature helps us decide which future we want.",
  
  "The robots are coming for routine tasks; literature trains the irreplaceable human skills.",
  
  "You need literature to understand the humans you're building technology for.",
  
  "Great engineers read manuals; legendary engineers read novels and understand users.",
  
  "Literature is debugging the human condition—understanding why we fail and how we succeed.",
  
  "STEM answers 'can we?'; literature answers 'should we?'",
  
  "Every technology platform needs content moderation, community guidelines, ethical frameworks—that's applied literature.",
  
  "Read Frankenstein if you want to understand why your innovation might fail or harm.",
  
  "Literature teaches you to read between the lines—essential for leadership, negotiation, and understanding people.",
  
  "The future needs technically skilled humans, not human-shaped algorithms—literature keeps you human.",
  
  "Close reading of texts trains the attention to detail that catches bugs, errors, and ethical problems.",
  
  "Literature is the humanities' R&D lab—testing ideas, scenarios, and consequences in safe simulation.",
  
  "STEM thinks in systems; literature thinks in stories—you need both to create meaning.",
  
  "Read Dickens to understand inequality better than any economics paper can explain it.",
  
  "Literature teaches rhetorical analysis—essential for detecting misinformation and manipulation.",
  
  "The best product designers read novels to understand desire, motivation, and human behavior.",
  
  "STEM optimizes the present; literature learns from the past to build better futures.",
  
  "You can prompt AI to write code, but you need literature to know what's worth building.",
  
  "Literature is the original interdisciplinary field—connecting psychology, history, philosophy, and ethics.",
  
  "Read Shakespeare to understand power dynamics that still shape every boardroom and political system.",
  
  "STEM education without literature creates technically proficient people who don't know what questions to ask.",
  
  "Every successful tech leader is a storyteller—Jobs, Musk, Gates all mastered narrative.",
  
  "Literature teaches you to inhabit perspectives radically different from your own—essential for global collaboration.",
  
  "The engineers who built social media platforms would have benefited from reading about mob psychology in literature.",
  
  "Literature is pattern recognition across human experience—the foundation of insight.",
  
  "STEM measures what can be quantified; literature grapples with what can't be but still matters.",
  
  "Read Brontë to understand passion and obsession that drive both genius and destruction.",
  
  "Literature is emotional intelligence training—the soft skills that determine career success."
]

/**
 * Get a random "Why Literature Matters" message
 * Can be seeded with chapter number for consistent randomization per chapter
 */
export function getRandomLiteratureMessage(seed?: number): string {
  if (seed !== undefined) {
    // Use seed for consistent randomization per chapter
    const index = seed % whyLiteratureMatters.length
    return whyLiteratureMatters[index]
  }
  
  // True random selection
  const randomIndex = Math.floor(Math.random() * whyLiteratureMatters.length)
  return whyLiteratureMatters[randomIndex]
}

/**
 * Get message by chapter number (deterministic but feels random)
 * Each chapter gets a consistent message
 */
export function getLiteratureMessageByChapter(chapterNumber: number): string {
  const index = (chapterNumber * 7) % whyLiteratureMatters.length // Multiply by prime for better distribution
  return whyLiteratureMatters[index]
}

