import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div style={{padding: '20px'}}>
        <h1 className='jumbo'>
          H1 Introduction
        </h1>
        <h1>
          H1 Introduction
        </h1>
        <h2>
          H2 + Add sub-title if required
        </h2>
        <h3>
          H3 Introduction
        </h3>
        <h4>
          H4 Introduction
        </h4>
        <h5>
          H5 Proposal created exclusively for:
        </h5>
        <h6>
          H6 Introduction
        </h6>
        <p>
          + Description of the challenge this proposal is designed to address. How cluep is able to effectively address this challenge.
          <br />
          For example:
          <br />
          The following is a Cluep mobile advertising proposal to drive awareness, interest nad trial of Brand X's new XXX offering by engaging loyal Brand X shoppers and the most active consumers in the category.
        </p>
      </div>
    );
  }
}
