const bigKey = document.getElementById('bigKey');
const keyName = document.getElementById('keyName');
const codeName = document.getElementById('codeName');
const whichVal = document.getElementById('whichVal');
const keyCodeEl = document.getElementById('keyCode');
const timeStamp = document.getElementById('timeStamp');
const isComposing = document.getElementById('isComposing');
const mods = document.getElementById('mods');
const printable = document.getElementById('printable');
const historyEl = document.getElementById('history');
const clearBtn = document.getElementById('clearBtn');
const copyBtn = document.getElementById('copyBtn');

let history = [];

function isPrintableKey(e) {
  if (e.key.length === 1) return true;
  if (e.key === ' ' || e.key === 'Spacebar' || e.code === 'Space') return true;
  return false;
}

function updateDisplay(e) {
  const now = new Date();
  const time = now.toLocaleTimeString();

  bigKey.textContent = e.key === ' ' ? 'Space' : e.key;
  keyName.textContent = `Key: ${e.key}`;
  codeName.textContent = `Code: ${e.code}`;
  whichVal.textContent = `Which: ${e.which}`;
  keyCodeEl.textContent = e.keyCode || '—';
  timeStamp.textContent = `Time: ${time}`;
  isComposing.textContent = e.isComposing ? 'yes' : 'no';

  const modifiers = [];
  if (e.ctrlKey) modifiers.push('Ctrl');
  if (e.altKey) modifiers.push('Alt');
  if (e.shiftKey) modifiers.push('Shift');
  if (e.metaKey) modifiers.push('Meta');
  mods.textContent = modifiers.length ? modifiers.join(' + ') : 'none';

  printable.textContent = isPrintableKey(e) ? 'yes' : 'no';

  const item = {
    time,
    key: e.key,
    code: e.code,
    keyCode: e.keyCode,
    which: e.which,
    mods: modifiers.join(' + ') || 'none'
  };
  history.unshift(item);
  if (history.length > 100) history.pop();
  renderHistory();
}

function renderHistory() {
  historyEl.innerHTML = history.map(h => {
    return `<div style="padding:8px;border-bottom:1px dashed rgba(255,255,255,0.03)">
      <strong>${escapeHtml(h.key)}</strong> — <small>${escapeHtml(h.code)}</small><br>
      <small>${h.time} · keyCode:${h.keyCode} · mods:${escapeHtml(h.mods)}</small>
    </div>`;
  }).join('');
}

function escapeHtml(s){
  return String(s).replace(/[&<>\"']/g, function(m){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m];
  });
}

window.addEventListener('keydown', function(e){
  updateDisplay(e);
});

window.addEventListener('keyup', function(e){
  const el = document.createElement('div');
  el.textContent = `released: ${e.key === ' ' ? 'Space' : e.key}`;
  el.style.opacity = '0.9';
  el.style.position = 'fixed';
  el.style.right = '18px';
  el.style.bottom = '18px';
  el.style.background = 'rgba(0,0,0,0.6)';
  el.style.padding = '8px 10px';
  el.style.borderRadius = '8px';
  el.style.pointerEvents = 'none';
  document.body.appendChild(el);
  setTimeout(()=>el.style.opacity='0', 700);
  setTimeout(()=>el.remove(), 1200);
});

clearBtn.addEventListener('click', ()=>{
  history = [];
  renderHistory();
});

copyBtn.addEventListener('click', async ()=>{
  if (!history.length) return alert('No key recorded yet');
  const last = history[0];
  const text = `Last key: ${last.key} (code: ${last.code}, keyCode: ${last.keyCode}, mods: ${last.mods}) at ${last.time}`;
  try{
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = 'Copied!';
    setTimeout(()=>copyBtn.textContent='Copy Last',900);
  }catch(e){
    prompt('Copy this text:', text);
  }
});

document.addEventListener('click', ()=>{ window.focus(); });
