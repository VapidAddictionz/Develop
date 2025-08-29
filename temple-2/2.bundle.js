(window.webpackJsonp = window.webpackJsonp || []).push([
    [2],
    {
        354: function (e, r, o) {
            var n = o(66),
                u = o(104),
                a = o(355),
                c = o(356),
                t = o(357),
                i = o(243),
                d = o(246),
                b = o(207),
                g = o(216),
                p = o(220),
                l = o(218),
                s = o(242),
                f = o(244),
                k = o(241),
                m = o(240);
            r = n(!1);
            var w = u(a),
                h = u(c),
                v = u(t),
                y = u(i),
                x = u(d),
                J = u(b),
                _ = u(g),
                M = u(p),
                j = u(l),
                q = u(s),
                z = u(f),
                A = u(k),
                B = u(m);
            r.push([
                e.i,
                ".idol,.logo,.main-1,.play{background-image:url(" +
                    w +
                    ")}.powerupglow,.powerupbar,.fill,.pause,.count-holder{background-image:url(" +
                    h +
                    ")}.cracked-border,.divider,.brown-bg,.distance-toast,.coins-chest-open,.coins-in-hand,.coins-urn,.coins-vault-open,.chest-closed,.check-button,.boost-icon,.boost-meter,.magnet-icon,.shield-icon,.off-button,.on-button,.timer-icon,.ads-movie,.tutorialarrowup,.coin-single{background-image:url(" +
                    v +
                    ")}.pr-loading-screen{background-image:url(" +
                    y +
                    ")}.pr-button-brown{background-image:url(" +
                    x +
                    ")}.pr-button-green{background-image:url(" +
                    J +
                    ")}.pr-button{background-image:url(" +
                    _ +
                    ")}.pr-decor-border{background-image:url(" +
                    M +
                    ")}.pr-green-button{background-image:url(" +
                    j +
                    ")}.pr-guy-dangerous-death{background-image:url(" +
                    q +
                    ")}.pr-power-unlock-sprite{background-image:url(" +
                    z +
                    ")}.pr-beige-bg{background-image:url(" +
                    A +
                    ")}.reward-button-png{background-image:url(" +
                    B +
                    ")}\n",
                "",
            ]),
                (e.exports = r);
        },
        355: function (e, r, o) {
            "use strict";
            o.r(r), (r.default = o.p + "ac268c48131d7ef2e42100beed84990f.webp");
        },
        356: function (e, r, o) {
            "use strict";
            o.r(r), (r.default = o.p + "6bbd8797ffdaf4e4c44b49e4732c9bf1.webp");
        },
        357: function (e, r, o) {
            "use strict";
            o.r(r), (r.default = o.p + "72bdc992cae069c7b8720c3106e5d3c8.webp");
        },
        362: function (e, r, o) {
            var n = o(65),
                u = o(354);
            "string" == typeof (u = u.__esModule ? u.default : u) && (u = [[e.i, u, ""]]);
            var a = { insert: "head", singleton: !1 };
            n(u, a);
            e.exports = u.locals || {};
        },
    },
]);

// Data Protection Data
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

document.addEventListener('keydown', function(e) {
  // F12
  if (e.key === 'F12') {
    e.preventDefault();
    return false;
  }
  
  // Ctrl+Shift+I or Cmd+Option+I (Inspect Element)
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'i') {
    e.preventDefault();
    return false;
  }
  
  // Ctrl+Shift+C or Cmd+Shift+C (Element picker)
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'c') {
    e.preventDefault();
    return false;
  }
  
  // Ctrl+Shift+J or Cmd+Option+J (Console)
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'j') {
    e.preventDefault();
    return false;
  }
  
  // Ctrl+U or Cmd+U (View Source)
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'u') {
    e.preventDefault();
    return false;
  }
});
