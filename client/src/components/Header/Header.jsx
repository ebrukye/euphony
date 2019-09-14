import React from 'react';
import { connect } from 'react-redux'
import './Header.scss';
import { Menu, Dropdown, Avatar } from 'antd';
import { Link } from 'react-router-dom';

const UserDropdownMenu = props => {
  const menu = (
    <Menu>
      <Menu.Item key='0'><Link to='/logout'>Log Out</Link></Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']} placement='bottomRight'>
      <Link to='#'><Avatar src={props.userProfileImage} size='large' /></Link>
    </Dropdown>
  );
}

const Header = props => {
  const { isAuthed } = props;

  return (
    <header className='Main-header'>
      <div className='Main-header-container'>
        <div className='Logo-wrapper'>
          <img src='assets/images/logo.png' width='170px' alt='logo' />
        </div>
        {
          isAuthed ?
            <div className='User-wrapper'>
              <UserDropdownMenu userProfileImage={props.user.profileImage} />
            </div> : null
        }
      </div>
    </header >
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isAuthed: state.isAuthed
  };
}

export default connect(mapStateToProps)(Header);