---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
style: home
---
{%- include highlights.html -%}

<picture id="home-hero">
  <source media="(max-width: 600px) and (prefers-color-scheme: light)" srcset="/assets/images/home/hero-400w.png 1x, /assets/images/home/hero-800w.png 2x, /assets/images/home/hero-1600w.png 3x">
  <source media="(min-width: 601px) and (max-width: 800px) and (prefers-color-scheme: light)" srcset="/assets/images/home/hero-800w.png 1x, /assets/images/home/hero-1600w.png 2x, /assets/images/home/hero@3x.png 3x">
  <source media="(max-width: 600px) and (prefers-color-scheme: dark)" srcset="/assets/images/home/hero-dark-400w.png 1x, /assets/images/home/hero-dark-800w.png 2x, /assets/images/home/hero-dark@2x.png 3x">
  <source media="(min-width: 601px) and (max-width: 800px) and (prefers-color-scheme: dark)" srcset="/assets/images/home/hero-dark-800w.png 1x, /assets/images/home/hero-dark@2x.png 2x">
  <source media="(prefers-color-scheme: dark)" srcset="/assets/images/home/hero-dark.png 1x, /assets/images/home/hero-dark@2x.png 2x, /assets/images/home/hero-dark@3x.png 3x">
  <img src="/assets/images/home/hero.png" srcset="/assets/images/home/hero@2x.png 2x, /assets/images/home/hero@3x.png 3x" width="1400" height="1277" alt="Pockity's ledger timeline displayed on an iPad Pro 12.9 inches and iPhone 16 Pro, watchOS interface, and a shared ledger timeline on iPhone 16 Pro"/>
</picture>

<div class="container clear-bot">
  <div class="fade bot" style="text-align: center;">
    <img src="/assets/images/home/worldMapGrid.svg" width="780" height="381" alt="World Map represented as a dotted grid" />
  </div>
  <div class="container readable center">
    <hgroup>
      <h2>Travel with Pockity</h2>
      <h3 classs="subhead">A pocket sized currency convertor and expense tracker</h3>
    </hgroup>
    <div class="grid">
      <div>
        <p>Convert across 170 supported currencies, updated at-least thrice a day.</p>
      </div>
      <div>
        <p>All conversions are performed on-device, without exposing your financial data.</p>
      </div>
      <div>
        <p>Works offline, so you can travel off the grid, and still get near-accurate conversions.</p>
      </div>
    </div><!-- grid -->
  </div><!-- container-readable -->
</div><!-- container-clearBot-->

<div class="container clear-bot center" id="widgets-pre">
  <hgroup>
    <h2>Insightful. Interactive.</h2>
    <h3 class="subhead">Pockity’s widgets brings insights from your expenses and earnings, right to your homescreen and desktop.</h3>
  </hgroup>
</div>

<picture id="widgets">
  <img src="/assets/images/home/widgets.png" srcset="/assets/images/home/widgets@2x.png 2x, /assets/images/home/widgets@3x.png 3x" width="1104" height="190" alt="Pockity's widgets: Weekly and Monthly statistics, Category statistics, Entry widget, and Lockscreen widgets"/>
</picture>

<div class="container clear-bot center" id="focus-modes">
  <hgroup>
    <h2>Focus Modes</h2>
    <h3 class="subhead">Configure focus mode filters to display specific ledgers. Personal, Work, Travel… the combinations are endless.</h3>
  </hgroup>

  <div class="card" id="focusMode-card">
    <picture id="focusFilters" class="fade card-bg trailing">
     <img src="/assets/images/home/focusFilters.png" srcset="/assets/images/home/focusFilters@2x.png 2x, /assets/images/home/focusFilters@3x.png 3x" width="887" height="81" alt="Pockity's focusFilters: Weekly and Monthly statistics, Category statistics, Entry widget, and Lockscreen focusFilters"/>
    </picture>
    <p>Only ledgers you select in the focus filters will appear in the app’s UI. The app will continue to update the hidden ledgers in the background when changes occur to them from other devices.</p>
    <p>You can still create entries in other ledgers when focus mode is active or enabled. You can also quickly toggle focus mode from the app’s sidebar.</p>
  </div> <!-- card -->
</div><!-- container -->

<div class="container clear-bot center" id="recurring-items">
  <hgroup>
    <h2>Repeating Expenses</h2>
    <h3 class="subhead">Setup your recurring expenses using simple or complex rules, Pockity will notify you a day in advance so you don’t miss out on important payments.</h3>
  </hgroup>

  <div class="grid">
    <div class="card interactive">
      <picture id="recEditor" style="transform: translateY(-8.6rem);">
        <source media="(max-width: 600px) and (prefers-color-scheme: light)" srcset="/assets/images/home/recEditor-400w.png 1x, /assets/images/home/recEditor-800w.png 2x, /assets/images/home/recEditor-1600w.png 3x"/>
        <source media="(min-width: 601px) and (max-width: 800px) and (prefers-color-scheme: light)" srcset="/assets/images/home/recEditor-800w.png 1x, /assets/images/home/recEditor-1600w.png 2x, /assets/images/home/recEditor@3x.png 3x"/>
        <source media="(max-width: 600px) and (prefers-color-scheme: dark)" srcset="/assets/images/home/recEditor-dark-400w.png 1x, /assets/images/home/recEditor-dark-800w.png 2x, /assets/images/home/recEditor-dark@2x.png 3x"/>
        <source media="(min-width: 601px) and (max-width: 800px) and (prefers-color-scheme: dark)" srcset="/assets/images/home/recEditor-dark-800w.png 1x, /assets/images/home/recEditor-dark@2x.png 2x"/>
        <source media="(prefers-color-scheme: dark)" srcset="/assets/images/home/recEditor-dark.png 1x, /assets/images/home/recEditor-dark@2x.png 2x, /assets/images/home/recEditor-dark@3x.png 3x"/>
        <img src="/assets/images/home/recEditor.png" srcset="/assets/images/home/recEditor@2x.png 2x, /assets/images/home/recEditor@3x.png 3x" width="342" height="679" alt="Pockity's Recurring editor"/>
      </picture>
    </div>
    <div class="card interactive" data-theme="dark">
      <div>
        <img src="/assets/images/home/notification.png" srcset="/assets/images/home/notification@2x.png 2x, /assets/images/home/notification@3x.png 3x" width="344" height="96" alt="recurring background"/>
        <h4>System Notifications</h4>
        <p>Advance periodic notifications ensure you never miss a critical payment, and your accounts have sufficient balances.</p>
      </div>
    </div>
  </div>
</div>

<picture id="hero-lockup">
  <source media="(max-width: 600px) and (prefers-color-scheme: light)" srcset="/assets/images/home/hero-lockup-2025-08-400w.png 1x, /assets/images/home/hero-lockup-2025-08-800w.png 2x, /assets/images/home/hero-lockup-2025-08-1600w.png 3x"/>
  <source media="(min-width: 601px) and (max-width: 800px) and (prefers-color-scheme: light)" srcset="/assets/images/home/hero-lockup-2025-08-800w.png 1x, /assets/images/home/hero-lockup-2025-08-1600w.png 2x, /assets/images/home/hero-lockup-2025-08@3x.png 3x"/>
  <img src="/assets/images/home/hero-lockup-2025-08.png" srcset="/assets/images/home/hero-lockup-2025-08@2x.png 2x, /assets/images/home/hero-lockup-2025-08@3x.png 3x" width="1851" height="463" alt="Pockity's hero-lockup-2025-08: Weekly and Monthly statistics, Category statistics, Entry widget, and Lockscreen hero-lockup-2025-08"/>
</picture>

<div class="container readable center" id="sharing">
  <img src="/assets/images/home/sharing.png" srcset="/assets/images/home/sharing@2x.png 2x, /assets/images/home/sharing@3x.png 3x" width="620" height="349" alt="Illustration for sharing capabilities in Pockity"/>

  <div class="grid">
    <div>
      <h4>Family Sharing</h4>
      <p>Pockity+ Family Plan can be shared with up to 4 people added to your Apple ID Family.</p>
    </div>
    <div>
      <h4>Shared Ledgers</h4>
      <p>Share ledgers with your family, friends and guardians, track expenses together or give view only access.</p>
    </div>
  </div>
</div>