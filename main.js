/* ESPACE SOLIDARITÉ GUINÉE — scripts (léger, sans dépendance) */
(function () {
  'use strict';

  /* ---- Menu mobile ---- */
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav-principale');
  if (burger && nav) {
    var voile = document.createElement('div');
    voile.className = 'voile';
    document.body.appendChild(voile);

    function fermer() {
      nav.classList.remove('ouvert');
      voile.classList.remove('visible');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
    function basculer() {
      var ouvert = nav.classList.toggle('ouvert');
      voile.classList.toggle('visible', ouvert);
      burger.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
      document.body.style.overflow = ouvert ? 'hidden' : '';
    }
    burger.addEventListener('click', basculer);
    voile.addEventListener('click', fermer);
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') fermer();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') fermer();
    });
  }

  /* ---- Filtres de la page Projets ---- */
  var filtres = document.querySelectorAll('.filtre');
  if (filtres.length) {
    filtres.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var cible = btn.dataset.filtre;
        filtres.forEach(function (b) {
          b.classList.toggle('actif', b === btn);
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        });
        document.querySelectorAll('[data-statut]').forEach(function (bloc) {
          var visible = cible === 'tous' || bloc.dataset.statut === cible;
          bloc.style.display = visible ? '' : 'none';
        });
        document.querySelectorAll('[data-groupe]').forEach(function (grp) {
          if (cible === 'tous') { grp.style.display = ''; return; }
          grp.style.display = grp.dataset.groupe === cible ? '' : 'none';
        });
      });
    });
  }

  /* ---- Année automatique dans le pied de page ---- */
  document.querySelectorAll('[data-annee]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
