// Partagé par toutes les pages (script classique, chargé avant les modules Firebase).

window.TCG_FIREBASE_CONFIG = {
  apiKey:            "AIzaSyCgCTF7sndU-q-eFvwiTKz_8C0a3JfZ0H4",
  authDomain:        "ma-collection-69003.firebaseapp.com",
  projectId:         "ma-collection-69003",
  storageBucket:     "ma-collection-69003.firebasestorage.app",
  messagingSenderId: "902502189555",
  appId:             "1:902502189555:web:db73883fe242306da96a86"
};

// Copies locales des données : à effacer quand le compte change,
// sinon les données d'un compte se retrouvent dans un autre.
var TCG_CACHE_KEYS = ['items_v1_cache', 'items_v1_dirty', 'wishlist_v1_cache', 'bindersv2_cache', 'ouvertures_v1_cache'];

function clearLocalCaches() {
  try { TCG_CACHE_KEYS.forEach(function(k){ localStorage.removeItem(k); }); } catch(e) {}
}

// À appeler dès qu'on connaît l'utilisateur connecté.
function claimLocalCaches(uid) {
  try {
    if (localStorage.getItem('tcg_owner') !== uid) {
      clearLocalCaches();
      localStorage.setItem('tcg_owner', uid);
    }
  } catch(e) {}
}
