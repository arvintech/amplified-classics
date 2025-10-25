'use client'

import Link from 'next/link'
import { bookConfig } from '../config'
import Footer from '@/app/components/Footer'
import { ArrowLeft, Book, Home, Users, Heart, Feather } from 'lucide-react'

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
            Charlotte Brontë
          </h1>
          
          <div style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            marginBottom: '1rem'
          }}>
            1816–1855
          </div>
          
          <div style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            fontStyle: 'italic',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            "I am no bird; and no net ensnares me; I am a free human being with an independent will."
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
            <Heart size={20} style={{ color: 'var(--primary)' }} />
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '400',
              margin: 0,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)'
            }}>
              A Word from Charlotte
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
              Allow me to introduce myself, though I confess I am more comfortable behind the pen than before an audience. I am <strong>Charlotte Brontë</strong>, born on April 21, 1816, in the small village of Thornton, Yorkshire, England. I am the third child of Patrick Brontë, an Irish Anglican clergyman, and Maria Branwell Brontë. My childhood was marked by both imagination and sorrow—a combination that would shape everything I would write.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              When I was five, our family moved to <strong>Haworth</strong>, a remote moorland village where my father became perpetual curate. The parsonage there, surrounded by wild moors and ancient gravestones, became our world. It was beautiful in its bleakness, isolating in its remoteness, and absolutely essential to who we became as writers.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              My mother died when I was only five years old, leaving my father to raise six children: Maria, Elizabeth, myself, my brother Branwell, and my sisters Emily and Anne. My two eldest sisters, Maria and Elizabeth, died of tuberculosis in 1825, just months after we were sent to the Clergy Daughters' School at Cowan Bridge—a harsh, unhealthy place that would later inspire Lowood School in <em>Jane Eyre</em>. Their deaths haunted me throughout my life.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              But from tragedy came something extraordinary. The four surviving siblings—Branwell, Emily, Anne, and myself—created entire imaginary worlds together. We wrote stories, created newspapers, drew maps, invented kingdoms. We called them <strong>Angria</strong> (Branwell's and mine) and <strong>Gondal</strong> (Emily's and Anne's). These childhood fantasies were our escape, our education, and our training ground as writers.
            </p>
          </div>
        </section>

        {/* My Life as a Writer */}
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
              My Journey as a Writer
            </h2>
          </div>
          
          <div style={{
            fontSize: '1.0625rem',
            lineHeight: 1.8,
            color: 'var(--text-primary)'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Like many women of my time, I struggled to find a respectable way to support myself. I worked as a governess—miserable work, being neither servant nor family, always dependent, never quite belonging. I attempted to start a school with my sisters, but it failed for lack of pupils. I even traveled to Brussels to study at the Pensionnat Héger, where I fell hopelessly in love with my married teacher, Monsieur Héger—an experience I would later transform into <em>Villette</em>.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              In 1846, my sisters and I published a volume of poetry under the pseudonyms <strong>Currer, Ellis, and Acton Bell</strong>. We chose ambiguous names—not quite male, not quite female—because we knew the world would not take us seriously as women writers. The book sold only two copies. We were disappointed but not defeated.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              The following year, 1847, would change everything. Emily published <em>Wuthering Heights</em>, Anne published <em>Agnes Grey</em>, and I published <strong><em>Jane Eyre: An Autobiography</em></strong>, all under our Bell pseudonyms. <em>Jane Eyre</em> was an immediate sensation. Readers loved it. Critics were scandalized by it. Everyone wanted to know who "Currer Bell" really was.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              I poured my heart into Jane—my rage at injustice, my hunger for independence, my belief that women were capable of passionate feeling and moral judgment, my insistence that we deserved equality and respect. Jane was small and plain, like me. She had no fortune or connections, like me. But she had intelligence, integrity, and an uncompromising spirit. She refused to accept subordination, refused to compromise her principles, insisted on being treated as an equal. The novel was my declaration: <em>women are human beings with minds, hearts, and wills of our own</em>.
            </p>
          </div>
        </section>

        {/* My Sisters */}
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
              My Beloved Sisters
            </h2>
          </div>
          
          <div style={{
            fontSize: '1.0625rem',
            lineHeight: 1.8,
            color: 'var(--text-primary)'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              I cannot speak of my work without speaking of <strong>Emily</strong> and <strong>Anne</strong>. We three were inseparable, walking the moors together, sharing our stories, supporting each other's ambitions. We were each other's first readers, harshest critics, and greatest champions.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              <strong>Emily</strong> was fierce, wild, and intensely private. Her <em>Wuthering Heights</em> was more raw and powerful than anything I could write—a dark, passionate exploration of obsessive love and revenge. She was a genius, though the world didn't fully recognize it in her lifetime. She died in December 1848, at only thirty years old, refusing medical help to the very end, as stubborn and independent in death as in life.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              <strong>Anne</strong> was gentle, steady, and deeply moral. Her novels <em>Agnes Grey</em> and <em>The Tenant of Wildfell Hall</em> dealt honestly with the harsh realities women faced—particularly the dangers of alcoholism and abusive marriages. She died in May 1849, just five months after Emily, also of tuberculosis. She was twenty-nine years old.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              My brother <strong>Branwell</strong>, once so promising, died of tuberculosis and chronic alcoholism in September 1848. Within nine months, I lost three siblings. I was left alone with my aging father, the last survivor of the brilliant, doomed Brontë children.
            </p>
          </div>
        </section>

        {/* My Other Works */}
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
            <Book size={20} style={{ color: 'var(--primary)' }} />
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '400',
              margin: 0,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)'
            }}>
              My Other Works
            </h2>
          </div>
          
          <div style={{
            fontSize: '1.0625rem',
            lineHeight: 1.8,
            color: 'var(--text-primary)'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              After <em>Jane Eyre</em>, I continued writing despite my grief. I published <strong><em>Shirley</em></strong> in 1849, a novel set during the industrial depression of 1811-1812, exploring women's roles and the struggles of mill workers. I wrote much of it while nursing Emily and Anne through their final illnesses.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              My final completed novel, <strong><em>Villette</em></strong> (1853), drew on my experiences in Brussels. It's darker and more psychologically complex than <em>Jane Eyre</em>, following Lucy Snowe, a lonely English woman teaching in a Belgian school. Many consider it my most sophisticated work, though it never achieved <em>Jane Eyre</em>'s popularity.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              My first novel, <strong><em>The Professor</em></strong>, was rejected by publishers multiple times before <em>Jane Eyre</em>'s success. It was finally published posthumously in 1857. Based on my Brussels experience, it tells the story of an English teacher in Belgium—a more restrained, masculine perspective on the material I would later explore more powerfully in <em>Villette</em>.
            </p>
          </div>
        </section>

        {/* My Later Life */}
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
              A Brief Happiness
            </h2>
          </div>
          
          <div style={{
            fontSize: '1.0625rem',
            lineHeight: 1.8,
            color: 'var(--text-primary)'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              In 1854, after much hesitation and my father's initial opposition, I married <strong>Arthur Bell Nicholls</strong>, my father's curate. I had known him for years, had refused his first proposal, but eventually came to appreciate his steadfast devotion. Our marriage, though it began with doubt, brought me genuine happiness. He was kind, supportive, and truly cared for me.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              But my happiness was brief. I became pregnant and fell seriously ill with hyperemesis gravidarum (severe morning sickness) and possibly tuberculosis. I died on March 31, 1855, at thirty-eight years old, not yet a year into my marriage. I died in the parsonage where I had spent most of my life, leaving behind my grief-stricken husband and my elderly father, who would outlive all six of his children.
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
            <Feather size={20} />
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '400',
              margin: 0,
              fontFamily: 'var(--font-heading)'
            }}>
              What I Hope You'll Remember
            </h2>
          </div>
          
          <div style={{
            fontSize: '1.0625rem',
            lineHeight: 1.8,
            opacity: 0.95
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              My life was short, often difficult, and marked by loss. I knew loneliness, unrequited love, professional rejection, and devastating grief. I lived in obscurity in a remote village, constrained by poverty and Victorian expectations of women.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              But I also knew the joy of creation, the satisfaction of meaningful work, the deep bonds of sisterhood, and the triumph of seeing my vision reach thousands of readers. Through Jane Eyre, I gave voice to women's rage against injustice, our hunger for independence, our right to be treated as equals, our capacity for passionate feeling and moral judgment.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              I wrote what I believed: that women are human beings with minds, hearts, and wills of our own. That we deserve respect, autonomy, and the right to shape our own lives. That we should not have to choose between love and independence, between connection and integrity. That we can be passionate and principled, vulnerable and strong, dependent and autonomous—that we contain multitudes and should not be reduced to angels or demons.
            </p>
            
            <p style={{ marginBottom: '0' }}>
              If Jane's voice still speaks to you across nearly two centuries, if her journey from powerless orphan to autonomous woman still resonates, if her insistence on equality and integrity still inspires—then perhaps my brief life mattered. Perhaps the words we write, when we write them truly, can outlive us and continue to fight for what we believe.
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
            "I would always rather be happy than dignified."
          </p>
          <p style={{
            fontSize: '0.9375rem',
            color: 'var(--text-secondary)',
            margin: 0
          }}>
            — Charlotte Brontë, <em>Jane Eyre</em>
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
            Back to Jane Eyre
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

