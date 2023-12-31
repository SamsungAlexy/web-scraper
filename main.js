const jsonData = [
    {
      title: 'Twitter / X is losing daily active users. CEO Linda Yaccarino confirmed it.',
      url: 'https://sea.mashable.com/tech/27335/twitter-x-is-losing-daily-active-users-ceo-linda-yaccarino-confirmed-it',
      date: '2023-09-30'
    },
    {
      title: 'What not to buy on Prime Day 2, from third-party scams to Ring cams',
      url: 'https://sea.mashable.com/life/24845/what-not-to-buy-on-prime-day-from-third-party-scams-to-ring-cams',
      date: '2023-09-30'
    },
    {
      title: 'A government shutdown means bad news for Fat Bear Week',
      url: 'https://sea.mashable.com/environment/27334/a-government-shutdown-means-bad-news-for-fat-bear-week',
      date: '2023-09-30'
    },
    {
      title: 'MacOS Sonoma: How to share your Netflix password with trusted people',
      url: 'https://sea.mashable.com/tech/27333/macos-sonoma-how-to-share-your-netflix-password-with-trusted-people',
      date: '2023-09-30'
    },
    {
      title: 'How to preorder the PlayStation Portal',
      url: 'https://sea.mashable.com/gaming-consoles/26546/you-can-finally-preorder-the-new-handheld-playstation-portal-remote-player',
      date: '2023-09-30'
    },
    {
      title: 'This is major: The 2021 Microsoft Surface Laptop Studio is on sale for $500 off',
      url: 'https://sea.mashable.com/laptops/27330/this-is-major-the-2021-microsoft-surface-laptop-studio-is-on-sale-for-500-off',
      date: '2023-09-30'
    },
    {
      title: "Meta Quest 3 to get new tracking feature other VR headsets don't have — not even Apple Vision Pro",
      url: 'https://sea.mashable.com/tech/27332/meta-quest-3-to-get-new-tracking-feature-other-vr-headsets-dont-have-not-even-apple-vision-pro',
      date: '2023-09-30'
    },
    {
      title: "Spotify now transcribes podcasts so you can read along. Here's how it works.",
      url: 'https://sea.mashable.com/tech/27331/spotify-now-transcribes-podcasts-so-you-can-read-along-heres-how-it-works',
      date: '2023-09-30'
    },
    {
      title: 'Meta AI: The new ChatGPT rival was trained on your sh*tposts',
      url: 'https://sea.mashable.com/apps-and-software/27329/meta-ai-the-new-chatgpt-rival-was-trained-on-your-shtposts',
      date: '2023-09-30'
    },
    {
      title: 'These Top-Rated Sony Headphones Are Now Going for a Big Discount on Amazon Singapore',
      url: 'https://sea.mashable.com/tech/27312/these-top-rated-sony-headphones-are-now-going-for-a-big-discount-on-amazon-singapore',
      date: '2023-09-29'
    },
    {
      title: 'The Sonos Roam Is a Super Portable Speaker With Surprisingly Loud Sound',
      url: 'https://sea.mashable.com/amazon-deals/27311/the-sonos-roam-is-a-super-portable-speaker-with-surprisingly-loud-sound',
      date: '2023-09-29'
    },
    {
      title: '4 Fun but Dangerous Kids’ Toys That Parents Should Keep an Eye Out For',
      url: 'https://sea.mashable.com/life/27303/4-fun-but-dangerous-kids-toys-that-parents-should-keep-an-eye-out-for',
      date: '2023-09-29'
    },
    {
      title: 'Why Is Thiamidol Trending & What’s So Great About It? Here’s What You Need To Know.',
      url: 'https://sea.mashable.com/science/27306/why-is-thiamidol-trending-whats-so-great-about-it-heres-what-you-need-to-know',
      date: '2023-09-29'
    },
    {
      title: 'The Sonos Roam Is a Super Portable Speaker With Surprisingly Loud Sound',
      url: 'https://sea.mashable.com/amazon-deals/27311/the-sonos-roam-is-a-super-portable-speaker-with-surprisingly-loud-sound',
      date: '2023-09-29'
    },
    {
      title: 'Why Is Thiamidol Trending & What’s So Great About It? Here’s What You Need To Know.',
      url: 'https://sea.mashable.com/science/27306/why-is-thiamidol-trending-whats-so-great-about-it-heres-what-you-need-to-know',
      date: '2023-09-29'
    },
    {
      title: 'Still Want Leather for Your iPhone 15 Pro Max? This Case Is All You’ll Need.',
      url: 'https://sea.mashable.com/amazon-deals/27305/still-want-leather-for-your-iphone-15-pro-max-this-case-is-all-youll-need',
      date: '2023-09-29'
    },
    {
      title: 'These Top-Rated Sony Headphones Are Now Going for a Big Discount on Amazon Singapore',
      url: 'https://sea.mashable.com/tech/27312/these-top-rated-sony-headphones-are-now-going-for-a-big-discount-on-amazon-singapore',
      date: '2023-09-29'
    },
    {
      title: 'The Sonos Roam Is a Super Portable Speaker With Surprisingly Loud Sound',
      url: 'https://sea.mashable.com/amazon-deals/27311/the-sonos-roam-is-a-super-portable-speaker-with-surprisingly-loud-sound',
      date: '2023-09-29'
    },
    {
      title: 'Still Want Leather for Your iPhone 15 Pro Max? This Case Is All You’ll Need.',
      url: 'https://sea.mashable.com/amazon-deals/27305/still-want-leather-for-your-iphone-15-pro-max-this-case-is-all-youll-need',
      date: '2023-09-29'
    },
    {
      title: '4 Fun but Dangerous Kids’ Toys That Parents Should Keep an Eye Out For',
      url: 'https://sea.mashable.com/life/27303/4-fun-but-dangerous-kids-toys-that-parents-should-keep-an-eye-out-for',
      date: '2023-09-29'
    },
    {
      title: 'From Boxing and HIIT to Yoga, This S$49 App Offers Endless Options To Get Fit',
      url: 'https://sea.mashable.com/life/27300/from-boxing-and-hiit-to-yoga-this-s49-app-offers-endless-options-to-get-fit',
      date: '2023-09-29'
    },
    {
      title: 'Why Is Thiamidol Trending & What’s So Great About It? Here’s What You Need To Know.',
      url: 'https://sea.mashable.com/science/27306/why-is-thiamidol-trending-whats-so-great-about-it-heres-what-you-need-to-know',
      date: '2023-09-29'
    },
    {
      title: 'Flowers Are Blooming in Antarctica, and It’s Making Scientists Seriously Worried',
      url: 'https://sea.mashable.com/science/27302/flowers-are-blooming-in-antarctica-and-its-making-scientists-seriously-worried',
      date: '2023-09-29'
    },
    {
      title: 'These Top-Rated Sony Headphones Are Now Going for a Big Discount on Amazon Singapore',
      url: 'https://sea.mashable.com/tech/27312/these-top-rated-sony-headphones-are-now-going-for-a-big-discount-on-amazon-singapore',
      date: '2023-09-29'
    },
    {
      title: 'The Sonos Roam Is a Super Portable Speaker With Surprisingly Loud Sound',
      url: 'https://sea.mashable.com/amazon-deals/27311/the-sonos-roam-is-a-super-portable-speaker-with-surprisingly-loud-sound',
      date: '2023-09-29'
    },
    {
      title: 'Still Want Leather for Your iPhone 15 Pro Max? This Case Is All You’ll Need.',
      url: 'https://sea.mashable.com/amazon-deals/27305/still-want-leather-for-your-iphone-15-pro-max-this-case-is-all-youll-need',
      date: '2023-09-29'
    },
    {
      title: 'Peep the full moon with Celestron telescopes up to 39% off',
      url: 'https://sea.mashable.com/space/27328/peep-the-full-moon-with-celestron-telescopes-up-to-39-off',
      date: '2023-09-29'
    },
    {
      title: "'Selling the OC' Season 2 is compulsive viewing at its most painful",
      url: 'https://sea.mashable.com/tv-shows/27327/selling-the-oc-season-2-is-compulsive-viewing-at-its-most-painful',
      date: '2023-09-29'
    },
    {
      title: 'Best antivirus software deals: Norton, Bitdefender, and more',
      url: 'https://sea.mashable.com/antivirus/22994/the-best-antivirus-software-deals-this-week',
      date: '2023-09-29'
    },
    {
      title: 'How to watch the 2023 Ryder Cup online for free',
      url: 'https://sea.mashable.com/vpn/27304/how-to-watch-the-2023-ryder-cup-online-for-free',
      date: '2023-09-29'
    },
    {
      title: "Twitter/X CEO didn't seem to know about Elon Musk's mandatory fee plan",
      url: 'https://sea.mashable.com/tech/27325/twitterx-ceo-didnt-seem-to-know-about-elon-musks-mandatory-fee-plan',
      date: '2023-09-29'
    },
    {
      title: "Apple's iCloud.com becomes more customizable with updates to Photos, Mail, and more",
      url: 'https://sea.mashable.com/apps-and-software/27324/apples-icloudcom-becomes-more-customizable-with-updates-to-photos-mail-and-more',
      date: '2023-09-29'
    },
    {
      title: 'Meta Quest 3 vs. Quest 2: Here are the differences, according to a gamer who tested both',
      url: 'https://sea.mashable.com/tech/27323/meta-quest-3-vs-quest-2-here-are-the-differences-according-to-a-gamer-who-tested-both',
      date: '2023-09-29'
    },
    {
      title: 'How to watch the Tennessee vs. South Carolina game without cable',
      url: 'https://sea.mashable.com/entertainment/27322/how-to-watch-the-tennessee-vs-south-carolina-game-without-cable',
      date: '2023-09-29'
    },
    {
      title: 'Save big on a 4K HD drone for $89.99',
      url: 'https://sea.mashable.com/tech/27321/save-big-on-a-4k-hd-drone-for-8999',
      date: '2023-09-29'
    },
    {
      title: 'Charge four devices at once with this charging station, now $60',
      url: 'https://sea.mashable.com/tech/27320/charge-four-devices-at-once-with-this-charging-station-now-60',
      date: '2023-09-29'
    },
    {
      title: 'This AI finds cheap flights for $109.99 for life',
      url: 'https://sea.mashable.com/apps-and-software/27319/this-ai-finds-cheap-flights-for-10999-for-life',
      date: '2023-09-29'
    },
    {
      title: "This AI speech-to-text tool works live, and it's only $60 for life",
      url: 'https://sea.mashable.com/apps-and-software/27318/this-ai-speech-to-text-tool-works-live-and-its-only-60-for-life',
      date: '2023-09-29'
    },
    {
      title: 'How to watch the Penn State vs. Northwestern game without cable',
      url: 'https://sea.mashable.com/entertainment/27317/how-to-watch-the-penn-state-vs-northwestern-game-without-cable',
      date: '2023-09-29'
    },
    {
      title: 'How to watch the Oregon vs. Stanford game without cable',
      url: 'https://sea.mashable.com/entertainment/27316/how-to-watch-the-oregon-vs-stanford-game-without-cable',
      date: '2023-09-29'
    },
    {
      title: "10 films you'll want to see out of NYFF 2023",
      url: 'https://sea.mashable.com/movies/27315/10-films-youll-want-to-see-out-of-nyff-2023',
      date: '2023-09-29'
    },
    {
      title: 'How to watch the Utah vs. Oregon State game without cable',
      url: 'https://sea.mashable.com/entertainment/27314/how-to-watch-the-utah-vs-oregon-state-game-without-cable',
      date: '2023-09-29'
    },
    {
      title: "'Saw X' review: A surprisingly sentimental splatter-fest",
      url: 'https://sea.mashable.com/movies/27313/saw-x-review-a-surprisingly-sentimental-splatter-fest',
      date: '2023-09-29'
    },
    {
      title: 'How to watch this history-making season of college football without cable',
      url: 'https://sea.mashable.com/entertainment/26519/how-to-watch-this-history-making-season-of-college-football-without-cable',
      date: '2023-09-29'
    },
    {
      title: 'These Top-Rated Sony Headphones Are Now Going for a Big Discount on Amazon Singapore',
      url: 'https://sea.mashable.com/tech/27312/these-top-rated-sony-headphones-are-now-going-for-a-big-discount-on-amazon-singapore',
      date: '2023-09-29'
    },
    {
      title: 'How to watch the NRL Grand Final 2023 online for free',
      url: 'https://sea.mashable.com/vpn/27158/how-to-watch-the-nrl-grand-final-2023-online-for-free',
      date: '2023-09-29'
    },
    {
      title: 'How to watch MotoGP 2023 livestream online for free',
      url: 'https://sea.mashable.com/vpn/24320/how-to-watch-motogp-2023-livestream-online-for-free',
      date: '2023-09-29'
    },
    {
      title: 'The Sonos Roam Is a Super Portable Speaker With Surprisingly Loud Sound',
      url: 'https://sea.mashable.com/amazon-deals/27311/the-sonos-roam-is-a-super-portable-speaker-with-surprisingly-loud-sound',
      date: '2023-09-29'
    },
    {
      title: 'Why Is Thiamidol Trending & What’s So Great About It? Here’s What You Need To Know.',
      url: 'https://sea.mashable.com/science/27306/why-is-thiamidol-trending-whats-so-great-about-it-heres-what-you-need-to-know',
      date: '2023-09-29'
    },
    {
      title: 'Still Want Leather for Your iPhone 15 Pro Max? This Case Is All You’ll Need.',
      url: 'https://sea.mashable.com/amazon-deals/27305/still-want-leather-for-your-iphone-15-pro-max-this-case-is-all-youll-need',
      date: '2023-09-29'
    },
    {
      title: 'A lifetime subscription to Noiselab is on sale for under £50',
      url: 'https://sea.mashable.com/tech/27310/a-lifetime-subscription-to-noiselab-is-on-sale-for-under-ps50',
      date: '2023-09-29'
    },
    {
      title: 'How to watch The CW for free from anywhere in the world',
      url: 'https://sea.mashable.com/vpn/27309/how-to-watch-the-cw-for-free-from-anywhere-in-the-world',
      date: '2023-09-29'
    },
    {
      title: 'How to watch the 2023 British Open online for free',
      url: 'https://sea.mashable.com/vpn/27308/how-to-watch-the-2023-british-open-online-for-free',
      date: '2023-09-29'
    },
    {
      title: 'The best Android tablets for every task',
      url: 'https://sea.mashable.com/tablets/27284/the-best-android-tablets-for-every-task',
      date: '2023-09-28'
    },
    {
      title: "Here's How Singapore Just Safely Disposed of a 100KG World War II Bomb",
      url: 'https://sea.mashable.com/life/27230/heres-how-singapore-just-safely-disposed-of-a-100kg-world-war-ii-bomb',
      date: '2023-09-27'
    },
    {
      title: 'This White Noise Machine Is a Game-Changer for Those Who Have Trouble Sleeping',
      url: 'https://sea.mashable.com/tech/27247/this-white-noise-machine-is-a-game-changer-for-those-who-have-trouble-sleeping',
      date: '2023-09-27'
    },
    {
      title: "Here's Your Last Chance To Catch the Supermoon At This Year's Mid-Autumn Festival",
      url: 'https://sea.mashable.com/science/27174/heres-your-last-chance-to-catch-the-supermoon-at-this-years-mid-autumn-festival',
      date: '2023-09-25'
    },
    {
      title: "Thrawn arrives in live-action Star Wars. Is he too late to save 'Ahsoka'?",
      url: 'https://sea.mashable.com/tv-shows/27062/thrawn-arrives-in-live-action-star-wars-is-he-too-late-to-save-ahsoka',
      date: '2023-09-21'
    },
    {
      title: "'The Wonderful Story of Henry Sugar' review: Short film is Wes Anderson at his most creative",
      url: 'https://sea.mashable.com/movies/27040/the-wonderful-story-of-henry-sugar-review-short-film-is-wes-anderson-at-his-most-creative',
      date: '2023-09-20'
    },
    {
      title: 'Scientists snap photo of intriguing solar system using a colossal telescope',
      url: 'https://sea.mashable.com/space/27039/scientists-snap-photo-of-intriguing-solar-system-using-a-colossal-telescope',
      date: '2023-09-20'
    },
    {
      title: '‘Otterly’ Wholesome: S’pore Cop Gives Helping Hand to Otter Family Crossing the Street',
      url: 'https://sea.mashable.com/social-good/26990/otterly-wholesome-spore-cop-gives-helping-hand-to-otter-family-crossing-the-street',
      date: '2023-09-19'
    },
    {
      title: "'Satanic Hispanics' review: Horror anthology is a mixed bag of trick-less treats",
      url: 'https://sea.mashable.com/movies/26944/satanic-hispanics-review-horror-anthology-is-a-mixed-bag-of-trick-less-treats',
      date: '2023-09-16'
    },
    {
      title: 'New S.O.S. initiative online rating system targets teen safety',
      url: 'https://sea.mashable.com/social-good/26921/new-sos-initiative-online-rating-system-targets-teen-safety',
      date: '2023-09-15'
    },
    {
      title: "'Sesame Street' videos get an accessibility expansion with new descriptive audio and ASL features",
      url: 'https://sea.mashable.com/life/26905/sesame-street-videos-get-an-accessibility-expansion-with-new-descriptive-audio-and-asl-features',
      date: '2023-09-14'
    },
    {
      title: 'Review: The Samsung Galaxy Tab S9+ Is Handy for Light Work Tasks, Great for Entertainment',
      url: 'https://sea.mashable.com/gadgets/26416/review-the-samsung-galaxy-tab-s9-is-handy-for-light-work-tasks-great-for-entertainment',
      date: '2023-08-29'
    }
  ]

const container = document.getElementById("container");
const orderList = document.getElementById("headlines");

jsonData.forEach((item) => {
    const listItem = document.createElement("li");

    const link = document.createElement("a");
    link.href = item.url;
    link.textContent = item.title;

    const timeElement = document.createElement("time");
    timeElement.textContent = " " + item.date;
    timeElement.setAttribute("datetime", item.date);

    listItem.append(link, timeElement);

    orderList.append(listItem);
});

container.append(orderList);
