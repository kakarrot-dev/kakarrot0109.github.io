/**
 * 全站社交链接（Hero / Footer 共用）
 */
export type SocialLink = {
  id: string;
  label: string;
  href: string;
  /** 是否外链（邮箱除外） */
  external?: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    id: "x",
    label: "X",
    href: "https://x.com/Kakarrot_me",
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/kakarrot-dev",
    external: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/kakarrot.me/",
    external: true,
  },
  {
    id: "xiaohongshu",
    label: "小红书",
    href: "https://www.xiaohongshu.com/user/profile/6409ec3f0000000029010738",
    external: true,
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:i@kakarrot.com",
  },
];
