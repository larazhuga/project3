"use strict";
window.innerWidth <= 100 && -1 == window.location.pathname.indexOf("mobile.html") && (window.location = "/mobile.html"), jQuery(function (a) {

    var fallPaperDefaultOffsetValue = parseInt($('.sheets-bg img').css("right"));
    var defaultOffsetValue = parseInt($('.sheets-bg img').css("right"));
    
    function b() {
        var b = a(".pages-container"), c = 300;
        setTimeout(function () {
            if (!b.is(":animated")) {
                var d = a(a("#nav li.active a").attr("href")), e = d.offset().left, f = parseInt(d.css("margin-left")), g = e - f;
                (c >= g && g > 0 || g >= -c && 0 > g) && a(d).scrollView(d, 1e3)
            }
        }, 300)
    }
    
    function c() {
        var c = a(window).width(),
            d = a(".pages-container"),
            e = a(".pages");

        a("html, body").mousewheel(function (f, g) {
            
            if($("#nav li.active a").attr("href") == '#personalized-education'){
                var block = a(a("#nav li.active a").attr("href"));
                if(g < 0){
                    fallPaperDefaultOffsetValue = fallPaperDefaultOffsetValue + ((fallPaperDefaultOffsetValue * -1 / 100) * 2);
                }else{
                    fallPaperDefaultOffsetValue = fallPaperDefaultOffsetValue - ((fallPaperDefaultOffsetValue * -1 / 100) * 2);
                }
                
                $('.sheets-bg img').stop().animate({
                    right: fallPaperDefaultOffsetValue + "px"
                }, 500);
                
            }
            
            return a(".bottom-popup").hasClass("open") ? void 0 :
                (
                    f.preventDefault(),
                    n.wheel = !0,
                         (
                            0 > g ? (
                                n.left = n.left + c >= e.width() ? n.left : n.left += n.step,
                                    d.stop().animate({scrollLeft: n.left}, n.duration, n.easing, function () {
                                        n.wheel = !1
                                    })) : (n.left = n.left <= 0 ? 0 : n.left -= n.step, d.stop().animate({scrollLeft: n.left}, n.duration, n.easing, function () {
                                    n.wheel = !1
                                })
                            )
                        )
                        , !1)
        }), a(window).on("resize", function () {
            c = a(this).width()
        }), d.on("scroll", function () {
            n.wheel || (n.left = a(this).scrollLeft())
        })
    }

    function d() {
        a(".container").each(function () {
            var b = a(this), c = b.width();
            m > c && b.css({padding: "0 " + (m - c) / 2 + "px"})
        })
    }

    function e() {
        for (var b = a(".pages, .backgrounds"), c = b.find(".container"), d = 0, e = 0; e < c.length; e++)d += a(c).eq(e).outerWidth(!0);
        b.css("width", d + "px")
    }

    function f() {
        var b = a("#nav"), c = b.find("li.active a"), d = c.data("page"), e = c.attr("href"), dAnimated = c.attr('data-animatefall');
        a("#site").removeClass().addClass(d), "#stores" == e ? o = setInterval(h, 2e3) : window.clearInterval(o)
    }

    function g() {
        var b = window.location.hash, c = a("#site").attr("class"), d = a("#nav").find('[href="' + b + '"]');
        d.data("page") != c && d.trigger("click")
    }

    function h() {
        var b = p[s], c = document.createElement("img"), d = Math.floor(Math.random() * t.length), e = t[d];
        a(c).load(function () {
            var b = q.find("li").eq(e);
            b.addClass("zoom-out").append('<div class="cover"></div>').find(".cover").animate({top: 0}, 150, function () {
                b.find("img").replaceWith(c), b.find(".cover").delay(0).animate({top: "-100%"}, 0, function () {
                    a(this).remove(), b.removeClass("zoom-out")
                })
            }), s < p.length - 1 ? s++ : s = 0, t.splice(d, 1), 0 === t.length && (t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
        }), c.src = "images/stores/" + b + ".png"
    }

    function i() {
        var b = a("#team"), c = 0;
        b.find(".member").each(function () {
            c += a(this).outerWidth(!0)
        }), b.css({width: c})
    }

    function k(b) {
        var c = a("#nav li").eq(b).find("a"), d = c.width();
        return d
    }

    function l(b) {
        var c = a("#nav li").eq(b).find("a"), d = c.position().left;
        return d
    }

    var m = a(window).outerWidth();
    a(window).on("resize", function () {
        m = a(window).outerWidth(), d(), e(), a('[data-spy="scroll"]').each(function () {
            a(this).scrollspy("refresh")
        })
    }).on("load", function () {
        i(), e(), a('[data-spy="scroll"]').each(function () {
            a(this).scrollspy("refresh")
        }), c(), a("#site").animate({opacity: 1}), a(".pages-container").stellar({
            horizontalScrolling: !0,
            verticalScrolling: !1
        })
    }), a.extend(a.easing, {
        def: "easeOutExpo", easeOutExpo: function (a, b, c, d, e) {
            return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
        }
    }), a("textarea, input").not('input[type="submit"]').focus(function () {
        this.value === this.defaultValue && (this.value = "")
    }), a("textarea, input").blur(function () {
        "" == a.trim(this.value) && (this.value = this.defaultValue ? this.defaultValue : "")
    });

    var n = {left: 0, step: 80, duration: 800, easing: "easeOutExpo", wheel: !1};
    d(), a("ul.nav li").on("activate", function (a) {
        f()
    });
    var o;
    a.fn.scrollView = function (b, c) {
        return c = "undefined" == typeof c ? 800 : c, this.each(function () {
            var d = a(".pages-container"), e = -parseInt(a(b).css("margin-left"));
            d.stop().animate({scrollLeft: d.scrollLeft() + a(b).offset().left - d.offset().left + e}, c, function () {
                n.left = a(".pages-container").scrollLeft()
            })
        })
    },
    a(".header-logo").on("click", function (b) {
        var c = a(this).attr("href");
        b.preventDefault(), a(c).scrollView(c)
    }),
    a(".go-to-start").on("click", function (b) {
        var c = a(this).attr("href");
        b.preventDefault(), a(c).scrollView(c)
    }),
    a("#nav a").on("click", function (b) {
        fallPaperDefaultOffsetValue = defaultOffsetValue;
        $('.sheets-bg img').stop().animate({
            right: defaultOffsetValue + "px"
        }, 500);
        
        var c = a(this).attr("href");
        b.preventDefault(), a(c).scrollView(c)
    }), g(), a(".tabs-nav").on("click", "li:not(.active)", function () {
        var b = a(this), c = b.addClass("active").siblings().removeClass("active").parents(".tabs").find(".tab").eq(b.index());
        c.addClass("active").fadeIn(150).siblings().hide().removeClass("active")
    }), function () {
        
        a("body").on("click", "[data-popup]", function (b) {
            n.wheel = !1;
            var c = a("#" + a(this).data("popup")), d = a("#site");
            a(".bottom-popup.open").length > 0 ? (a(".bottom-popup").not(c).removeClass("open"), a(".bottom-popup.open").attr("id") == a(this).data("popup") && (d.removeClass("blur"), a("#overlay").fadeOut(200))) : (d.hasClass("blur") ? d.removeClass("blur") : setTimeout(function () {
                d.addClass("blur")
            }, 800), a("#overlay").fadeToggle(200)), c.toggleClass("open"), b.preventDefault()
        }),
        
        a("#overlay, .close").on("click", function () {
            a("#overlay").fadeOut(200), a("#site").removeClass("blur"), a(".bottom-popup").removeClass("open")
        })
    }();
    
//    for (var p = ["bebe", "bed", "bodyshop", "br", "carters", "cb2", "chicos",
//        "crate", "cwonder", "disney", "dkny", "gap", "kate", "levis", "loft",
//        "logos-aeropostale", "mac", "macys", "neiman", "nike", "nordstrom",
//        "oldnavy", "oshkosh", "pucsun", "puma", "ralph", "sephora", "stride",
//        "stuart", "tory", "urban"], q = a("#stores-panel ul"), r = "", s = 10, t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], u = 0; s > u; u++)r += '<li><img src="images/stores/' + p[u] + '.png"></li>';
//    q.html(r),  a("#team").on("click", ".member", function () {
//        var b = a(this).data("index");
//        a("#green-popup").find(".tabs-nav li").eq(b).trigger("click")
//    }), a("#hiring").on("click", ".jobs-list li", function () {
//        var b = a(this).data("index");
//        a("#blue-popup").find(".tabs-nav li").eq(b).trigger("click")
//    }), a("#hiring").on("click", ".jobs-list li", function () {
//        var b = a(this).data("index");
//        a("#red-popup").find(".tabs-nav li").eq(b).trigger("click")
//    }), a("#join").on("click", ".jobs-list li", function () {
//        var b = a(this).data("index");
//        jobsPopup.find(".tabs-nav li").eq(b).trigger("click")
//    });
    
    var v = a.superscrollorama({triggerAtCenter: !1, isVertical: !1, reverse: !0});
    document.location.hash.length > 0 && window.setTimeout(function () {
        a('a[href="' + document.location.hash + '"]').click()
    }, 1e3), window.openWindowedTab = function (a, b, c, d) {
        var e = screen.width / 2 - c / 2, f = screen.height / 2 - d / 2;
        return window.open(a, b, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + c + ", height=" + d + ", top=" + f + ", left=" + e)
    }
    
    
    
    $('body').on('click', '[data-popup]', function(e){
        var popup = $('#' + $(this).data('popup'));
        var index = $(this).data('index');
        if(typeof index != 'undefined'){
            popup.find('.tabs-nav li').removeClass('active');
            popup.find('.tabs-nav li').eq(index).addClass('active');
            popup.addClass('open');
        }
    });
    
});

$(document).ready(function () {

    handleProjector();
    handleTriangleHeight();
})

function handleProjector() {
    if ($('.projector').length) {
        var posX, posY, projectorX, projectorY
        var halfWidth = $('.projector').width() / 2
        var halfHeight = $('.projector').height() / 2
        
        if($(window).width() >= 1100){
            $(window).on('mousemove', function (e) {
                posX = e.clientX;
                posY = e.clientY;

                if (posY < ($(window).height() - halfHeight)) {
                    projectorX = posX - halfWidth
                    projectorY = posY - halfHeight

                    $('.projector').css('left', projectorX)
                    $('.projector').css('top', projectorY)
                }
            });
        }
    }
}

function handleTriangleHeight() {
    $(window).on('resize', function (e) {
        $('border-triangle')
    })
}

jQuery(".btn-learn-more").click(function () {
    if (!jQuery(".txt-lear-more").hasClass('active')) {
        jQuery(".txt-lear-more").addClass("active");
    }
})
jQuery(".close-popup").click(function () {
    if (jQuery(".txt-lear-more").hasClass('active')) {
        jQuery(".txt-lear-more").removeClass("active");
    }
})



