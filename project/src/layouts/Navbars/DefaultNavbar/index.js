import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
import DefaultNavbarDropdown from './DefaultNavbarDropdown';
import DefaultNavbarMobile from './DefaultNavbarMobile';
import breakpoints from '../../../assets/theme/base/breakpoints';
import DropdownMenu from '../../common/DropdownMenu';
import NestedDropdownMenu from '../../common/NestedDropdownMenu';
import RenderRoutes from '../../common/RenderComponents/RenderRoutes';
import RenderNestedRoutes from '../../common/RenderComponents/RenderNestedRoutes';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const DefaultNavbar = ({
  brand,
  routes,
  transparent,
  light,
  action,
  sticky,
  relative,
  center,
}) => {
  const [dropdown, setDropdown] = useState(null);
  const [dropdownEl, setDropdownEl] = useState(null);
  const [dropdownName, setDropdownName] = useState(null);
  const [nestedDropdown, setNestedDropdown] = useState(null);
  const [nestedDropdownEl, setNestedDropdownEl] = useState(null);
  const [nestedDropdownName, setNestedDropdownName] = useState(null);
  const [arrowRef, setArrowRef] = useState(null);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);

  useEffect(() => {
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }
    window.addEventListener('resize', displayMobileNavbar);
    displayMobileNavbar();
    return () => window.removeEventListener('resize', displayMobileNavbar);
  }, []);

  const renderNavbarItems = routes.map(
    ({ name, icon, href, route, collapse }) => (
      <DefaultNavbarDropdown
        key={name}
        name={name}
        icon={icon}
        href={href}
        route={route}
        collapse={Boolean(collapse)}
        onMouseEnter={({ currentTarget }) => {
          if (collapse) {
            setDropdown(currentTarget);
            setDropdownEl(currentTarget);
            setDropdownName(name);
          }
        }}
        onMouseLeave={() => collapse && setDropdown(null)}
        light={light}
      />
    )
  );

  const renderRoutes = (
    <RenderRoutes
      routes={routes}
      dropdownName={dropdownName}
      setNestedDropdown={setNestedDropdown}
      setNestedDropdownEl={setNestedDropdownEl}
      setNestedDropdownName={setNestedDropdownName}
    />
  );

  const renderNestedRoutes = (
    <RenderNestedRoutes
      routes={routes}
      nestedDropdownName={nestedDropdownName}
    />
  );
  const dropdownMenu = (
    <DropdownMenu
      dropdown={dropdown}
      setDropdownName={setDropdownName}
      setDropdown={setDropdown}
      renderRoutes={renderRoutes}
      arrowRef={arrowRef}
      dropdownEl={dropdownEl}
      setArrowRef={setArrowRef}
      nestedDropdown={nestedDropdown}
    />
  );
  const nestedDropdownMenu = (
    <NestedDropdownMenu
      nestedDropdown={nestedDropdown}
      setNestedDropdown={setNestedDropdown}
      setNestedDropdownEl={setNestedDropdownEl}
      setNestedDropdownName={setNestedDropdownName}
      nestedDropdownEl={nestedDropdownEl}
      setDropdown={setDropdown}
      renderNestedRoutes={renderNestedRoutes}
    />
  );

  return (
    <Container sx={sticky ? { position: 'sticky', top: 0, zIndex: 10 } : null}>
      <Box
        py={1}
        px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }}
        my={relative ? 0 : 2}
        mx={relative ? 0 : 3}
        width={relative ? '100%' : 'calc(100% - 48px)'}
        borderRadius='xl'
        shadow={transparent ? 'none' : 'md'}
        color={light ? 'white' : 'dark'}
        position={relative ? 'relative' : 'absolute'}
        style={{
          color: 'white',
          borderRadius: '50%',
          backgroundColor: 'transparent',
        }}
        left={0}
        zIndex={3}
        // sx={({ palette: { transparent: transparentColor, white }, functions: { rgba } }) => ({
        //   backgroundColor: transparent ? transparentColor.main : rgba(white.main, 0.8),
        //   backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
        // })}
      >
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          <Box
            component={Link}
            to='/'
            lineHeight={1}
          >
            <Typography
              variant='button'
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              {brand}
            </Typography>
          </Box>
          <Box
            color='inherit'
            display={{ xs: 'none', lg: 'flex' }}
            ml='auto'
            mr={center ? 'auto' : 0}
          >
            {renderNavbarItems}
          </Box>
          <Box ml={{ xs: 'auto', lg: 0 }}>
            {action &&
              (action.type === 'internal' ? (
                <Button
                  component={Link}
                  to={action.route}
                  variant='contained'
                  style={{
                    color: 'white',
                    textTransform: 'capitalize',
                    fontSize: '1rem',
                  }}
                  size='small'
                >
                  {action.label}
                </Button>
              ) : (
                <Button
                  component='a'
                  href={action.route}
                  variant='contained'
                  //   rel="noreferrer"
                  target='_blank'
                  style={{
                    color: 'white',
                    textTransform: 'capitalize',
                    fontSize: '1rem',
                  }}
                >
                  {action.label}
                </Button>
              ))}
          </Box>
          <Box
            display={{ xs: 'inline-block', lg: 'none' }}
            lineHeight={0}
            py={1.5}
            pl={1.5}
            color={transparent ? 'white' : 'inherit'}
            sx={{ cursor: 'pointer' }}
            onClick={openMobileNavbar}
          >
            <Icon fontSize='default'>{mobileNavbar ? 'close' : 'menu'}</Icon>
          </Box>
        </Box>
        <Box
          bgColor={transparent ? 'white' : 'transparent'}
          shadow={transparent ? 'lg' : 'none'}
          borderRadius='xl'
          px={transparent ? 2 : 0}
        >
          {mobileView && (
            <DefaultNavbarMobile
              routes={routes}
              open={mobileNavbar}
            />
          )}
        </Box>
      </Box>
      {dropdownMenu}
      {nestedDropdownMenu}
    </Container>
  );
};
DefaultNavbar.defaultProps = {
  brand: 'Acondicionamiento de Semillas',
  // transparent: false,
  // light: false,
  // action: false,
  // sticky: false,
  // relative: false,
  // center: false,
};

export default DefaultNavbar;
