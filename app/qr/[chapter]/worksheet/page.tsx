"use client"

import { useEffect } from 'react'
import Link from 'next/link'
import { Printer, Download } from 'lucide-react'

// This would be imported from your chapter data
const CHAPTER_DATA = {
  '1': {
    title: 'Jane Eyre — Chapter 1',
    summary: 'Young Jane Eyre, an orphan living with her cruel aunt Mrs. Reed at Gateshead Hall, is excluded from family activities and tormented by her cousin John Reed.',
    moments: [
      {
        emoji: '🌧️',
        title: 'The Opening Weather',
        notice: 'The chapter opens with: "There was no possibility of taking a walk that day...cold winter wind...clouds so sombre...rain so penetrating."',
        explore: [
          'What emotions or feelings do these weather words make YOU think of?',
          'Now, what\'s happening to Jane in this scene? What\'s her situation?',
          'Put the weather and Jane\'s situation next to each other. What do you notice?'
        ]
      },
      {
        emoji: '📚',
        title: 'Jane\'s Reading (Books as Escape)',
        notice: 'Jane is reading: "With Bewick on my knee, I was then happy." She\'s reading about arctic landscapes and birds.',
        explore: [
          'She\'s reading about distant arctic places. Why might someone choose that book?',
          'Where is Jane physically in this moment? What\'s her situation?',
          'She\'s trapped in a house, excluded from family, reading about distant arctic places. What\'s Brontë showing us?'
        ]
      }
    ]
  },
  '2': {
    title: 'The Red-Room',
    summary: 'Jane is locked in the red-room as punishment. The room where her uncle died becomes a chamber of psychological horror, leading to a panic attack and physical collapse.',
    moments: [
      {
        emoji: '🎨',
        title: 'The Color Red (Everywhere)',
        notice: 'Everything is red: "...crimson cloth...scarlet drapery...deep red damask...cushions of the same hue..."',
        explore: [
          'What does the color red usually mean to YOU? What feelings or ideas come to mind?',
          'Why might Brontë make everything in this room red?',
          'Jane is being PUNISHED here. Put "punishment" and "red" together. What connection do you see?'
        ]
      },
      {
        emoji: '🪞',
        title: 'The Mirror (Jane Seeing Herself)',
        notice: 'Jane sees herself: "a strange little figure...with a white face and arms specking the gloom...like a real spirit."',
        explore: [
          'She calls herself a "strange little figure" and "real spirit." Those aren\'t normal ways to describe yourself. What\'s happening?',
          'Why does she not recognize herself? What does this tell us?',
          'She looks "half fairy, half imp." What might Brontë be showing about how Jane sees herself?'
        ]
      }
    ]
  }
}

export default function WorksheetPage({ params }: { params: { chapter: string } }) {
  const chapterNum = params.chapter
  const chapter = CHAPTER_DATA[chapterNum as keyof typeof CHAPTER_DATA]

  useEffect(() => {
    // Add print-friendly styles
    const style = document.createElement('style')
    style.innerHTML = `
      @media print {
        body { margin: 0; padding: 0; }
        .no-print { display: none !important; }
        .print-section { page-break-inside: avoid; }
        .page-break { page-break-after: always; }
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const handlePrint = () => {
    window.print()
  }

  if (!chapter) {
    return <div>Chapter {chapterNum} worksheet coming soon!</div>
  }

  return (
    <>
      {/* Print Controls - Hidden when printing */}
      <div className="no-print" style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        display: 'flex',
        gap: '1rem',
        zIndex: 1000,
        background: 'white',
        padding: '1rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        border: '2px solid var(--border-color)'
      }}>
        <button
          onClick={handlePrint}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: 'var(--primary)',
            color: 'white',
            border: 'none',
            borderRadius: '0.25rem',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '0.9375rem'
          }}
        >
          <Printer size={18} />
          Print Worksheet
        </button>
        <Link
          href={`/qr/${chapterNum}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: 'white',
            color: 'var(--primary)',
            border: '2px solid var(--primary)',
            borderRadius: '0.25rem',
            fontWeight: '600',
            textDecoration: 'none',
            fontSize: '0.9375rem'
          }}
        >
          Back to Chapter
        </Link>
      </div>

      {/* Printable Worksheet - Continuous Form */}
      <div style={{
        maxWidth: '8.5in',
        margin: '0 auto',
        padding: '0.75in',
        background: 'white',
        fontFamily: 'Georgia, serif',
        color: '#000',
        lineHeight: 1.6
      }}>
        {/* Header */}
        <div style={{
          borderBottom: '3px solid #000',
          paddingBottom: '0.5rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
          }}>
            <div>
              <h1 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: '0 0 0.25rem 0'
              }}>
                {chapter.title}
              </h1>
              <p style={{
                fontSize: '0.875rem',
                margin: 0,
                fontStyle: 'italic'
              }}>
                Amplified Classics: Notice → Explore → Amplify
              </p>
            </div>
            <div style={{
              textAlign: 'right',
              fontSize: '0.875rem'
            }}>
              <div>Name: _____________________</div>
              <div>Date: _____________________</div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="print-section" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{
            fontSize: '1.125rem',
            fontWeight: 'bold',
            margin: '0 0 0.5rem 0',
            borderBottom: '2px solid #000',
            paddingBottom: '0.25rem'
          }}>
            📖 Chapter Summary
          </h2>
          <p style={{
            fontSize: '0.9375rem',
            lineHeight: 1.6,
            margin: 0
          }}>
            {chapter.summary}
          </p>
        </div>

        {/* Reading Moments */}
        {chapter.moments.map((moment, index) => (
          <div
            key={index}
            className="print-section"
            style={{
              marginBottom: '2rem',
              border: '2px solid #000',
              padding: '1rem'
            }}
          >
            {/* Notice Phase */}
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                margin: '0 0 0.5rem 0',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                {moment.emoji} {moment.title}
              </h3>
              <div style={{
                background: '#f5f5f5',
                padding: '0.75rem',
                borderLeft: '4px solid #000',
                marginBottom: '1rem'
              }}>
                <p style={{
                  fontSize: '0.9375rem',
                  margin: 0,
                  fontStyle: 'italic'
                }}>
                  <strong>👀 NOTICE:</strong> {moment.notice}
                </p>
              </div>
            </div>

            {/* Explore Phase */}
            <div>
              <h4 style={{
                fontSize: '0.875rem',
                fontWeight: 'bold',
                margin: '0 0 0.5rem 0',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                🔍 EXPLORE (Discuss with your group)
              </h4>
              {moment.explore.map((question, qIndex) => (
                <div
                  key={qIndex}
                  style={{
                    marginBottom: '1rem'
                  }}
                >
                  <p style={{
                    fontSize: '0.9375rem',
                    fontWeight: 'bold',
                    margin: '0 0 0.25rem 0'
                  }}>
                    {qIndex + 1}. {question}
                  </p>
                  <div style={{
                    borderBottom: '1px solid #ccc',
                    height: '2rem'
                  }}></div>
                  <div style={{
                    borderBottom: '1px solid #ccc',
                    height: '2rem'
                  }}></div>
                </div>
              ))}
            </div>

            {/* Amplify Note */}
            <div style={{
              marginTop: '1rem',
              padding: '0.75rem',
              background: '#f5f5f5',
              borderTop: '2px dashed #000'
            }}>
              <p style={{
                fontSize: '0.875rem',
                margin: 0,
                fontStyle: 'italic'
              }}>
                <strong>✨ AMPLIFY:</strong> After your discussion, scan the QR code or visit <strong>amplifiedclassics.com/books/jane-eyre/chapter-{chapterNum}</strong> to reveal expert insights about this moment.
              </p>
            </div>
          </div>
        ))}

        {/* Reflection Section */}
        <div className="print-section" style={{
          marginTop: '2rem',
          padding: '1rem',
          border: '3px solid #000'
        }}>
          <h2 style={{
            fontSize: '1.125rem',
            fontWeight: 'bold',
            margin: '0 0 0.5rem 0'
          }}>
            💭 Reflection (Optional - 5-10 minutes)
          </h2>
          <p style={{
            fontSize: '0.9375rem',
            margin: '0 0 0.75rem 0'
          }}>
            What did you appreciate about Charlotte Brontë's craft in this chapter? What impressed you?
          </p>
          <div style={{ borderBottom: '1px solid #000', height: '2rem' }}></div>
          <div style={{ borderBottom: '1px solid #000', height: '2rem' }}></div>
          <div style={{ borderBottom: '1px solid #000', height: '2rem' }}></div>
          <div style={{ borderBottom: '1px solid #000', height: '2rem' }}></div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '2rem',
          paddingTop: '1rem',
          borderTop: '2px solid #000',
          fontSize: '0.75rem',
          textAlign: 'center',
          color: '#666'
        }}>
          <p style={{ margin: '0 0 0.25rem 0' }}>
            From <strong>Amplified Classics: Jane Eyre — A Teacher's Guide to Notice → Explore → Amplify</strong>
          </p>
          <p style={{ margin: 0 }}>
            Available at Amazon & Powell's Books • amplifiedclassics.com
          </p>
        </div>
      </div>
    </>
  )
}

