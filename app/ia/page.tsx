"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/app/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/Card"
import { Input } from "@/app/components/ui/Input"
import { Badge } from "@/app/components/ui/Badge"
import { Separator } from "@/app/components/ui/Separator"
import { Check, ArrowRight, Users, Star, ShieldCheck, Play, FileText, Quote, Sparkles, BookOpen, Brain } from "lucide-react"

const COHORT = {
  label: "Winter '25 Pilot",
  spots: 60,
  taken: 41,
  priceRise: "Nov 15, 2025",
}

const HOOK = {
  headline: "You were never meant to be replaced. You were meant to be amplified.",
  sub: "Unlearn to relearn. Amplified Classics invites readers, teachers, and students to rediscover the human mind — through living books that think with you, not for you.",
  cta: "Join the IA Movement",
  altCta: "Read an Amplified Chapter",
}

const PROOF = [
  { text: "Students actually read ahead for the first time.", who: "11th‑grade ELA Teacher" },
  { text: "The QR prompts sparked evidence‑based debates.", who: "Dept. Chair" },
  { text: "Setup took under 30 minutes with the kit.", who: "Curriculum Lead" },
]

const LOGOS = ["District A", "District B", "Homeschool Co‑ops", "Pilot Classrooms"]

export default function IALandingPage() {
  const [form, setForm] = React.useState({ email: "", name: "", org: "" })
  const [busy, setBusy] = React.useState(false)
  const [ok, setOk] = React.useState<null | boolean>(null)
  const spotsLeft = Math.max(0, COHORT.spots - COHORT.taken)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setBusy(true)
    setOk(null)
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "ia-landing" })
      })
      const data = await res.json()
      setOk(Boolean(data?.ok))
    } catch (err) {
      console.error(err)
      setOk(false)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div style={{ background: 'var(--background)', minHeight: '100vh' }}>
      {/* HOOK HERO */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '5rem 2rem',
        background: 'var(--background)'
      }}>
        <div style={{
          position: 'absolute',
          top: '-6rem',
          left: '-6rem',
          width: '18rem',
          height: '18rem',
          borderRadius: '50%',
          background: 'rgba(0, 0, 0, 0.03)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-6rem',
          right: '-6rem',
          width: '18rem',
          height: '18rem',
          borderRadius: '50%',
          background: 'rgba(0, 0, 0, 0.02)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }} />
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '1.5rem',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)'
            }}>
              <Badge>{COHORT.label}</Badge>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Users size={16} /> {spotsLeft} spots left
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Star size={16} /> Next price rise <strong style={{ marginLeft: '0.25rem' }}>{COHORT.priceRise}</strong>
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: '300',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              color: 'var(--primary)',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.02em'
            }}>
              {HOOK.headline}
            </h1>

            <p style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              maxWidth: '42rem'
            }}>
              {HOOK.sub}
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <Button asChild>
                <a href="#cta">{HOOK.cta} <ArrowRight style={{ marginLeft: '0.5rem' }} size={18} /></a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/books/jane-eyre/chapter-1">{HOOK.altCta}</Link>
              </Button>
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={16} /> Public‑domain first
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={16} /> IA prompts, not shortcuts
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FileText size={16} /> Teacher‑ready kit
              </span>
            </div>
          </motion.div>

          {/* Micro‑credibility / Logos */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Trusted by forward‑thinking educators</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.75rem',
                  marginBottom: '1.5rem'
                }}>
                  {LOGOS.map((logo) => (
                    <div key={logo} style={{
                      padding: '1rem',
                      background: 'var(--card-bg)',
                      border: '1px solid var(--border-color)',
                      textAlign: 'center',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: 'var(--text-secondary)'
                    }}>
                      {logo}
                    </div>
                  ))}
                </div>
                <Separator />
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  fontSize: '0.9375rem'
                }}>
                  {PROOF.map((p, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      gap: '0.75rem',
                      alignItems: 'flex-start'
                    }}>
                      <Quote size={16} style={{ marginTop: '0.25rem', flexShrink: 0 }} />
                      <span>
                        <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{p.text}</span>
                        <br />
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>— {p.who}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Story in a Sentence */}
      <section style={{
        padding: '3rem 2rem',
        background: 'var(--card-bg)',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
          fontSize: '1.25rem',
          lineHeight: 1.7,
          color: 'var(--text-secondary)'
        }}>
          Reading is still the superpower. We simply add an <em style={{ fontStyle: 'italic', color: 'var(--primary)' }}>Intelligence Amplifier</em> layer so context, maps, and prompts are ready when curiosity strikes.
        </div>
      </section>

      {/* Jane Eyre Feature Showcase */}
      <section style={{
        padding: '5rem 2rem',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '300',
              marginBottom: '1rem',
              color: 'var(--primary)',
              fontFamily: 'var(--font-heading)'
            }}>
              Experience Intelligence Amplification
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              See how Jane Eyre transforms into a living conversation with built-in study guides, analysis, and prompts
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <Card>
              <CardHeader>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Brain size={24} style={{ color: 'var(--primary)' }} />
                  <CardTitle>IA Analysis</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: '1rem'
                }}>
                  Every chapter includes Intelligence Amplified insights that reveal themes, literary techniques, and historical context—helping readers think deeper, not just faster.
                </p>
                <Link 
                  href="/books/jane-eyre/chapter-1"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--primary)',
                    fontWeight: '600',
                    fontSize: '0.9375rem'
                  }}
                >
                  Try Chapter 1 <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <BookOpen size={24} style={{ color: 'var(--primary)' }} />
                  <CardTitle>Study Guides</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: '1rem'
                }}>
                  Comprehensive summaries, key quotes with context, and discussion questions that spark genuine engagement—not just comprehension checks.
                </p>
                <Link 
                  href="/books/jane-eyre"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--primary)',
                    fontWeight: '600',
                    fontSize: '0.9375rem'
                  }}
                >
                  Browse all 38 chapters <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Sparkles size={24} style={{ color: 'var(--primary)' }} />
                  <CardTitle>Living Books</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: '1rem'
                }}>
                  Literature comes alive when context appears at the moment of curiosity. QR-enabled prompts connect historical background, character development, and thematic threads.
                </p>
                <Link 
                  href="/"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--primary)',
                    fontWeight: '600',
                    fontSize: '0.9375rem'
                  }}
                >
                  Explore the library <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Single CTA */}
      <section id="cta" style={{
        padding: '5rem 2rem',
        background: 'var(--card-bg)',
        borderTop: '1px solid var(--border-color)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Card>
            <CardHeader>
              <CardTitle style={{ fontSize: '1.75rem' }}>
                Get the free IA Edition Sampler or apply to the pilot
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem'
              }}>
                <Input 
                  required 
                  type="email" 
                  placeholder="you@school.edu" 
                  aria-label="Email" 
                  value={form.email} 
                  onChange={(e) => setForm({ ...form, email: e.target.value })} 
                />
                <Input 
                  placeholder="Your name" 
                  aria-label="Name" 
                  value={form.name} 
                  onChange={(e) => setForm({ ...form, name: e.target.value })} 
                />
                <Input 
                  placeholder="School / Org" 
                  aria-label="Organization" 
                  value={form.org} 
                  onChange={(e) => setForm({ ...form, org: e.target.value })} 
                />
                <div style={{
                  gridColumn: '1 / -1',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginTop: '0.5rem',
                  alignItems: 'center'
                }}>
                  <Button type="submit" disabled={busy}>
                    {busy ? "Sending…" : "Send me the Educator Sampler"}
                  </Button>
                  <Button type="button" variant="outline" onClick={onSubmit}>
                    Join the IA Movement
                  </Button>
                  <span style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)'
                  }}>
                    We'll send the PDF + a short pilot brief. Unsubscribe anytime.
                  </span>
                </div>
              </form>
              {ok !== null && (
                <div style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  background: ok ? 'rgba(0, 128, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
                  border: `1px solid ${ok ? 'rgba(0, 128, 0, 0.3)' : 'rgba(255, 0, 0, 0.3)'}`,
                  fontSize: '0.9375rem',
                  color: ok ? 'green' : 'red'
                }}>
                  {ok ? "Got it — check your inbox in a moment." : "Hmm, something went wrong. Please try again."}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How it works */}
      <section style={{
        padding: '5rem 2rem',
        background: 'white',
        borderTop: '1px solid var(--border-color)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <Card>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Play size={24} style={{ color: 'var(--primary)' }} />
                <CardTitle>90‑sec Overview</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)'
              }}>
                Watch how an IA edition turns a chapter into a conversation. Experience the difference between reading and truly engaging.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <FileText size={24} style={{ color: 'var(--primary)' }} />
                <CardTitle>Educator Kit</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)'
              }}>
                Unit plan, rubrics, pacing, and printable worksheets—download from the email we'll send. Setup in under 30 minutes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Check size={24} style={{ color: 'var(--primary)' }} />
                <CardTitle>Privacy‑First</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)'
              }}>
                No student accounts required for core features; QR prompts open context when needed. Built for classrooms.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '3rem 2rem',
        background: 'var(--card-bg)',
        borderTop: '1px solid var(--border-color)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          fontSize: '0.9375rem'
        }}>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '0.75rem', fontSize: '1.125rem' }}>
              Amplified Classics
            </div>
            <div style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              © {new Date().getFullYear()} Intelligence Amplifier
            </div>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: '350px'
            }}>
              AI didn't arrive to replace intelligence. It arrived to remind us what it means.
            </p>
          </div>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '0.75rem' }}>Legal</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/privacy" style={{ color: 'var(--text-secondary)' }}>Privacy</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/terms" style={{ color: 'var(--text-secondary)' }}>Terms</Link>
              </li>
            </ul>
          </div>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '0.75rem' }}>Contact</div>
            <a 
              href="mailto:hello@amplifiedclassics.org" 
              style={{ color: 'var(--text-secondary)' }}
            >
              hello@amplifiedclassics.org
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

