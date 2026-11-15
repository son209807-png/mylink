import React from "react";

interface LinkItem {
  id: string;
  title: string;
  subtitle?: string;
  url: string;
  icon: string;
  category?: string;
}

const profileData = {
  name: "MyLink",
  handle: "@mylink_user",
  bio: "✨ 배움과 성장을 기록하는 개발자 공간입니다. 함께 연결되고 소통해요!",
  avatarEmoji: "🚀",
  tags: ["#Nextjs", "#TypeScript", "#Frontend", "#Developer"],
};

const linkItems: LinkItem[] = [
  {
    id: "github",
    title: "GitHub 저장소",
    subtitle: "프로젝트 코드 및 실습 저장소",
    url: "https://github.com",
    icon: "🐙",
  },
  {
    id: "blog",
    title: "기술 블로그",
    subtitle: "개발 공부와 기술 인사이트 기록",
    url: "https://velog.io",
    icon: "✍️",
  },
  {
    id: "portfolio",
    title: "포트폴리오",
    subtitle: "진행한 프로젝트 모음",
    url: "https://github.com",
    icon: "💼",
  },
  {
    id: "instagram",
    title: "인스타그램",
    subtitle: "일상 및 일상 소통 공간",
    url: "https://instagram.com",
    icon: "📸",
  },
  {
    id: "contact",
    title: "Contact (이메일 문의)",
    subtitle: "협업 제안 및 문의하기",
    url: "mailto:hello@example.com",
    icon: "✉️",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-950 to-slate-950 text-white flex flex-col items-center justify-between px-4 py-12 sm:px-6">
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        {/* 프로필 섹션 */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-amber-400 p-[3px] shadow-lg shadow-purple-500/30">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-4xl select-none">
                {profileData.avatarEmoji}
              </div>
            </div>
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 border-2 border-slate-900 rounded-full"></span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-1.5">
            {profileData.name}
            <span className="text-blue-400 text-sm" title="인증됨">
              ✓
            </span>
          </h1>
          <p className="text-sm text-purple-300 font-medium mt-0.5">
            {profileData.handle}
          </p>

          <p className="text-sm text-slate-300 mt-3 max-w-xs leading-relaxed">
            {profileData.bio}
          </p>

          {/* 태그 모음 */}
          <div className="flex flex-wrap gap-1.5 justify-center mt-3">
            {profileData.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-purple-200 border border-white/10 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 링크 목록 섹션 */}
        <div className="w-full flex flex-col gap-3.5">
          {linkItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 active:scale-[0.98]"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-900/50 flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <div className="flex-1 text-left">
                <div className="font-semibold text-white group-hover:text-purple-200 transition-colors">
                  {item.title}
                </div>
                {item.subtitle && (
                  <div className="text-xs text-slate-300 line-clamp-1">
                    {item.subtitle}
                  </div>
                )}
              </div>

              <div className="text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all">
                →
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* 푸터 */}
      <footer className="mt-12 text-center text-xs text-slate-500 flex flex-col items-center gap-1">
        <div>
          Powered by <span className="font-semibold text-slate-400">MyLink</span> & Next.js
        </div>
        <p>© 2026 MyLink. All rights reserved.</p>
      </footer>
    </div>
  );
}
