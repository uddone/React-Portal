export const UserRole = {
  Admin: 0,
  Editor: 1,
};
const data = [
  {
    id: 'AIDO-LANG',
    icon: 'iconsminds-shop-4',
    label: 'AIDO-LANG',
    to: `/ln/dashboards`,
    // roles: [UserRole.Admin,UserRole.Editor],
    subs: [
      {
        icon: 'simple-icon-briefcase',
        label: '기본 대시보드',
        to: `/ln/recode`,
        roles: UserRole.Admin,
      },
      {
        icon: 'simple-icon-briefcase',
        label: '상세 대시보드',
        to: `/ln/upload`,
        // roles: UserRole.Editor,
      },
    ],
  },
  {
    id: 'AIDO-DROPOUT',
    icon: 'iconsminds-digital-drawing',
    label: 'AIDO-DROPOUT',
    to: `/do/main`,
    subs: [
      {
        icon: 'simple-icon-briefcase',
        label: '메인',
        to: `/do/main`,
        // roles: [UserRole.Admin],
      },
      {
        icon: 'simple-icon-briefcase',
        label: '다운로드',
        to: `/do/download`,
        // roles: [UserRole.Admin],
      },
      {
        icon: 'simple-icon-briefcase',
        label: '학생',
        to: `/do/student`,
        // roles: [UserRole.Admin],
      },
    ],
  },
  {
    id: 'AIDO-DKT',
    icon: 'iconsminds-air-balloon-1',
    label: 'AIDO-DKT',
    to: `/app/applications`,
    subs: [
      {
        icon: 'simple-icon-bubbles',
        label: 'menu.chat',
        to: `/app/applications/chat`,
      },
    ],
  },
  {
    id: 'AIDO-RECO',
    icon: 'iconsminds-pantone',
    label: 'AIDO-RECO',
    to: `/app/ui`,
    subs: [
      {
        id: 'ui-forms',
        label: 'menu.forms',
        to: `/app/ui/forms`,
        subs: [
          {
            icon: 'simple-icon-magic-wand',
            label: 'menu.wizard',
            to: `/app/ui/forms/wizard`,
          },
        ],
      },
      {
        id: 'ui-components',
        label: 'menu.components',
        to: `/app/ui/components`,
        subs: [
          {
            icon: 'simple-icon-chart',
            label: 'menu.charts',
            to: `/app/ui/components/charts`,
          },
        ],
      },
    ],
  },
];
export default data;
