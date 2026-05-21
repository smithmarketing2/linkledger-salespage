import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, BarChart3, CheckCircle2, Clock3, Download, FileText, Gift, Layers3, Link2, MousePointerClick, ShieldCheck, Sparkles, Target, TrendingUp, WalletCards, XCircle } from 'lucide-react'
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

const audiences = [
  {
    icon: Target,
    title: 'Beginner affiliate marketers',
    body: 'Start clean from day one instead of building a messy spreadsheet you will eventually outgrow.'
  },
  {
    icon: FileText,
    title: 'Bloggers and niche site owners',
    body: 'Keep product links organized across articles, reviews, resource pages, and buying guides.'
  },
  {
    icon: Sparkles,
    title: 'Creators and newsletter owners',
    body: 'Track which videos, emails, and posts are sending clicks to your best affiliate offers.'
  },
  {
    icon: Layers3,
    title: 'Multi-program promoters',
    body: 'Manage links across several affiliate networks without checking every portal just to understand what is working.'
  }
]

const outcomes = [
  {
    icon: Clock3,
    title: 'Save review time',
    body: 'Check one central performance view instead of opening multiple affiliate dashboards and spreadsheets.'
  },
  {
    icon: TrendingUp,
    title: 'Promote smarter',
    body: 'See which links get clicks so you can double down on offers, pages, and campaigns with traction.'
  },
  {
    icon: ShieldCheck,
    title: 'Stay organized',
    body: 'Keep links, programs, click activity, and commission notes connected in one place.'
  }
]

const comparisonRows = [
  ['Link inventory', 'Scattered across posts, docs, and affiliate portals', 'Central dashboard organized by program and campaign'],
  ['Click visibility', 'Hard to compare links across platforms', 'Track clicks and top-performing links in one view'],
  ['Commission notes', 'Manual spreadsheet entries with little context', 'Log commissions beside the programs and links they belong to'],
  ['Weekly review', 'Slow, repetitive, and easy to skip', 'Open one dashboard, review activity, export data when needed']
]

const bonuses = [
  {
    icon: Gift,
    name: 'Top 50 Affiliate Programs Worth Tracking',
    description: 'A curated list of 50 high-converting affiliate programs with commission rates, cookie windows, and network details — ready to add to your dashboard on day one.'
  },
  {
    icon: CheckCircle2,
    name: 'LinkLedger Quick-Start Setup Checklist',
    description: 'A step-by-step checklist that walks you from account setup to first tracked link in under 15 minutes.'
  },
  {
    icon: Download,
    name: 'Affiliate Link Audit Worksheet',
    description: 'A simple worksheet to review your existing links, spot what is underperforming, and decide what to migrate into LinkLedger first.'
  }
]

const faqs = [
  ['Who is LinkLedger for?', 'Affiliate marketers, content creators, bloggers, newsletter owners, and niche site operators who want one place to manage links, track clicks, and log commissions.'],
  ['Do I need to connect every affiliate program?', 'No. For V1, manually add programs, create trackable links, and log commissions without complex integrations.'],
  ['Can I start for free?', 'Yes. The free plan is designed for users who want to track a small number of links before moving to Pro.'],
  ['Does LinkLedger replace my affiliate network dashboard?', 'No. It gives you a central tracking dashboard so you can organize performance across multiple programs in one place.'],
  ['Can I export my data?', 'Yes. LinkLedger includes CSV export so you can review clicks and commission data outside the dashboard when needed.'],
  ['Is LinkLedger only for experienced affiliates?', 'No. Beginners can use it to build good tracking habits early, while active marketers can use it to clean up scattered links and review performance faster.'],
  ['What should I add first?', 'Start with your highest-traffic links, your best affiliate programs, and any offers you promote in email, YouTube, blog posts, or social content.'],
  ['Can I use it for multiple campaigns?', 'Yes. Organize links by program, campaign, or offer so you can compare performance without mixing everything together.']
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
          <a href="#use-cases">Use Cases</a>
          <a href="#pricing">Pricing</a>
          <a href="#bonuses">Bonuses</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button small" href="#pricing">Start Free Trial</a>
      </header>

      <section id="top" className="hero sectionWrap">
        <div className="heroCopy">
          <p className="eyebrow">Affiliate Link Tracking Made Simple</p>
          <h1>Know which affiliate links are actually moving your business forward.</h1>
          <p className="subhead">LinkLedger helps affiliate marketers organize links, track clicks, log commissions, and review performance from one clean dashboard — without living inside spreadsheets.</p>
          <div className="ctaRow">
            <a className="button" href="#pricing">Start Free Trial <ArrowRight size={18} /></a>
            <a className="button secondary" href="#demo">View Demo</a>
          </div>
          <p className="microcopy">Set up your first tracked link in minutes. No complicated reporting setup required.</p>
          <div className="heroBadges" aria-label="Key LinkLedger benefits">
            <span><CheckCircle2 size={16} /> Link tracking</span>
            <span><CheckCircle2 size={16} /> Commission logging</span>
            <span><CheckCircle2 size={16} /> CSV export</span>
          </div>
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
          ].map((pain) => <div className="pain" key={pain}><XCircle size={18} /> {pain}</div>)}
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

      <section id="use-cases" className="sectionWrap audienceSection">
        <div className="sectionLabel">Who It Is For</div>
        <h2>Built for affiliate marketers who want cleaner tracking before they scale.</h2>
        <p className="sectionIntro">Whether you are publishing reviews, sending newsletters, posting videos, or building niche sites, LinkLedger gives your affiliate links a single home.</p>
        <div className="audienceGrid">
          {audiences.map(({ icon: Icon, title, body }) => (
            <article className="audienceCard" key={title}>
              <Icon size={26} />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
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

      <section className="outcomes sectionWrap">
        <div className="outcomeCopy">
          <div className="sectionLabel">Business Outcomes</div>
          <h2>Turn link tracking into a simple weekly decision system.</h2>
          <p>LinkLedger is not about collecting vanity metrics. It is about helping you answer the practical questions that affect affiliate revenue: what got clicks, what earned commissions, what needs more traffic, and what should be retired.</p>
        </div>
        <div className="outcomeGrid">
          {outcomes.map(({ icon: Icon, title, body }) => (
            <article className="outcomeCard" key={title}>
              <Icon size={26} />
              <h3>{title}</h3>
              <p>{body}</p>
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

      <section className="comparison sectionWrap">
        <div className="sectionLabel">Before vs After</div>
        <h2>Move from scattered tracking to a repeatable affiliate review workflow.</h2>
        <div className="comparisonTable">
          <div className="comparisonHead"><span>Area</span><span>Before LinkLedger</span><span>With LinkLedger</span></div>
          {comparisonRows.map(([area, before, after]) => (
            <div className="comparisonRow" key={area}>
              <strong>{area}</strong>
              <p>{before}</p>
              <p>{after}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="reviewWorkflow sectionWrap">
        <div className="sectionLabel">Weekly Review</div>
        <h2>A simple 15-minute affiliate tracking routine.</h2>
        <div className="reviewGrid">
          <div><span>01</span><h3>Check top links</h3><p>Find the links getting the most attention and decide where to place them next.</p></div>
          <div><span>02</span><h3>Review commissions</h3><p>Log new commissions and connect earnings back to the programs you are promoting.</p></div>
          <div><span>03</span><h3>Spot weak links</h3><p>Identify links with low activity so you can update content, change placement, or stop pushing them.</p></div>
          <div><span>04</span><h3>Export and plan</h3><p>Export your data when you need a report, campaign review, or deeper analysis outside the dashboard.</p></div>
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
            <ul>
              <li><CheckCircle2 size={16} /> Basic link organization</li>
              <li><CheckCircle2 size={16} /> Small-link tracking workflow</li>
              <li><CheckCircle2 size={16} /> Clean way to start before spreadsheets get messy</li>
            </ul>
            <a className="button secondary full" href="mailto:hello@linkledger.app?subject=LinkLedger%20Free%20Trial">Start Free</a>
          </article>
          <article className="priceCard highlighted">
            <span className="pill">Recommended</span>
            <h3>Pro</h3>
            <p className="price">$29/mo</p>
            <p>For active marketers who need more links, click tracking, commission logging, exports, and a full dashboard.</p>
            <ul>
              <li><CheckCircle2 size={16} /> More room for active campaigns</li>
              <li><CheckCircle2 size={16} /> Click and commission tracking workflow</li>
              <li><CheckCircle2 size={16} /> CSV export for reporting and planning</li>
              <li><CheckCircle2 size={16} /> Bonus setup resources included</li>
            </ul>
            <a className="button full" href="mailto:hello@linkledger.app?subject=Start%20LinkLedger%20Pro">Start Free Trial</a>
          </article>
        </div>
      </section>

      <section id="bonuses" className="bonuses sectionWrap">
        <div className="sectionLabel">Bonuses</div>
        <h2>Start with everything you need to hit the ground running.</h2>
        <p className="bonusIntro">Every LinkLedger Pro account includes three practical bonuses designed to get you set up fast, tracking the right programs, and migrating from spreadsheets without the headache.</p>
        <div className="bonusGrid">
          {bonuses.map(({ icon: Icon, name, description }) => (
            <article className="bonusCard" key={name}>
              <div className="bonusIcon"><Icon size={28} /></div>
              <h3>{name}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <p className="bonusNote">All three bonuses are included with every Pro account at no extra cost.</p>
      </section>

      <section className="objection sectionWrap">
        <div>
          <div className="sectionLabel">Keep It Simple</div>
          <h2>You do not need a complicated analytics stack to get control of your affiliate links.</h2>
        </div>
        <p>Most affiliates do not need enterprise attribution software when they are still trying to organize links, understand clicks, and log commissions consistently. LinkLedger focuses on the simple tracking layer that makes your weekly affiliate decisions easier.</p>
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
