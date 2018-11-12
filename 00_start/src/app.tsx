import * as React from 'react';
import {MembersTableComponent} from './components';

interface Props {
}

export class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

  }

  public render() {
    return (
      <>
        <MembersTableComponent/>
      </>
    );
  }
}