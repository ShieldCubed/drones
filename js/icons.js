// Injects a hidden SVG sprite: small line icons (used in nav/category chips)
// plus larger isometric, gradient-shaded "3D simulated" illustrations used on product cards.
const ICON_SPRITE = `
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
<defs>
  <linearGradient id="metalTop" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7C8896"/><stop offset="1" stop-color="#525C66"/>
  </linearGradient>
  <linearGradient id="metalLeft" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#3E464F"/><stop offset="1" stop-color="#262C33"/>
  </linearGradient>
  <linearGradient id="metalRight" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#5A6570"/><stop offset="1" stop-color="#3A4149"/>
  </linearGradient>
  <linearGradient id="carbonTop" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#2E353D"/><stop offset="1" stop-color="#1C2127"/>
  </linearGradient>
  <radialGradient id="domeGlass" cx="0.35" cy="0.3" r="0.75">
    <stop offset="0" stop-color="#BFEFF7"/>
    <stop offset="0.35" stop-color="#57B8CE"/>
    <stop offset="1" stop-color="#1E4E58"/>
  </radialGradient>
  <radialGradient id="lensFlare" cx="0.3" cy="0.25" r="0.5">
    <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.9"/>
    <stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="engineBody" x1="0" y1="0" x2="1" y2="0.2">
    <stop offset="0" stop-color="#8B95A0"/>
    <stop offset="0.5" stop-color="#525C66"/>
    <stop offset="1" stop-color="#2E343B"/>
  </linearGradient>
  <radialGradient id="exhaustGlow" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#FFD9A0"/>
    <stop offset="0.4" stop-color="#FF6A1F"/>
    <stop offset="1" stop-color="#FF6A1F" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="pcbGreen" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2B4A3E"/><stop offset="1" stop-color="#1B2F27"/>
  </linearGradient>
  <linearGradient id="chipTop" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#222831"/><stop offset="1" stop-color="#14181D"/>
  </linearGradient>
  <linearGradient id="battTop" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#5FCBDD"/><stop offset="1" stop-color="#3893A6"/>
  </linearGradient>
  <linearGradient id="battFront" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#33404A"/><stop offset="1" stop-color="#1E262D"/>
  </linearGradient>
  <linearGradient id="battSide" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#232B32"/><stop offset="1" stop-color="#171D22"/>
  </linearGradient>
</defs>

  <!-- ===== Small line icons (nav / category chips) ===== -->
  <symbol id="icon-frame" viewBox="0 0 64 64">
    <g fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="32" cy="32" r="5"/>
      <line x1="32" y1="32" x2="10" y2="12"/><line x1="32" y1="32" x2="54" y2="12"/>
      <line x1="32" y1="32" x2="10" y2="52"/><line x1="32" y1="32" x2="54" y2="52"/>
      <circle cx="10" cy="12" r="6"/><circle cx="54" cy="12" r="6"/>
      <circle cx="10" cy="52" r="6"/><circle cx="54" cy="52" r="6"/>
    </g>
  </symbol>
  <symbol id="icon-turbine" viewBox="0 0 64 64">
    <g fill="none" stroke="currentColor" stroke-width="2">
      <path d="M6 32 L20 24 L20 40 Z"/><rect x="20" y="20" width="18" height="24"/>
      <path d="M38 20 L52 26 L52 38 L38 44 Z"/><line x1="52" y1="32" x2="60" y2="32"/>
      <line x1="24" y1="20" x2="24" y2="44" stroke-width="1"/><line x1="30" y1="20" x2="30" y2="44" stroke-width="1"/>
    </g>
  </symbol>
  <symbol id="icon-avionics" viewBox="0 0 64 64">
    <g fill="none" stroke="currentColor" stroke-width="2">
      <rect x="14" y="14" width="36" height="36"/><rect x="24" y="24" width="16" height="16"/>
      <line x1="20" y1="14" x2="20" y2="6"/><line x1="32" y1="14" x2="32" y2="6"/><line x1="44" y1="14" x2="44" y2="6"/>
      <line x1="20" y1="50" x2="20" y2="58"/><line x1="32" y1="50" x2="32" y2="58"/><line x1="44" y1="50" x2="44" y2="58"/>
      <line x1="14" y1="20" x2="6" y2="20"/><line x1="14" y1="32" x2="6" y2="32"/><line x1="14" y1="44" x2="6" y2="44"/>
      <line x1="50" y1="20" x2="58" y2="20"/><line x1="50" y1="32" x2="58" y2="32"/><line x1="50" y1="44" x2="58" y2="44"/>
    </g>
  </symbol>
  <symbol id="icon-sensor" viewBox="0 0 64 64">
    <g fill="none" stroke="currentColor" stroke-width="2">
      <path d="M10 46 A26 26 0 0 1 54 46"/><path d="M20 46 A16 16 0 0 1 44 46"/>
      <circle cx="32" cy="46" r="3" fill="currentColor" stroke="none"/>
      <line x1="32" y1="46" x2="46" y2="20"/><circle cx="46" cy="20" r="3"/>
    </g>
  </symbol>
  <symbol id="icon-battery" viewBox="0 0 64 64">
    <g fill="none" stroke="currentColor" stroke-width="2">
      <rect x="10" y="20" width="40" height="24" rx="1"/><rect x="50" y="28" width="6" height="8"/>
      <line x1="20" y1="20" x2="20" y2="44" stroke-width="1"/><line x1="30" y1="20" x2="30" y2="44" stroke-width="1"/><line x1="40" y1="20" x2="40" y2="44" stroke-width="1"/>
    </g>
  </symbol>
  <symbol id="icon-antenna" viewBox="0 0 64 64">
    <g fill="none" stroke="currentColor" stroke-width="2">
      <line x1="32" y1="58" x2="32" y2="18"/><path d="M22 28 A14 14 0 0 1 42 28"/><path d="M16 20 A22 22 0 0 1 48 20"/>
      <circle cx="32" cy="14" r="3" fill="currentColor" stroke="none"/>
    </g>
  </symbol>

  <!-- ===== Large isometric "3D simulated" renders (product cards) ===== -->

  <!-- Airframe: isometric quad chassis -->
  <symbol id="render-frame" viewBox="0 0 200 200">
    <g stroke="#0F1317" stroke-width="1" stroke-linejoin="round">
      <path d="M100 96 L64 78 L58 84 L94 102 Z" fill="url(#carbonTop)"/>
      <path d="M100 96 L136 78 L142 84 L106 102 Z" fill="url(#metalTop)"/>
      <path d="M100 96 L64 118 L58 112 L94 94 Z" fill="url(#metalLeft)"/>
      <path d="M100 96 L136 118 L142 112 L106 94 Z" fill="url(#metalRight)"/>
      <ellipse cx="100" cy="97" rx="13" ry="9" fill="url(#metalTop)"/>
      <g>
        <ellipse cx="62" cy="80" rx="17" ry="6" fill="#20262C" opacity="0.9"/>
        <ellipse cx="138" cy="80" rx="17" ry="6" fill="#20262C" opacity="0.9"/>
        <ellipse cx="62" cy="116" rx="17" ry="6" fill="#20262C" opacity="0.9"/>
        <ellipse cx="138" cy="116" rx="17" ry="6" fill="#20262C" opacity="0.9"/>
      </g>
      <g fill="url(#metalRight)">
        <rect x="56" y="72" width="12" height="10" rx="2"/>
        <rect x="132" y="72" width="12" height="10" rx="2"/>
        <rect x="56" y="110" width="12" height="10" rx="2"/>
        <rect x="132" y="110" width="12" height="10" rx="2"/>
      </g>
    </g>
  </symbol>

  <!-- Microjet engine: tapered turbine with glowing exhaust -->
  <symbol id="render-turbine" viewBox="0 0 200 200">
    <g stroke="#14181D" stroke-width="1">
      <ellipse cx="150" cy="100" rx="10" ry="24" fill="url(#exhaustGlow)" opacity="0.9"/>
      <path d="M56 78 L142 88 L142 112 L56 122 Z" fill="url(#engineBody)"/>
      <ellipse cx="142" cy="100" rx="7" ry="12" fill="#20262C"/>
      <path d="M40 82 L56 78 L56 122 L40 118 Z" fill="url(#metalLeft)"/>
      <ellipse cx="40" cy="100" rx="6" ry="18" fill="#0F1317"/>
      <ellipse cx="41" cy="100" rx="4.2" ry="13" fill="#1B2127"/>
      <g stroke="#0B0E11" stroke-width="1" opacity="0.6">
        <line x1="70" y1="80" x2="70" y2="120"/>
        <line x1="86" y1="79" x2="86" y2="121"/>
        <line x1="102" y1="80" x2="102" y2="120"/>
        <line x1="118" y1="82" x2="118" y2="118"/>
      </g>
      <path d="M92 122 L92 140 L108 140 L108 122 Z" fill="url(#metalTop)"/>
      <path d="M84 140 L116 140 L120 148 L80 148 Z" fill="url(#carbonTop)"/>
    </g>
  </symbol>

  <!-- Flight controller / avionics stack -->
  <symbol id="render-avionics" viewBox="0 0 200 200">
    <g stroke="#0B0E11" stroke-width="1" stroke-linejoin="round">
      <path d="M60 118 L100 96 L140 118 L100 140 Z" fill="url(#pcbGreen)"/>
      <path d="M60 118 L100 140 L100 150 L60 128 Z" fill="#152019"/>
      <path d="M140 118 L100 140 L100 150 L140 128 Z" fill="#1C2C24"/>
      <path d="M82 106 L104 94 L118 101 L96 113 Z" fill="url(#chipTop)"/>
      <path d="M96 113 L118 101 L118 108 L96 120 Z" fill="#0E1114"/>
      <g fill="#57B8CE">
        <circle cx="72" cy="118" r="2"/><circle cx="80" cy="122" r="2"/>
        <circle cx="120" cy="112" r="2"/>
      </g>
      <g stroke="#3A4B41" stroke-width="1">
        <line x1="66" y1="115" x2="90" y2="102"/>
        <line x1="70" y1="121" x2="94" y2="108"/>
      </g>
    </g>
  </symbol>

  <!-- EO/IR sensor gimbal -->
  <symbol id="render-sensor" viewBox="0 0 200 200">
    <g stroke="#0B0E11" stroke-width="1">
      <path d="M78 70 L122 70 L128 82 L72 82 Z" fill="url(#metalTop)"/>
      <rect x="86" y="82" width="10" height="20" fill="url(#metalLeft)"/>
      <rect x="104" y="82" width="10" height="20" fill="url(#metalRight)"/>
      <circle cx="100" cy="126" r="34" fill="url(#domeGlass)"/>
      <circle cx="100" cy="126" r="34" fill="none" stroke="#123138" stroke-width="2"/>
      <circle cx="100" cy="126" r="16" fill="#0C2226"/>
      <ellipse cx="88" cy="112" rx="14" ry="9" fill="url(#lensFlare)"/>
    </g>
  </symbol>

  <!-- Battery pack -->
  <symbol id="render-battery" viewBox="0 0 200 200">
    <g stroke="#0B0E11" stroke-width="1" stroke-linejoin="round">
      <path d="M56 92 L124 92 L146 104 L78 104 Z" fill="url(#battTop)"/>
      <path d="M56 92 L56 132 L78 144 L78 104 Z" fill="url(#battSide)"/>
      <path d="M78 104 L146 104 L146 124 L78 144 Z" fill="url(#battFront)"/>
      <rect x="90" y="112" width="40" height="4" rx="2" fill="#0F1317"/>
      <rect x="90" y="120" width="28" height="4" rx="2" fill="#0F1317"/>
      <circle cx="132" cy="130" r="3" fill="#FF6A1F"/>
      <path d="M146 108 L158 112 L158 122 L146 118 Z" fill="url(#metalRight)"/>
    </g>
  </symbol>

  <!-- Comms / RF antenna -->
  <symbol id="render-antenna" viewBox="0 0 200 200">
    <g stroke="#0B0E11" stroke-width="1" stroke-linejoin="round">
      <path d="M70 140 L100 128 L130 140 L100 152 Z" fill="url(#metalTop)"/>
      <rect x="97" y="60" width="6" height="70" fill="url(#metalLeft)"/>
      <path d="M78 96 L100 88 L122 96 L122 112 L100 120 L78 112 Z" fill="url(#engineBody)" opacity="0.95"/>
      <g stroke="#57B8CE" stroke-width="1.5" fill="none" opacity="0.85">
        <path d="M84 58 A22 22 0 0 1 116 58"/>
        <path d="M90 66 A14 14 0 0 1 110 66"/>
      </g>
      <circle cx="100" cy="60" r="3" fill="#57B8CE"/>
    </g>
  </symbol>
</svg>`;
document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("afterbegin", ICON_SPRITE);
});
