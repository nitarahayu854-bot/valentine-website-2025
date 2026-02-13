// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Mangtri", "Nita"
    valentineName: "Mangtri",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Apakah kamu masih sayang aku ?",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '❤️', '❤️', '❤️', '❤️'],  // Heart emojis
        love: ['🫶', '🫶']                       // love emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Apakah kamu masih sayang aku ?",                                    // First interaction
            yesBtn: "Masih sayang",                                             // Text for "Yes" button
            noBtn: "Tidak sayang",                                               // Text for "No" button
            secretAnswer: "Aku masih sayang kamu ❤️"           // Secret hover message
        },
        second: {
            text: "Apakah perasaan kamu masih sama ?",                          // For the love meter
            startText: "Masih sayang",                                   // Text before the percentage
            nextBtn: "❤️"                                         // Text for the next button
        },
        third: {
            text: "Jadi apakah kamu masih mau menemani aku saat ini ? 🌹", // The big question!
            yesBtn: " Iya jelas masih sayang ",                                             // Text for "Yes" button
            noBtn: "Aku pikir dulu"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Aku inget tgl 25 September 2025 aku pastiin ke kamu lagi status kita dan ya kita pacaran, ups and down, aku buat kamu kecewa dan aku dengan tulus minta ke kamu untuk tetap sayang ke aku seperti pertama kali kita kenal ya Sayangku",  // Shows when they go past 5000%
        high: " Perasaan aku tidak berubah, I Love You Sayang",              // Shows when they go past 1000%
        normal: "I Love You Sayang 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! aku beruntung bisa kenal kamu walaupun aku sadar dengan hubungan ini, tapi aku tulus ada disini",
        message: "I Love You Sayang, aku kangen kamu",
        emojis: "💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
