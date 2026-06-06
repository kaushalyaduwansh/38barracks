import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Instagram, Heart, Play, Eye, ExternalLink } from 'lucide-react';
import { INSTAGRAM_REELS } from '../data';

interface InstaPost {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstaPost[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function fetchInstagram() {
      try {
        const res = await fetch('/api/instagram');
        const json = await res.json();
        
        if (!res.ok) {
          setErrorMsg(json.message || json.error || 'Failed to load Instagram feed.');
          setPosts(null);
        } else {
          setPosts(json.data || []);
          setErrorMsg(null);
        }
      } catch (err: any) {
        setErrorMsg('Network error connecting to Instagram feed.');
        setPosts(null);
      } finally {
        setLoading(false);
      }
    }
    
    fetchInstagram();
  }, []);

  return (
    <section className="relative py-20 bg-olive-dark/15 border-t border-gold-accent/5 overflow-hidden military-grid">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.35em] font-bold text-gold-accent block">
              Digital Propaganda Broadcaster
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-wide uppercase luxury-heading">
              FOLLOW THE VIBE
            </h2>
            <div className="w-12 h-[2.5px] bg-gold-accent mt-2 mx-auto md:mx-0" />
          </div>

          <a
            href="https://instagram.com/38barracks"
            target="_blank"
            referrerPolicy="no-referrer"
            className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-amber-600 hover:from-pink-500 hover:to-amber-500 text-white font-extrabold text-xs tracking-widest uppercase px-6 py-3 rounded-sm border border-transparent shadow-lg hover:scale-105 transition-all"
          >
            <Instagram className="w-4 h-4" />
            Follow @38barracks
          </a>
        </div>

        {/* Loading / Error States OR Feed */}
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 rounded-full border-2 border-gold-accent border-t-transparent animate-spin" />
          </div>
        ) : errorMsg ? (
          <div className="text-center p-8 bg-night-black border border-white/5 rounded-sm">
            {posts === null && (
               <div className="text-gray-400 mb-6 text-sm">{errorMsg}</div>
            )}
            
            {/* Fallback to hardcoded Data if live fetch fails or is unset */}
            <div className="text-xs uppercase tracking-widest text-gold-accent mb-4 font-mono">Showing Offline Archives</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {INSTAGRAM_REELS.map((reel) => (
                <a
                  key={reel.id}
                  href={reel.link}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="group relative aspect-[9/16] rounded-sm overflow-hidden border border-white/5 hover:border-gold-accent/40 shadow-md flex bg-night-black"
                >
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-black via-night-black/40 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 group-hover:bg-gold-accent backdrop-blur-md flex items-center justify-center rounded-full border border-white/30 group-hover:border-gold-accent group-hover:scale-110 transition-all shadow-md">
                    <Play className="w-4.5 h-4.5 text-white group-hover:text-night-black fill-current" />
                  </div>
                  <div className="absolute bottom-4 inset-x-4 space-y-2 text-left">
                    <p className="text-[11px] text-gray-200 line-clamp-2 leading-relaxed font-light group-hover:text-white transition-colors">
                      {reel.title}
                    </p>
                    <div className="flex items-center justify-between text-[9px] text-gray-300 font-mono border-t border-white/10 pt-2 font-medium">
                      <span className="flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                        {reel.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5 text-gold-accent" />
                        {reel.views}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ) : posts && posts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {posts.slice(0, 4).map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                referrerPolicy="no-referrer"
                className="group relative aspect-[9/16] rounded-sm overflow-hidden border border-white/5 hover:border-gold-accent/40 shadow-md flex bg-night-black"
              >
                <img
                  src={post.media_type === 'VIDEO' ? (post.thumbnail_url || post.media_url) : post.media_url}
                  alt={post.caption || "Instagram Post"}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-black via-night-black/40 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 group-hover:bg-gold-accent backdrop-blur-md flex items-center justify-center rounded-full border border-white/30 group-hover:border-gold-accent group-hover:scale-110 transition-all shadow-md">
                  {post.media_type === 'VIDEO' ? (
                     <Play className="w-4.5 h-4.5 text-white group-hover:text-night-black fill-current" />
                  ) : (
                     <ExternalLink className="w-4.5 h-4.5 text-white group-hover:text-night-black" />
                  )}
                </div>

                <div className="absolute bottom-4 inset-x-4 space-y-2 text-left">
                  <p className="text-[11px] text-gray-200 line-clamp-3 leading-relaxed font-light group-hover:text-white transition-colors">
                    {post.caption}
                  </p>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 font-mono text-xs">
            No live posts available.
          </div>
        )}

        {/* Dynamic call to action row */}
        <p className="text-[10px] text-center text-gray-500 uppercase tracking-widest mt-8 font-mono">
          🎥 Daily story briefings • Celebrities spot logs • Cocktail assembly previews
        </p>

      </div>
    </section>
  );
}
