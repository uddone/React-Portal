/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */
import React, { useState,useEffect } from 'react';
import { injectIntl } from 'react-intl';
import './Topnav.css'

import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


import {
  searchPath,
  adminRoot,
} from 'constants/defaultValues';
import { MobileMenuIcon, MenuIcon } from 'components/svg';

import {
  setContainerClassnames,
  clickOnMobileMenu,
  logoutUser,
  changeLocale,
} from 'redux/actions';

const TopNav = ({
  history,
  containerClassnames,
  menuClickCount,
  selectedMenuHasSubItems,
  setContainerClassnamesAction,
  clickOnMobileMenuAction,
  // logoutUserAction,
}) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const search = () => {
    history.push(`${searchPath}?key=${searchKeyword}`);
    setSearchKeyword('');
  };



  const handleDocumentClickSearch = (e) => {
    let isSearchClick = false;
    if (
      e.target &&
      e.target.classList &&
      (e.target.classList.contains('navbar') ||
        e.target.classList.contains('simple-icon-magnifier'))
    ) {
      isSearchClick = true;
      if (e.target.classList.contains('simple-icon-magnifier')) {
        search();
      }
    } else if (
      e.target.parentElement &&
      e.target.parentElement.classList &&
      e.target.parentElement.classList.contains('search')
    ) {
      isSearchClick = true;
    }

    if (!isSearchClick) {
      const input = document.querySelector('.mobile-view');
      if (input && input.classList) input.classList.remove('mobile-view');
      removeEventsSearch();
      setSearchKeyword('');
    }
  };

  const removeEventsSearch = () => {
    document.removeEventListener('click', handleDocumentClickSearch, true);
  };

  const cuser = JSON.parse(localStorage.getItem('gogo_current_user'));
  const username = cuser.currentUser.user_nm;
  
  const handleLogout = () => {
    localStorage.removeItem('gogo_current_user');
    localStorage.removeItem('com.naver.nid.access_token');
    window.location.href="/user/login";
  };
  const handleAccount = () => {
    window.location.href="/user/account";
  };

  const menuButtonClick = (e, _clickCount, _conClassnames) => {
    e.preventDefault();

    setTimeout(() => {
      const event = document.createEvent('HTMLEvents');
      event.initEvent('resize', false, false);
      window.dispatchEvent(event);
    }, 350);
    setContainerClassnamesAction(
      _clickCount + 1,
      _conClassnames,
      selectedMenuHasSubItems
    );
  };

  const mobileMenuButtonClick = (e, _containerClassnames) => {
    e.preventDefault();
    clickOnMobileMenuAction(_containerClassnames);
  };

const [imgsrc="/assets/logos/black.svg",setImgsrc] = useState();
  useEffect(()=> {
    const windowResize = () => {
        const widt = window.innerWidth
        if (widt < 766){
          setImgsrc("/assets/logos/black.svg")    
        }else{
          setImgsrc("/assets/logos/black.svg")    
        }
        
    }
  
    window.addEventListener(`resize`, windowResize);
   
    return () => {
       window.removeEventListener(`resize`, windowResize);
     }
  }, []);

  // const {  } = intl;
  return (
    <nav className="navbar fixed-top">
      <div className="d-flex align-items-center navbar-left">
        <NavLink
          to="#"
          location={{}}
          className="menu-button d-none d-md-block"
          onClick={(e) =>
            menuButtonClick(e, menuClickCount, containerClassnames)
          }
        >
          <MenuIcon />
        </NavLink>
        <NavLink
          to="#"
          location={{}}
          className="menu-button-mobile d-xs-block d-sm-block d-md-none"
          onClick={(e) => mobileMenuButtonClick(e, containerClassnames)}
        >
          <MobileMenuIcon />
        </NavLink>
      </div>

      {/* 로고 및 링크 */}
      <NavLink className="navbar-logo" to={adminRoot}>
        <span>
          <img 
            id="edulogo"
            alt='EDU-AI'
            src={imgsrc}
          />
        </span>
        {/* <span className="logo-mobile d-block d-xs-none" /> */}
      </NavLink>

      <div className="navbar-right">
        
        <div className="user d-inline-block">
          <UncontrolledDropdown className="dropdown-menu-right">
            <DropdownToggle className="p-0" color="empty">
              <span className="name mr-1">{username}</span>
              <span>
                <img alt="Profile" src="/assets/img/profiles/basicprofile.jpg" />
              </span>
            </DropdownToggle>
            <DropdownMenu className="mt-3" right>
              <DropdownItem onClick={() => handleAccount()}>개인 정보 설정</DropdownItem>
              {/* <DropdownItem divider /> */}
              <DropdownItem onClick={() => handleLogout()}>
                로그 아웃
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ menu, settings }) => {
  const { containerClassnames, menuClickCount, selectedMenuHasSubItems } = menu;
  const { locale } = settings;
  return {
    containerClassnames,
    menuClickCount,
    selectedMenuHasSubItems,
    locale,
  };
};
export default injectIntl(
  connect(mapStateToProps, {
    setContainerClassnamesAction: setContainerClassnames,
    clickOnMobileMenuAction: clickOnMobileMenu,
    logoutUserAction: logoutUser,
    changeLocaleAction: changeLocale,
  })(TopNav)
);
