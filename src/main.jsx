import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, BarChart3, CheckCircle2, Download, Link2, MousePointerClick, WalletCards } from 'lucide-react'
import './styles.css'

const features = [
  {
    icon: Link2,
    title: 'Affiliate Link Management',
    body: 'Create, organize, edit, and manage affiliate links from one clean dashboard.',
    benefit: 'Spend less time searching for links and more time promoting offers.'
  },
  {
    icon: MousePointerClick,
    title: 'Click Tracking',
    body: 'Track clicks for each affiliate link with timing, referrer, and performance data.',
    benefit: 'Quickly see which links and campaigns are getting attention.'
  },
  {
    icon: WalletCards,
    title: 'Commission Tracking',
    body: 'Log commissions by affiliate program and keep earnings connected to performance.',
    benefit: 'Replace messy spreadsheets with a clear earnings view.'
  },
  {
    icon: BarChart3,
    title: 'Performance Dashboard',
    body: 'See total clicks, commissions, top links, top programs, and recent activity.',
    benefit: 'Focus faster on the offers producing results.'
  },
  {
    icon: Download,
    title: 'CSV Export',
    body: 'Export click and commission data for reporting or deeper review.',
    benefit: 'Save time when reviewing performance or planning campaigns.'
  }
]

const steps = [
  'Add your affiliate programs so links stay organized by network, offer, or campaign.',
  'Create trackable affiliate links and copy your short link for content, email, or promotions.',
  'Share your links and let LinkLedger track clicks as traffic comes in.',
  'Log commissions when sales happen so earnings stay connected to each program.',
  'Review your dashboard to see top links, top programs, clicks, commissions, and activity.'
]

const faqs = [
  ['Who is LinkLedger for?', 'Affiliate marketers, content creators, and niche site owners who want one place to manage links, track clicks, and log commissions.'],
  ['Do I need to connect every affiliate program?', 'No. For V1, manually add programs, create trackable links, and log commissions without complex integrations.'],
  ['Can I start for free?', 'Yes. The free plan is designed for users who want to track a small number of links before moving to Pro.'],
  ['Does LinkLedger replace my affiliate network dashboard?', 'No. It gives you a central tracking dashboard so you can organize performance across multiple programs in one place.'],
  ['Can I export my data?', 'Yes. LinkLedger includes CSV export so you can review clicks and commission data outside the dashboard when needed.']
]

function App() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="LinkLedger home">
          <span className="brandMark">LL</span>
          <span>LinkLedger</span>
        </a>
        <nav>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button small" href="#pricing">Start Free Trial</a>
      </header>

      <section id="top" className="hero sectionWrap">
        <div className="heroCopy">
          <p className="eyebrow">Affiliate Link Tracking Made Simple</p>
          <h1>Track every affiliate link, click, and commission in one dashboard.</h1>
          <p className="subhead">LinkLedger helps affiliate marketers see which links and programs are driving results without jumping between multiple platforms.</p>
          <div className="ctaRow">
            <a className="button" href="#pricing">Start Free Trial <ArrowRight size={18} /></a>
            <a className="button secondary" href="#demo">View Demo</a>
          </div>
          <p className="microcopy">Set up your first tracked link in minutes. No complicated reporting setup required.</p>
        </div>
        <div className="dashboardCard" id="demo" aria-label="LinkLedger dashboard preview">
          <div className="dashTop">
            <div>
              <span className="muted">This Month</span>
              <strong>$4,280</strong>
            </div>
            <span className="pill">Live clicks</span>
          </div>
          <div className="statsGrid">
            <div><span>Clicks</span><strong>18,492</strong></div>
            <div><span>Commissions</span><strong>$9,710</strong></div>
            <div><span>Top Link</span><strong>/ai-stack</strong></div>
            <div><span>Programs</span><strong>14</strong></div>
          </div>
          <div className="chartBars">
            {[42, 64, 38, 76, 58, 88, 70].map((height, index) => <span key={index} style={{height: `${height}%`}} />)}
          </div>
          <div className="activity">
            <p><CheckCircle2 size={16} /> New click from YouTube review</p>
            <p><CheckCircle2 size={16} /> Commission logged for Program A</p>
            <p><CheckCircle2 size={16} /> CSV export ready</p>
          </div>
        </div>
      </section>

      <section className="problem sectionWrap">
        <div className="sectionLabel">The Problem</div>
        <h2>Affiliate tracking gets messy fast when links and commissions are spread everywhere.</h2>
        <div className="painGrid">
          {[
            'Links live across multiple affiliate programs with no single performance view.',
            'You waste time logging into different dashboards to check clicks and commissions.',
            'It is hard to tell which links, campaigns, or programs are producing revenue.',
            'Manual spreadsheets break down once you manage more than a few offers.',
            'Without clear tracking, weak links keep getting promoted too long.'
          ].map((pain) => <div className="pain" key={pain}>{pain}</div>)}
        </div>
      </section>

      <section className="solution sectionWrap">
        <div>
          <div className="sectionLabel">The Solution</div>
          <h2>One simple dashboard for affiliate link performance.</h2>
          <p>LinkLedger lets affiliate marketers create trackable links, organize them by program or campaign, monitor clicks, log commissions, and quickly see which links are producing results.</p>
        </div>
        <ul className="benefits">
          {['Save time by checking one dashboard instead of multiple affiliate platforms.', 'See top-performing links and programs faster.', 'Track clicks and commissions without messy spreadsheets.', 'Organize links by program, campaign, or offer.', 'Export data for reports or deeper analysis.'].map((item) => <li key={item}><CheckCircle2 size={18} /> {item}</li>)}
        </ul>
      </section>

      <section id="features" className="sectionWrap">
        <div className="sectionLabel">Features</div>
        <h2>Everything V1 needs. Nothing bloated.</h2>
        <div className="featureGrid">
          {features.map(({ icon: Icon, title, body, benefit }) => (
            <article className="feature" key={title}>
              <Icon size={26} />
              <h3>{title}</h3>
              <p>{body}</p>
              <strong>{benefit}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="how sectionWrap">
        <div className="sectionLabel">How It Works</div>
        <h2>From link setup to performance review in five simple steps.</h2>
        <div className="steps">
          {steps.map((step, index) => <div className="step" key={step}><span>{index + 1}</span><p>{step}</p></div>)}
        </div>
      </section>

      <section id="pricing" className="pricing sectionWrap">
        <div className="sectionLabel">Pricing</div>
        <h2>Start free. Upgrade when you need more tracking power.</h2>
        <div className="pricingGrid">
          <article className="priceCard">
            <h3>Free</h3>
            <p className="price">$0</p>
            <p>For new affiliate marketers tracking a small number of links.</p>
            <a className="button secondary full" href="mailto:hello@linkledger.app?subject=LinkLedger%20Free%20Trial">Start Free</a>
          </article>
          <article className="priceCard highlighted">
            <span className="pill">Recommended</span>
            <h3>Pro</h3>
            <p className="price">$29/mo</p>
            <p>For active marketers who need more links, click tracking, commission logging, exports, and a full dashboard.</p>
            <a className="button full" href="mailto:hello@linkledger.app?subject=Start%20LinkLedger%20Pro">Start Free Trial</a>
          </article>
        </div>
      </section>

      <section id="faq" className="faq sectionWrap">
        <div className="sectionLabel">FAQ</div>
        <h2>Common questions</h2>
        <div className="faqGrid">
          {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        </div>
      </section>

      <section className="finalCta sectionWrap">
        <h2>Start tracking your affiliate links from one simple dashboard.</h2>
        <p>Organize your links, monitor clicks, log commissions, and see what is working without scattered dashboards or spreadsheets.</p>
        <a className="button" href="#pricing">Start Free Trial <ArrowRight size={18} /></a>
        <small>Start with the free plan and upgrade when you need more tracking power.</small>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
