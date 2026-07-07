import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Cake,
  Camera,
  ChevronLeft,
  ChevronRight,
  Gift,
  Heart,
  Music2,
  Pause,
  Play,
  Sparkles,
  Star,
  Volume2,
} from "lucide-react";
import "./styles.css";

const friend = {
  name: "Kilari Vani",
  from: "Someone who is lucky to know you",
  song: "",
  songName: "Aho Oka Manasuku",
  youtubeSongQuery: "Aho Oka Manasuku Allari Priyudu",
  youtubeSongVideoId: "dsU-sKfaQ9M",
  youtubeSongUrl: "https://youtu.be/dsU-sKfaQ9M?si=si8mhVMyweZGeO8I",
  photos: [
    {
      title: "The smile that starts everything",
      src: "Photo1.jpeg",
    },
    {
      title: "A little sunshine, saved forever",
      src: "Photo2.jpeg",
    },
    {
      title: "Today belongs to you",
      src: "Photo3.jpeg",
    },
    {
      title: "More joy, more cake, more magic",
      src: "Photo4.jpeg",
    },
    {
      title: "More joy, more cake, more magic",
      src: "Photo5.jpeg",
    },
    {
      title: "More joy, more cake, more magic",
      src: "Photo6.jpeg",
    },
    {
      title: "More joy, more cake, more magic",
      src: "Photo7.jpeg",
    },
    {
      title: "More joy, more cake, more magic",
      src: "Photo8.jpeg",
    },
    {
      title: "More joy, more cake, more magic",
      src: "Photo9.jpeg",
    },
    {
      title: "More joy, more cake, more magic",
      src: "Photo10.jpeg",
    }
  ],
  wishes: [
    "May this year bring the calm you deserve, the laughter you love, and the surprises you secretly hope for.",
    "You make ordinary days brighter. Today, I hope the whole day returns that brightness to you.",
    "Here is to new memories, brave dreams, and a birthday that feels exactly like being celebrated should feel.",
  ],
  moments: [
    "For every laugh you shared",
    "For every hard day you crossed",
    "For every dream waiting ahead",
    "For the rare, wonderful person you are",
  ],
};

function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 72 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 7}s`,
        duration: `${6 + Math.random() * 6}s`,
        rotate: `${Math.random() * 360}deg`,
        color: [
          "#ff4d8d",
          "#ffd166",
          "#06d6a0",
          "#4cc9f0",
          "#b8f2e6",
          "#f15bb5",
        ][index % 6],
      })),
    [],
  );

  return (
    <div className="confetti" aria-hidden="true">
      {pieces.map((piece) => (
        <span
          key={piece.id}
          style={{
            left: piece.left,
            animationDelay: piece.delay,
            animationDuration: piece.duration,
            "--spin": piece.rotate,
            "--paper": piece.color,
          }}
        />
      ))}
    </div>
  );
}

function FlowerRain() {
  const petals = useMemo(
    () =>
      Array.from({ length: 34 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${5 + Math.random() * 5}s`,
        size: `${10 + Math.random() * 12}px`,
        drift: `${-20 + Math.random() * 40}px`,
      })),
    [],
  );

  return (
    <div className="flower-rain" aria-hidden="true">
      {petals.map((petal) => (
        <span
          key={petal.id}
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            "--drift": petal.drift,
          }}
        />
      ))}
    </div>
  );
}

function Balloons() {
  const balloons = useMemo(
    () =>
      Array.from({ length: 9 }, (_, index) => ({
        id: index,
        left: `${6 + index * 11}%`,
        delay: `${index * 0.8}s`,
        duration: `${10 + (index % 3) * 2}s`,
        color: ["#ff4d8d", "#ffd166", "#06d6a0", "#4cc9f0", "#f15bb5"][index % 5],
      })),
    [],
  );

  return (
    <div className="balloons" aria-hidden="true">
      {balloons.map((balloon) => (
        <span
          key={balloon.id}
          style={{
            left: balloon.left,
            animationDelay: balloon.delay,
            animationDuration: balloon.duration,
            "--balloon": balloon.color,
          }}
        />
      ))}
    </div>
  );
}

function HeroSidePhotos() {
  const sidePhotos = [
    { photo: friend.photos[1] || friend.photos[0], side: "left", className: "side-photo one" },
    { photo: friend.photos[2] || friend.photos[0], side: "left", className: "side-photo two" },
    { photo: friend.photos[3] || friend.photos[0], side: "right", className: "side-photo three" },
    { photo: friend.photos[4] || friend.photos[0], side: "right", className: "side-photo four" },
  ];

  return (
    <div className="hero-side-photos" aria-hidden="true">
      {sidePhotos.map((item) => (
        <div key={`${item.side}-${item.className}`} className={`${item.className} ${item.side}`}>
          <img src={item.photo.src} alt="" />
        </div>
      ))}
    </div>
  );
}

function MusicControl({ startSignal }) {
  if (!friend.song) return null;

  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(Boolean(friend.song));
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    const startMusic = async () => {
      if (!friend.song || !audioRef.current) return;

      try {
        audioRef.current.volume = 0.75;
        await audioRef.current.play();
        setPlaying(true);
        setAutoplayBlocked(false);
      } catch {
        setAutoplayBlocked(true);
      }
    };

    startMusic();
  }, []);

  useEffect(() => {
    if (!startSignal) return;

    const startMusicFromTap = async () => {
      if (!friend.song || !audioRef.current) return;

      try {
        audioRef.current.volume = 0.75;
        await audioRef.current.play();
        setPlaying(true);
        setAutoplayBlocked(false);
      } catch {
        setAutoplayBlocked(true);
      }
    };

    startMusicFromTap();
  }, [startSignal]);

  const toggle = async () => {
    if (!friend.song || !audioRef.current) {
      setAvailable(false);
      return;
    }

    try {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        await audioRef.current.play();
        setPlaying(true);
        setAutoplayBlocked(false);
      }
    } catch {
      setAvailable(false);
    }
  };

  return (
    <div className="music-dock">
      {friend.song && (
        <audio
          ref={audioRef}
          src={friend.song}
          loop
          preload="auto"
          autoPlay
          onError={() => setAvailable(false)}
        />
      )}
      <button
        className="icon-button primary"
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
      >
        {playing ? <Pause size={20} /> : <Play size={20} />}
      </button>
      <div>
        <p>
          {playing
            ? `${friend.songName} is playing`
            : `Tap to play ${friend.songName}`}
        </p>
        <span>
          {!available
            ? "Add legal audio file or use YouTube button"
            : autoplayBlocked
              ? "Browser needs one tap to allow sound"
              : "Music starts automatically when allowed"}
        </span>
      </div>
      <Volume2 size={18} aria-hidden="true" />
    </div>
  );
}

function MobileQuickNav() {
  return (
    <nav className="mobile-quick-nav" aria-label="Birthday sections">
      <a href="#top">
        <Sparkles size={18} />
        Start
      </a>
      <a href="#gallery">
        <Camera size={18} />
        Photos
      </a>
      <a href="#wish">
        <Heart size={18} />
        Wish
      </a>
      <a href="#cake">
        <Cake size={18} />
        Cake
      </a>
    </nav>
  );
}

function WelcomeGate({ onOpen }) {
  return (
    <section className="welcome-gate">
      <div className="welcome-sparkles" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="welcome-photo-ring">
        {friend.photos.slice(0, 5).map((photo, index) => (
          <img key={photo.src} src={photo.src} alt="" className={`welcome-photo p${index + 1}`} />
        ))}
      </div>
      <button className="gift-box" onClick={onOpen} aria-label="Open birthday surprise">
        <span className="gift-lid" />
        <span className="gift-ribbon vertical" />
        <span className="gift-ribbon horizontal" />
        <span className="gift-body" />
      </button>
      <div className="welcome-copy">
        <p>Special birthday surprise for</p>
        <h2>{friend.name}</h2>
        <button className="button solid" onClick={onOpen}>
          <Gift size={20} />
          Open surprise
        </button>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <HeroSidePhotos />
      <div className="hero-content">
        <div className="badge">
          <Sparkles size={18} />A little celebration made just for you
        </div>
        <h1>Happy Birthday, {friend.name}</h1>
        <div className="hero-centerpiece">
          <FlowerRain />
          <img src={friend.photos[0].src} alt={`${friend.name} birthday memory`} />
        </div>
        <p>
          Today is for your smile, your stories, your quiet strength, and all
          the beautiful things still waiting to happen.
        </p>
        <div className="hero-actions">
          <a href="#gallery" className="button solid">
            <Camera size={20} />
            Open memories
          </a>
          <a href="#wish" className="button soft">
            <Heart size={20} />
            Read the wish
          </a>
        </div>
      </div>
      <div className="scroll-cue">Birthday surprise below</div>
    </section>
  );
}

function Gallery() {
  const [active, setActive] = useState(0);
  const [slideshowPlaying, setSlideshowPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    if (!slideshowPlaying) return undefined;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % friend.photos.length);
    }, 3600);
    return () => window.clearInterval(timer);
  }, [slideshowPlaying]);

  const showPrevious = () => {
    setActive((current) => (current === 0 ? friend.photos.length - 1 : current - 1));
  };

  const showNext = () => {
    setActive((current) => (current + 1) % friend.photos.length);
  };

  const handleTouchEnd = (event) => {
    if (touchStart === null) return;

    const touchEnd = event.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (Math.abs(distance) > 45) {
      if (distance > 0) {
        showNext();
      } else {
        showPrevious();
      }
      setSlideshowPlaying(false);
    }

    setTouchStart(null);
  };

  return (
    <section className="section gallery-section" id="gallery">
      <div className="section-heading">
        <span>
          <Camera size={18} />
          Photo slideshow
        </span>
        <h2>Every memory gets its own moment</h2>
      </div>

      <div className="slideshow">
        <div
          className="feature-frame slideshow-frame"
          onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
          onTouchEnd={handleTouchEnd}
        >
          {friend.photos.map((photo, index) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.title}
              className={active === index ? "slide active" : "slide"}
            />
          ))}

          <button className="slide-arrow previous" onClick={showPrevious} aria-label="Show previous photo">
            <ChevronLeft size={26} />
          </button>
          <button className="slide-arrow next" onClick={showNext} aria-label="Show next photo">
            <ChevronRight size={26} />
          </button>

          <div className="feature-caption">
            <span>
              <Star size={18} />
              {friend.photos[active].title}
            </span>
            <strong>
              {active + 1} / {friend.photos.length}
            </strong>
          </div>
        </div>

        <div className="slideshow-controls">
          <button
            className="button solid"
            onClick={() => setSlideshowPlaying((current) => !current)}
            aria-label={slideshowPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {slideshowPlaying ? <Pause size={20} /> : <Play size={20} />}
            {slideshowPlaying ? "Pause slideshow" : "Play slideshow"}
          </button>

          <div className="slide-dots" aria-label="Choose photo">
            {friend.photos.map((photo, index) => (
              <button
                key={photo.src}
                className={active === index ? "dot active" : "dot"}
                onClick={() => setActive(index)}
                aria-label={`Show photo ${index + 1}: ${photo.title}`}
              />
            ))}
          </div>
        </div>

        <div className="thumb-strip">
          {friend.photos.map((photo, index) => (
            <button
              key={photo.title}
              className={active === index ? "thumb active" : "thumb"}
              onClick={() => setActive(index)}
              aria-label={`Show ${photo.title}`}
            >
              <img src={photo.src} alt="" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Wish() {
  return (
    <section className="wish-band" id="wish">
      <div className="wish-content">
        <div className="section-heading light">
          <span>
            <Gift size={18} />
            Birthday letter
          </span>
          <h2>For the person who makes life feel lighter</h2>
        </div>
        <div className="wish-copy">
          {friend.wishes.map((wish) => (
            <p key={wish}>{wish}</p>
          ))}
        </div>
        <div className="signature">With love, {friend.from}</div>
      </div>
    </section>
  );
}
function YouTubeSongMoment() {
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${friend.youtubeSongVideoId}?rel=0&playsinline=1`;

  return (
    <section className="youtube-song-section" id="song">
      <div className="section-heading light">
        <span>
          <Music2 size={18} />
          Favorite song
        </span>
        <h2>Aho Oka Manasuku</h2>
      </div>

      <div className="youtube-player-shell">
        <iframe
          src={youtubeEmbedUrl}
          title="Aho Oka Manasuku from Allari Priyudu"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <a className="button solid youtube-open-button" href={friend.youtubeSongUrl} target="_blank" rel="noreferrer">
        <Play size={20} />
        Open song in YouTube
      </a>

      <p className="youtube-note">YouTube songs cannot autoplay with sound inside mobile browsers.</p>
    </section>
  );
}

function BirthdayCakeMoment() {
  const [candlesBlown, setCandlesBlown] = useState(false);

  return (
    <section className={candlesBlown ? "cake-moment wished" : "cake-moment"} id="cake">
      <div className="section-heading light">
        <span>
          <Cake size={18} />
          Birthday magic
        </span>
        <h2>{candlesBlown ? "Your wish is in the sky" : "Tap the cake to blow the candles"}</h2>
      </div>

      <button
        className="birthday-cake"
        onClick={() => setCandlesBlown(true)}
        aria-label="Blow birthday candles"
      >
        <div className="candles">
          {[0, 1, 2, 3, 4].map((candle) => (
            <span key={candle} className="candle">
              <i />
            </span>
          ))}
        </div>
        <div className="cake-top" />
        <div className="cake-body">
          <span />
          <span />
          <span />
        </div>
        <div className="cake-plate" />
      </button>

      <p className="cake-message">
        {candlesBlown
          ? `May every dream waiting for ${friend.name} find its way home this year.`
          : "A small tap, one big wish, and the celebration begins."}
      </p>
    </section>
  );
}

function SurpriseWall() {
  const surprises = [
    {
      icon: <Heart size={22} />,
      title: "One thing I admire",
      text: "Your presence makes people feel remembered, valued, and a little more hopeful.",
    },
    {
      icon: <Sparkles size={22} />,
      title: "This year",
      text: "May beautiful chances arrive early, stay long, and become stories worth repeating.",
    },
    {
      icon: <Gift size={22} />,
      title: "Tiny promise",
      text: "More laughter, more photos, more unplanned happy moments, and more reasons to smile.",
    },
  ];

  return (
    <section className="section surprise-section">
      <div className="section-heading">
        <span>
          <Sparkles size={18} />
          Special surprises
        </span>
        <h2>Little messages wrapped like gifts</h2>
      </div>
      <div className="surprise-grid">
        {surprises.map((surprise) => (
          <article className="surprise-card" key={surprise.title}>
            <div>{surprise.icon}</div>
            <h3>{surprise.title}</h3>
            <p>{surprise.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="section timeline-section">
      <div className="section-heading">
        <span>
          <Cake size={18} />
          Tiny toast
        </span>
        <h2>Four cheers for your new year</h2>
      </div>
      <div className="moment-grid">
        {friend.moments.map((moment, index) => (
          <div className="moment" key={moment}>
            <strong>{String(index + 1).padStart(2, "0")}</strong>
            <p>{moment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Finale() {
  return (
    <section className="finale">
      <div>
        <Sparkles size={34} />
        <h2>Make a wish. Blow the candles. Begin again.</h2>
        <p>
          Happy birthday, {friend.name}. The world is better with you in it.
        </p>
      </div>
    </section>
  );
}

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened && <WelcomeGate onOpen={() => setOpened(true)} />}
      <Confetti />
      <Balloons />
      <MusicControl startSignal={opened} />
      <MobileQuickNav />
      <Hero />
      <Gallery />
      <YouTubeSongMoment />
      <Wish />
      <BirthdayCakeMoment />
      <SurpriseWall />
      <Timeline />
      <Finale />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
