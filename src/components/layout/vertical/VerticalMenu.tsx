// MUI Imports
import Chip from '@mui/material/Chip'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { VerticalMenuContextProps } from '@menu/components/vertical-menu/Menu'

// Component Imports
import { Menu, SubMenu, MenuItem, MenuSection } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

type RenderExpandIconProps = {
  open?: boolean
  transitionDuration?: VerticalMenuContextProps['transitionDuration']
}

const RenderExpandIcon = ({ open, transitionDuration }: RenderExpandIconProps) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='ri-arrow-right-s-line' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ scrollMenu }: { scrollMenu: (container: any, isPerfectScrollbar: boolean) => void }) => {
  // Hooks
  const theme = useTheme()
  const { isBreakpointReached, transitionDuration } = useVerticalNav()

  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        menuItemStyles={menuItemStyles(theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuSectionStyles={menuSectionStyles(theme)}
      >
        <SubMenu
          label='Dashboards'
          icon={<i className='ri-home-smile-line' />}
          suffix={<Chip label='1' size='small' color='error' />}
        >
          <MenuItem href='/'>Analytics</MenuItem>
        </SubMenu>
        <MenuSection label='Apps & Pages'>
          {/* <MenuItem
            href={`${process.env.NEXT_PUBLIC_PRO_URL}/apps/email`}
            icon={<i className='ri-mail-open-line' />}
            suffix={<Chip label='Pro' size='small' color='primary' variant='tonal' />}
            target='_blank'
          >
            Email
          </MenuItem> */}
          <MenuItem href='/contact-form' icon={<i className='ri-mail-open-line' />}>
            Contact Form
          </MenuItem>
          <MenuItem href='/image-library' icon={<i className='ri-image-2-line' />}>
            Image Library
          </MenuItem>
          <MenuItem href='/social-media' icon={<i className='ri-instagram-line' />}>
            Social Media
          </MenuItem>
          <MenuItem href='/site-requests' icon={<i className='ri-chat-heart-line' />}>
            Site Requests
          </MenuItem>
          <MenuItem href='/articles-contribution' icon={<i className='ri-article-line' />}>
            Articles Contribution
          </MenuItem>
          <MenuItem href='/donation' icon={<i className='ri-money-euro-box-line' />}>
            Donation
          </MenuItem>
          <MenuItem href='/offers' icon={<i className='ri-advertisement-line' />}>
            Offers
          </MenuItem>
          <SubMenu label='Auth Pages' icon={<i className='ri-shield-keyhole-line' />}>
            <MenuItem href='/login'>Login</MenuItem>
            <MenuItem href='/register'>Register</MenuItem>
            <MenuItem href='/forgot-password'>Forgot Password</MenuItem>
          </SubMenu>
          <SubMenu label='Miscellaneous' icon={<i className='ri-question-line' />}>
            <MenuItem href='/error'>Error</MenuItem>
            <MenuItem href='/under-maintenance'>Under Maintenance</MenuItem>
          </SubMenu>
          <MenuItem href='/account-settings' icon={<i className='ri-user-settings-line' />}>
            Account Settings
          </MenuItem>
        </MenuSection>
        <MenuSection label='Data'>
          <SubMenu label='CRUD' icon={<i className='ri-drag-drop-line' />}>
            <MenuItem href='/city' icon={<i className='ri-home-heart-line' />}>
              Visit Our Cities
            </MenuItem>
            <MenuItem href='/thing' icon={<i className='ri-camera-3-line' />}>
              Things To Do
            </MenuItem>
            <MenuItem href='/plan' icon={<i className='ri-car-line' />}>
              Plan Your Trip
            </MenuItem>
          </SubMenu>
        </MenuSection>
      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu
