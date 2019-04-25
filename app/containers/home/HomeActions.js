import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import navigationService from '../../service/navigationService';
import { logout } from '../../state/auth/actions';

class HomeActions extends Component {
  showMoreApp = () => {
    navigationService.navigate('Other');
  };

  signOutAsync = async () => {
    await this.props.logout();
    navigationService.navigate('Auth');
  };

  render() {
    return (
      <React.Fragment>
        <Button title="Show me more of the app" onPress={this.showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this.signOutAsync} />
      </React.Fragment>
    );
  }
}

HomeActions.propTypes = {};

function mapStateToProps() {
  return { };
}

export default connect(mapStateToProps, { logout })(HomeActions);
