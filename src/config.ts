export type FastComponent = 'All' | 'FASTButton' | 'FASTAnchor| FASTCard' | 'FASTBadge' | 'FASTCheckbox' | 'FASTDialog' | 'FASTDivider' | 'FASTFlipper' | 'FASTProgress' | 'FASTProgressRing' | 'FASTSwitch' | 'FASTTabs' | 'FASTTextArea' | 'FASTTextField';
export interface FastDnaConfig {
    componentsToInclude: FastComponent[];
}