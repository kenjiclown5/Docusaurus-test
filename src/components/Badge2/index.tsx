// @ts-ignore
import clsx from 'clsx';
// @ts-ignore
import styles from './styles.module.css';

type BadgeProps = {
  type: 'design' | 'implemented' | 'standard' | 'required';
  link?: string;
};

export default function Badge({ type, link }: BadgeProps) {
  const color: Record<BadgeProps['type'], string> = {
    design: '#326bfb',
    implemented: '#003791',
    standard: '#363636',
    required: '#9E6B25'
  }
  const linkColor = '#4a6785';

  const backgroundColor = color[type] ? color[type] : '#fff';
  const borderColor = color[type] ? color[type] : '#000';
  const fontColor = color[type] ? '#fff' : '#000'
  const badgeName = type === 'design' ? 'Design Only' : type;

  return  link ? (
    <a href={link} target="_blank" className={clsx(styles.badge, styles.badgeLink)}
       style={{
         backgroundColor: linkColor,
         borderColor: linkColor
       }}>
      {badgeName}
    </a>
  ) : (
    <span className={styles.badge}
          style={{
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            color: fontColor
          }}>
      {badgeName}
    </span>
  );
}
