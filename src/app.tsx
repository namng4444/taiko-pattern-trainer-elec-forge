import * as React from 'react';

import { RootLayout } from './components';

export class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <div>
        <h2>Welcome to React with Typescript!</h2>
        <RootLayout />
      </div>
    );
  }
}
