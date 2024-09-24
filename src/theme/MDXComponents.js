import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Badge from '@site/src/components/Badge2';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Icon } from '@iconify/react'; // Import the entire Iconify library.

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Badge,
  Tabs,
  TabItem,
  IIcon: Icon, // Make the iconify Icon component available in MDX as <icon />.
};