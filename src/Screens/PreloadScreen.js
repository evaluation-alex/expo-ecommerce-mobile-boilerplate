import React, {Component} from 'react';
import {connect} from 'react-redux';
import pt from 'prop-types';

import {startup} from '../Actions';
import {ActivityIndicator, View} from '../Components/Base';
import {Images} from '../Theme';


const MainView = View.extend``;
const LogoView = View.extend`
  margin: 50px;
`;
const LogoImage = Images.Preload.CenterLogo.extend`
  height: 100%;
  width: 100%;
  resizeMode: contain;
`;
const UpdateActivityIndicator = ActivityIndicator.extend`
  marginBottom: 50px;
`;

class PreloadScreen extends Component {
  async componentDidMount() {
    await this.props.startup();
    this.props.navigation.navigate('Main');
  }

  _renderUpdateActivityIndicator() {
    if (this.props.isUpdating) {
      return (
        <UpdateActivityIndicator visible="false" />
      );
    }
    return null;
  }

  render() {
    return (
      <MainView>
        <LogoView>
          <LogoImage />
        </LogoView>
        {this._renderUpdateActivityIndicator()}
      </MainView>
    );
  }
}
PreloadScreen.propTypes = {
  isUpdating: pt.bool.isRequired,
  navigation: pt.object.isRequired,
  startup: pt.func.isRequired,
};

const mapStateToProps = state => ({
  isUpdating: state.application.updating,
});

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(startup()),
});


export default connect(mapStateToProps, mapDispatchToProps)(PreloadScreen);
