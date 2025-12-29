import { useState, useEffect } from "react";
import Header from "./components/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Apps from "./pages/Apps";
import Installation from "./pages/Installation";
import AppDetails from "./pages/AppDetails";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import AppContext from "./ContextProvider";

function App() {
  // Apps Data List
  const [appsData, setAppsData] = useState(
    () =>
      JSON.parse(localStorage.getItem("installed")) || [
        {
          id: 1,
          name: "Book Space",
          url: "https://i.postimg.cc/mgHCsC9N/Book-Space.jpg",
          rating: "4.2",
          downloads: "1.2M",
          size: "45MB",
          isDownload: false,
          reviews: [1420, 3250, 4810, 950, 2100],
          description:
            "Book Space is a comprehensive digital library designed for book enthusiasts who love to read on the go. It offers a vast collection of genres ranging from classic literature to modern thrillers and self-help guides. The app features an intuitive reader with customizable fonts, dark mode, and easy bookmarking. You can also organize your own personal bookshelf and track your reading progress over time. With offline access, you can enjoy your favorite stories even without an active internet connection. It is built to provide a seamless and distraction-free reading experience for all ages. Discover new authors every day and dive into the world of endless knowledge and imagination.",
        },
        {
          id: 2,
          name: "Code Hub",
          url: "https://i.postimg.cc/zGgKrKhF/Code-Hub.jpg",
          rating: "4.5",
          downloads: "2.4M",
          size: "110MB",
          isDownload: false,
          reviews: [4200, 1100, 3850, 4900, 1500],
          description:
            "Code Hub is the ultimate companion for developers and students learning to program in various languages. It provides a massive repository of code snippets, tutorials, and documentation for Python, Java, C++, and more. The app includes a built-in mobile code editor that allows you to write and test simple scripts anywhere. You can join a community of developers to discuss problems and share innovative project ideas. It also features daily coding challenges to help sharpen your logical thinking and problem-solving skills. Whether you are a beginner or an expert, this app keeps you updated with the latest tech trends. Its clean interface ensures that you can focus entirely on learning and building great software.",
        },
        {
          id: 3,
          name: "Cook Master",
          url: "https://i.postimg.cc/vZVfsfnv/Cook-Master.jpg",
          rating: "3.2",
          downloads: "4.1M",
          size: "35MB",
          isDownload: false,
          reviews: [850, 4120, 2300, 3100, 1400],
          description:
            "Cook Master brings the joy of professional cooking right into your home kitchen with thousands of recipes. From traditional family meals to exotic international cuisines, this app covers a wide variety of food categories. Each recipe comes with step-by-step instructions, high-quality images, and a detailed list of necessary ingredients. You can save your favorite dishes to a personal cookbook and even generate a smart grocery shopping list. The app also offers video tutorials for complex techniques, making it easy for beginners to learn quickly. Users can share their own kitchen creations and get feedback from a global community of food lovers. It is the perfect tool for anyone looking to improve their culinary skills and eat healthy.",
        },
        {
          id: 4,
          name: "Finance Guru",
          url: "https://i.postimg.cc/SxMChC9V/Finance-Guru.jpg",
          rating: "4.5",
          downloads: "5.1M",
          size: "28MB",
          isDownload: false,
          reviews: [3800, 4500, 1200, 2900, 4800],
          description:
            "Finance Guru is a powerful personal finance manager designed to help you take full control of your money. It allows you to track your daily income and expenses with ease through a very user-friendly dashboard. You can set monthly budgets for different categories and receive alerts when you are close to your limits. The app provides insightful charts and graphs to help you visualize your spending habits over time. It also includes tools for tracking investments, savings goals, and upcoming bill payments to avoid late fees. Security is a top priority, ensuring that all your financial data is encrypted and kept private. Start your journey toward financial freedom by making smarter decisions with your hard-earned money today.",
        },
        {
          id: 5,
          name: "Fit Life",
          url: "https://i.postimg.cc/MpQVSVB9/Fit-Life.jpg",
          rating: "4.3",
          downloads: "1.4M",
          size: "65MB",
          isDownload: false,
          reviews: [2500, 4100, 3200, 1800, 4900],
          description:
            "Fit Life is your personal trainer and wellness coach available 24/7 to help you reach your fitness goals. The app offers a wide range of workout plans, including HIIT, strength training, yoga, and cardio exercises. Each exercise is demonstrated with clear animations and audio guidance to ensure you maintain the correct posture. You can track your calories burned, steps taken, and daily water intake to maintain a healthy lifestyle. The app also provides personalized meal plans based on your dietary preferences and weight loss or gain targets. Connect with wearable devices to sync your health data seamlessly and monitor your heart rate and sleep patterns. Join millions of users who are transforming their lives through consistency, discipline, and better health habits.",
        },
        {
          id: 6,
          name: "Fit Mind",
          url: "https://i.postimg.cc/T3Dg6gbk/Fit-Mind.jpg",
          rating: "4.2",
          downloads: "3.1M",
          size: "40MB",
          isDownload: false,
          reviews: [1200, 3500, 4400, 2100, 1900],
          description:
            "Fit Mind is a dedicated mental health and meditation app designed to reduce stress and improve focus. It features a large library of guided meditations led by experts, covering topics like anxiety, sleep, and gratitude. You can choose from various ambient soundscapes to help you concentrate during work or relax before bed. The app includes a mood tracker to help you understand your emotional patterns over the weeks. Daily mindfulness reminders encourage you to take short breaks and breathe deeply throughout the day. There are also specialized programs for improving sleep quality and building long-term mental resilience. Taking care of your mind is just as important as your body, and Fit Mind makes it easy and accessible.",
        },
        {
          id: 7,
          name: "Fit Track",
          url: "https://i.postimg.cc/9Q7ZhZ98/Fit-Track.jpg",
          rating: "4.1",
          downloads: "1.6M",
          size: "52MB",
          isDownload: false,
          reviews: [4100, 3200, 1500, 2800, 4950],
          description:
            "Fit Track is an advanced activity tracking app that monitors your physical movement throughout the day. It uses your phone's sensors to accurately count steps, measure distance traveled, and calculate calories burned. You can set personal daily goals and receive motivational badges as you achieve them. The app also features a GPS-based tracking system for running, cycling, and hiking to map your routes. It provides detailed weekly and monthly reports to help you analyze your performance trends. You can compete with friends in fitness challenges to stay motivated and social. With its sleek design and battery-efficient technology, Fit Track is the perfect companion for anyone committed to an active and healthy lifestyle.",
        },
        {
          id: 8,
          name: "Game Hub",
          url: "https://i.postimg.cc/mgHCsC9p/Game-Hub.jpg",
          rating: "4.6",
          downloads: "1.8M",
          size: "145MB",
          isDownload: false,
          reviews: [4500, 3800, 2100, 4900, 1200],
          description:
            "Game Hub is a versatile gaming platform that offers a wide collection of mini-games across different genres. Whether you enjoy action, puzzles, racing, or strategy, there is something for everyone in this all-in-one app. You can play against the computer or challenge real players worldwide in the online multiplayer mode. The app features a global leaderboard where you can climb the ranks by earning high scores. New games are added every week to keep the experience fresh and exciting for all users. It also supports offline play for many titles, so you can stay entertained even without an internet connection. High-quality graphics and smooth controls ensure a premium gaming experience directly on your mobile device.",
        },
        {
          id: 9,
          name: "Game Zone",
          url: "https://i.postimg.cc/wjmLpLNn/Game-Zone.jpg",
          rating: "4.5",
          downloads: "1.7M",
          size: "120MB",
          isDownload: false,
          reviews: [4800, 1500, 3100, 4600, 2400],
          description:
            "Game Zone provides a massive library of high-performance games designed for hardcore mobile gamers. It optimizes your device's resources to ensure lag-free gameplay and superior graphics rendering for every title. You can discover the most popular trending games and read honest reviews from the gaming community. The app also features a community forum where players can share tips, tricks, and gameplay walkthroughs. With customizable controls and support for external gamepads, it offers a console-like experience on your phone. Regular updates bring new features, levels, and seasonal events to the most popular games. It’s the ultimate destination for anyone who takes their mobile gaming seriously and wants the best performance.",
        },
        {
          id: 10,
          name: "Langify",
          url: "https://i.postimg.cc/3xvmTmGs/Langify.jpg",
          rating: "4.8",
          downloads: "1.3M",
          size: "75MB",
          isDownload: false,
          reviews: [4900, 4100, 3800, 4500, 1200],
          description:
            "Langify is an award-winning language learning app that makes mastering a new tongue fun and interactive. It offers courses in over 30 languages, including Spanish, French, German, and Japanese, using a unique method. The app focuses on real-world conversations, helping you speak confidently from the very first day. It uses AI-driven speech recognition technology to help you perfect your pronunciation and accent. Short, bite-sized lessons fit easily into a busy schedule, taking only 10 minutes of your time daily. You can also play language games and take quizzes to reinforce your vocabulary and grammar skills. Whether you are traveling or enhancing your career, Langify is the most efficient way to become bilingual quickly.",
        },
        {
          id: 11,
          name: "Learn It",
          url: "https://i.postimg.cc/13qwQwFL/Learn-It.jpg",
          rating: "4.9",
          downloads: "1.4M",
          size: "95MB",
          isDownload: false,
          reviews: [4950, 4800, 4100, 4700, 1500],
          description:
            "Learn It is a premier e-learning platform that offers high-quality courses from world-class instructors and universities. You can learn anything from data science and marketing to photography and creative writing. The app features high-definition video lessons that you can download for offline viewing at your convenience. Each course includes practical assignments, quizzes, and a certificate of completion to boost your resume. You can interact with instructors and other students through dedicated discussion forums for every subject. The app’s intelligent recommendation engine suggests courses based on your interests and previous learning history. Stay ahead in your professional life by gaining new skills through this flexible and affordable learning environment.",
        },
        {
          id: 12,
          name: "Mind Relax",
          url: "https://i.postimg.cc/2SZhDhvR/Mind-Relax.jpg",
          rating: "4.1",
          downloads: "2.2M",
          size: "60MB",
          isDownload: false,
          reviews: [1100, 3200, 4200, 2300, 1900],
          description:
            "Mind Relax is your go-to app for instant stress relief and deep relaxation after a long, tiring day. It offers a curated collection of soothing sounds like rainfall, forest birds, and ocean waves to calm your nerves. The app also includes guided breathing exercises that help lower your heart rate and reduce physical tension. You can create your own custom sound mixes by blending different nature sounds together for a personalized experience. A built-in sleep timer allows the audio to fade out gradually as you drift off into a peaceful sleep. It is particularly helpful for those suffering from insomnia or high levels of daily work stress. Reclaim your inner peace and mental clarity with just a few minutes of relaxation every day.",
        },
        {
          id: 13,
          name: "Music Flow",
          url: "https://i.postimg.cc/htdTBTxB/Music-Flow.jpg",
          rating: "4.3",
          downloads: "1.7M",
          size: "38MB",
          isDownload: false,
          reviews: [4800, 2500, 3100, 1400, 4200],
          description:
            "Music Flow is a modern music streaming service that gives you access to millions of songs and podcasts. You can discover new music based on your listening habits and create unlimited personalized playlists for any mood. The app features high-fidelity audio quality, ensuring that every beat and instrument sounds crystal clear. With a powerful search engine, you can find your favorite artists, albums, or specific tracks in seconds. It also includes a radio mode that plays non-stop music similar to the songs you love most. You can sync your library across all your devices and listen to your music anywhere, anytime. Experience the rhythm of the world with an interface designed for true music lovers and enthusiasts.",
        },
        {
          id: 14,
          name: "Music Mate",
          url: "https://i.postimg.cc/52CLVLvJ/Music-Mate.jpg",
          rating: "4.0",
          downloads: "3.5M",
          size: "42MB",
          isDownload: false,
          reviews: [1900, 4100, 3300, 2200, 4500],
          description:
            "Music Mate is a social music player that allows you to share and discover music with your friends and family. You can see what your friends are currently listening to and join their live listening sessions in real-time. The app also features a powerful equalizer that lets you customize the sound output to match your headphones. It supports almost all audio formats, making it a versatile player for your locally stored music files. You can also view song lyrics while playing music, making it perfect for those impromptu karaoke sessions. The app’s sleek and colorful design can be customized with various themes to suit your personal style. It’s not just a music player; it’s a way to connect with others through the universal language of sound.",
        },
        {
          id: 15,
          name: "News Daily",
          url: "https://i.postimg.cc/htdTBTxc/News-Daily.jpg",
          rating: "4.4",
          downloads: "2.8M",
          size: "25MB",
          isDownload: false,
          reviews: [4300, 1200, 3100, 2800, 4900],
          description:
            "News Daily keeps you informed about everything happening around the world with real-time updates and breaking news alerts. It aggregates news from thousands of trusted sources, covering politics, technology, sports, entertainment, and business. You can customize your news feed to show only the topics that matter most to you personally. The app features a 'Read Later' mode, allowing you to save long articles for offline reading when you have time. It also provides daily summaries and morning briefings to get you up to speed in just a few minutes. Interactive maps and high-quality photo galleries provide a deeper context to the stories being reported. Stay ahead of the curve and never miss an important update with this comprehensive and reliable news companion.",
        },
        {
          id: 16,
          name: "News Flash",
          url: "https://i.postimg.cc/rwrxkxWc/News-Flash.jpg",
          rating: "4.1",
          downloads: "1.1M",
          size: "30MB",
          isDownload: false,
          reviews: [1500, 2700, 3800, 4400, 1100],
          description:
            "News Flash is designed for busy individuals who want to stay updated with the world in the shortest time. It delivers news in a summarized, bullet-point format, allowing you to grasp the core of a story in seconds. The app covers global events, local news, and niche interests like science and health with equal priority. You can set custom notifications for specific keywords to get alerted about news that specifically interests you. Its lightweight design ensures that the app runs smoothly even on older devices with slow internet connections. You can also listen to audio versions of the news summaries while commuting or multi-tasking. It is the fastest way to stay knowledgeable without spending hours scrolling through endless pages of text.",
        },
        {
          id: 17,
          name: "Photo Genius",
          url: "https://i.postimg.cc/HkyXgX5p/Photo-Genius.jpg",
          rating: "4.7",
          downloads: "5.5M",
          size: "85MB",
          isDownload: false,
          reviews: [4900, 4800, 4950, 4200, 3900],
          description:
            "Photo Genius is a professional-grade photo editing app that turns your smartphone into a powerful creative studio. It offers a wide range of advanced tools, including curve adjustments, selective healing, and perspective correction. You can choose from hundreds of artistically crafted filters to give your photos a unique and professional look. The app also features AI-powered background removal and object replacement for complex photo manipulations. It supports RAW file editing, ensuring that you maintain the highest possible image quality during the editing process. You can create stunning collages, add text with beautiful typography, and share your work directly to social media. Whether you are a hobbyist or a professional photographer, this app provides all the tools you need.",
        },
        {
          id: 18,
          name: "Photo Master",
          url: "https://i.postimg.cc/T3Dg6gmd/Photo-Master.jpg",
          rating: "4.5",
          downloads: "4.2M",
          size: "78MB",
          isDownload: false,
          reviews: [2100, 3400, 4100, 1800, 4500],
          description:
            "Photo Master is an easy-to-use yet powerful photo editor designed for quick enhancements and fun creative projects. It features one-tap auto-enhancement tools that instantly fix lighting, contrast, and color balance issues. The app includes a vast library of stickers, frames, and overlays to add a playful touch to your images. You can also use the portrait mode to smooth skin, whiten teeth, and brighten eyes for the perfect selfie. It offers various artistic effects like sketch, oil painting, and pop art to transform your photos into masterpieces. The user-friendly interface makes it accessible for people of all skill levels to create beautiful images. Save your edited photos in high resolution and surprise your friends with your amazing creative skills.",
        },
        {
          id: 19,
          name: "Recipe Box",
          url: "https://i.postimg.cc/vZVfsf9H/Recipe-Box.jpg",
          rating: "3.9",
          downloads: "2.0M",
          size: "32MB",
          isDownload: false,
          reviews: [1200, 3300, 2100, 4400, 2800],
          description:
            "Recipe Box is a digital organizer for all your favorite cooking recipes from various websites and cookbooks. You can easily import recipes from the web or manually enter your own family secrets into the app. It categorizes your recipes by meal type, preparation time, and ingredients, making them very easy to find. The app includes a meal planner that helps you organize your breakfast, lunch, and dinner for the entire week. It also generates a consolidated shopping list based on the recipes you plan to cook, saving you time at the store. You can add notes, rate your own recipes, and even share them with friends via email or social media. Never lose a great recipe again and keep your kitchen organized with this essential tool for every home cook.",
        },
        {
          id: 20,
          name: "Shop Easy",
          url: "https://i.postimg.cc/Zqz3KnFk/Shop-Easy.jpg",
          rating: "4.6",
          downloads: "8.3M",
          size: "55MB",
          isDownload: false,
          reviews: [4700, 4100, 3900, 4500, 4800],
          description:
            "Shop Easy is a global e-commerce platform that brings millions of products from around the world to your doorstep. You can shop for fashion, electronics, home decor, beauty products, and much more at competitive prices. The app features a secure payment gateway and multiple shipping options to ensure a smooth and safe shopping experience. You can read detailed product descriptions, check customer ratings, and view photos from real buyers. It also offers personalized recommendations and exclusive daily deals to help you save money on your favorite brands. Tracking your orders is easy with real-time updates on your package’s location and estimated delivery time. Experience the ultimate convenience of online shopping with an app that prioritizes customer satisfaction above all else.",
        },
        {
          id: 21,
          name: "Study Hub",
          url: "https://i.postimg.cc/jjYNd2Q0/Study-Hub.jpg",
          rating: "4.8",
          downloads: "1.9M",
          size: "68MB",
          isDownload: false,
          reviews: [4900, 4200, 3800, 4500, 4100],
          description:
            "Study Hub is an all-in-one productivity app designed to help students manage their academic life more effectively. It features a comprehensive study planner where you can track assignments, exam dates, and class schedules. The app includes a Pomodoro timer to help you stay focused during long study sessions by breaking them into intervals. You can also create digital flashcards for quick revision and take organized notes for all your subjects. It allows you to collaborate with classmates by sharing notes and participating in group study discussions. The app also provides access to a large library of academic resources and practice papers for various competitive exams. Achieve better grades and reduce academic stress by keeping all your study materials in one organized place.",
        },
        {
          id: 22,
          name: "Travel Buddy",
          url: "https://i.postimg.cc/Xv6F7qc6/Travel-Buddy.jpg",
          rating: "4.3",
          downloads: "3.1M",
          size: "105MB",
          isDownload: false,
          reviews: [3100, 2200, 4500, 1800, 3900],
          description:
            "Travel Buddy is the ultimate travel companion that helps you plan, book, and enjoy your dream vacations. You can find and book the best deals on flights, hotels, and car rentals directly through the app. It provides detailed travel guides for thousands of destinations, including top attractions, local hidden gems, and restaurants. The app features an offline map service, ensuring you never get lost even in areas with poor mobile signals. You can create a detailed itinerary and share it with your fellow travelers to keep everyone on the same page. It also includes a currency converter and a basic translator to help you navigate through foreign countries with ease. Make every journey more memorable and stress-free by having all your travel information in your pocket.",
        },
        {
          id: 23,
          name: "Travel Mate",
          url: "https://i.postimg.cc/PqnZrJzH/Travel-Mate.jpg",
          rating: "4.2",
          downloads: "2.7M",
          size: "98MB",
          isDownload: false,
          reviews: [2400, 3100, 4200, 1500, 3800],
          description:
            "Travel Mate is a social travel app that connects you with like-minded travelers and local experts around the globe. You can join travel groups, find a travel partner for your next trip, and share your own travel experiences. The app features real-time reviews of tourist spots, hotels, and eateries from a community of active travelers. You can also book local tours and unique experiences that are often missed by traditional travel guides. It includes a built-in expense tracker to help you manage your budget while you are on the move. The app’s interactive community forum is a great place to ask questions and get advice for your upcoming adventures. Turn every trip into a social experience and discover the world through the eyes of people who love to explore.",
        },
        {
          id: 24,
          name: "Weather Now",
          url: "https://i.postimg.cc/fbQXTyjZ/Weather-Now.jpg",
          rating: "4.7",
          downloads: "10.2M",
          size: "22MB",
          isDownload: false,
          reviews: [4950, 4800, 4100, 4700, 4500],
          description:
            "Weather Now provides hyper-local weather forecasts that are incredibly accurate down to the minute. It offers detailed information on temperature, humidity, wind speed, UV index, and air quality for your exact location. The app features beautiful radar maps that allow you to track rain, snow, and storms in real-time. You can set personalized alerts for severe weather conditions like thunderstorms, hurricanes, or heavy snowfall to stay safe. The 10-day and 24-hour forecasts help you plan your outdoor activities and travel with complete confidence. It also includes sunrise and sunset times, as well as moon phases for astronomy enthusiasts. With its clean, easy-to-read interface and customizable widgets, it is the only weather app you will ever need to stay prepared.",
        },
      ]
  );

  //back to top when route changed
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <AppContext.Provider value={{ appsData, setAppsData }}>
      <ScrollToTop />
      <div className="bg-neutral-100">
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/app-details/:id" element={<AppDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
