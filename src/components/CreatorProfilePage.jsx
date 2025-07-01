import React, { useState } from 'react';
import { Heart, MessageCircle, Share, Lock, Star, Instagram, Twitter } from 'lucide-react';
import mrnvibesImg from '../assets/mrnvibes.jpg';

const samplePosts = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    locked: false,
    title: "Welcome to my page! ✨",
    date: "2 hours ago",
    likes: 45,
    comments: 12,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    locked: true,
    title: "Exclusive Behind the Scenes 🔒",
    date: "1 day ago",
    likes: 89,
    comments: 23,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    locked: false,
    title: "Morning vibes ☀️",
    date: "2 days ago",
    likes: 67,
    comments: 8,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    locked: true,
    title: "Premium Content 💎",
    date: "3 days ago",
    likes: 156,
    comments: 34,
  },
];

export default function CreatorProfilePage() {
  const [activeTab, setActiveTab] = useState('posts');
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Banner Section */}
      <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Banner"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        {/* Profile Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex flex-col md:flex-row md:items-end md:space-x-6">
            {/* Profile Picture */}
            <div className="relative mb-4 md:mb-0">
              <img
                src={mrnvibesImg}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-2xl object-cover"
                alt="Profile"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
            </div>
            
            {/* Profile Details */}
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold">Hot Toddies</h1>
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
              </div>
              <p className="text-xl text-gray-300 mb-4">@hottoddies_official</p>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => setIsSubscribed(!isSubscribed)}
                  className={`px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-200 ${
                    isSubscribed 
                      ? 'bg-gray-700 text-white border border-gray-600' 
                      : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                  }`}
                >
                  {isSubscribed ? 'Subscribed ✓' : 'Subscribe $19.99/mo'}
                </button>
                <button className="px-6 py-3 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm">
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  Message
                </button>
                <button className="px-6 py-3 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm">
                  <Share className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats and Bio Section */}
      <div className="px-6 py-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-500">127</div>
              <div className="text-gray-400 text-sm">Posts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-500">15.2k</div>
              <div className="text-gray-400 text-sm">Likes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-500">3.4k</div>
              <div className="text-gray-400 text-sm">Fans</div>
            </div>
            <div className="text-center hidden md:block">
              <div className="text-2xl md:text-3xl font-bold text-primary-500">89%</div>
              <div className="text-gray-400 text-sm">Response</div>
            </div>
            <div className="text-center hidden md:block">
              <div className="text-2xl md:text-3xl font-bold text-primary-500">4.9★</div>
              <div className="text-gray-400 text-sm">Rating</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed max-w-3xl">
                Feeling down or just want a virtual hug? I’m your guy! 💬🤝
                Rent a friend for some wholesome chats, life advice, or just to make your day a little less lonely.
                No pressure, just positive vibes!
            </p>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors">
                <Instagram className="w-5 h-5" />
                <span>@hottoddies</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                <Twitter className="w-5 h-5" />
                <span>@hottoddies_</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="px-6 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <nav className="flex space-x-8 text-gray-400 text-lg">
            {['posts', 'photos', 'videos', 'live', 'about'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 border-b-2 capitalize transition-colors ${
                  activeTab === tab
                    ? 'border-primary-500 text-white font-semibold'
                    : 'border-transparent hover:text-white hover:border-gray-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Feed */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {samplePosts.map((post) => (
              <div
                key={post.id}
                className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden relative group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative">
                  <img src={post.img} alt="" className="w-full h-64 object-cover" />
                  
                  {post.locked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                      <div className="text-center">
                        <Lock className="w-12 h-12 mx-auto mb-3 text-primary-400" />
                        <div className="text-white font-bold text-lg mb-2">Exclusive Content</div>
                        <div className="text-gray-300 text-sm">Subscribe to unlock</div>
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                      {post.date}
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                  <div className="flex items-center justify-between text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">{post.comments}</span>
                      </div>
                    </div>
                    <button className="text-primary-400 hover:text-primary-300 transition-colors">
                      <Share className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full font-semibold hover:scale-105 transition-transform duration-200">
              Load More Posts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
