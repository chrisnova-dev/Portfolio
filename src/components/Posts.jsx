import React, { useEffect, useState } from 'react';

// Configuration
const CACHE_KEY = 'twitter_feed_cache';
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours
const HANDLE = 'ChrisNova01';
// PASTE YOUR RSS.APP URL HERE
const RSS_FEED_URL = "https://rss.app/feeds/v1.1/SASlI6C2hBsqkEFz.json"; 

// ─── Helpers ───────────────────────────────────────────────────────────────

function timeAgo(ts) {
  const diff = Date.now() - ts;
  const h = Math.floor(diff / 3600000);
  const m = Math.floor(diff / 60000);
  if (h >= 24) return "1 day ago";
  if (h >= 1) return `${h}h ago`;
  if (m >= 1) return `${m}m ago`;
  return 'Just now';
}

function expiresIn(postTime) {
  const remaining = postTime + CACHE_TTL - Date.now();
  if (remaining <= 0) return { label: 'Expired', pct: 0 };
  const h = Math.floor(remaining / 3600000);
  const m = Math.floor((remaining % 3600000) / 60000);
  const pct = Math.round((remaining / CACHE_TTL) * 100);
  return {
    label: h > 0 ? `Expires in ${h}h ${m}m` : `Expires in ${m}m`,
    pct,
  };
}

// ─── Sub-components ────────────────────────────────────────────────────────

const TweetCard = ({ post }) => {
  const exp = expiresIn(post.time);

  const formatText = (text) =>
    text.split(/(#\w+)/g).map((part, i) =>
      part.startsWith('#') ? (
        <span key={i} className="text-blue-400">{part}</span>
      ) : (
        part
      )
    );

  return (
    <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 w-full transition-all hover:border-white/20">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full border-2 border-[#FACC15] bg-black flex items-center justify-center text-[#FACC15] font-semibold text-sm flex-shrink-0">
          CN
        </div>
        <div className="flex flex-col">
          <span className="text-white font-medium text-sm">Chris Nova</span>
          <span className="text-gray-500 text-xs">@{HANDLE}</span>
        </div>
        <a href={post.url} target="_blank" rel="noreferrer" className="ml-auto text-gray-600 hover:text-white transition-colors">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
      </div>

      <p className="text-gray-200 text-sm leading-relaxed mb-3">
        {formatText(post.text)}
      </p>

      <div className="flex items-center justify-between mb-3">
        <span className="text-gray-600 text-xs">{timeAgo(post.time)}</span>
        <div className="flex gap-4 opacity-50">
          <span className="text-gray-500 text-xs">♥ Live</span>
          <span className="text-gray-500 text-xs">↺ Active</span>
        </div>
      </div>

      <div className="border-t border-white/5 pt-3">
        <p className="text-gray-600 text-[11px] mb-1.5">{exp.label}</p>
        <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#FACC15] rounded-full transition-all duration-1000"
            style={{ width: `${exp.pct}%` }}
          />
        </div>
      </div>
    </div>
  );
};


const TwitterFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
    async function fetchPosts() {
      // 1. Try to load from local storage first to avoid 500 errors
      const cachedData = localStorage.getItem('twitter_cache');
      if (cachedData) {
        const { posts, timestamp } = JSON.parse(cachedData);
        // If the cache is less than 30 mins old, use it instead of fetching
        if (Date.now() - timestamp < 30 * 60 * 1000) {
          const active = posts.filter(p => Date.now() - p.time < 86400000);
          setPosts(active);
          setLoading(false);
          return;
        }
      }

      try {
        const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_FEED_URL)}`);
        
        if (!res.ok) throw new Error(`Server responded with ${res.status}`);
        
        const data = await res.json();

        if (data.status === 'ok' && data.items) {
          const freshPosts = data.items.map((item) => ({
            id: item.guid,
            text: item.title,
            time: new Date(item.pubDate).getTime(),
            url: item.link,
          }));

          const activeOnly = freshPosts.filter(p => Date.now() - p.time < 86400000);
          
          // Save to cache
          localStorage.setItem('twitter_cache', JSON.stringify({
            posts: activeOnly,
            timestamp: Date.now()
          }));

          setPosts(activeOnly);
        }
      } catch (error) {
        console.error("Fetch failed, likely rate limited:", error);
        // If fetch fails, try to show expired cache as a fallback
        if (cachedData) {
           const { posts } = JSON.parse(cachedData);
           setPosts(posts);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <section className="py-16 bg-black flex flex-col items-center justify-center px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Latest <span className="text-[#FACC15]">Posts</span>
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          Auto-clearing feed · Only showing updates from the last 24h
        </p>
      </div>

      <div className="w-full max-w-xl flex flex-col gap-4">
        {loading ? (
          <div className="flex flex-col items-center py-16 text-gray-500 gap-3">
            <div className="animate-spin rounded-full h-7 w-7 border-t-2 border-[#FACC15]" />
            <p className="text-sm">Syncing with X...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="border border-dashed border-white/10 rounded-2xl p-10 text-center">
            <p className="text-gray-500 text-sm mb-4">No posts in the last 24 hours</p>
            <a href={`https://twitter.com/${HANDLE}`} target="_blank" rel="noreferrer" className="text-xs border border-[#FACC15] text-[#FACC15] px-4 py-2 rounded-lg hover:bg-[#FACC15]/10">
              View Profile ↗
            </a>
          </div>
        ) : (
          posts.map((post) => <TweetCard key={post.id} post={post} />)
        )}
      </div>
    </section>
  );
};

export default TwitterFeed;