import { useCallback } from 'react';
import { useMatch, useResolvedPath } from 'react-router-dom';
import { useTheme } from '@emotion/react';

import { useAuth } from '@/auth/hooks/useAuth';
import {
  IconColorSwatch,
  IconLogout,
  IconSettings,
  IconUser,
  IconUsers,
} from '@/ui/icons/index';
import NavItem from '@/ui/layout/navbar/NavItem';
import NavItemsContainer from '@/ui/layout/navbar/NavItemsContainer';
import NavTitle from '@/ui/layout/navbar/NavTitle';
import SubNavbarContainer from '@/ui/layout/navbar/sub-navbar/SubNavBarContainer';

export function SettingsNavbar() {
  const theme = useTheme();

  const { logout } = useAuth();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <SubNavbarContainer backButtonTitle="Settings">
      <NavItemsContainer>
        <NavTitle label="User" />
        <NavItem
          label="Profile"
          to="/settings/profile"
          icon={<IconUser size={theme.icon.size.md} />}
          active={
            !!useMatch({
              path: useResolvedPath('/people').pathname,
              end: true,
            })
          }
        />
        <NavItem
          label="Experience"
          to="/settings/profile/experience"
          icon={<IconColorSwatch size={theme.icon.size.md} />}
          soon={true}
          active={
            !!useMatch({
              path: useResolvedPath('/settings/profile/experience').pathname,
              end: true,
            })
          }
        />
        <NavTitle label="Workspace" />
        <NavItem
          label="Members"
          to="/settings/workspace-members"
          icon={<IconUsers size={theme.icon.size.md} />}
          active={
            !!useMatch({
              path: useResolvedPath('/settings/workspace-members').pathname,
              end: true,
            })
          }
        />
        <NavItem
          label="General"
          to="/settings/workspace"
          icon={<IconSettings size={theme.icon.size.md} />}
          active={
            !!useMatch({
              path: useResolvedPath('/settings/workspace').pathname,
              end: true,
            })
          }
        />
        <NavTitle label="Other" />
        <NavItem
          label="Logout"
          onClick={handleLogout}
          icon={<IconLogout size={theme.icon.size.md} />}
          danger={true}
        />
      </NavItemsContainer>
    </SubNavbarContainer>
  );
}
