ko.bindingHandlers.sortBy = {
    init: function(a, b) {
        var c = !0;
        a.style.cursor = "pointer", a.onclick = function() {
            var a = b(), d = a.array, e = a.sortBy;
            switch (c = !c, !0) {
              case "function" == typeof e:
                d.sort(e);
                break;

              case Array.isArray(e):
                var f = e.length;
                d.sort(function(a, b) {
                    for (var c = -1; ++c < f; ) {
                        var d = e[c];
                        if (a[d] != b[d]) return a[d] > b[d] ? 1 : -1;
                    }
                });
                break;

              case "string" == typeof e:
                d.sort(function(a, b) {
                    return a[e] > b[e] ? 1 : a[e] < b[e] ? -1 : 0;
                });
                break;

              default:
                throw "Incorrect argument for sortBy";
            }
        };
    }
};