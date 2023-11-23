/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        fontSize: {
            "numeric-1": ["32px", "32px"],
            "numeric-2": ["28px", {
                lineHeight: "33.6px",
                fontWeight: "700"
            }],
            "numeric-3": ["24px", {
                lineHeight: "27.6px",
                fontWeight: "500"
            }],
            "numeric-4": ["16px", {
                lineHeight: "19.2px",
                fontWeight: "600"
            }],
            "numeric-5": ["14px", {
                lineHeight: "16.8px",
                fontWeight: "600"
            }],
            "numeric-6": ["14px", {
                lineHeight: "17.5px",
                fontWeight: "500"
            }
            ],
            "numeric-7": ["14px", {
                lineHeight: "16.8px",
                fontWeight: "500"
            }],

            "subheader-1": ["24px", "31.2px"],
            "subheader-2": ["18px", "22.5px"],

            "body-1": ["18px", "22.5px"],
            "body-2": ["16px", "20px"],
            "body-3": ["14px", {
                lineHeight: "16.8px", fontWeight: 400
            }],

            caption: ["12px", "14.4px"],

            "button": ["16px", {
                lineHeight: "20px",
                fontWeight: "600"
            }],
        },
        colors: {
            white: "#ffffff",

            primary: "#005055",
            error: "#EC1C1C",
            blue: "#5599FF",
            greenPrimary: "#1BCD54",

            black1: "#0E0E15",

            gray1: "#27282E",
            gray2: "#505157",
            gray3: "#3B3B41",
            gray4: "#67676C",
            gray5: "#CFCFD0"
        },
        screens: {
            'phone': '312px',
            'phone2': '480px',
            'small': '765px',
            'tablet': '991px',
            'laptop': '1024px',
            'desktop': '1280px',
        },
        boxShadow: {
            primary: "0px 2px 12px 0px rgba(0, 80, 85, 0.32), 0px 4px 6px 0px rgba(0, 0, 0, 0.64);"
        },
        extend: {},
    },
    plugins: [],
}
