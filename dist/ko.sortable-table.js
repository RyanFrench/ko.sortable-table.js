ko.bindingHandlers.sortBy = {
    init: function(a, b) {
        var c = !0;
        a.style.cursor = "pointer", a.onclick = function() {
            var a = b(), d = a.array, e = a.sortBy;
            if (c = !c, "function" == typeof e) d.sort(e); else if (Array.isArray(e)) {
                var f = e.length;
                d.sort(function(a, b) {
                    for (var c = -1; ++c < f; ) {
                        var d = e[c];
                        if (a[d] != b[d]) return a[d] > b[d] ? 1 : -1;
                    }
                });
            } else "string" == typeof e && d.sort(function(a, b) {
                return a[e] > b[e] ? 1 : a[e] < b[e] ? -1 : 0;
            });
        };
    }
};