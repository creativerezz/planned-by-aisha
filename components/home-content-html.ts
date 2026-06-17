export const homeHtml = `<div class="hon-root" style="background:var(--wine);color:var(--ivory);font-family:'EB Garamond',Georgia,serif;font-size:18px;line-height:1.65;-webkit-font-smoothing:antialiased;overflow-x:hidden;position:relative">

  <!-- grain -->
  <div style="position:fixed;inset:0;z-index:60;pointer-events:none;opacity:.05;mix-blend-mode:soft-light;background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')"></div>

  <!-- ===== HEADER ===== -->
  <header id="hon-header" style="position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.45rem clamp(1.25rem,5vw,4rem);border-bottom:1px solid transparent;transition:background .5s var(--ease),padding .5s var(--ease),border-color .5s var(--ease)">
    <a href="#hon-top" style="font-family:'Fraunces',serif;font-weight:400;font-size:1.16rem;letter-spacing:.05em;display:inline-flex;align-items:baseline;gap:.15em">Planned<span style="font-style:italic;font-size:.78em;letter-spacing:.06em;opacity:.78;margin:0 .12em">by</span>Ayesha</a>
    <nav id="hon-nav" class="hon-nav" style="display:flex;align-items:center;gap:2.2rem;position:relative">
      <div class="hon-nav-links">
        <a href="#hon-top"     onclick="closeMenu()" class="nav-link" style="font-family:'Jost',sans-serif;font-size:.74rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(244,234,217,.74);transition:color .35s">Home</a>
        <a href="#hon-work"    onclick="closeMenu()" class="nav-link" style="font-family:'Jost',sans-serif;font-size:.74rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(244,234,217,.74);transition:color .35s">Portfolio</a>
        <a href="#hon-process" onclick="closeMenu()" class="nav-link" style="font-family:'Jost',sans-serif;font-size:.74rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(244,234,217,.74);transition:color .35s">Services</a>
        <a href="#hon-inquire" onclick="closeMenu()" class="nav-link" style="font-family:'Jost',sans-serif;font-size:.74rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(244,234,217,.74);transition:color .35s">Contact</a>
      </div>
      <a href="#hon-inquire" onclick="closeMenu()" class="hon-nav-cta nav-cta" style="font-family:'Jost',sans-serif;font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;border:1px solid var(--line);padding:.7em 1.4em;transition:border-color .4s,color .4s">Inquire</a>
      <button class="hon-menu-toggle" onclick="toggleMenu()" aria-label="Toggle menu" style="background:none;border:none;color:var(--ivory);font-family:'Jost',sans-serif;font-size:.74rem;letter-spacing:.18em;text-transform:uppercase;cursor:pointer;display:inline-flex;align-items:center;padding:0">Menu</button>
    </nav>
  </header>

  <!-- ===== HERO ===== -->
  <section id="hon-top" style="position:relative;min-height:100svh;display:flex;flex-direction:column;justify-content:flex-start;padding:8.5rem clamp(1.25rem,5vw,4rem) 3rem;background:radial-gradient(120% 90% at 12% 6%, #6c2129 0%, var(--wine) 44%, var(--wine-deep) 100%);overflow:hidden">
    <div class="hon-bloom" style="position:absolute;width:60vw;height:60vw;max-width:740px;max-height:740px;top:-14vw;left:-12vw;border-radius:50%;pointer-events:none;background:radial-gradient(circle, rgba(227,202,151,.30), rgba(227,202,151,.10) 38%, transparent 66%);filter:blur(8px);z-index:0"></div>

    <div class="hon-hero-grid" style="position:relative;z-index:2;width:100%;max-width:1240px;margin:0 auto">
      <!-- left copy -->
      <div>
        <div class="reveal" style="display:flex;align-items:center;gap:1rem;margin-bottom:2rem">
          <span style="height:1px;width:54px;background:var(--brass);opacity:.7"></span>
          <span style="font-family:'Jost',sans-serif;font-weight:500;font-size:.72rem;letter-spacing:.32em;text-transform:uppercase;color:var(--brass)">Boutique event design · Los Angeles</span>
        </div>
        <h1 class="reveal d1" style="font-family:'Fraunces',serif;font-weight:400;font-size:clamp(3rem,8vw,6.4rem);line-height:1.0;letter-spacing:-.02em;margin-bottom:1.8rem;text-wrap:balance">Your celebration,<br><em class="hon-em" style="color:var(--brass-soft)">held in good light.</em></h1>
        <p class="reveal d2" style="font-size:clamp(1.08rem,1.6vw,1.24rem);line-height:1.6;color:rgba(244,234,217,.82);max-width:38ch;margin-bottom:2.6rem">A boutique studio for weddings, walimas, and the gatherings that matter most — where the logistics are carried quietly, so you can stay fully inside the moment.</p>
        <div class="reveal d3" style="display:flex;align-items:center;gap:2rem;flex-wrap:wrap">
          <a href="#hon-inquire" class="btn-ivory" style="font-family:'Jost',sans-serif;font-weight:400;font-size:.78rem;letter-spacing:.2em;text-transform:uppercase;display:inline-flex;align-items:center;gap:.7em;padding:1.05em 1.9em;border:1px solid var(--brass);color:var(--wine);background:var(--ivory);cursor:pointer;transition:background .5s var(--ease),color .5s var(--ease),letter-spacing .5s var(--ease)">Begin your inquiry <span>↗</span></a>
          <a href="#hon-work" class="btn-text" style="font-family:'Jost',sans-serif;font-size:.78rem;letter-spacing:.2em;text-transform:uppercase;color:var(--ivory);border-bottom:1px solid var(--line);padding-bottom:.4em;transition:border-color .4s,color .4s">View portfolio</a>
        </div>
      </div>

      <!-- right image -->
      <div class="hon-hero-figure reveal d2" style="position:relative;padding:.5rem;border:1px solid var(--line)">
        <div class="img-slot" style="height:clamp(360px,54vh,580px)">
          <img src="/images/hero-moodboard.png" alt="Planned by Ayesha — burgundy and gold wedding mood board with floral centerpieces, candlelit tablescapes, and a draped floral mandap" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;z-index:1">
        </div>
        <div style="position:absolute;inset:.5rem;box-shadow:inset 0 0 90px 12px rgba(40,8,14,.5);pointer-events:none;z-index:2"></div>
        <span style="position:absolute;left:1.3rem;bottom:1.3rem;z-index:3;font-family:'Jost',sans-serif;font-size:.64rem;letter-spacing:.22em;text-transform:uppercase;color:var(--ivory);background:rgba(53,12,20,.55);backdrop-filter:blur(4px);padding:.55em .9em;border:1px solid var(--line)">Walima mood · burgundy &amp; gold</span>
      </div>
    </div>

    <!-- event type tags -->
    <div class="reveal d4" style="position:relative;z-index:2;width:100%;max-width:1240px;margin:clamp(2.5rem,5vw,3.5rem) auto 0;border-top:1px solid var(--line);padding-top:1.5rem;display:flex;flex-wrap:wrap;gap:.8rem 2.2rem;align-items:center">
      <span style="font-family:'Jost',sans-serif;font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:rgba(244,234,217,.62)">Weddings</span><span style="color:var(--brass);opacity:.8">✦</span>
      <span style="font-family:'Jost',sans-serif;font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:rgba(244,234,217,.62)">Walimas</span><span style="color:var(--brass);opacity:.8">✦</span>
      <span style="font-family:'Jost',sans-serif;font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:rgba(244,234,217,.62)">Engagements</span><span style="color:var(--brass);opacity:.8">✦</span>
      <span style="font-family:'Jost',sans-serif;font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:rgba(244,234,217,.62)">Mehndis</span><span style="color:var(--brass);opacity:.8">✦</span>
      <span style="font-family:'Jost',sans-serif;font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:rgba(244,234,217,.62)">Private dinners</span>
    </div>
  </section>

  <!-- ===== FOUNDER ===== -->
  <section style="background:var(--parchment);color:var(--wine);padding:clamp(5rem,11vw,9rem) clamp(1.25rem,5vw,4rem);position:relative">
    <div class="hon-founder-grid" style="max-width:1240px;margin:0 auto">
      <div class="reveal" style="position:relative;padding:.5rem;border:1px solid rgba(86,23,31,.22)">
        <div class="img-slot on-light" style="height:clamp(420px,58vh,620px)">
          <img src="/images/founder-portrait.png" alt="Ayesha, founder of Planned by Ayesha — boutique event design studio in Los Angeles" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center top;display:block;z-index:1">
        </div>
        <div style="position:absolute;inset:.5rem;box-shadow:inset 0 0 70px 8px rgba(86,23,31,.16);pointer-events:none;z-index:2"></div>
      </div>
      <div>
        <span class="reveal" style="font-family:'Jost',sans-serif;font-weight:500;font-size:.72rem;letter-spacing:.32em;text-transform:uppercase;color:#9a6b3e">The founder</span>
        <h2 class="reveal d1" style="font-family:'Fraunces',serif;font-weight:400;font-size:clamp(2.4rem,5vw,4rem);line-height:1.05;letter-spacing:-.02em;color:var(--wine);margin:.5rem 0 1.6rem">I'm <em class="hon-em" style="color:#9a6b3e">Ayesha.</em></h2>
        <p class="reveal d1" style="max-width:52ch;margin-bottom:1.3rem;color:#5a2730">Planned by Ayesha began as a love letter to celebration. I'm a UCLA sociology graduate who has spent years coordinating weddings, walimas, and private gatherings across Los Angeles — drawn, always, to the way a well-held room brings people closer.</p>
        <p class="reveal d2" style="max-width:52ch;margin-bottom:1.3rem;color:#5a2730">My work is logistics-led and quietly attentive: vendors aligned, timelines rehearsed, every transition handled before you would ever notice it. The result is a day that feels effortless — and entirely yours.</p>
        <div class="reveal d2" style="margin-top:2.2rem;padding-top:2.2rem;border-top:1px solid rgba(86,23,31,.2)">
          <span style="display:block;font-family:'Jost',sans-serif;font-weight:500;font-size:.72rem;letter-spacing:.32em;text-transform:uppercase;color:#9a6b3e;margin-bottom:.8rem">Our vision</span>
          <p style="font-family:'Fraunces',serif;font-style:italic;font-size:clamp(1.2rem,2.2vw,1.4rem);line-height:1.5;color:var(--wine);max-width:42ch">To gather people through experiences made with genuine care — where every guest feels welcomed, present, and truly seen.</p>
        </div>
        <div class="reveal d3" style="margin-top:2.4rem">
          <a href="#hon-process" class="btn-wine" style="font-family:'Jost',sans-serif;font-weight:400;font-size:.78rem;letter-spacing:.2em;text-transform:uppercase;display:inline-flex;align-items:center;gap:.7em;padding:1.05em 1.9em;border:1px solid var(--wine);color:var(--ivory);background:var(--wine);cursor:pointer;transition:background .5s var(--ease),color .5s var(--ease),letter-spacing .5s var(--ease)">How we work together <span>↗</span></a>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== SELECTED WORK ===== -->
  <section id="hon-work" style="background:var(--oxblood);padding:clamp(5rem,11vw,9rem) clamp(1.25rem,5vw,4rem);position:relative">
    <div style="max-width:1240px;margin:0 auto">
      <div style="display:flex;align-items:baseline;justify-content:space-between;gap:2rem;flex-wrap:wrap;margin-bottom:clamp(2.5rem,5vw,4rem)">
        <div>
          <span class="reveal" style="font-family:'Jost',sans-serif;font-weight:500;font-size:.72rem;letter-spacing:.32em;text-transform:uppercase;color:var(--brass)">Selected work</span>
          <h2 class="reveal d1" style="font-family:'Fraunces',serif;font-weight:400;font-size:clamp(2.2rem,5vw,3.6rem);line-height:1.04;letter-spacing:-.02em;margin-top:.5rem">Recent celebrations.</h2>
        </div>
        <p class="reveal d1" style="max-width:32ch;color:rgba(244,234,217,.66);font-style:italic">A small selection of emerald walimas, candlelit dinners, and elevated socials, coordinated end to end.</p>
      </div>

      <div class="hon-gallery">
        <div class="hon-tile hon-t-lg reveal" style="border:1px solid var(--line)">
          <div class="img-slot" style="height:100%"><img src="/images/walima-stage.png" alt="Walima stage with burgundy florals and gold drapery" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;z-index:1"></div>
          <div class="tile-scrim" style="position:absolute;inset:0;background:linear-gradient(to top,rgba(53,12,20,.66),transparent 46%);z-index:1;pointer-events:none;opacity:.7"></div>
          <span style="position:absolute;left:1.1rem;bottom:1rem;z-index:2;pointer-events:none"><span style="display:block;font-family:'Jost',sans-serif;font-size:.6rem;letter-spacing:.24em;text-transform:uppercase;color:var(--brass-soft);margin-bottom:.35em">Stages &amp; decor</span><span style="font-family:'Fraunces',serif;font-size:1.05rem">Walima stage</span></span>
        </div>
        <div class="hon-tile hon-t-sm reveal d1" style="border:1px solid var(--line)">
          <div class="img-slot" style="height:100%"><img src="/images/centerpiece.png" alt="Burgundy and gold floral wedding centerpiece with candlelight" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;z-index:1"></div>
          <div class="tile-scrim" style="position:absolute;inset:0;background:linear-gradient(to top,rgba(53,12,20,.66),transparent 46%);z-index:1;pointer-events:none;opacity:.7"></div>
          <span style="position:absolute;left:1.1rem;bottom:1rem;z-index:2;pointer-events:none"><span style="display:block;font-family:'Jost',sans-serif;font-size:.6rem;letter-spacing:.24em;text-transform:uppercase;color:var(--brass-soft);margin-bottom:.35em">Tablescapes</span><span style="font-family:'Fraunces',serif;font-size:1.05rem">Centerpieces</span></span>
        </div>
        <div class="hon-tile hon-t-sm reveal" style="border:1px solid var(--line)">
          <div class="img-slot" style="height:100%"><img src="/images/custom-signage.png" alt="Custom wedding signage with burgundy florals and gold calligraphy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;z-index:1"></div>
          <div class="tile-scrim" style="position:absolute;inset:0;background:linear-gradient(to top,rgba(53,12,20,.66),transparent 46%);z-index:1;pointer-events:none;opacity:.7"></div>
          <span style="position:absolute;left:1.1rem;bottom:1rem;z-index:2;pointer-events:none"><span style="display:block;font-family:'Jost',sans-serif;font-size:.6rem;letter-spacing:.24em;text-transform:uppercase;color:var(--brass-soft);margin-bottom:.35em">Paper &amp; favors</span><span style="font-family:'Fraunces',serif;font-size:1.05rem">Custom signage</span></span>
        </div>
        <div class="hon-tile hon-t-lg reveal d1" style="border:1px solid var(--line)">
          <div class="img-slot" style="height:100%"><img src="/images/banquet-reception.png" alt="Walima banquet reception with coordinated tablescapes and candlelight" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;z-index:1"></div>
          <div class="tile-scrim" style="position:absolute;inset:0;background:linear-gradient(to top,rgba(53,12,20,.66),transparent 46%);z-index:1;pointer-events:none;opacity:.7"></div>
          <span style="position:absolute;left:1.1rem;bottom:1rem;z-index:2;pointer-events:none"><span style="display:block;font-family:'Jost',sans-serif;font-size:.6rem;letter-spacing:.24em;text-transform:uppercase;color:var(--brass-soft);margin-bottom:.35em">Tablescapes</span><span style="font-family:'Fraunces',serif;font-size:1.05rem">Banquet reception</span></span>
        </div>
        <div class="hon-tile hon-t-third reveal" style="border:1px solid var(--line)">
          <div class="img-slot" style="height:100%"><img src="/images/candlelit-setting.png" alt="Candlelit wedding setting with burgundy florals and gold brass candelabras" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;z-index:1"></div>
          <div class="tile-scrim" style="position:absolute;inset:0;background:linear-gradient(to top,rgba(53,12,20,.66),transparent 46%);z-index:1;pointer-events:none;opacity:.7"></div>
          <span style="position:absolute;left:1.1rem;bottom:1rem;z-index:2;pointer-events:none"><span style="display:block;font-family:'Jost',sans-serif;font-size:.6rem;letter-spacing:.24em;text-transform:uppercase;color:var(--brass-soft);margin-bottom:.35em">Stages &amp; decor</span><span style="font-family:'Fraunces',serif;font-size:1.05rem">Candlelit setting</span></span>
        </div>
        <div class="hon-tile hon-t-third reveal d1" style="border:1px solid var(--line)">
          <div class="img-slot" style="height:100%"><img src="/images/floral-photobooth.png" alt="Floral photobooth backdrop with burgundy roses and gold frame" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;z-index:1"></div>
          <div class="tile-scrim" style="position:absolute;inset:0;background:linear-gradient(to top,rgba(53,12,20,.66),transparent 46%);z-index:1;pointer-events:none;opacity:.7"></div>
          <span style="position:absolute;left:1.1rem;bottom:1rem;z-index:2;pointer-events:none"><span style="display:block;font-family:'Jost',sans-serif;font-size:.6rem;letter-spacing:.24em;text-transform:uppercase;color:var(--brass-soft);margin-bottom:.35em">Vendor spotlight</span><span style="font-family:'Fraunces',serif;font-size:1.05rem">Floral photobooth</span></span>
        </div>
        <div class="hon-tile hon-t-third reveal d2" style="border:1px solid var(--line)">
          <div class="img-slot" style="height:100%"><img src="/images/coffee-matcha-bar.png" alt="Styled coffee and matcha bar with burgundy florals and gold brass accents" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;z-index:1"></div>
          <div class="tile-scrim" style="position:absolute;inset:0;background:linear-gradient(to top,rgba(53,12,20,.66),transparent 46%);z-index:1;pointer-events:none;opacity:.7"></div>
          <span style="position:absolute;left:1.1rem;bottom:1rem;z-index:2;pointer-events:none"><span style="display:block;font-family:'Jost',sans-serif;font-size:.6rem;letter-spacing:.24em;text-transform:uppercase;color:var(--brass-soft);margin-bottom:.35em">Vendor spotlight</span><span style="font-family:'Fraunces',serif;font-size:1.05rem">Coffee &amp; matcha bar</span></span>
        </div>
      </div>

      <div class="reveal" style="margin-top:clamp(2.5rem,5vw,3.5rem);display:flex;justify-content:center">
        <a href="#hon-inquire" class="btn-text" style="font-family:'Jost',sans-serif;font-size:.78rem;letter-spacing:.2em;text-transform:uppercase;color:var(--ivory);border-bottom:1px solid var(--line);padding-bottom:.4em;transition:border-color .4s,color .4s">Inquire about your celebration ↗</a>
      </div>
    </div>
  </section>

  <!-- ===== PROCESS + PRICING ===== -->
  <section id="hon-process" style="background:var(--emerald);padding:clamp(5rem,11vw,9rem) clamp(1.25rem,5vw,4rem);position:relative">
    <div style="max-width:1240px;margin:0 auto">
      <span class="reveal" style="font-family:'Jost',sans-serif;font-weight:500;font-size:.72rem;letter-spacing:.32em;text-transform:uppercase;color:var(--brass-soft)">How we work</span>
      <h2 class="reveal d1" style="font-family:'Fraunces',serif;font-weight:400;font-size:clamp(2.2rem,5vw,3.6rem);line-height:1.06;letter-spacing:-.02em;max-width:20ch;margin-top:.5rem">A logistics-led approach, so the day can feel entirely yours.</h2>

      <div class="hon-phases" style="margin-top:clamp(2.5rem,5vw,4rem)">
        <div class="reveal d1">
          <div style="font-family:'Jost',sans-serif;font-size:.74rem;letter-spacing:.26em;text-transform:uppercase;color:var(--brass-soft);display:flex;align-items:center;gap:1rem;margin-bottom:1.1rem"><span>01 — Before</span><span style="height:1px;flex:1;background:var(--line)"></span></div>
          <h3 style="font-family:'Fraunces',serif;font-weight:400;font-size:1.7rem;letter-spacing:-.01em;margin-bottom:.5rem">Pre-event coordination</h3>
          <p style="color:rgba(244,234,217,.72);margin-bottom:1.5rem;font-style:italic">Strategy, vendors, and the master timeline.</p>
          <ul style="list-style:none">
            <li style="position:relative;padding:.7rem 0 .7rem 1.6rem;border-bottom:1px solid rgba(201,167,103,.16);color:rgba(244,234,217,.86);font-size:1.02rem"><span style="position:absolute;left:0;top:1.15rem;width:7px;height:7px;border:1px solid var(--brass);transform:rotate(45deg)"></span>Vendor confirmations &amp; communication — catering, photography, venue, decor</li>
            <li style="position:relative;padding:.7rem 0 .7rem 1.6rem;border-bottom:1px solid rgba(201,167,103,.16);color:rgba(244,234,217,.86);font-size:1.02rem"><span style="position:absolute;left:0;top:1.15rem;width:7px;height:7px;border:1px solid var(--brass);transform:rotate(45deg)"></span>Negotiation on your behalf for the best possible pricing</li>
            <li style="position:relative;padding:.7rem 0 .7rem 1.6rem;border-bottom:1px solid rgba(201,167,103,.16);color:rgba(244,234,217,.86);font-size:1.02rem"><span style="position:absolute;left:0;top:1.15rem;width:7px;height:7px;border:1px solid var(--brass);transform:rotate(45deg)"></span>Review of all vendor contracts and scope of services</li>
            <li style="position:relative;padding:.7rem 0 .7rem 1.6rem;border-bottom:1px solid rgba(201,167,103,.16);color:rgba(244,234,217,.86);font-size:1.02rem"><span style="position:absolute;left:0;top:1.15rem;width:7px;height:7px;border:1px solid var(--brass);transform:rotate(45deg)"></span>A detailed event-day timeline &amp; program itinerary</li>
            <li style="position:relative;padding:.7rem 0 .7rem 1.6rem;border-bottom:1px solid rgba(201,167,103,.16);color:rgba(244,234,217,.86);font-size:1.02rem"><span style="position:absolute;left:0;top:1.15rem;width:7px;height:7px;border:1px solid var(--brass);transform:rotate(45deg)"></span>Planning calls to finalize logistics, set-up, and flow</li>
          </ul>
        </div>
        <div class="reveal d2">
          <div style="font-family:'Jost',sans-serif;font-size:.74rem;letter-spacing:.26em;text-transform:uppercase;color:var(--brass-soft);display:flex;align-items:center;gap:1rem;margin-bottom:1.1rem"><span>02 — The day</span><span style="height:1px;flex:1;background:var(--line)"></span></div>
          <h3 style="font-family:'Fraunces',serif;font-weight:400;font-size:1.7rem;letter-spacing:-.01em;margin-bottom:.5rem">Day-of execution</h3>
          <p style="color:rgba(244,234,217,.72);margin-bottom:1.5rem;font-style:italic">Ten to twelve hours of on-site management.</p>
          <ul style="list-style:none">
            <li style="position:relative;padding:.7rem 0 .7rem 1.6rem;border-bottom:1px solid rgba(201,167,103,.16);color:rgba(244,234,217,.86);font-size:1.02rem"><span style="position:absolute;left:0;top:1.15rem;width:7px;height:7px;border:1px solid var(--brass);transform:rotate(45deg)"></span>On-site coordination from set-up to send-off</li>
            <li style="position:relative;padding:.7rem 0 .7rem 1.6rem;border-bottom:1px solid rgba(201,167,103,.16);color:rgba(244,234,217,.86);font-size:1.02rem"><span style="position:absolute;left:0;top:1.15rem;width:7px;height:7px;border:1px solid var(--brass);transform:rotate(45deg)"></span>Vendor setup, arrivals, and overall event flow</li>
            <li style="position:relative;padding:.7rem 0 .7rem 1.6rem;border-bottom:1px solid rgba(201,167,103,.16);color:rgba(244,234,217,.86);font-size:1.02rem"><span style="position:absolute;left:0;top:1.15rem;width:7px;height:7px;border:1px solid var(--brass);transform:rotate(45deg)"></span>Cueing of entrances, songs, speeches, and games</li>
            <li style="position:relative;padding:.7rem 0 .7rem 1.6rem;border-bottom:1px solid rgba(201,167,103,.16);color:rgba(244,234,217,.86);font-size:1.02rem"><span style="position:absolute;left:0;top:1.15rem;width:7px;height:7px;border:1px solid var(--brass);transform:rotate(45deg)"></span>Photography &amp; program schedule management</li>
            <li style="position:relative;padding:.7rem 0 .7rem 1.6rem;border-bottom:1px solid rgba(201,167,103,.16);color:rgba(244,234,217,.86);font-size:1.02rem"><span style="position:absolute;left:0;top:1.15rem;width:7px;height:7px;border:1px solid var(--brass);transform:rotate(45deg)"></span>A single point of contact, so you remain fully present</li>
          </ul>
        </div>
      </div>

      <!-- Pricing -->
      <div style="margin-top:clamp(3.5rem,6vw,5rem);border-top:1px solid var(--line);padding-top:clamp(2.5rem,4vw,3.5rem)">
        <span class="reveal" style="display:block;font-family:'Jost',sans-serif;font-weight:500;font-size:.72rem;letter-spacing:.32em;text-transform:uppercase;color:var(--brass-soft);margin-bottom:.7rem">Investment</span>
        <p class="reveal d1" style="max-width:50ch;color:rgba(244,234,217,.74);margin-bottom:2.4rem">Considered pricing, scaled to the size and spirit of your event. A tailored quote follows your discovery call.</p>
        <div class="hon-tiers">
          <div class="reveal d1 tier-card" style="border:1px solid var(--line);padding:clamp(1.8rem,3vw,2.6rem);background:rgba(53,12,20,.18)">
            <span style="font-family:'Jost',sans-serif;font-size:.66rem;letter-spacing:.24em;text-transform:uppercase;color:var(--brass-soft)">i. Planning tier</span>
            <h3 style="font-family:'Fraunces',serif;font-weight:400;font-size:1.5rem;margin:.7rem 0 1.1rem">Pre-event planning &amp; creation</h3>
            <div style="font-family:'Fraunces',serif;font-size:2.4rem;color:var(--ivory);margin-bottom:1.4rem;letter-spacing:-.02em">$800<span style="font-size:1rem;color:rgba(244,234,217,.6);font-style:italic"> – $1,500</span></div>
            <ul style="list-style:none">
              <li style="padding:.5rem 0;color:rgba(244,234,217,.8);font-size:.98rem;border-bottom:1px solid rgba(201,167,103,.12)">Main point of contact for all vendors</li>
              <li style="padding:.5rem 0;color:rgba(244,234,217,.8);font-size:.98rem;border-bottom:1px solid rgba(201,167,103,.12)">Vendor communication in the weeks leading up</li>
              <li style="padding:.5rem 0;color:rgba(244,234,217,.8);font-size:.98rem;border-bottom:1px solid rgba(201,167,103,.12)">Timeline &amp; program creation, with revisions</li>
              <li style="padding:.5rem 0;color:rgba(244,234,217,.8);font-size:.98rem;border-bottom:1px solid rgba(201,167,103,.12)">Planning calls &amp; logistics organization</li>
            </ul>
          </div>
          <div class="reveal d2 tier-card" style="border:1px solid var(--line);padding:clamp(1.8rem,3vw,2.6rem);background:rgba(53,12,20,.18)">
            <span style="font-family:'Jost',sans-serif;font-size:.66rem;letter-spacing:.24em;text-transform:uppercase;color:var(--brass-soft)">ii. Execution tier</span>
            <h3 style="font-family:'Fraunces',serif;font-weight:400;font-size:1.5rem;margin:.7rem 0 1.1rem">Wedding-day execution</h3>
            <div style="font-family:'Fraunces',serif;font-size:2.4rem;color:var(--ivory);margin-bottom:1.4rem;letter-spacing:-.02em">$500<span style="font-size:1rem;color:rgba(244,234,217,.6);font-style:italic"> – $1,200</span></div>
            <ul style="list-style:none">
              <li style="padding:.5rem 0;color:rgba(244,234,217,.8);font-size:.98rem;border-bottom:1px solid rgba(201,167,103,.12)">Ten to twelve hours of on-site service</li>
              <li style="padding:.5rem 0;color:rgba(244,234,217,.8);font-size:.98rem;border-bottom:1px solid rgba(201,167,103,.12)">Coordination from pre-event start to end</li>
              <li style="padding:.5rem 0;color:rgba(244,234,217,.8);font-size:.98rem;border-bottom:1px solid rgba(201,167,103,.12)">Managing vendors and the timeline</li>
              <li style="padding:.5rem 0;color:rgba(244,234,217,.8);font-size:.98rem;border-bottom:1px solid rgba(201,167,103,.12)">Cueing key moments &amp; real-time problem-solving</li>
            </ul>
          </div>
        </div>
        <p class="reveal" style="text-align:center;margin-top:2rem;font-style:italic;color:rgba(244,234,217,.66)">Most clients combine both tiers for a complete planning-to-execution experience.</p>
      </div>
    </div>
  </section>

  <!-- ===== TESTIMONIAL ===== -->
  <section style="background:var(--wine-deep);text-align:center;position:relative;overflow:hidden;padding:clamp(5rem,11vw,9rem) clamp(1.25rem,5vw,4rem)">
    <div class="hon-bloom" style="position:absolute;width:50vw;height:50vw;max-width:540px;max-height:540px;top:-10vw;left:50%;transform:translateX(-50%);border-radius:50%;pointer-events:none;background:radial-gradient(circle, rgba(227,202,151,.26), rgba(227,202,151,.08) 38%, transparent 66%);filter:blur(8px);z-index:0"></div>
    <div style="max-width:1240px;margin:0 auto;position:relative;z-index:2">
      <div class="reveal" style="font-family:'Fraunces',serif;font-size:5rem;color:var(--brass);opacity:.55;line-height:.4;margin-bottom:1rem">"</div>
      <blockquote class="reveal d1" style="font-family:'Fraunces',serif;font-weight:400;font-size:clamp(1.7rem,3.6vw,2.7rem);line-height:1.32;max-width:20ch;margin:0 auto 2rem;letter-spacing:-.01em">The whole evening was beautiful and felt <em class="hon-em" style="color:var(--brass-soft)">effortless.</em> I truly couldn't have imagined the day without her.</blockquote>
      <cite class="reveal d2" style="font-family:'Jost',sans-serif;font-style:normal;font-size:.74rem;letter-spacing:.22em;text-transform:uppercase;color:rgba(244,234,217,.7)">Sumaiya Farooq — Walima bride</cite>
    </div>
  </section>

  <!-- ===== INQUIRY ===== -->
  <section id="hon-inquire" style="background:radial-gradient(110% 100% at 50% 0%, #6c2129 0%, var(--wine) 46%, var(--oxblood) 100%);position:relative;overflow:hidden;padding:clamp(5rem,11vw,9rem) clamp(1.25rem,5vw,4rem)">
    <div class="hon-bloom" style="position:absolute;width:70vw;height:70vw;max-width:800px;max-height:800px;top:-22vw;left:50%;transform:translateX(-50%);border-radius:50%;pointer-events:none;background:radial-gradient(circle, rgba(227,202,151,.28), rgba(227,202,151,.1) 38%, transparent 66%);filter:blur(8px);z-index:0"></div>
    <div class="hon-closing-grid" style="max-width:1080px;margin:0 auto;position:relative;z-index:2">
      <div>
        <span class="reveal" style="font-family:'Jost',sans-serif;font-weight:500;font-size:.72rem;letter-spacing:.32em;text-transform:uppercase;color:var(--brass)">Let's begin</span>
        <h2 class="reveal d1" style="font-family:'Fraunces',serif;font-weight:400;font-size:clamp(2.4rem,5.5vw,4rem);line-height:1.04;letter-spacing:-.02em;margin:1rem 0 1.5rem">Let's make something <em class="hon-em" style="color:var(--brass-soft)">beautiful</em> together.</h2>
        <p class="reveal d1" style="font-style:italic;color:rgba(244,234,217,.8);max-width:32ch;margin-bottom:2.4rem">Now booking 2026 weddings, walimas, and celebrations across Southern California.</p>
        <div class="reveal d2" style="margin-top:2.6rem;padding-top:2rem;border-top:1px solid var(--line);display:flex;flex-direction:column;gap:.7rem">
          <a href="mailto:info@huesofnoor.com" class="contact-link" style="font-family:'EB Garamond',serif;font-size:1.05rem;color:rgba(244,234,217,.85);transition:color .35s"><span style="font-family:'Jost',sans-serif;font-size:.62rem;letter-spacing:.22em;text-transform:uppercase;color:var(--brass);margin-right:.9rem">Email</span>info@huesofnoor.com</a>
          <a href="tel:5623412539" class="contact-link" style="font-family:'EB Garamond',serif;font-size:1.05rem;color:rgba(244,234,217,.85);transition:color .35s"><span style="font-family:'Jost',sans-serif;font-size:.62rem;letter-spacing:.22em;text-transform:uppercase;color:var(--brass);margin-right:.9rem">Phone</span>562-341-2539</a>
          <a href="https://instagram.com/byhuesofnoor" target="_blank" rel="noopener" class="contact-link" style="font-family:'EB Garamond',serif;font-size:1.05rem;color:rgba(244,234,217,.85);transition:color .35s"><span style="font-family:'Jost',sans-serif;font-size:.62rem;letter-spacing:.22em;text-transform:uppercase;color:var(--brass);margin-right:.9rem">Social</span>@byhuesofnoor</a>
        </div>
      </div>

      <div class="reveal d2" style="border:1px solid var(--line);padding:clamp(1.6rem,3.5vw,2.6rem);background:rgba(53,12,20,.28);backdrop-filter:blur(6px)">
        <form id="hon-form" onsubmit="handleSubmit(event)" novalidate>
          <span style="display:block;font-family:'Jost',sans-serif;font-weight:500;font-size:.72rem;letter-spacing:.32em;text-transform:uppercase;color:var(--brass);margin-bottom:1.4rem">Tell us about your vision</span>
          <div style="margin-bottom:1.1rem">
            <label for="hon-name" style="display:block;font-family:'Jost',sans-serif;font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(244,234,217,.6);margin-bottom:.5rem">Full name</label>
            <input id="hon-name" name="name" type="text" class="hon-input" style="width:100%;background:transparent;border:none;border-bottom:1px solid var(--line);color:var(--ivory);font-family:'EB Garamond',serif;font-size:1.05rem;padding:.55rem 0;transition:border-color .4s">
          </div>
          <div class="hon-field-row">
            <div style="margin-bottom:1.1rem">
              <label for="hon-email" style="display:block;font-family:'Jost',sans-serif;font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(244,234,217,.6);margin-bottom:.5rem">Email</label>
              <input id="hon-email" name="email" type="email" class="hon-input" style="width:100%;background:transparent;border:none;border-bottom:1px solid var(--line);color:var(--ivory);font-family:'EB Garamond',serif;font-size:1.05rem;padding:.55rem 0;transition:border-color .4s">
            </div>
            <div style="margin-bottom:1.1rem">
              <label for="hon-phone" style="display:block;font-family:'Jost',sans-serif;font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(244,234,217,.6);margin-bottom:.5rem">Phone</label>
              <input id="hon-phone" name="phone" type="tel" class="hon-input" style="width:100%;background:transparent;border:none;border-bottom:1px solid var(--line);color:var(--ivory);font-family:'EB Garamond',serif;font-size:1.05rem;padding:.55rem 0;transition:border-color .4s">
            </div>
          </div>
          <div class="hon-field-row">
            <div style="margin-bottom:1.1rem">
              <label for="hon-type" style="display:block;font-family:'Jost',sans-serif;font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(244,234,217,.6);margin-bottom:.5rem">Event type</label>
              <select id="hon-type" name="type" class="hon-select" style="width:100%;background:transparent;border:none;border-bottom:1px solid var(--line);color:var(--ivory);font-family:'EB Garamond',serif;font-size:1.05rem;padding:.55rem 0;cursor:pointer;transition:border-color .4s;-webkit-appearance:none;appearance:none">
                <option style="background:var(--wine-deep)">Wedding</option>
                <option style="background:var(--wine-deep)">Walima</option>
                <option style="background:var(--wine-deep)">Engagement</option>
                <option style="background:var(--wine-deep)">Mehndi</option>
                <option style="background:var(--wine-deep)">Social gathering</option>
                <option style="background:var(--wine-deep)">Private celebration</option>
              </select>
            </div>
            <div style="margin-bottom:1.1rem">
              <label for="hon-date" style="display:block;font-family:'Jost',sans-serif;font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(244,234,217,.6);margin-bottom:.5rem">Event date</label>
              <input id="hon-date" name="date" type="text" placeholder="Approx." class="hon-input" style="width:100%;background:transparent;border:none;border-bottom:1px solid var(--line);color:var(--ivory);font-family:'EB Garamond',serif;font-size:1.05rem;padding:.55rem 0;transition:border-color .4s">
            </div>
          </div>
          <div style="margin-bottom:1.1rem">
            <label for="hon-vision" style="display:block;font-family:'Jost',sans-serif;font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(244,234,217,.6);margin-bottom:.5rem">Share your vision</label>
            <textarea id="hon-vision" name="vision" rows="2" class="hon-textarea" style="width:100%;background:transparent;border:none;border-bottom:1px solid var(--line);color:var(--ivory);font-family:'EB Garamond',serif;font-size:1.05rem;padding:.55rem 0;resize:vertical;min-height:64px;transition:border-color .4s"></textarea>
          </div>
          <button type="submit" class="btn-ivory" style="width:100%;justify-content:center;font-family:'Jost',sans-serif;font-weight:400;font-size:.78rem;letter-spacing:.2em;text-transform:uppercase;display:inline-flex;align-items:center;gap:.7em;padding:1.05em 1.9em;border:1px solid var(--brass);color:var(--wine);background:var(--ivory);cursor:pointer;margin-top:.8rem;transition:background .5s var(--ease),color .5s var(--ease),letter-spacing .5s var(--ease)">Send inquiry <span>↗</span></button>
          <p style="margin-top:1.1rem;font-size:.92rem;font-style:italic;color:rgba(244,234,217,.55);text-align:center">Every inquiry receives a personal response within two business days.</p>
        </form>
        <div id="hon-success" class="form-success">
          <div style="font-family:'Fraunces',serif;font-size:2.6rem;color:var(--brass);margin-bottom:.6rem">✦</div>
          <h3 style="font-family:'Fraunces',serif;font-weight:400;font-size:1.6rem;margin-bottom:.6rem">Thank you.</h3>
          <p style="color:rgba(244,234,217,.78);font-style:italic;max-width:30ch;margin:0 auto">Your inquiry is on its way. Ayesha reads each one herself and will be in touch shortly.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== FOOTER ===== -->
  <footer style="background:var(--oxblood);padding:clamp(3.5rem,7vw,5rem) clamp(1.25rem,5vw,4rem) 2.5rem;border-top:1px solid var(--line)">
    <div class="hon-foot-grid" style="max-width:1240px;margin:0 auto">
      <div>
        <span style="font-family:'Fraunces',serif;font-weight:400;font-size:1.5rem;letter-spacing:.04em;display:inline-flex;align-items:baseline;gap:.15em;margin-bottom:1rem">Planned<span style="font-style:italic;font-size:.78em;letter-spacing:.06em;opacity:.78;margin:0 .12em">by</span>Ayesha</span>
        <p style="font-style:italic;color:rgba(244,234,217,.6);max-width:30ch;margin-bottom:.6rem">Where every detail is held with care.</p>
        <span style="font-family:'Jost',sans-serif;font-weight:500;font-size:.62rem;letter-spacing:.3em;text-transform:uppercase;color:var(--brass)">Event design · Los Angeles</span>
      </div>
      <div>
        <h4 style="font-family:'Jost',sans-serif;font-weight:500;font-size:.66rem;letter-spacing:.24em;text-transform:uppercase;color:var(--brass);margin-bottom:1.2rem">Explore</h4>
        <a href="#hon-work"    class="foot-link" style="display:block;color:rgba(244,234,217,.72);font-size:1rem;margin-bottom:.7rem;transition:color .35s">Portfolio</a>
        <a href="#hon-process" class="foot-link" style="display:block;color:rgba(244,234,217,.72);font-size:1rem;margin-bottom:.7rem;transition:color .35s">Services</a>
        <a href="#hon-inquire" class="foot-link" style="display:block;color:rgba(244,234,217,.72);font-size:1rem;margin-bottom:.7rem;transition:color .35s">Inquire</a>
      </div>
      <div>
        <h4 style="font-family:'Jost',sans-serif;font-weight:500;font-size:.66rem;letter-spacing:.24em;text-transform:uppercase;color:var(--brass);margin-bottom:1.2rem">Connect</h4>
        <a href="mailto:info@huesofnoor.com" class="foot-link" style="display:block;color:rgba(244,234,217,.72);font-size:1rem;margin-bottom:.7rem;transition:color .35s">info@huesofnoor.com</a>
        <a href="tel:5623412539"              class="foot-link" style="display:block;color:rgba(244,234,217,.72);font-size:1rem;margin-bottom:.7rem;transition:color .35s">562-341-2539</a>
        <a href="https://instagram.com/byhuesofnoor" target="_blank" rel="noopener" class="foot-link" style="display:block;color:rgba(244,234,217,.72);font-size:1rem;margin-bottom:.7rem;transition:color .35s">@byhuesofnoor</a>
      </div>
    </div>
    <div style="max-width:1240px;margin:3rem auto 0;padding-top:1.6rem;border-top:1px solid rgba(201,167,103,.16);display:flex;justify-content:space-between;flex-wrap:wrap;gap:.8rem;font-family:'Jost',sans-serif;font-size:.64rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(244,234,217,.45)">
      <span>© <span id="hon-yr">2026</span> Planned by Ayesha</span>
      <span>Crafted with intention</span>
    </div>
  </footer>

</div>`;
