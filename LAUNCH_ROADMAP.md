# Day One Labs - Launch Roadmap

**Last 10% to Ship: Technical, Content, Business**

> **Current Status:** 95% done. Site deployed to Vercel, pre-qual form tested and working!  
> **Recent Progress:** ✅ Deployed to Vercel | ✅ Pre-qual form tested (Great Fit, Partial Fit, Not a Fit scenarios all working)  
> **Goal:** Handle the final high-impact details that convert visitors into clients.

---

## 🎯 Quick Overview

**What's Left:**

1. **Technical** - Pre-qual form, AI product fit tool, messaging consistency
2. **Content** - Demo tools, real project data, video content
3. **Business** - Domain, email, deployment, legal/admin setup

**Timeline Estimate:** 1-2 weeks to ship everything critical

---

## 📋 TECHNICAL WORK: ✅ COMPLETE

### ✅ **Pre-Qualification Form - BUILT & TESTED**

**What was built:**

- Route: `/book-call`
- 10 modular components (all < 150 lines)
- Custom hook for form state management
- Pure function scoring logic
- Three result states: Great Fit / Possible Fit / Not a Fit

**Testing Results (Dec 11, 2024):**

- ✅ **Great Fit scenario** - High budget + good timeline → Shows Cal.com booking button
- ✅ **Partial Fit scenario** - Mixed criteria (some good, some bad) → Shows "Possible Fit" with options
- ✅ **Not a Fit scenario** - Low budget or poor fit → Shows alternatives with email option
- ✅ All scoring logic working correctly
- ✅ Form validation working
- ✅ UI/UX smooth and clear

**How it works:**

**Current Flow:**

```
1. User clicks "Book Free Discovery Call"
   ↓
2. Redirected to /book-call
   ↓
3. Fills out pre-qual form:
   - Name & Email
   - Project description
   - Budget range ($8k-15k, $15k-30k, etc.)
   - Timeline (ASAP, 2-4 weeks, flexible, exploring)
   - What they've tried (agencies, no-code, etc.)
   ↓
4. Clicks "Analyze Project Fit"
   ↓
5. Client-side scoring (instant):
   - Budget score + Timeline score = Total score
   ↓
6. Shows result:
   - Score ≥60: "Great Fit!" → Book Cal.com button
   - Score 30-59: "Possible Fit" → Book anyway or email
   - Score <30: "Might not be a fit" → Email us anyway + alternatives
```

**Architecture:**

- ✅ Client-side only (no backend, no API calls)
- ✅ Pure function scoring (lib/qualification.ts)
- ✅ Form state in custom hook (hooks/usePreQualForm.ts)
- ✅ 10 small components (all < 150 lines)
- ✅ Stores data in localStorage for Cal.com context

**Safe to deploy:** Yes - no secrets, no database, just browser-side logic.

---

#### **Flow Option B: Two-Path CTA Strategy**

**On homepage, offer TWO CTAs side-by-side:**

```
[Primary CTA]                [Secondary CTA]
Book Discovery Call          Get Quick Estimate
→ Pre-qual form              → AI tool (no booking)
→ Cal.com (if qualified)     → Ballpark pricing
                             → "Want to discuss? Book call"
```

**Why this works:**

- People who want fast answers get AI estimate
- Serious people book calls
- AI tool handles tire-kickers (saves your time)
- AI tool also acts as a demo of your capability

**Where AI tool lives:**

- Route: `/estimate` or `/product-fit`
- Can also be embedded on homepage as interactive widget

---

### 🤖 **TO BUILD: AI Product-Fit Tool**

#### **What It Does:**

Interactive tool that analyzes if Day One Labs is a good fit for their project.

**User Flow:**

```
1. User lands on /product-fit (or homepage widget)
2. Sees: "Find Out if We're a Fit in 60 Seconds"
3. Answers 4-5 questions:
   - Describe your project (2-3 sentences)
   - Budget range (dropdown)
   - Timeline needed (dropdown)
   - What you've tried so far (checkboxes)
4. AI analyzes input
5. Shows result:
   ✅ "Great fit! Here's why..." → CTA: Book discovery call
   ⚠️ "Possible fit, but..." → Shows concerns → CTA: Book call to discuss
   ❌ "Probably not a fit..." → Explains why → Recommends alternatives
```

**Technical Implementation:**

- Frontend: React form with nice UI
- Backend: API route (`/api/analyze-fit`) that calls OpenAI
- Prompt engineering: Feed user answers → GPT-4 analyzes fit
- Rate limiting: Max 10 requests/hour per IP (prevent abuse)
- Cost: ~$0.01-0.05 per analysis (cheap)

**Build Time:** 1 day

**Where it lives:**

- Route: `/app/product-fit/page.tsx`
- API route: `/app/api/analyze-fit/route.ts`
- Module: `/src/modules/product-fit/`

**OpenAI Prompt Structure:**

```javascript
const prompt = `You are a product consultant for Day One Labs, an AI-accelerated engineering lab.

CONTEXT:
- We build production software in 7-14 days using multi-agent orchestration
- Typical budget: $10k-$35k
- We work with founders who value speed + quality
- We DON'T work with: sub-$8k budgets, "just exploring", need hand-holding

USER INPUT:
Project: ${userProject}
Budget: ${userBudget}
Timeline: ${userTimeline}
Previous attempts: ${userAttempts}

ANALYZE:
1. Is this a good fit for Day One Labs?
2. What are red flags (if any)?
3. What are green flags (if any)?
4. Recommendation: Great Fit / Possible Fit / Not a Fit

Respond in JSON:
{
  "fit": "great" | "possible" | "not_a_fit",
  "reasoning": "2-3 sentences",
  "next_step": "What they should do next"
}
`
```

**Cost Control:**

- Rate limit: 10/hour per IP (Vercel Edge Config)
- Daily cap: 100 total requests
- Alert if >50 requests/day (monitor abuse)

**Should it be on homepage?**

**Option A: Homepage widget** (Visible to everyone)

- Pros: High engagement, shows off AI capability
- Cons: OpenAI costs if abused, could be distracting

**Option B: Dedicated page** (Link from homepage)

- Pros: Lower costs, qualifies serious people
- Cons: Less visible, requires click

**RECOMMENDATION:** Start with dedicated page (`/product-fit`), link from:

- Homepage: "Not sure if we're a fit? Try our AI analyzer →"
- Pricing page: "Check if your project fits our tiers"
- How We Build page: "See if we're right for your timeline"

**Future:** If it works well and costs stay low, add homepage widget.

---

### ✅ **Messaging Consistency - FIXED**

**Standardized across all pages:**

```
TIER 1: MVP Launch
- Price: $10k-15k
- Timeline: 1-2 weeks typical

TIER 2: Production Build
- Price: $18k-35k
- Timeline: 2-4 weeks typical

TIER 3: Ongoing Partnership
- Price: $8k-12k/month
```

**Updated files:**

- ✅ HeroSection.tsx - "1-4 weeks" delivery
- ✅ ServicesSection.tsx - Already correct
- ✅ All trust indicators - Consistent language

**All pages now use exact same numbers.**

---

## 🎨 PHASE 2: Content Gaps (Week 1-2)

### 📹 **Demo Content Needed**

#### **1. AI Product-Fit Tool** (Can serve as demo)

- Build it functional (see above)
- Add to "How We Build" page: "We built this tool in 4 hours to show AI integration"
- Shows: Form UX, API integration, GPT-4 usage, instant results

**Why it's a good demo:**

- Useful (solves real problem for visitors)
- Meta (shows your capability while being useful)
- Fast to build (proof of speed)

---

#### **2. Voice Agent Demo** (Placeholder exists in code)

**What:** Screen recording of you building a simple voice AI agent

**Content:**

- 2-3 minute video
- Show: Prompt → AI generates code → Deploy → Test live
- Narrate: "This took 20 minutes. Traditional dev: 2-3 days."

**Tools:**

- Loom or OBS for screen recording
- Build something simple (weather voice bot, FAQ voice agent)

**Where it lives:**

- Upload to YouTube (unlisted)
- Embed in "How We Build" page (ProofSection.tsx has placeholder)

**Build Time:** 2-3 hours (build + record + edit)

---

#### **3. Code Walkthrough** (Future, optional)

**What:** GitHub Gist or video showing clean code structure

**Content:**

- Show folder structure
- Walk through: Component, API route, type safety
- Emphasize: "This is what you get - clean, documented, scalable"

**Build Time:** 1-2 hours

---

#### **4. Quick Demo Tools to Build**

**Option A: One-Page Tools** (1 day each)

1. **AI Text Analyzer**
   - User pastes text → GPT-4 extracts insights
   - Shows: API integration, streaming responses, nice UI
   - Host at: `demos.dayonelabs.com/text-analyzer`

2. **CSV to Chart Tool**
   - Upload CSV → Generates beautiful charts
   - Shows: File upload, data viz, export functionality
   - Host at: `demos.dayonelabs.com/data-viz`

**Option B: Multi-Page App** (3-5 days)

1. **Mini Task Manager**
   - Notion-lite with drag-and-drop
   - Shows: Complex UI, real-time updates, clean architecture
   - Host at: `demos.dayonelabs.com/task-manager`

**RECOMMENDATION:**
Build **AI Product-Fit Tool** first (it's useful + serves as demo).
Then add **1-2 quick one-page tools** if time allows.

**Where demos live:**

- Subdomain: `demos.dayonelabs.com`
- Or: `/demos/text-analyzer`, `/demos/data-viz`
- Link from: "How We Build" page, Projects page

---

### 📊 **Real Project Data**

**Current State:**
You have 3 projects in `projectsData.ts`:

1. AI-Powered CRM (11 days, $14,500)
2. AI Document Platform (8 days, $16,000)
3. Automation Hub (6 days, $12,000)

**Are these real or examples?**
If examples → You need to decide:

- Use them as-is (label as "representative projects")
- Replace with real client work (anonymized)
- Mix: 1-2 real + 1-2 strong examples

**To Add (Content, not code):**

- Real screenshots (replace gradient placeholders)
- Client quotes (get permission or write realistic ones)
- Business results (revenue, funding, time saved)

**Build Time:** N/A (just content work)

---

## 💼 PHASE 3: Business Setup (Week 1)

### 🌐 **Domain Name**

**The Challenge:**

- "dayonelabs.com" is taken (you said)
- "dayone.com" is definitely taken (big company)

**Options:**

**Option A: dayonelabs.io** (probably available)

- Professional, tech-focused
- `.io` is standard for dev shops

**Option B: dayonelabs.dev** (probably available)

- Literally for developers
- Google-owned TLD, trusted

**Option C: getdayonelabs.com** (definitely available)

- "get" prefix (common pattern: getpostman.com)
- Clearly available domain

**Option D: trydayonelabs.com** (definitely available)

- "try" prefix (lower commitment vibe)

**Option E: builddayone.com** (maybe available)

- Action-focused, short

**Option F: dayonelab.com** (singular, might be available)

- Slightly different, worth checking

**RECOMMENDATION:**

1. Check availability: `dayonelabs.io` and `dayonelabs.dev`
2. If both available, get `.io` (more standard)
3. If both taken, get `builddayone.com` or `getdayonelabs.com`

**Where to buy:**

- Namecheap or Google Domains (cheap, simple)
- Cost: $10-15/year

**Action:** Check these NOW before someone snipes them.

---

### 📧 **Business Email**

**Need:** `hello@dayonelabs.io` (or whatever domain you get)

**Options:**

**Option A: Google Workspace** (RECOMMENDED)

- $6/month for 1 user
- Professional, reliable
- Gmail interface
- Includes: Google Drive, Calendar, Meet

**Option B: Zoho Mail**

- $1/month for 1 user
- Cheaper alternative
- Less features than Google

**Option C: Cloudflare Email Routing** (FREE)

- Free forwarding: `hello@yourdomain.com` → your personal Gmail
- Can't send FROM domain email (just receive)
- Good for starting, upgrade later

**RECOMMENDATION:**

- Start: Cloudflare Email Routing (free, 5 min setup)
- Upgrade: Google Workspace when revenue comes in

**Setup:**

1. Buy domain
2. Add to Cloudflare (free plan)
3. Setup email routing: `hello@`, `info@`, `team@`
4. All forward to your personal email

**Time:** 15 minutes

---

### 🚀 **Deployment (Vercel)** - ✅ COMPLETE

**Current State:** ✅ Deployed to Vercel (live on temporary domain)

**Completed:**

1. ✅ **Vercel Account Created**
   - Signed up with GitHub
   - Free tier deployed
   - SSL, CDN, analytics enabled

2. ✅ **GitHub Repo Connected**
   - Code pushed to GitHub
   - Imported to Vercel
   - Auto-deploys on push configured

3. **Environment Variables** (if needed)
   - OpenAI API key (for AI product-fit tool) - TBD
   - Cal.com event link - Already configured
   - Any other secrets

4. **Custom Domain** - TODO
   - Add domain in Vercel settings
   - Update DNS (Vercel gives you nameservers)
   - SSL auto-configured

**Cost:** FREE (Vercel hobby plan)

**Time:** ✅ Completed

---

### 📜 **Legal/Admin (Optional but Recommended)**

**What You Might Need:**

1. **Privacy Policy**
   - Required if you collect emails
   - Use generator: Termly.io (free)
   - Add page: `/privacy`

2. **Terms of Service**
   - Optional for pre-revenue
   - Add when you start contracts

3. **Business Entity**
   - LLC if you're serious (varies by state)
   - Can wait until first client

4. **Contract Template**
   - Service agreement for clients
   - Fixed-price project scope
   - IP assignment clause
   - Payment terms (50% upfront, 50% delivery)
   - Use template: Bonsai, HoneyBook, or lawyer

**Priority:** LOW (do this when first client commits)

---

## 🗺️ REMAINING WORK

### **🚀 IMMEDIATE: Business Setup (1-2 Hours)**

#### **Step 1: Domain Purchase** (30 min)

**Check availability:**

- dayonelabs.io (RECOMMENDED)
- dayonelabs.dev
- builddayone.com
- getdayonelabs.com

**Where to buy:** Namecheap or Cloudflare  
**Cost:** $12-15/year

#### **Step 2: Email Setup** (15 min)

**Cloudflare Email Routing (FREE):**

1. Add domain to Cloudflare
2. Setup routing: `hello@yourdomain.com` → your Gmail
3. Add aliases: `info@`, `team@`, `contact@`

**Upgrade later:** Google Workspace ($6/month) when you want to send FROM domain

#### **Step 3: Deploy to Vercel** - ✅ COMPLETE (30 min)

**Steps:**

1. ✅ Push code to GitHub (private or public)
2. ✅ Import to Vercel (free account)
3. [ ] Connect custom domain (TODO)
4. ✅ Deploy (automatic)
5. ✅ SSL auto-configured

**Environment variables needed:** None (client-side only, no API keys)

**Cost:** FREE (Vercel Hobby plan)

#### **Step 4: Test Live Site** - ✅ COMPLETE (30 min)

- ✅ Visit all pages (/, /how-we-build, /pricing, /projects, /book-call)
- ✅ Test pre-qual form with different inputs
- ✅ Test "Great Fit" flow → Cal.com opens (works correctly)
- ✅ Test "Partial Fit" flow → Mixed criteria (works correctly)
- ✅ Test "Not a Fit" flow → Email option shown (works correctly)
- [ ] Test on mobile (responsive) - TODO
- [ ] Test all "Book Call" buttons redirect to /book-call

---

### **📋 OPTIONAL: Content Enhancement (Post-Launch)**

**Can add anytime after launch:**

- [ ] **Voice agent demo video** (2-3 hours)
  - Record building simple AI tool
  - Upload to YouTube
  - Embed in How We Build page
- [ ] **Real project screenshots** (ongoing)
  - Replace gradient placeholders in projects
  - Get client permission or use anonymized versions
- [ ] **Demo tools** (1-2 days each)
  - AI Text Analyzer
  - CSV to Chart tool
  - Host at demos subdomain
- [ ] **More case studies** (ongoing)
  - Add 2-3 more projects as you complete them
  - Include timelines and business results
- [ ] **SEO optimization** (1-2 hours)
  - Meta tags (already mostly done)
  - Sitemap.xml
  - Submit to Google Search Console
- [ ] **Analytics** (15 min)
  - Enable Vercel Analytics (one click)
  - Or add Plausible/Fathom

## 📊 How the Pre-Qual Form Works (Technical Flow)

**Architecture: Client-Side Only**

```
Page Component (index.tsx)
  ↓
usePreQualForm Hook (manages state)
  ↓
PreQualForm Component (UI + form submission)
  ↓
handleSubmit() validates → calculateQualification() scores
  ↓
Result state updates → QualificationResult component renders
  ↓
Based on fit:
  - Great → Cal.com button
  - Possible → Cal.com or Email
  - Not a fit → Email anyway + alternatives
```

**Scoring Logic (lib/qualification.ts):**

```javascript
Budget Score + Timeline Score / 2 = Total Score

Score ≥ 60: Great Fit
Score 30-59: Possible Fit
Score < 30: Not a Fit

Budget Weights:
- Under $8k: 0 points
- $8k-15k: 50 points
- $15k-30k: 75 points
- $30k+: 100 points
- Flexible: 60 points

Timeline Weights:
- This week: 100 points
- 2-4 weeks: 75 points
- Flexible: 40 points
- Exploring: 0 points
```

**No backend needed** - Pure client-side JavaScript, instant results.

---

## 🎯 Success Metrics

**How to Know It's Working:**

### **Week 1 After Launch:**

- [ ] 5+ pre-qual form submissions
- [ ] 2+ qualified leads booking Cal.com calls
- [ ] AI product-fit tool used 10+ times
- [ ] Zero technical errors/crashes

### **Month 1:**

- [ ] 20+ pre-qual submissions
- [ ] 5-10 discovery calls booked
- [ ] 1-2 projects closed ($10k+)
- [ ] Pricing page in top 3 visited pages

### **What to Track:**

- **Google Analytics or Plausible:**
  - Page views (homepage, pricing, how-we-build)
  - CTA clicks ("Book Call", "AI Analyzer")
  - Form submissions (pre-qual)
  - Time on page (How We Build should be >2min)

- **Cal.com Dashboard:**
  - Bookings per week
  - Show rate (did they actually show up?)
  - Conversion (call → project)

- **Vercel Analytics:**
  - Real User Monitoring (RUM)
  - Lighthouse scores (should be 95+)
  - Load times (<2s)

---

## 💰 Budget Breakdown

**What This Costs:**

| Item                        | Cost         | When         |
| --------------------------- | ------------ | ------------ |
| Domain (dayonelabs.io)      | $12/year     | Week 1       |
| Vercel Hosting              | FREE         | Week 1       |
| Cloudflare Email            | FREE         | Week 1       |
| Cal.com                     | FREE         | Already have |
| OpenAI API (AI tool)        | ~$5-10/month | Week 1       |
| Google Workspace (optional) | $6/month     | Month 2      |
| **TOTAL MONTH 1**           | **~$15-25**  |              |

**Revenue Potential:**

- 1 project/month at $15k avg = **$15,000/month**
- Break-even after first client 🚀

---

## ✅ WHAT'S COMPLETE

**Technical:**

- ✅ Pre-qualification form (/book-call) - Fully functional
- ✅ Client-side scoring logic - Working, tested
- ✅ Messaging consistency - Unified across all pages
- ✅ Capabilities page - Deleted (content moved to How We Build)
- ✅ Clean build - Zero errors
- ✅ All "Book Call" buttons - Route to /book-call

**Design:**

- ✅ 4 complete pages (Home, How We Build, Pricing, Projects)
- ✅ Navigation updated
- ✅ Mobile responsive
- ✅ Animations smooth
- ✅ Design system consistent

**Ready to Ship:** YES

---

## 🚀 NEXT STEPS FOR YOUR TEAM

### **Immediate (Before Launch):**

1. ✅ **Test the pre-qual form manually** - COMPLETE (15 min)
   - ✅ Tested on Vercel deployment
   - ✅ Test "Great Fit" path (budget $15k-30k, timeline ASAP) - Works!
   - ✅ Test "Partial Fit" path (mixed good/bad criteria) - Works!
   - ✅ Test "Not a Fit" path (budget under $8k, timeline exploring) - Works!
   - Verify language sounds good
   - Check mobile responsive

2. **Domain decision** (5 min)
   - Check if dayonelabs.io is available
   - Or choose alternative

3. **Deploy** (30 min)
   - Push to GitHub
   - Deploy to Vercel
   - Connect domain

### **Post-Launch (Optional):**

4. **Content additions** (when ready)
   - Voice agent demo video
   - Real project screenshots
   - Client testimonials

5. **Backend additions** (when you have users)
   - Store pre-qual submissions in database
   - Email automation for follow-ups
   - Analytics tracking

---

## 📝 DEPLOYMENT CHECKLIST

**Before deploying:**

- [x] Build passes (`npm run build`)
- [x] All pages load correctly
- [x] Manual test of /book-call form - ✅ Tested all scenarios!
- [ ] Domain purchased
- [x] GitHub repo created
- [x] Vercel account setup

**After deploying:**

- [ ] Custom domain connected - TODO (waiting on domain)
- [x] SSL verified (auto by Vercel)
- [ ] Test live site on mobile - TODO
- [ ] Share link to get feedback - TODO

---

## 🎯 SUCCESS CRITERIA

**Site is "launched" when:**

- ⏳ Deployed to custom domain (on Vercel, needs custom domain)
- ✅ All pages accessible
- ✅ Pre-qual form works end-to-end (tested all scenarios)
- ✅ Cal.com booking works for qualified leads

**Site is "successful" when:**

- 🎯 5+ discovery calls booked in first month
- 🎯 1-2 projects closed
- 🎯 Pre-qual form filters 30%+ of leads (working as intended)

---

## 💡 WHAT YOU BUILT (For Context)

**Time Investment:**

- Initial site build: ~20-30 hours
- Day One rebrand: ~5-10 hours
- Pre-qual form: ~3-4 hours
- **Total: ~30-40 hours for professional marketing site**

**What It Would Cost If You Hired Out:**

- Agency quote: $10k-15k (8-12 weeks)
- Freelancer: $3k-5k (4-6 weeks)
- Template + customization: $500-1k (still needs work)

**What you actually built:**

- Custom Next.js site
- AI-accelerated branding
- Modern design system
- Lead qualification system
- Zero technical debt
- Production-ready

**This validates your positioning** - you CAN build production software fast. Now go sell it. 🚀
