import React from 'react';
import {
  CommentsIcon,
  HideIcon,
  MenuIcon,
  SaveIcon,
  ShareIcon,
  WarningIcon
} from '../Icons';

export enum EIcons {
  comments,
  hide,
  save,
  share,
  warning,
  menu,
}

type TSizes = 25 | 20 | 18 | 16;

interface IIconProps {
  name: EIcons;
  size?: TSizes;
}

export function Icon({ name, size = 16 }: IIconProps) {
  switch (name) {
    case EIcons.comments:
      return (
        <CommentsIcon width={size} />
      );
    case EIcons.hide:
      return (
        <HideIcon width={size} />
      );
    case EIcons.save:
      return (
        <SaveIcon width={size} />
      );
    case EIcons.share:
      return (
        <ShareIcon width={size} />
      );
    case EIcons.warning:
      return (
        <WarningIcon width={size} />
      );
    default:
      return (
        <MenuIcon />
      );
  }
}
