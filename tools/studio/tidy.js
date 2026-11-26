
/* ===== 2026-11-27 tidy: small helpers for the quiet toolbar ===== */
(function(){var _ud=updDel;updDel=function(){_ud();var b=$('delB');if(b)b.classList.toggle('rst',!b.disabled&&selCut!=null&&sel==null&&!selSeg);};
  function tip(e){var b=e.target.closest('button,a.sd-back,label');if(b&&!b.dataset.tp){var s=(b.textContent||'').trim();if(s)b.title=s;}}
  ['.sd-tlbar','.sd-top','.sd-ctl'].forEach(function(q){var el=document.querySelector(q);if(el)el.addEventListener('pointerover',tip);});
  updDel();
})();
