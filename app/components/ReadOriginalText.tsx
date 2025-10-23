import { ExternalLink } from 'lucide-react'

interface ReadOriginalTextProps {
  bookTitle?: string
  author?: string
  gutenbergUrl?: string
  powellsUrl?: string
  amazonUrl?: string
  bookCoverImage?: string
}

export function ReadOriginalText({
  bookTitle = 'Jane Eyre',
  author = 'Charlotte Brontë',
  gutenbergUrl = 'https://www.gutenberg.org/ebooks/1260',
  powellsUrl = 'https://www.powells.com/book/jane-eyre-9780141441146',
  amazonUrl = 'https://www.amazon.com/Jane-Eyre-Charlotte-Bronte/dp/0141441143?&linkCode=ll1&tag=amplifiedcla-20&linkId=jane-eyre',
  bookCoverImage
}: ReadOriginalTextProps) {
  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .book-section-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 1.5rem !important;
          }
          .book-cover-container {
            margin: 0 auto;
          }
          .book-buttons {
            justify-content: center;
          }
        }
      `}</style>
      
      <div style={{
        marginTop: '3rem',
        padding: '2.5rem',
        background: 'linear-gradient(to bottom, #f8f9fa, white)',
        border: '2px solid var(--border-color)',
        borderRadius: '0.5rem'
      }}>
        <div 
          className="book-section-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 200px) 1fr',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          {/* Book Cover Image */}
          <div 
            className="book-cover-container"
            style={{
              width: '200px',
              height: '300px',
              borderRadius: '0.5rem',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            {bookCoverImage ? (
              <img 
                src={bookCoverImage} 
                alt={`${bookTitle} book cover`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            ) : (
              /* Placeholder book cover */
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{
                  textAlign: 'center',
                  color: 'white',
                  padding: '1.5rem',
                  fontFamily: 'var(--font-heading)'
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '300', marginBottom: '0.5rem' }}>
                    {bookTitle}
                  </div>
                  <div style={{ fontSize: '1rem', opacity: 0.9 }}>
                    {author}
                  </div>
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '1rem', 
                    left: '1rem', 
                    right: '1rem',
                    fontSize: '0.75rem',
                    opacity: 0.8,
                    borderTop: '1px solid rgba(255,255,255,0.3)',
                    paddingTop: '0.5rem'
                  }}>
                    PENGUIN CLASSICS
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div>
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: '400',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              fontFamily: 'var(--font-heading)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              📖 Read the Original Text
            </h3>
            <p style={{
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              marginBottom: '1.75rem'
            }}>
              Experience Brontë's original language. We recommend reading the actual chapter before or alongside this guide to fully appreciate the literary artistry and depth of the novel.
            </p>
            
            <div 
              className="book-buttons"
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}
            >
              <a
                href={gutenbergUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 1.75rem',
                  background: '#2c3e50',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '600',
                  borderRadius: '0.375rem',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                Read Free on Project Gutenberg
                <ExternalLink size={16} />
              </a>

              <a
                href={powellsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 1.75rem',
                  background: '#8B4513',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '600',
                  borderRadius: '0.375rem',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                Buy at Powell's Books
                <ExternalLink size={16} />
              </a>

              <a
                href={amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 1.75rem',
                  background: '#FF9900',
                  color: '#232F3E',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '600',
                  borderRadius: '0.375rem',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                Buy on Amazon
                <ExternalLink size={16} />
              </a>
            </div>

            <p style={{
              fontSize: '0.8125rem',
              color: 'var(--text-secondary)',
              marginTop: '1rem',
              fontStyle: 'italic'
            }}>
              *As an Amazon Associate and Powell's affiliate, we earn from qualifying purchases.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

