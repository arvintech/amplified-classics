'use client'

import Link from 'next/link'
import { bookConfig } from '../config'
import Footer from '@/app/components/Footer'
import { ArrowLeft, Book, Home, Users, Heart, Feather, Smile, Pen } from 'lucide-react'

export default function AboutTheAuthor() {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--page-bg)'
    }}>
      {/* Header */}
      <header style={{
        background: 'white',
        borderBottom: '1px solid var(--border-color)',
        padding: '1.5rem',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem'
        }}>
          <Link 
            href={`/books/${bookConfig.slug}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '0.9375rem',
              fontWeight: '500',
              transition: 'color 0.2s ease'
            }}
          >
            <ArrowLeft size={18} />
            Back to Book
          </Link>
          
          <div style={{
            fontSize: '0.875rem',
            color: 'var(--text-secondary)',
            textAlign: 'right'
          }}>
            <div style={{ fontWeight: '600' }}>{bookConfig.title}</div>
            <div style={{ opacity: 0.7 }}>by {bookConfig.author}</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ 
        flex: 1,
        padding: '3rem 1.5rem',
        maxWidth: '900px',
        margin: '0 auto',
        width: '100%'
      }}>
        {/* Hero Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem',
          paddingBottom: '3rem',
          borderBottom: '2px solid var(--border-color)'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.375rem 1rem',
            background: 'white',
            border: '1px solid var(--primary)',
            fontSize: '0.75rem',
            fontWeight: '700',
            color: 'var(--primary)',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            <Feather size={14} /> Meet the Author
          </div>
          
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '300',
            marginBottom: '0.5rem',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.02em'
          }}>
            Jane Austen
          </h1>
          
          <div style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            marginBottom: '1rem'
          }}>
            1775–1817
          </div>
          
          <div style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            fontStyle: 'italic',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            "There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves, it is not my nature."
          </div>
        </div>

        {/* Introduction - First Person */}
        <section style={{
          background: 'white',
          padding: '3rem',
          marginBottom: '3rem',
          border: '2px solid var(--border-color)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--border-color)'
          }}>
            <Smile size={20} style={{ color: 'var(--primary)' }} />
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '400',
              margin: 0,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)'
            }}>
              A Word from Jane
            </h2>
          </div>
          
          <div style={{
            fontSize: '1.0625rem',
            lineHeight: 1.8,
            color: 'var(--text-primary)'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Dear Reader,
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              I confess I am rather pleased to make your acquaintance, though I must warn you—I am an incurable observer of human folly, and I have been known to laugh at my own characters (and perhaps, just a little, at my own readers). I am <strong>Jane Austen</strong>, born December 16, 1775, in the village of Steventon, Hampshire, England, to the Reverend George Austen and Cassandra Leigh Austen. I am the seventh of eight children, and I can assure you, growing up in such a lively household provided me with <em>ample</em> material for novels.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              My father was an educated and encouraging man who ran a small boys' school from our rectory. Our home was filled with books, lively conversation, and (I am happy to say) genuine affection. We were not wealthy—clergymen rarely are—but we were comfortable, educated, and remarkably close. My sister <strong>Cassandra</strong> was and remains my dearest friend, my first reader, and my closest confidante. Nearly everything I wrote, I shared with her first.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              I began writing as a girl—silly, satirical little stories to amuse my family. We would perform theatricals in our barn, read novels aloud in the evenings, and I would pen burlesques of the absurd romantic novels so popular at the time. My family laughed, encouraged me, and never once suggested I should be doing something more "useful" with my time. I owe them everything.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              But I must be honest with you: I understood from a very young age that marriage was the only respectable future for a woman without independent fortune. I watched my friends become wives and mothers, manage households, and lose their independence. I watched clever women subordinate their judgment to foolish husbands. I watched love matches turn to disappointment and mercenary matches turn to misery. And I thought: <em>surely we can do better than this?</em>
            </p>
          </div>
        </section>

        {/* Pride and Prejudice */}
        <section style={{
          background: 'white',
          padding: '3rem',
          marginBottom: '3rem',
          border: '2px solid var(--border-color)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--border-color)'
          }}>
            <Heart size={20} style={{ color: 'var(--primary)' }} />
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '400',
              margin: 0,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)'
            }}>
              The Story of Pride and Prejudice
            </h2>
          </div>
          
          <div style={{
            fontSize: '1.0625rem',
            lineHeight: 1.8,
            color: 'var(--text-primary)'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              I first wrote this novel in 1796-1797 when I was only twenty-one years old. I called it <strong><em>First Impressions</em></strong>—a much more obvious title, don't you think? My father was so pleased with it that he wrote to a London publisher offering the manuscript for publication. The publisher refused it <em>by return post</em> without even reading it. I put the manuscript away and went on with my life.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              Years later, after <em>Sense and Sensibility</em> succeeded, I returned to <em>First Impressions</em>, revised it extensively, renamed it <strong><em>Pride and Prejudice</em></strong>, and sold it to a publisher for £110. It was published in January 1813, and I am delighted to report it was an immediate success. The first edition sold out within the year. Readers adored Elizabeth Bennet and found Mr. Darcy quite fascinating (though I confess I made him rather insufferable at first on purpose—reformation is so much more satisfying when earned).
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              I wanted to explore how <em>first impressions</em> deceive us—how pride blinds us to our own faults and prejudice blinds us to others' virtues. I wanted to show that intelligence, wit, and independent judgment are infinitely more valuable than beauty or fortune. I wanted to create a heroine who thinks for herself, makes mistakes, learns from them, and ultimately chooses love <em>and</em> equality—refusing to compromise her integrity for security or her principles for passion.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              Elizabeth Bennet is not perfect—she is quick to judge, slow to revise her opinions, and occasionally quite wrong. But she is intelligent, principled, and spirited. She refuses to marry for money alone, insists on respect, and will not subordinate her judgment to anyone. Mr. Darcy must learn to overcome his pride and class prejudice, must learn to value character over social position, must learn to respect Elizabeth as an equal. Only then do they deserve each other.
            </p>
          </div>
        </section>

        {/* On Love and Marriage */}
        <section style={{
          background: 'white',
          padding: '3rem',
          marginBottom: '3rem',
          border: '2px solid var(--border-color)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--border-color)'
          }}>
            <Heart size={20} style={{ color: 'var(--primary)' }} />
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '400',
              margin: 0,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)'
            }}>
              On Love, Marriage, and Independence
            </h2>
          </div>
          
          <div style={{
            fontSize: '1.0625rem',
            lineHeight: 1.8,
            color: 'var(--text-primary)'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              You may wonder if I ever fell in love myself. The answer is: yes, once, though it came to nothing. When I was twenty, I met a young man named <strong>Tom Lefroy</strong>. We flirted outrageously at several balls. He was clever, handsome, and made me laugh. We were, I think, genuinely attracted to each other. But Tom was dependent on a wealthy uncle's support, and I had no fortune. His family sent him away, and that was the end of it. I gave some of our conversations to Elizabeth and Darcy—the sparring, the wit, the electricity of being truly <em>seen</em> by someone.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              In 1802, Harris Bigg-Wither—the brother of dear friends—proposed to me. He was six years younger, awkward, and not particularly intelligent, but he was good-hearted and his proposal would have secured my future and Cassandra's. I accepted. Then I lay awake all night, realizing I could not do it. The next morning, I broke the engagement. It was the right decision, though it meant continued dependence on my brothers' generosity.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              I never married. Some pity me for this, but I assure you, I had a good life. I had my writing, my family, my beloved Cassandra, and most importantly—my independence of mind. I answered to no one but myself. I spent my mornings writing, my afternoons walking or visiting, my evenings with family. I observed the marriage market with amusement and sometimes horror. And I wrote novels arguing that women should marry for love <em>and</em> respect, or not at all.
            </p>
          </div>
        </section>

        {/* My Family */}
        <section style={{
          background: 'white',
          padding: '3rem',
          marginBottom: '3rem',
          border: '2px solid var(--border-color)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--border-color)'
          }}>
            <Users size={20} style={{ color: 'var(--primary)' }} />
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '400',
              margin: 0,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)'
            }}>
              My Beloved Family
            </h2>
          </div>
          
          <div style={{
            fontSize: '1.0625rem',
            lineHeight: 1.8,
            color: 'var(--text-primary)'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              My family was everything to me. My sister <strong>Cassandra</strong> was my other self—we shared a room, shared confidences, and rarely spent time apart. She was my first reader and my most honest critic. After I died, she destroyed most of our correspondence to preserve our privacy—a loss to history, perhaps, but a gift to me. Some things should remain between sisters.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              My six brothers were affectionate and supportive, though scattered by careers and families. <strong>James</strong> became a clergyman like our father. <strong>Edward</strong> was adopted by wealthy relatives and inherited great estates—he eventually provided us a cottage at Chawton, where I did my finest work. <strong>Henry</strong> was charming and changeable—soldier, banker, clergyman—and also my literary agent. <strong>Francis</strong> and <strong>Charles</strong> were naval officers who gave me material for <em>Mansfield Park</em> and <em>Persuasion</em>. Poor <strong>George</strong> had disabilities that prevented him from living with us.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              When my father died in 1805, Cassandra and I were left with minimal income and no home of our own. We moved frequently, dependent on our brothers' generosity, until Edward finally offered us a cottage on his estate at Chawton in 1809. That small cottage became my sanctuary. There, finally settled, I revised <em>Sense and Sensibility</em> and <em>Pride and Prejudice</em>, and wrote <em>Mansfield Park</em>, <em>Emma</em>, and <em>Persuasion</em>. Some women need a room of their own; I needed a cottage.
            </p>
          </div>
        </section>

        {/* My Writing Life */}
        <section style={{
          background: 'white',
          padding: '3rem',
          marginBottom: '3rem',
          border: '2px solid var(--border-color)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--border-color)'
          }}>
            <Pen size={20} style={{ color: 'var(--primary)' }} />
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '400',
              margin: 0,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)'
            }}>
              My Other Novels
            </h2>
          </div>
          
          <div style={{
            fontSize: '1.0625rem',
            lineHeight: 1.8,
            color: 'var(--text-primary)'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              I published all my novels anonymously as "By A Lady." This was partly convention, partly protection—I wanted my work judged on its merits, not dismissed because a woman wrote it. Only my family and close friends knew Austen of Chawton and "A Lady" were the same person. I rather enjoyed the secrecy.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              <strong><em>Sense and Sensibility</em></strong> (1811) was my first published novel, exploring the balance between emotion and reason, romantic sensibility and practical sense. <strong><em>Mansfield Park</em></strong> (1814) is more serious, examining moral integrity and the costs of vanity. <strong><em>Emma</em></strong> (1815)—my personal favorite—features a heroine "whom no one but myself will much like," a meddling matchmaker who must learn to understand herself before she can understand others.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              <strong><em>Persuasion</em></strong>, my last completed novel, is more autumnal, more mature. It's about second chances, about the endurance of true love, about the courage to claim happiness even after hope seems lost. I finished it in 1816, when I was already feeling unwell. It was published posthumously in 1817, along with <strong><em>Northanger Abbey</em></strong>, my youthful satire of Gothic novels.
            </p>
          </div>
        </section>

        {/* My Final Days */}
        <section style={{
          background: 'white',
          padding: '3rem',
          marginBottom: '3rem',
          border: '2px solid var(--border-color)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--border-color)'
          }}>
            <Feather size={20} style={{ color: 'var(--primary)' }} />
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '400',
              margin: 0,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)'
            }}>
              A Short Life, Well Lived
            </h2>
          </div>
          
          <div style={{
            fontSize: '1.0625rem',
            lineHeight: 1.8,
            color: 'var(--text-primary)'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              In early 1816, I began to feel unwell—fatigue, back pain, fever. I continued writing, completing <em>Persuasion</em> and beginning a new novel, <em>Sanditon</em>. But by spring 1817, I was too weak to continue. In May, Cassandra took me to Winchester for medical treatment. The doctors could do nothing.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              I died on July 18, 1817, at forty-one years old, most likely of Addison's disease or lymphoma. I died in Cassandra's arms, in lodgings in Winchester, far from our beloved Chawton cottage. I was buried in Winchester Cathedral—not for my writing, which remained largely anonymous, but because my brother Henry made sure they knew I was a clergyman's daughter.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              My novels were successful enough, but I did not live to see them become classics. I earned about £685 from my writing during my lifetime—not nothing, but hardly wealth. I died without knowing that Elizabeth Bennet and Mr. Darcy would become household names, that my novels would be read and loved for centuries, that I would be considered one of the greatest novelists in the English language.
            </p>
          </div>
        </section>

        {/* My Legacy */}
        <section style={{
          background: 'var(--primary)',
          color: 'white',
          padding: '3rem',
          marginBottom: '3rem',
          border: '2px solid var(--primary)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid rgba(255,255,255,0.3)'
          }}>
            <Heart size={20} />
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '400',
              margin: 0,
              fontFamily: 'var(--font-heading)'
            }}>
              What I Hope You'll Take Away
            </h2>
          </div>
          
          <div style={{
            fontSize: '1.0625rem',
            lineHeight: 1.8,
            opacity: 0.95
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              I wrote about the world I knew—country villages, modest gentry, marriage markets, drawing rooms. My scope was small by some measures: no wars, no Gothic castles, no exotic travel. But I wrote about what matters most: how we treat each other, how we learn to see clearly, how we balance our own needs with our responsibilities to others, how we find love and respect in a world that often values neither.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              I wrote with irony, wit, and a sharp eye for human folly—including my own. I laugh at my characters, but I also love them. Even the foolish ones deserve our compassion. Mrs. Bennet is ridiculous, but she's right that her daughters need to marry. Mr. Collins is absurd, but he's trying his best with limited intelligence. Lydia is selfish and thoughtless, but she's also very young and poorly guided.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              I believe that <em>character</em> matters more than fortune or beauty or connections. I believe that women deserve to be treated as rational beings with minds and wills of our own. I believe that true love requires mutual respect, intellectual equality, and genuine understanding. I believe that we can change, grow, and become better versions of ourselves—but only if we're willing to see our own faults clearly.
            </p>
            
            <p style={{ marginBottom: '0' }}>
              If <em>Pride and Prejudice</em> makes you laugh, makes you think, makes you believe in the possibility of finding both love and respect—then I am content. And if Elizabeth Bennet inspires you to think for yourself, trust your judgment, refuse to settle for less than you deserve, and demand to be treated as an equal—well, then perhaps my small novels about ordinary people matter after all.
            </p>
          </div>
        </section>

        {/* Closing */}
        <div style={{
          textAlign: 'center',
          padding: '2rem',
          background: 'white',
          border: '2px solid var(--border-color)'
        }}>
          <p style={{
            fontSize: '1.125rem',
            fontStyle: 'italic',
            color: 'var(--text-secondary)',
            marginBottom: '1rem',
            lineHeight: 1.7
          }}>
            "I declare after all there is no enjoyment like reading!"
          </p>
          <p style={{
            fontSize: '0.9375rem',
            color: 'var(--text-secondary)',
            margin: 0
          }}>
            — Jane Austen, <em>Pride and Prejudice</em>
          </p>
        </div>

        {/* Navigation */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginTop: '3rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link
            href={`/books/${bookConfig.slug}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: 'var(--primary)',
              color: 'white',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.9375rem',
              border: '2px solid var(--primary)',
              transition: 'all 0.2s ease'
            }}
          >
            <Book size={18} />
            Back to Pride and Prejudice
          </Link>
          
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: 'white',
              color: 'var(--primary)',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.9375rem',
              border: '2px solid var(--primary)',
              transition: 'all 0.2s ease'
            }}
          >
            <Home size={18} />
            Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}

