// src/styles/common.js
// Theme: Apple Light — clean typography, soft surfaces, subtle accents

// ─── Layout ───────────────────────────────────────────
export const pageBackground = "bg-[#f7f7fb] min-h-screen";
export const pageWrapper = "max-w-5xl mx-auto px-6 py-16";
export const section = "mb-14";

export const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
export const sectionSpacing = "py-16";

// ─── Cards ────────────────────────────────────────────
export const cardClass =
  "bg-[#f5f5f7] rounded-2xl p-7 hover:bg-[#ebebf0] transition-colors duration-200 cursor-pointer";

export const cardHover =
  "hover:shadow-lg hover:-translate-y-1 transition-all duration-200";

export const glassEffect =
  "bg-white/80 backdrop-blur-xl backdrop-saturate-150 border border-white/20";

// ─── Typography ───────────────────────────────────────
export const pageTitleClass =
  "text-5xl font-bold text-[#1d1d1f] tracking-tight leading-none mb-2";

export const headingClass =
  "text-2xl font-bold text-[#1d1d1f] tracking-tight";

export const subHeadingClass =
  "text-lg font-semibold text-[#1d1d1f] tracking-tight";

export const bodyText =
  "text-[#6e6e73] leading-relaxed";

export const mutedText =
  "text-sm text-[#a1a1a6]";

export const linkClass =
  "text-[#0066cc] hover:text-[#004499] transition-colors";

export const textGradient =
  "bg-gradient-to-r from-[#0066cc] to-[#004499] bg-clip-text text-transparent";

// ─── Buttons ──────────────────────────────────────────
export const primaryBtn =
  "bg-[#0066cc] text-white font-semibold px-5 py-2 rounded-full hover:bg-[#004499] transition-colors cursor-pointer text-sm tracking-tight";

export const secondaryBtn =
  "border border-[#d2d2d7] text-[#1d1d1f] font-medium px-5 py-2 rounded-full hover:bg-[#f5f5f7] transition-colors cursor-pointer text-sm";

export const ghostBtn =
  "text-[#0066cc] font-medium hover:text-[#004499] transition-colors cursor-pointer text-sm";

export const buttonGroup =
  "flex flex-wrap gap-3";

export const editBtn =
  "bg-[#0066cc] text-white text-sm px-4 py-2 rounded-full hover:bg-[#004499] transition";

export const deleteBtn =
  "bg-[#ff3b30] text-white text-sm px-4 py-2 rounded-full hover:bg-[#d62c23] transition";

// ─── Forms ────────────────────────────────────────────
export const formCard =
  "bg-[#f5f5f7] rounded-2xl p-10 max-w-4xl mx-auto";

export const formTitle =
  "text-2xl font-bold text-[#1d1d1f] tracking-tight text-center mb-7";

export const labelClass =
  "text-xs font-medium text-[#6e6e73] mb-1.5 block";

export const inputClass =
  "w-full bg-white border border-[#d2d2d7] rounded-xl px-4 py-2.5 text-[#1d1d1f] text-sm placeholder:text-[#a1a1a6] focus:outline-none focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/10 transition";

export const formGroup = "mb-4";

export const submitBtn =
  "w-full bg-[#0066cc] text-white font-semibold py-2.5 rounded-full hover:bg-[#004499] transition-colors cursor-pointer mt-2 text-sm tracking-tight";

export const formSection = "space-y-8";

export const formRow =
  "grid grid-cols-1 sm:grid-cols-2 gap-4";

export const formActions =
  "flex flex-col sm:flex-row gap-4 justify-end pt-6";

// ─── Navbar ───────────────────────────────────────────
export const navbarClass =
  "bg-white/85 backdrop-blur-xl backdrop-saturate-150 border-b border-[#e8e8ed] px-8 h-[52px] flex items-center sticky top-0 z-50";

export const navContainerClass =
  "max-w-5xl mx-auto w-full flex items-center justify-between";

export const navBrandClass =
  "text-base font-semibold text-[#1d1d1f] tracking-tight";

export const navLinksClass =
  "flex items-center gap-7";

export const navLinkClass =
  "text-2xl text-[#6e6e73] hover:text-[#1d1d1f] transition-colors font-normal";

export const navLinkActiveClass =
  "text-2xl text-[#0066cc] font-medium";

// ─── Hero Section ─────────────────────────────────────
export const heroSection =
  "relative overflow-hidden bg-gradient-to-br from-[#f7f7fb] to-[#f0f0f5] py-20";

export const heroContent =
  "max-w-4xl mx-auto text-center space-y-8";

export const heroTitle =
  "text-6xl font-bold text-[#1d1d1f] tracking-tight leading-tight";

export const heroSubtitle =
  "text-xl text-[#6e6e73] leading-relaxed max-w-2xl mx-auto";

export const heroButtons =
  "flex flex-col sm:flex-row gap-4 justify-center items-center";

// ─── Feature Section ──────────────────────────────────
export const featureCard =
  "bg-white rounded-2xl p-8 shadow-sm border border-[#e8e8ed] hover:shadow-md transition-shadow";

export const featureIcon =
  "w-12 h-12 bg-[#0066cc]/10 rounded-xl flex items-center justify-center mb-4";

export const featureTitle =
  "text-lg font-semibold text-[#1d1d1f] mb-2";

export const featureDescription =
  "text-[#6e6e73] leading-relaxed";

// ─── Stats ────────────────────────────────────────────
export const statsSection =
  "bg-[#1d1d1f] text-white py-16";

export const statsGrid =
  "grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto";

export const statItem =
  "text-center";

export const statNumber =
  "text-4xl font-bold mb-2";

export const statLabel =
  "text-[#a1a1a6] font-medium";

// ─── Profile ──────────────────────────────────────────
export const profileCard =
  "bg-white rounded-2xl p-8 shadow-sm border border-[#e8e8ed]";

export const profileHeader =
  "flex items-center gap-6 mb-8";

export const profileAvatar =
  "w-20 h-20 bg-[#0066cc] rounded-full flex items-center justify-center text-white text-2xl font-bold";

export const profileInfo =
  "flex-1";

export const profileName =
  "text-2xl font-bold text-[#1d1d1f] mb-1";

export const profileRole =
  "text-[#6e6e73] font-medium";

export const profileStats =
  "grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6";

export const profileStat =
  "text-center p-4 bg-[#f5f5f7] rounded-xl";

export const profileStatNumber =
  "text-2xl font-bold text-[#1d1d1f]";

export const profileStatLabel =
  "text-sm text-[#6e6e73]";

// ─── Article Grid / Cards ─────────────────────────────
export const articleGrid =
  "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6";

export const articleCardClass =
  "bg-[#f5f5f7] p-7 hover:bg-[#ebebf0] transition-colors duration-200 flex flex-col gap-2.5 cursor-pointer rounded-2xl";

export const articleTitle =
  "text-base font-semibold text-[#1d1d1f] leading-snug tracking-tight hover:text-[#0066cc] transition-colors";

export const articleExcerpt =
  "text-sm text-[#6e6e73] leading-relaxed";

export const articleMeta =
  "text-xs text-[#a1a1a6]";

export const articleBody =
  "text-[#6e6e73] leading-[1.85] text-[0.95rem] max-w-2xl";

export const timestampClass =
  "text-xs text-[#a1a1a6] flex items-center gap-1.5";

export const tagClass =
  "text-[0.65rem] font-semibold text-[#0066cc] uppercase tracking-widest w-fit";

// ─── Full Article Page ────────────────────────────────
export const articlePageWrapper =
  "max-w-3xl mx-auto px-6 py-14";

export const articleCard =
  "bg-white rounded-2xl p-8 shadow-sm border border-[#e8e8ed]";

export const articleHeader =
  "mb-10 flex flex-col gap-4";

export const articleCategory =
  "text-[0.7rem] font-semibold uppercase tracking-widest text-[#0066cc]";

export const articleMainTitle =
  "text-4xl font-bold text-[#1d1d1f] leading-tight tracking-tight";

export const articleAuthorRow =
  "flex items-center justify-between border-t border-b border-[#e8e8ed] py-4 text-sm text-[#6e6e73]";

export const authorInfo =
  "flex items-center gap-2 font-medium text-[#1d1d1f]";

export const articleContent =
  "text-[#1d1d1f] leading-[1.9] text-[1rem] whitespace-pre-line mt-8";

export const articleFooter =
  "border-t border-[#e8e8ed] mt-12 pt-6 text-sm text-[#a1a1a6]";

export const articleActions =
  "flex gap-3 mt-6";

// ─── Dashboard ────────────────────────────────────────
export const dashboardGrid =
  "grid grid-cols-1 lg:grid-cols-3 gap-8";

export const dashboardMain =
  "lg:col-span-2 space-y-8";

export const dashboardSidebar =
  "space-y-6";

export const dashboardCard =
  "bg-white rounded-2xl p-6 shadow-sm border border-[#e8e8ed]";

export const dashboardTitle =
  "text-lg font-semibold text-[#1d1d1f] mb-4";

// ─── Status Badges ────────────────────────────────────
export const articleStatusActive =
  "absolute top-3 right-3 text-[10px] font-semibold px-2 py-1 rounded-full bg-[#34c759]/20 text-[#248a3d]";

export const articleStatusDeleted =
  "absolute top-3 right-3 text-[10px] font-semibold px-2 py-1 rounded-full bg-[#ff3b30]/20 text-[#cc2f26]";

// ─── Feedback ─────────────────────────────────────────
export const errorClass =
  "bg-[#ff3b30]/[0.06] text-[#cc2f26] border border-[#ff3b30]/[0.18] rounded-xl px-4 py-3 text-sm";

export const successClass =
  "bg-[#34c759]/[0.07] text-[#248a3d] border border-[#34c759]/20 rounded-xl px-4 py-3 text-sm";

export const loadingClass =
  "text-[#0066cc]/60 text-sm animate-pulse text-center py-10";

export const emptyStateClass =
  "text-center text-[#a1a1a6] py-16 text-sm";

// ─── Divider ──────────────────────────────────────────
export const divider =
  "border-t border-[#e8e8ed] my-10";