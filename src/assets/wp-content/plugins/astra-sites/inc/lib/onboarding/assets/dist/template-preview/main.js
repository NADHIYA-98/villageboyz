(() => {
    var e = {
        n: t => {
            var a = t && t.__esModule ? () => t.default : () => t;
            return e.d(a, {
                a
            }), a
        },
        d: (t, a) => {
            for (var o in a) e.o(a, o) && !e.o(t, o) && Object.defineProperty(t, o, {
                enumerable: !0,
                get: a[o]
            })
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t)
    };
    (() => {
        "use strict";
        const t = window.wp.domReady;
        var a = e.n(t);
        const o = () => window.location.href !== window.parent.location.href,
            n = "starter-templates-iframe-preview-data",
            r = () => {
                let e = "";
                const t = document.querySelector(".site-logo-img img");
                return t && (e = t.src), e
            };
        let s = r();
        const l = (e, t) => {
                if (!e) return "";
                if (e) {
                    const a = e.match(/'([^']+)'/);
                    return a ? a[1] : "inherit" === e ? t : e
                }
                return t || void 0
            },
            i = e => {
                switch (e.value.param) {
                    case "siteLogo":
                        const t = document.querySelectorAll(".site-logo-img img");
                        "" === s && (s = r());
                        let a = e.value.data.url || s;
                        if (a = e.value.data.dataUri || a, 0 === t.length && "" !== a) {
                            const t = document.createElement("span");
                            t.classList.add("site-logo-img");
                            const o = document.createElement("a");
                            o.setAttribute("class", "custom-logo-link"), o.setAttribute("href", "#"), o.setAttribute("aria-current", "page"), t.appendChild(o);
                            const n = document.createElement("img");
                            n.classList.add("custom-logo"), n.setAttribute("src", a), o.appendChild(n);
                            const r = document.getElementById("ast-desktop-header").querySelectorAll(".ast-site-identity")[0],
                                s = r.querySelectorAll(".ast-site-title-wrap")[0];
                            r.insertBefore(t, s);
                            const l = e.value.data.width || "";
                            "" !== l && (n.style.width = l + "px", n.style.maxWidth = l + "px")
                        } else if ("" !== a)
                            for (const [o, n] of Object.entries(t)) {
                                n.removeAttribute("srcset"), n.setAttribute("src", a);
                                const t = e.value.data.width;
                                "" !== t && (n.style.width = t + "px", n.style.maxWidth = t + "px")
                            }
                        break;
                    case "colorPalette":
                        const o = e.value.data.colors || [],
                            n = starter_templates_zip_preview.AstColorPaletteVarPrefix,
                            i = starter_templates_zip_preview.AstEleColorPaletteVarPrefix;
                        if (0 === o.length) {
                            document.querySelector("body").classList.remove("starter-templates-preview-palette");
                            const e = document.getElementsByClassName("starter-templates-preview-palette");
                            return void(e.length > 0 && e[0].remove())
                        }
                        document.querySelector("body").classList.add("starter-templates-preview-palette");
                        const d = Object.entries(o).map(((e, t) => [`--e-global-color-${i[t].replace(/-/g,"")}: ${e[1]};`, `${n}${t}: ${e[1]};`])).map((e => e.join(""))).join("");
                        let c = document.getElementById("starter-templates-preview-palette-css");
                        c || (c = document.createElement("style"), c.id = "starter-templates-preview-palette-css", c.setAttribute("rel", "stylesheet"), document.head.appendChild(c)), c.innerHTML = `.starter-templates-preview-palette{ ${d} }`;
                        break;
                    case "siteTypography":
                        if (!Object.keys(e.value.data).length) {
                            const e = document.getElementById("starter-templates-typography");
                            return void(e && e.remove())
                        }(e => {
                            if (!e) return;
                            if (!document.getElementById("google-fonts-domain")) {
                                const e = document.createElement("link");
                                e.id = "google-fonts-domain", e.setAttribute("rel", "preconnect"), e.setAttribute("href", "https://fonts.gstatic.com"), document.head.appendChild(e)
                            }
                            let t = document.getElementById("st-previw-google-fonts-url");
                            t || (t = document.createElement("link"), t.id = "st-previw-google-fonts-url", t.setAttribute("rel", "stylesheet"), document.head.appendChild(t));
                            const a = [];
                            let o = e["body-font-family"] || "",
                                n = parseInt(e["body-font-weight"]) || "";
                            n && (n = `:wght@${n}`), o && (o = l(o), o = o.replace(" ", "+"), a.push(`family=${o}${n}`));
                            let r = e["headings-font-family"] || "",
                                s = parseInt(e["headings-font-weight"]) || "";
                            s && (s = `:wght@${s}`), r && (r = l(r, o), r = r.replace(" ", "+"), a.push(`family=${r}${s}`));
                            const i = `https://fonts.googleapis.com/css2?${a.join("&")}&display=swap`;
                            t.setAttribute("href", i)
                        })(e.value.data), (e => {
                            if (!e) return;
                            let t = document.getElementById("starter-templates-typography");
                            t || (t = document.createElement("style"), t.id = "starter-templates-typography", t.setAttribute("rel", "stylesheet"), document.head.appendChild(t));
                            let a = "";
                            a += "body, button, input, select, textarea, .ast-button, .ast-custom-button {", a += "\tfont-family: " + e["body-font-family"] + ";", a += "\tfont-weight: " + e["body-font-weight"] + ";", a += "\tfont-size: " + e["font-size-body"].desktop + e["font-size-body"]["desktop-unit"] + ";", a += "\tline-height: " + e["body-line-height"] + ";", a += "}", a += "h1, .entry-content h1, h2, .entry-content h2, h3, .entry-content h3, h4, .entry-content h4, h5, .entry-content h5, h6, .entry-content h6, .site-title, .site-title a {", a += "\tfont-family: " + e["headings-font-family"] + ";", a += "\tline-height: " + e["headings-line-height"] + ";", a += "\tfont-weight: " + e["headings-font-weight"] + ";", a += "}", ["h1", "h2", "h3", "h4", "h5", "h6"].forEach((t => {
                                const o = "inherit" === e["font-family-" + t] ? e["headings-font-family"] : e["font-family-" + t],
                                    n = "inherit" === e["font-weight-" + t] ? e["headings-font-weight"] : e["font-weight-" + t];
                                let r = "";
                                void 0 !== o && "" !== o && (r += `${t}, .entry-content ${t} {`, r += "\tfont-family: " + o + ";"), void 0 !== e["line-height-" + t] && "" !== e["line-height-" + t] && (r += "\tline-height: " + e["line-height-" + t] + ";"), void 0 !== n && "" !== n && (r += "\tfont-weight: " + n + ";"), a += "" !== r ? r + "}" : ""
                            })), t.innerHTML = a
                        })(e.value.data);
                        break;
                    case "siteTitle":
                        (e => {
                            const t = document.getElementById("ast-desktop-header"),
                                a = t && t.querySelectorAll(".ast-site-identity")[0],
                                o = a && a.querySelectorAll(".ast-site-title-wrap")[0];
                            o && (o.style.display = e ? "block" : "none")
                        })(e.value.data);
                        break;
                    case "clearPreviewAssets":
                        const m = document.getElementById("starter-templates-typography");
                        m && m.remove(), document.querySelector("body").classList.remove("starter-templates-preview-palette");
                        const p = document.getElementsByClassName("starter-templates-preview-palette");
                        p.length > 0 && p[0].remove();
                        break;
                    case "completeOnboarding":
                        localStorage.removeItem("starter-templates-iframe-preview-data")
                }
            };
        window.addEventListener("message", (function(e) {
            if (o() && (console.log("addEventListener message: ", e), "object" == typeof e.data && "starterTemplatePreviewDispatch" === e.data.call)) {
                const t = e.data;
                let a = JSON.parse(localStorage.getItem(n));
                null === a && (a = {}, a.data = {}), a.data[t.value.param] = t.value.data, delete a.data.clearPreviewAssets, t.url = window.location.origin, a.url = window.location.origin, "cleanStorage" === t.value.param ? (delete a.data.cleanStorage, a.data.siteLogo = t.value.data, a.data.colorPalette = {}, a.data.siteTypography = {}, Object.keys(a.data).map((e => i({
                    value: {
                        param: e,
                        data: a.data[e]
                    }
                })))) : i(t), localStorage.setItem(n, JSON.stringify(a))
            }
        }), !1), a()((() => {
            if (!o()) return;
            const e = document.createElement("style");
            e.id = "starter-templates-logo-css", document.getElementsByTagName("head")[0].appendChild(e), e.innerHTML = ".site-logo-img img { transition: unset; } #wpadminbar { display: none; } html{  margin-top: 0 !important; }}";
            const t = (a = n, JSON.parse(localStorage.getItem(a)));
            var a;
            t && Object.keys(t.data).map((e => i({
                value: {
                    param: e,
                    data: t.data[e]
                }
            })))
        }))
    })()
})();
