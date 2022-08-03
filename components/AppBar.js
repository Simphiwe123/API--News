import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Header = () => {

  return (
    <Appbar.Header style={{marginTop:40, backgroundColor:'black'}}>
      
      <Appbar.Content title="Malobisa News" />
      
    </Appbar.Header>
  );
};

export default Header;