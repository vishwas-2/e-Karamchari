const defaultConfig = {
    background_color: "#2563eb",
    surface_color: "#ffffff",
    text_color: "#1f2937",
    primary_action_color: "#2563eb",
    secondary_action_color: "#3b82f6",
    font_family: "system-ui, -apple-system, sans-serif",
    font_size: 16,
    main_heading: "e-Karamchari",
    subheading: "Employee Self-Service Portal for MCD",
    tagline: "\"Digital solutions for efficient workforce management\"",
    about_text: "e-Karamchari simplifies internal employee services for the Municipal Corporation of Delhi by providing a unified digital platform. It significantly reduces paperwork, streamlines administrative processes, and empowers employees with self-service capabilities for leave management, salary information, and grievance redressal—making government operations more efficient and transparent.",
    footer_powered_by: "Powered by Digital Governance Initiative",
    footer_reference: "Municipal Corporation of Delhi"
};

async function onConfigChange(config) {
    const customFont = config.font_family || defaultConfig.font_family;
    const baseFontStack = 'system-ui, -apple-system, sans-serif';
    const fontFamily = `${customFont}, ${baseFontStack}`;
    const baseSize = config.font_size || defaultConfig.font_size;

    const backgroundColor = config.background_color || defaultConfig.background_color;
    const surfaceColor = config.surface_color || defaultConfig.surface_color;
    const textColor = config.text_color || defaultConfig.text_color;
    const primaryActionColor = config.primary_action_color || defaultConfig.primary_action_color;
    const secondaryActionColor = config.secondary_action_color || defaultConfig.secondary_action_color;

    // Apply font family to body and all text elements
    document.body.style.fontFamily = fontFamily;

    // Apply font sizes
    const mainHeading = document.getElementById('main-heading');
    const subheading = document.getElementById('subheading');
    const tagline = document.getElementById('tagline');

    if (mainHeading) mainHeading.style.fontSize = `${baseSize * 2.5}px`;
    if (subheading) subheading.style.fontSize = `${baseSize * 1.5}px`;
    if (tagline) tagline.style.fontSize = `${baseSize * 1.125}px`;

    document.querySelectorAll('h2').forEach(h2 => {
        h2.style.fontSize = `${baseSize * 2}px`;
    });

    document.querySelectorAll('h3').forEach(h3 => {
        h3.style.fontSize = `${baseSize * 1.25}px`;
    });

    document.querySelectorAll('p, a, button').forEach(el => {
        if (!el.id || (el.id !== 'main-heading' && el.id !== 'subheading' && el.id !== 'tagline')) {
            el.style.fontSize = `${baseSize}px`;
        }
    });

    // Apply colors
    document.body.style.backgroundColor = surfaceColor;
    document.body.style.color = textColor;

    // Hero section background
    const heroSection = document.querySelector('#home');
    if (heroSection) {
        heroSection.style.background = `linear-gradient(to bottom right, ${backgroundColor}, ${primaryActionColor})`;
    }

    // Primary buttons
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.style.backgroundColor = surfaceColor;
        btn.style.color = primaryActionColor;
    });

    // Secondary buttons
    document.querySelectorAll('.btn-secondary').forEach(btn => {
        btn.style.borderColor = surfaceColor;
        btn.style.color = surfaceColor;
    });

    // Feature cards and other surfaces
    document.querySelectorAll('.feature-card, nav, .bg-white').forEach(card => {
        card.style.backgroundColor = surfaceColor;
    });

    // Logo and primary colored elements
    document.querySelectorAll('.text-blue-600').forEach(el => {
        el.style.color = primaryActionColor;
    });

    // Step numbers
    document.querySelectorAll('.step-card .bg-blue-600').forEach(el => {
        el.style.backgroundColor = primaryActionColor;
    });

    // Benefits checkmarks
    document.querySelectorAll('.bg-blue-600.rounded-full').forEach(el => {
        el.style.backgroundColor = primaryActionColor;
    });

    // Navigation links hover effect
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('mouseenter', function () {
            this.style.color = primaryActionColor;
        });
        link.addEventListener('mouseleave', function () {
            this.style.color = textColor;
        });
    });

    // Update text content
    if (mainHeading) mainHeading.textContent = config.main_heading || defaultConfig.main_heading;
    if (subheading) subheading.textContent = config.subheading || defaultConfig.subheading;
    if (tagline) tagline.textContent = config.tagline || defaultConfig.tagline;

    const aboutText = document.getElementById('about-text');
    if (aboutText) aboutText.textContent = config.about_text || defaultConfig.about_text;

    const footerPoweredBy = document.getElementById('footer-powered-by');
    if (footerPoweredBy) footerPoweredBy.textContent = config.footer_powered_by || defaultConfig.footer_powered_by;

    const footerReference = document.getElementById('footer-reference');
    if (footerReference) footerReference.textContent = config.footer_reference || defaultConfig.footer_reference;
}

function mapToCapabilities(config) {
    return {
        recolorables: [
            {
                get: () => config.background_color || defaultConfig.background_color,
                set: (value) => {
                    config.background_color = value;
                    if (window.elementSdk) {
                        window.elementSdk.setConfig({ background_color: value });
                    }
                }
            },
            {
                get: () => config.surface_color || defaultConfig.surface_color,
                set: (value) => {
                    config.surface_color = value;
                    if (window.elementSdk) {
                        window.elementSdk.setConfig({ surface_color: value });
                    }
                }
            },
            {
                get: () => config.text_color || defaultConfig.text_color,
                set: (value) => {
                    config.text_color = value;
                    if (window.elementSdk) {
                        window.elementSdk.setConfig({ text_color: value });
                    }
                }
            },
            {
                get: () => config.primary_action_color || defaultConfig.primary_action_color,
                set: (value) => {
                    config.primary_action_color = value;
                    if (window.elementSdk) {
                        window.elementSdk.setConfig({ primary_action_color: value });
                    }
                }
            },
            {
                get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
                set: (value) => {
                    config.secondary_action_color = value;
                    if (window.elementSdk) {
                        window.elementSdk.setConfig({ secondary_action_color: value });
                    }
                }
            }
        ],
        borderables: [],
        fontEditable: {
            get: () => config.font_family || defaultConfig.font_family,
            set: (value) => {
                config.font_family = value;
                if (window.elementSdk) {
                    window.elementSdk.setConfig({ font_family: value });
                }
            }
        },
        fontSizeable: {
            get: () => config.font_size || defaultConfig.font_size,
            set: (value) => {
                config.font_size = value;
                if (window.elementSdk) {
                    window.elementSdk.setConfig({ font_size: value });
                }
            }
        }
    };
}

function mapToEditPanelValues(config) {
    return new Map([
        ["main_heading", config.main_heading || defaultConfig.main_heading],
        ["subheading", config.subheading || defaultConfig.subheading],
        ["tagline", config.tagline || defaultConfig.tagline],
        ["about_text", config.about_text || defaultConfig.about_text],
        ["footer_powered_by", config.footer_powered_by || defaultConfig.footer_powered_by],
        ["footer_reference", config.footer_reference || defaultConfig.footer_reference]
    ]);
}

// Mobile menu toggle
var mobileMenuBtn = document.getElementById('mobile-menu-btn');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function () {
        var mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Close mobile menu if open
            var mm = document.getElementById('mobile-menu');
            if (mm) mm.classList.add('hidden');
        }
    });
});

// FAQ accordion functionality
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', function () {
        const faqItem = this.closest('.faq-item');
        const answer = faqItem.querySelector('.faq-answer');
        const isActive = faqItem.classList.contains('active');

        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.faq-answer').classList.add('hidden');
        });

        // Toggle current item
        if (!isActive) {
            faqItem.classList.add('active');
            answer.classList.remove('hidden');
        }
    });
});

// Initialize SDK
if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
    });
}

// IIFE previously at the end of index.html (moved here)
(function () {
    function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
            var d = b.createElement('script');
            d.innerHTML = "window.__CF$cv$params={r:'9b2be0086218a834',t:'MTc2NjUzNTAyMS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
            b.getElementsByTagName('head')[0].appendChild(d)
        }
    }
    if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a);
        if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } }
    }
})();
